const nodes = [
  {id: 1, label: 'Node 1', gender: 'm'},
  {id: 2, label: 'Node 2', gender: 'f'},
  {id: 3, label: 'Node 3', gender: 'm'},
  {id: 4, label: 'Node 4', gender: 'm'},
  {id: 5, label: 'Node 5', gender: 'f'}
];

const edges = [
  {from: 1, to: 3},
  {from: 3, to: 1},
  {from: 1, to: 2},
  {from: 2, to: 4},
  {from: 2, to: 5}
];

export default {nodes, edges}
