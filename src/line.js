import React, { useState } from 'react'

function line({cx,cy,length,angle,graph,setgraph,idnum}) {
 
  return (
   <div>
    <div style={{  height:"5px",lineHeight:"5px",       padding:"0px" , margin:"0px", height:`2px`,backgroundColor:"black", position:"absolute", left: `${cx}px`,top:`${cy}px`, width:`${length}px`, MozTransform:`rotate(${angle}deg)`,WebkitTransform:`rotate(${angle}deg)`, OTransform:`rotate(${angle}deg)`,msTransform:`rotate(${angle}deg)`, transform:`rotate(${angle}deg)`}} >
        
    </div>
    <input onChange={(e)=>{
      graph[2*idnum].weight=parseInt(e.target.value);
      graph[2*idnum+1].weight=parseInt(e.target.value);
      setgraph([...graph]);
    }} style={{position:"absolute",left: `${cx+length/2}px`,top:`${cy+2}px`,border: '1px solid black',width:"25px"}}></input>
    <button style={{position:"absolute",left: `${cx+length/2+25}px`,top:`${cy+2}px`,border: '1px solid black',width:"25px"}}>ok</button>
    </div>
    
  )
}

export default line