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
from 'antd-mobile';
import {
  createForm
}
from 'rc-form';
import React from 'react';
import ReactDOM from 'react-dom';
const TabPane = Tabs.TabPane;

import { pushState } from 'react-stack-nav'
import {bindActionCreators} from 'redux';
import * as loginActions from '../actions/loginActions';
import { connect } from 'react-redux';

import enUS from 'antd-mobile/lib/locale-provider/en_US';

import '../index.css'

function callback(key) {
  console.log(key);
}

let offsetX = -10; // just for pc demo

class Home extends React.Component {

  state = {
    open: false,
    position: 'left',
    selectedTab: 'redTab',
    hidden: false,
    value: 'İçerik Ara',
    focused: false,
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({
      open: !this.state.open
    });
  }
  
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  
  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>{pageText}</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }} onClick={(e) => {
          e.preventDefault();
          this.setState({
            hidden: !this.state.hidden,
          });
        }}
        >
          Welcome back, {this.props.username}
        </a>
      </div>
    );
  }
  
  render() {
    const sidebar = (<List>
      {[...Array(20).keys()].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            multipleLine
          >Drawer Menu</List.Item>);
        }
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >Menu{index}</List.Item>);
      })}
    </List>);

    const drawerProps = {
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };
    
    let tabBar = (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="Home"
          key="home"
          icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'home'}
          badge={1}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}
          data-seed="logId"
        >
          {this.renderContent('Home')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon type="koubei-o" size="md" />}
          selectedIcon={<Icon type="koubei" size="md" />}
          title="Tab2"
          key="tab2"
          badge={'new'}
          selected={this.state.selectedTab === 'tab2'}
          onPress={() => {
            this.setState({
              selectedTab: 'tab2',
            });
          }}
          data-seed="logId1"
        >
          {this.renderContent('Tab2')}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          title="Tab3"
          key="tab3"
          dot
          selected={this.state.selectedTab === 'tab3'}
          onPress={() => {
            this.setState({
              selectedTab: 'tab3',
            });
          }}
        >
          {this.renderContent('Tab3')}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          title="Tab4"
          key="tab4"
          selected={this.state.selectedTab === 'tab4'}
          onPress={() => {
            this.setState({
              selectedTab: 'tab4',
            });
          }}
        >
          {this.renderContent('Tab4')}
        </TabBar.Item>
      </TabBar>
    );
    
    return (
       <LocaleProvider locale={enUS}>
      <div>
      <NavBar mode="dark" iconName="ellipsis" onLeftClick={this.onOpenChange} 
        rightContent={
          (
          <Button size="small" type="primary" onClick={()=>{this.props.loginActions.logout()}} >Logout</Button>
          )  
        }
      >Wall-1
      </NavBar>
      <SearchBar placeholder="search posts" cancelText="Cancel" />
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight - 200 }}
        sidebar={sidebar}
        dragHandleStyle={{ display: 'none' }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        {...drawerProps}
      >
        {tabBar}
      </Drawer>
    </div>
    </LocaleProvider>);
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
  connect(mapStateToProps, mapDispatchToProps)(createForm()(Home))

