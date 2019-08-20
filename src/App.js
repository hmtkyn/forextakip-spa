import React, { Fragment } from 'react'
import firebase from '@firebase/app'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import UsdTry from './Views/UsdTry'
import EurTry from './Views/EurTry'
import EurUsd from './Views/EurUsd'
import GauTry from './Views/GauTry'

function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyDaDTyar5_65FEYe5vyhNp6_URutgUt6uY',
      authDomain: 'forextakip-web.firebaseapp.com',
      databaseURL: 'https://forextakip-web.firebaseio.com',
      projectId: 'forextakip-web',
      storageBucket: 'forextakip-web.appspot.com',
      messagingSenderId: '700987906788',
    })
  }
  return (
    <Fragment>
      <Switch>
        <Header />
        <Route exact path='/' component={UsdTry} />
        <Route path='/euro-try' component={EurTry} />
        <Route path='/euro-usd' component={EurUsd} />
        <Route path='/gau-try' component={GauTry} />
        <Footer />
      </Switch>
    </Fragment>
  )
}

export default App
