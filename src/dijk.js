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
  function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



  // Dijkstra's algorithm function
 export async function dijkstra(edges, start,movline,setmovline,elements) {
    const vertices = new Set();
    edges.forEach((edge) => {
      vertices.add(edge.source);
      vertices.add(edge.destination);
    
    });
    const numVertices = vertices.size;
    console.log("startingindex"+start)
    const vertexMap = new Map([...vertices].map((vertex, index) => [vertex, index]));
    const distances = new Array(numVertices).fill(Infinity);
    const visited = new Array(numVertices).fill(false);
     

   start=start.charCodeAt(0)-65;
    distances[start] = 0;
  
    for (let count = 0; count < numVertices - 1; count++) {
      const u = minDistance(distances, visited);
      visited[u] = true;
  
      const adjacentEdges = edges.filter((edge) => edge.source === String.fromCharCode(u+65));
   console.log("source  "+u+"    "+String.fromCharCode(u+65))
      for (let v = 0; v < adjacentEdges.length; v++) {
        console.log("inside loop  "+adjacentEdges[v].destination)
        const destinationIndex = adjacentEdges[v].destination.charCodeAt(0)-65
        if (
          !visited[destinationIndex] &&
          distances[u] !== Infinity &&
          distances[u] + adjacentEdges[v].weight < distances[destinationIndex]
        ) {
          const removeedges=edges.filter((edge) => edge.destination === String.fromCharCode(destinationIndex+65));
          var movedummy=movline
          for (let re=0;re<removeedges.length;re++)
          {console.log("forcheck"+removeedges[re].idnum)
          const con=removeedges[re].idnum;
          console.log("removeedges"+con)
            const ind=movedummy.findIndex((item)=>{return item.idnum===con});
            movedummy[ind].st=false;
          
             
          }
          setmovline([...movedummy])
          distances[destinationIndex] = distances[u] + adjacentEdges[v].weight;
          // const asciiValuesource = u.charCodeAt(0)-65;
          //   const asciiValuedest = destinationIndex.charCodeAt(0)-65;
          console.log("destination index"+destinationIndex)
          const kl=edges.findIndex((edge)=>{ return edge.source.charCodeAt(0)===u+65 && edge.destination.charCodeAt(0)===destinationIndex+65});
          const kl1=movline;
          console.log("klklklkklklklklklklklklklkkllklklklkk"+kl);
            const angle = Math.atan2((elements[u].y - elements[destinationIndex].y), (elements[u].x - elements[destinationIndex].x)) * (180 / Math.PI);
            console.log(angle+"  "+u+"  "+v)
          const f=edges[kl].idnum;
          const kl2=movline.findIndex((item) => { return item.idnum===f});
          kl1[kl2].st=true;
          kl1[kl2].nod=u;
          if(angle>=0)
          {
            kl1[kl2].sty=1;
          }
          else{
            kl1[kl2].sty=-1;
          }
          setmovline([...kl1]);
          await sleep(2000);
        }
      }
    }
  
    return distances;
  }
  
