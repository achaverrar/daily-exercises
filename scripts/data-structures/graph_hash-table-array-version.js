class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  addVertex(node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      this.numberOfNodes++;
    }
    return this.adjacentList;
  }

  // Time complexity: O(n)
  // Space complexity: O(1)
  addEdge(node1, node2) {
    //undirected Graph
    if (this.adjacentList[node1] && this.adjacentList[node2]) {
      const listNode1 = this.adjacentList[node1];
      const listNode2 = this.adjacentList[node2];

      let edgeExists = listNode1.find((curNode) => curNode === node2);
      if (!edgeExists) {
        listNode1.push(node2);
        listNode2.push(node1);
      }
    }
    return this.adjacentList;
  }

  // Time complexity: O(n^2)
  // Space complexity: O(n)
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
