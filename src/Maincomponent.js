import React, { useEffect, useRef, useState } from 'react'
import Nodee from './Nodee';
import Line from './line.js'
import {dijkstra} from './dijk.js'

function Maincomponent() {

   const bref=useRef();
  
const [points,setPoints]=useState([0,0,0,0]);
const [line,setLine]=useState([]);
const[toggle1,settoggle1]=useState(false);
const [ed,sete]=useState(null);
const [ed1,sete1]=useState(null);
const [graph,setgraph]=useState([]);


  console.log(graph);

  const [elements,setElements]=useState([]);
  const [toggle,setToggle]=useState(true);
  
  const deleteNode=  (index)=>{
   console.log("yes")
      elements.splice(index, 1);
      setElements([...elements])
  }
   const clickHandle=(e)=>{ 
       
    if(toggle===true){
      
        setElements([...elements,{x:e.pageX,y:e.pageY}])
    }
    }
    const handleline1=(e)=>{
      
      points[2]=e.clientX;
      points[3]=e.clientY;
      setPoints([...points]);
    }
    const handle2= (e)=>{
      console.log("mouseup")
      console.log(e.target.id);
      var k=e.target.id;
      //  sete1(e.target.id);
       setTimeout(()=>{console.log("abcd")
       console.log("ed"+ed1);
        console.log(graph)}, 1000);
      console.log("bjkvv"+ed1);
     var n=line.length;
     if(ed!==k)
     {
      setgraph([...graph,{source: ed,destination : k,idnum:n,weight:0},{source:k,destination:ed,idnum:n,weight:0}]);
      // setgraph([...graph,{source:k,destination:ed,idnum:n,weight:0}])
      setLine([...line,{x1:points[0],y1:points[1],x2:points[2],y2:points[3]}]);
      setTimeout(()=>{console.log("abcd")
        console.log(graph)}, 1000);
     }
      settoggle1(false)
     
    }
    useEffect(()=>{
      var x=document.getElementsByClassName("nodess");
      if(toggle1===true)
      {
        for(var i=0;i<x.length;i++)
        {
        
        x[i].addEventListener("mouseup",handle2);
        }
        return ()=>{
          for(var i=0;i<x.length;i++)
          {
          
          x[i].removeEventListener("mouseup",handle2);
          }
    }
      }
    })
    useEffect(()=>{
      if(toggle1==true)
      {
        document.addEventListener("mousemove",handleline1);
        return ()=>{
          document.removeEventListener("mousemove",handleline1);
        }
      }
    })
    const handleline=(e)=>
    {
      sete(e.target.id);
      console.log("mousedown"+ed)
      console.log("working first")
      points[0]=e.pageX;
      points[1]=e.pageY;
      points[2]=e.pageX;
      points[3]=e.pageY;
      setPoints([...points]);
      
      settoggle1(true);
      
    }

  useEffect(()=>{
    if(toggle===false){
  var x=document.getElementsByClassName("nodess");
  for(var i=0;i<x.length;i++)
  {
    
  x[i].addEventListener("mousedown",handleline);
  }
  return ()=>{
    for(var i=0;i<x.length;i++)
    {
      
    x[i].removeEventListener("mousedown",handleline);
    }
}

}
}
)

   

   useEffect(()=>
   {
    document.addEventListener("click", clickHandle);
 return  ()=>{
    document.removeEventListener("click",clickHandle);

 }
    })



  

  




    const color='green';
    const thickness=5;
     const x1 = points[0];
     const y1 = points[1];
   
     const x2 = points[2];
     const y2 = points[3];

     const length = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
   
     const cx = ((x1 + x2) / 2) - (length / 2);
     const cy = ((y1 + y2) / 2) - (thickness / 2);
   
     const angle = Math.atan2((y1 - y2), (x1 - x2)) * (180 / Math.PI);







  return (
    

    <div id="maincomp" style={{height:'100vh'}} ref={bref}>
      {

         
       toggle1 && <div style={{ height:"5px",lineHeight:"5px",       padding:"0px" , margin:"0px", height:`2px`,backgroundColor:"black", position:"absolute", left: `${cx}px`,top:`${cy}px`, width:`${length}px`, MozTransform:`rotate(${angle}deg)`,WebkitTransform:`rotate(${angle}deg)`, OTransform:`rotate(${angle}deg)`,msTransform:`rotate(${angle}deg)`, transform:`rotate(${angle}deg)`}} >
        
        </div>
      }
    
      {line.map((a,i)=>{
             

        const color='green';
        const thickness=5;
         const x1 = a.x1;
         const y1 = a.y1;
       
         const x2 = a.x2;
         const y2 = a.y2;
    
         const length = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
       
         const cx = ((x1 + x2) / 2) - (length / 2);
         const cy = ((y1 + y2) / 2) - (thickness / 2);
       
         const angle = Math.atan2((y1 - y2), (x1 - x2)) * (180 / Math.PI);
       console.log(i);
     return( <Line cx={cx} cy={cy} length={length} angle={angle} key={i} setgraph={setgraph} graph={graph} idnum={i} />)
      })}
    <button className='bg-red-500 rounded-md border-black p-[2px]' onClick={()=>{
        if(toggle===false)
        setTimeout(()=>{setToggle(!toggle)},10);
        else
        setToggle(!toggle)
    }}>toggle</button>
       {
        
         elements.map((element,i)=>{
          
            return <Nodee x = {element.x} y={element.y} toggle={toggle} setToggle={setToggle} key={i} id= {i}  setPoints={setPoints} deleteNode={deleteNode} handleline={handleline}/>
         })
       } 
       <button className='bg-red-500 rounded-md border-black p-[2px]'>addline</button>
       <button  className='bg-red-500 rounded-md border-black p-[2px]'>stopaddline</button>
       <button onClick={async ()=>{
      
        var  ans= dijkstra(graph,'A');
        setTimeout(()=>{console.log(ans);},1000);  
       }} >find result</button>
       </div>
      
    
  )
}

export default Maincomponent