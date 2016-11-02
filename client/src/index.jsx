import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import Landing from './components/Landing'
import MemberIn from './components/MemberIn'
import LogIn from './components/LogIn'
import MyDress from './containers/MyDress'
import UploadError from './components/UploadError'
import PageError from './components/PageError'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
const store = createStore(reducers)

class App extends React.Component {

  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/memberin' component={MemberIn} />
          <Route path='/login' component={LogIn} />
          <Route path='/mydress' component={MyDress} />
          <Route path='/uploaderror' component={UploadError} />
          <Route path='*' component={PageError} />
        </Route>
      </Router>
    )
  }
  
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

// ReactDOM.render(
//   <Provider store={store}>
//     {() => <App />}
//   </Provider>,
//   document.getElementById('app')
// )