import React, { Component } from 'react';
import { Classes, Icon, ITreeNode, Position, Tooltip, Tree, Card } from "@blueprintjs/core";

export default class SideBarComp extends Component {
  static propTypes = {
    
  };

  state = {
    nodes : this.props.footballers.items.map((object, i) => {
        return {
            id: i,
            label: object.name
        };
     })
  };

  render() {
    return (
        
            <Tree 
                        contents={this.state.nodes}
                        className={[Classes.ELEVATION_0, "sidebar"]}
            />
        
    );
  }
}
