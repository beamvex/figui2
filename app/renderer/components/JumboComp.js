import React, { Component } from 'react';

export default class JumboComp extends Component {
  static propTypes = {
    
  };

  render() {
    return (
        <div className="splash-container">
            <div className="splash">
                <h1 className="splash-head">Big Bold Text</h1>
                <p className="splash-subhead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <p>
                    <a href="http://purecss.io" className="pure-button pure-button-primary">Get Started</a>
                </p>
            </div>
        </div>
    );
  }
}
