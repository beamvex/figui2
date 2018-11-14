import React, { Component } from 'react';
import {
    Alignment,
    Button,
    Classes,
    H5,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Switch,
} from "@blueprintjs/core";

export default class HeaderComp extends Component {
  static propTypes = {
    
  };

  state = {
    username: '',
  };

  render() {
    return (
        <Navbar className="header">
                    <NavbarGroup align={Alignment.LEFT}>
                        <NavbarHeading>Football Index Chart Tool</NavbarHeading>
                        <NavbarDivider />
                        <Button className={Classes.MINIMAL} icon="home" text="Home" />
                        <Button className={Classes.MINIMAL} icon="document" text="Files" />
                    </NavbarGroup>
        </Navbar>
    );
  }
}
