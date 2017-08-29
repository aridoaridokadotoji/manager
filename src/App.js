import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import Reduxthunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/LoginForm'
import Router from './Router'

class App extends Component {
  componentWillMount () {
    var config = {
      apiKey: 'AIzaSyBRRqy3Grp2o1_DZzKyqbyt-9KRZFYGyig',
      authDomain: 'newmanager-529c2.firebaseapp.com',
      databaseURL: 'https://newmanager-529c2.firebaseio.com',
      projectId: 'newmanager-529c2',
      storageBucket: 'newmanager-529c2.appspot.com',
      messagingSenderId: '250971884934'
    }
    firebase.initializeApp(config)
  }

  render () {
    const store = createStore(reducers, {}, applyMiddleware(Reduxthunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
