import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@blueprintjs/core';
import Header from '../containers/Header';
import SideBar from '../containers/SideBar';
import ListBar from '../containers/ListBar';
import Footer from '../containers/Footer';

export default class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  state = {
    username: '',
  };

  handleLogin = () => {
    this.props.onLogin({
      username: this.state.username,
      loggedIn: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    return (
        <div id="layout" className="content pure-g">
            <Header/>

            <SideBar/>

            <ListBar/>

            <Footer/>
      </div>
    );
  }
}
