import React, { Component } from 'react';
import Vis from 'vis';

class Graph extends Component {

  componentDidMount() {
    this.network = new Vis.Network(this.refs.myRef, {nodes: this.nodes, edges: this.edges}, this.options);
    this.network.on("selectNode", (params) => {
      let nodeID = params.nodes[0];
      let clickedNode = this.nodes.get(nodeID);
      clickedNode.color = {
        highlight: {
          border: '#000000',
        }
      };
      this.nodes.update(clickedNode);
    });
  };

  constructor(props) {
    super(props);
    this.network = {};
    this.nodes = new Vis.DataSet([
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
    ]);
    this.edges = new Vis.DataSet([
      {from: 1, to: 3},
      {from: 1, to: 2},
      {from: 2, to: 4},
      {from: 2, to: 5}
    ]);
    this.options = {
      edges: {
        color: "#000000"
      },
      nodes: {
        color: {
          highlight: {
            border: '#ffffff'
          }
        }
      }
    }
  };

  render() {
    return (
      <div style={{width: '100%', height: '100%'}} ref="myRef"></div>
    );
  }
};

export default Graph;
