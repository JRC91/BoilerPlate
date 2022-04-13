import React, { Component } from "react";
import Nav from "./nav";
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './home';
import {TokenThunk} from '../store'
import {Login, Signup} from './LogSign'

class routes extends Component {
  render() {
  return (
    <div>
      <Nav />
      <Home />
        {this.props.isLoggedIn ? (
          <Switch>
            <Route path="/home" element={Home} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path='/' exact element={ Login } />
            <Route path="/login" element={Login} />
            <Route path="/signup" element={Signup} />
          </Switch>
        )}
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
