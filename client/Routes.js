import React, { Component } from "react";
import Nav from "./nav";
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './home';
import {TokenThunk} from '../store/auth'
import {Login, Signup} from './LogSign'
import {Footer} from './footer'
class routes extends Component {
  render() {
  return (
    <div>
      <Nav />
        {this.props.isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            {console.log('it is here')}
            <Route path='/' exact component={Login } />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
        <Footer />
      </div>
  )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(TokenThunk())
    }
  }
}

export default (connect(mapState, mapDispatch)(routes))
