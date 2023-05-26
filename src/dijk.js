// Dijkstra's algorithm implementation

// Helper function to find the vertex with the minimum distance value
export function minDistance(distances, visited) {
    let min = Infinity;
    let minIndex = -1;
  
    for (let i = 0; i < distances.length; i++) {
      if (!visited[i] && distances[i] <= min) {
        min = distances[i];
        minIndex = i;
      }
    }
  
    return minIndex;
  }
  
  // Dijkstra's algorithm function
 export function dijkstra(edges, start) {
    const vertices = new Set();
    edges.forEach((edge) => {
      vertices.add(edge.source);
      vertices.add(edge.destination);
    
    });
    const numVertices = vertices.size;
    console.log(numVertices)
    console.log("bb")
    console.log(vertices);
    console.log("bb")
    const vertexMap = new Map([...vertices].map((vertex, index) => [vertex, index]));
    const distances = new Array(numVertices).fill(Infinity);
    const visited = new Array(numVertices).fill(false);
  
    distances[vertexMap.get(start)] = 0;
  
    for (let count = 0; count < numVertices - 1; count++) {
      const u = minDistance(distances, visited);
      visited[u] = true;
  
      const adjacentEdges = edges.filter((edge) => edge.source === [...vertexMap.keys()][u]);
  
      for (let v = 0; v < adjacentEdges.length; v++) {
        const destinationIndex = vertexMap.get(adjacentEdges[v].destination);
        if (
          !visited[destinationIndex] &&
          distances[u] !== Infinity &&
          distances[u] + adjacentEdges[v].weight < distances[destinationIndex]
        ) {
          distances[destinationIndex] = distances[u] + adjacentEdges[v].weight;
        }
      }
    }
  
    return distances;
  }
  
