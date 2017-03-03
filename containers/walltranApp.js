'use strict';

import {bindActionCreators} from 'redux';
import * as loginActions from '../actions/loginActions';
import { connect } from 'react-redux';

import {
  createForm
}
from 'rc-form';
import React from 'react';
import ReactDOM from 'react-dom';


import enUS from 'antd-mobile/lib/locale-provider/en_US';

import Home from './Home'
import Login from './Login'

import { pushState } from 'react-stack-nav'


class WalltranApp extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {loggedIn: false}
  }

  render() {
    const { authenticationState, navigation } = this.props;
    
    // if (navigation && navigation.history.length > 0 && navigation.history[0].url == "/login"){
    //   return <Login />
    // }
    
    if (!authenticationState || !authenticationState.loggedIn){
       //this.props.pushState({}, "", '/login')
        return <Login />
    }
    
    return (
      <Home username={authenticationState.username}/>
      )
  }
}

export default connect(state => ({
    authenticationState: state.authentication,
    navigation : state.navigation
  }),
  (dispatch) => ({
    actions: bindActionCreators(loginActions, dispatch),
    pushState
  })
)(createForm()(WalltranApp));