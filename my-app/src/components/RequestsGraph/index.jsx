import React, { Component } from 'react';
import Vis from 'vis';
import graphOptions from '../../Assets/optionsForRequestsGraph';
import SideMenuGraph from '../SideMenuGraph';
import studentGraph from '../../mocks/studentGraph';

class RequestsGraph extends Component {

  constructor(props) {
    super(props);

    let nodes = this.colorNodesByGender();
    let edges = this.colorEdgesByTwoWaySelection();
    let options = graphOptions;

    this.state = {
      network: {},
      nodes: new Vis.DataSet(nodes),
      edges: new Vis.DataSet(edges),
      options,
      errorMessage: ''
    };

    this.handleNodesSelection = this.handleNodesSelection.bind(this);
    this.handleEdgesSelection = this.handleEdgesSelection.bind(this);
  };

  componentDidMount() {
    let network = {};

    network = new Vis.Network(this.refs.myRef, {nodes: this.state.nodes, edges: this.state.edges}, this.state.options);
    network.on("selectNode", (params) => {
      this.setState({errorMessage: ''});
    });
    this.setState({network})
  };

  colorNodesByGender() {
    let {nodes} = studentGraph;

    for(let node of nodes) {
      if(node.gender === 'm') {
        node.color = {
          border: '#6495ed'
        }
      }
      else if(node.gender === 'f') {
        node.color = {
          border: '#ff69b4'
        }
      }
    }

    return nodes;
  }

  colorEdgesByTwoWaySelection() {
    let {edges} = studentGraph;
    let otherEdge;

    for(let edge of edges) {
      otherEdge = edges.find((edgeObject) => {
        return (edgeObject.to === edge.from) && (edgeObject.from === edge.to);
      });

      if(otherEdge !== undefined) {
          edge.color = '#23d160';
          otherEdge.color = '#23d160';
      }
    }

    return edges;
  }

  handleNodesSelection(event, color) {
    let params = this.state.network.getSelection();
    let clickedNode;

    if(params.nodes.length === 0) {
      this.setState({errorMessage: "לא נבחרו עיגולים"});
      return;
    }

    for(let nodeID of params.nodes){
      clickedNode = this.state.nodes.get(nodeID);
      clickedNode.color = {
        background: color
      }
      this.state.nodes.update(clickedNode);
      this.state.network.unselectAll();
    }
  }

  handleEdgesSelection(event, color) {
    let params = this.state.network.getSelection();
    let clickedEdge;

    if(params.edges.length === 0) {
      this.setState({errorMessage: "לא נבחרו קווים"});
      return;
    }

    for(let edgeID of params.edges){
      clickedEdge = this.state.edges.get(edgeID);
      clickedEdge.color = color;
      this.state.edges.update(clickedEdge);
      this.state.network.unselectAll();
    }
  }

  render() {
    return (
      <div className="columns">
        <div className='column is-pulled-right'>
          <SideMenuGraph
            handleNodesSelection={this.handleNodesSelection}
            handleEdgesSelection={this.handleEdgesSelection}
            errorMessage={this.state.errorMessage} />
        </div>
        <div className="column is-10">
          <div style={{width: '100%', height: '100%'}} ref="myRef" />
        </div>
      </div>
    );
  }
};

export default RequestsGraph;
