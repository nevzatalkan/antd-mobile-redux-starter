import {
  DatePicker,
  Drawer,
  List,
  Button,
  Icon,
  LocaleProvider,
  Tabs,
  WhiteSpace,
  NavBar,
  SearchBar,
  WingBlank,
  Flex,
  TabBar,
  InputItem
}
from 'antd-mobile'

import { navigation } from 'react-stack-nav'

import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import { createForm } from 'rc-form';
import React from 'react'
import * as loginActions from '../actions/loginActions';

import { pushState, back } from 'react-stack-nav'

class Login extends React.Component {
  state = {
    focused: false,
  }
  
  login(){
    this.props.loginActions.login(this.refs.username.refs.input.value, this.refs.password.refs.input.value)
  }
  
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List renderHeader={() => 'Login'}>
          <InputItem
            {...getFieldProps('autofocus')}
            clear
            ref="username"
            placeholder=""
            autoFocus
          >Username</InputItem>
          <InputItem
            {...getFieldProps('focus')}
            clear
            ref="password"
            placeholder=""
            type="password"
            focused={this.state.focused}
            onFocus={() => {
              this.setState({
                focused: false,
              });
            }}
          >Password</InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={()=>this.login()}
            >
          Enter
        </div>
          </List.Item>
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticationState: state.authentication,
  navigation : state.navigation
})

const mapDispatchToProps =  (dispatch) => ({
    loginActions: bindActionCreators(loginActions, dispatch),
    pushState
  })

export default
  connect(mapStateToProps, mapDispatchToProps)(createForm()(Login))
