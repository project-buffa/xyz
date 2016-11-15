import React from 'react'
import { Link } from 'react-router'
import { Button, Image } from 'semantic-ui-react'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import axios from 'axios'

/*
**** Header.jsx에 있는 checkUser function 설명.
  - local에 token이 있는가?
    
    -true
      -fetch콜로 token이 유효한가?
        -true
          browserHistory.push('/mydress');
        -false
          browserHistory.push('/login');
    
    -false
      -browserHistory.push('/mydress');
**** Login에 있는 function 설명.
  - 구글 or 페북 로그인 버튼 클릭.
    - local에 token이 있는가?
      -true
        -token 재갱신.
          -browserHistory.push('/mydress');
      -false
        -새로운 token 저장.
          -browserHistory.push('/mydress');
*/

class MemberIn extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      loginTextGoogle : "Login with Google",
      loginTextFacebook : 'Login with FaceBook',
    };
    this.responseGoogle = this.responseGoogle.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
    // this.taewoong = this.taewoong.bind(this);
    // this.myFunction = this.myFunction.bind(this);
  }

  // myFunction(){
  //   fetch('/retrieveData',{
  //     method: 'GET'
  //   })
  //   .then(function(response){
  //     console.log(1);
  //     // if(!response.ok){
  //     //   console.log('fail');
  //     // } 
  //     // else {
  //       console.log(22222222222);
  //       console.log('response',response);
  //       console.log('response.data',response.data);
  //       console.log('response.body',response.body);
  //       // console.log('response.body',response.body);
  //       return response.json();
  //     })
  //   .then(function(json){
  //     console.log('abcdefg');
  //     console.log(json);
  //   })
  // }

 
  responseGoogle (googleUser) {   //  google 로그인.

    console.log('google click');
    var id_token = googleUser.getAuthResponse().id_token;
    console.log('id_token',id_token);
    var token = window.localStorage.getItem('xyzGoogle');
    
    var profile = googleUser.getBasicProfile();
    console.log('profile',profile);
    var email = googleUser.getBasicProfile().getEmail();
    console.log('email',email)
    var name = googleUser.getBasicProfile().getName();
    console.log('name', name);
    var date = new Date();

    if(token){   //  토큰이 있는 기존 유저.
      console.log('i have token but...');
      window.localStorage.removeItem('xyzGoogle');
      window.localStorage.setItem('xyzGoogle', id_token);
      var new_token = window.localStorage.getItem('xyzGoogle');

      axios('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='+new_token)
      .then(function(response){
        console.log(1);
        if(!response.ok){
          console.log('not valid ID');
        }
        else{
          console.log('success token change');

          // user의 정보를 fetch로 server에 보낸다.
          var obj = {};
          obj['new_token'] = new_token;
          obj['old_token'] = token;
          
          console.log('obj',obj);
          var data = JSON.stringify(obj);

          axios('/googlenewtoken', {
            method : 'POST',
            body : data,
            headers : {
              'Accept' : 'application/json',
              'Content-Type' : 'application/json'
            }
          })
          .then(function(response){
            console.log(1);
            if(!response.ok){
              console.log('fail');
            }
            else {
              console.log('success');
              console.log(1, response);
            }
          })
          // 실제코드.
          // browserHistory.push('/mydress');
        }
      })
    }
    else {   //  첫방문 (토큰이 없는) 유저.
      console.log('i dont have any token');
      window.localStorage.setItem('xyzGoogle', id_token);

      axios('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='+id_token)
      .then(function(response){
        console.log(2);
        if(!response.ok){
          console.log('not valid token');
        }
        else{
          console.log('success token');

          var obj = {};
          obj['name'] = name;
          obj['email'] = email;
          obj['social'] = 'g';
          obj['token'] = id_token;
          obj['date'] = date;

          console.log('obj',obj);
          var data = JSON.stringify(obj);

          axios('/googlenotoken', {
            method : 'POST',
            body : data,
            headers : {
              'Accept' : 'application/json',
              'Content-Type' : 'application/json'
            }
          })
          .then(function(response){
            console.log(1);
            if(!response.ok){
              console.log('fail');
            }
            else {
              console.log('success');
              console.log(1, response);
            }
          })
          //  실제코드.
          // browserHistory.push('/mydress');
        }
      })
    }
  }

  responseFacebook(response){     // facebook 로그인.
    
    console.log('facebook click');
    var name = response.name;
    var email = response.email;
    var accessToken = response.accessToken;
    var date = new Date();
    console.log('response',response);
    console.log('response.name',name);

    var fbToken = window.localStorage.getItem('xyzFacebook');  
    
    if(fbToken){  //  token이 있는 기존유저.
      console.log('i have token but...');
      window.localStorage.removeItem('xyzFacebook');
      window.localStorage.setItem('xyzFacebook', accessToken);
      var new_token = window.localStorage.getItem('xyzFacebook');

      axios('https://graph.facebook.com/me?access_token='+new_token)
      .then(function(response){
        console.log(1);
        if(!response.ok){
          console.log('not valid ID');
        }
        else{
          console.log('success token change');

          var obj = {};
          obj['old_token'] = accessToken;
          obj['new_token'] = new_token;

          var data = JSON.stringify(obj);

          axios('/fbnewtoken', {
            method : 'POST',
            body : data,
            headers : {
              'Accept' : 'application/json',
              'Content-Type' : 'application/json'
            }
          })
          .then(function(response){
            console.log(1);
            if(!response.ok){
              console.log('fail');
            }
            else {
              console.log('success');
              console.log(1, response);
            }
          })
          // 실제코드.
          // browserHistory.push('/mydress');
        }
      })
    }
    else {  //  첫 방문 (token이 없는) 유저.
      console.log('i dont have any token');
      window.localStorage.setItem('xyzFacebook', accessToken);

      axios('https://graph.facebook.com/me?access_token='+accessToken)
      .then(function(response){
        console.log(2);
        if(!response.ok){
          console.log('not valid token');
        }
        else {
          console.log('success token');

          var obj = {};
          obj['name'] = name;
          obj['email'] = email;
          obj['social'] = 'f';
          obj['token'] = accessToken;
          obj['date'] = date;

          var data = JSON.stringify(obj);

          axios('/fbnotoken', {
            method : 'POST',
            body : data,
            headers : {
              'Accept' : 'application/json',
              'Content-Type' : 'application/json'
            }
          })
          .then(function(response){
            console.log(1);
            if(!response.ok){
              console.log('fail');
            }
            else { 
              console.log('success');
              console.log(1, response);
            }
          })
          // browserHistory.push('/mydress')
        }
      })
    }
  }

  render () {

    const activeMemberInStyle = {
      color : '#ffffff'
    }

    const memberInStyle = {
      fontSize : '20px'
    }

    const loginStyle = {
      width : '218.02px',
      height : '50.34px'
      // background : 'red'
    }

    const src ='./src/images/white-image.png'

    return (
      <div className='container'>
        <div className='memberin'>
          <div className='outer'>
            
              <div className='inner' style={memberInStyle}>
                xyz 2016 SIGN UP<br /><br />
                <Image src={src} size='small' centered bordered /><br />
                <GoogleLogin
              clientId={"681391014277-plrkjn39cj0ilg7pfi88s4fnb12sjlap.apps.googleusercontent.com"}
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              offline={false}
               />
            <FacebookLogin
              appId="1393584200670947" 
              autoLoad={false}
              fields="name,email,picture"
              onClick={this.componentClicked}
              callback={this.responseFacebook}
              scope="email,public_profile,user_friends"
              icon="fa-facebook"
               />
                <br /><br />
                <Link to='/login' style={activeMemberInStyle}>Have a xyz.com account?</Link>
              </div>
            </div>
          </div>
      </div>
    )
  }
  
}

export default MemberIn

// <Button circular color='facebook' icon='facebook' appId="1393584200670947" 
//               autoLoad={false}
//               fields="name,email,picture"
//               onClick={this.componentClicked}
//               callback={this.responseFacebook}
//               scope="email,public_profile,user_friends"
//               icon="fa-facebook"/>
//                 <Button circular color='google plus' icon='google plus' clientId={"681391014277-plrkjn39cj0ilg7pfi88s4fnb12sjlap.apps.googleusercontent.com"}
//               onSuccess={this.responseGoogle}
//               onFailure={this.responseGoogle}
//               offline={false} />