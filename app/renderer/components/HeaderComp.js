import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@blueprintjs/core';

export default class HeaderComp extends Component {
  static propTypes = {
    
  };

  state = {
    username: '',
  };

  render() {
    return (
        <div className="header">
            <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                <a className="pure-menu-heading" href="">Football Index Graph Tool</a>

                <ul className="pure-menu-list">
                    <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Tour</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sign Up</a></li>
                </ul>
            </div>
        </div>
    );
  }
}
