import React, { Component } from 'react';
import { Card } from "@blueprintjs/core";

export default class FooterComp extends Component {
  static propTypes = {
    
  };

  render() {
    return (
        <Card className="footer">
          View the source of this layout to learn more. Made with love by the YUI Team.
        </Card>
    );
  }
}
