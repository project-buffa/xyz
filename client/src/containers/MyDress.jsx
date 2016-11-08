import React from 'react'
import { Link } from 'react-router'
import Top from '../components/Top'
import TopMenu from '../components/TopMenu'
import MyDressList from '../components/MyDressList'
import BottomMenu from '../components/BottomMenu'

class MyDress extends React.Component {

  // constructor(props){
  //   super(props)

  //   this.state = {
  //     wow:'wow'
  //   }
  // }
  
  render () {

    return (
      <div className='mydress'>
        <MyDressList />
        <Top />
        <TopMenu />
        <BottomMenu />
      </div>
    )
  }

}

export default MyDress

// ----------------------------------------------------------------------------------------------------------------------------

// import { connect } from 'react-redux'
// import * as DressActions from '../actions'

// class MyDress extends React.Component {
  
//   render () {
//     return (
//       <div className='mydress'>
//         <Top />
//         <TopMenu dress={this.props.dress} handleSearchDress={this.props.handleSearchDress} />
//         <MyDressList dress={this.props.dress}/>
//         <BottomMenu />
//       </div>
//     )
//   }

// }

// const mapStateToProps = (state) => {
//   return {
//     dress: state.dress.text
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleSearchDress: (value) => { dispatch(DressActions.searchDress(value)) }
//     };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MyDress)

// ----------------------------------------------------------------------------------------------------------------------------

// class MyDress extends React.Component {

//   constructor (props) {
//     super(props)
//     this.state = {
//       userName:'민호', // 사용자 이름을 get localstorage 로 추출

//       myDressCategory: ['외투', '상의', '하의', '악세사리'], // 데이터베이스에서 사용자 카테고리 추출,

//       myDressList: ['shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg'],

//       DressList: [{'외투' : ['outer.jpg', 'outer.jpg', 'outer.jpg', 'outer.jpg', 'outer.jpg', 'outer.jpg', 'outer.jpg']}, {'상의' : ['shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg']}, {'하의' : ['pants.jpg', 'pants.jpg', 'pants.jpg', 'pants.jpg', 'pants.jpg', 'pants.jpg', 'pants.jpg']}, {'악세사리' : ['accessories.jpg', 'accessories.jpg', 'accessories.jpg', 'accessories.jpg', 'accessories.jpg', 'accessories.jpg', 'accessories.jpg']}]
//     }
//     this.closeNav = this.closeNav.bind(this)
//   }

//   closeNav() { // 좌측 메뉴바를 닫는 함수
//     document.getElementById('mySidenav').style.width = '0'
//   }

//   render () {
//     return (
//       <div className='container'>
//         <div id='mySidenav' className='sidenav'> {/* 좌측 메뉴 바 */}
//           <h1 className='closebtn' onClick={this.closeNav}><Link>X</Link></h1>
//           {this.state.myDressCategory.map((map,i) => {
//             return (<h1 key={i}>{map}</h1>)
//           })}
//         </div>
//         <Header name={this.state.userName} /> {/* 상단 메뉴 바 */}
//         <div className='mydresslistblank' /> {/* 메뉴 바 고정을 위해 삽입 */}
//         <Link to=''><div className='addmydress'></div></Link> {/* 옷 추가 버튼 */}
//         <MyDressList list={this.state.DressList[1]['상의']} /> {/* 옷 목록 */}
//       </div>
//     )
//   }
  
// }

// module.exports = MyDress