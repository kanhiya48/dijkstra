import React, { useState } from 'react'
import './index.css'
function line({x1,cx,cy,length,angle,graph,setgraph,idnum,movline,setmovline,elements}) {
  // const [isanimating,setanimating]=useState(false);
//  const BorderChangingComponent = () => {
  // const [borderAnimation, setBorderAnimation] = useState(false);
 const index = movline.findIndex(item => item.idnum === idnum);
  const handleClick = () => {
    // setBorderAnimation(true);
    const kl=movline;
  
    kl[index].st=true;
    setmovline([...kl]);
    // setTimeout(() => setBorderAnimation(false), 1000); // Reset animation after 1 second
  };
if(movline[index].st){
var t=elements[movline[index].nod].x-x1
  console.log("angle     "+t)
}
  return (
    
   <div>
    { movline[index].st&&<div className={`border-change ${movline[index].st ? ( x1-elements[movline[index].nod].x < 40&& x1-elements[movline[index].nod].x>0 ? 'animate-border-change':'animate-border-change1'): ''}`} style={{  lineHeight:"5px",       padding:"0px" , margin:"0px", height:`11px`, position:"absolute", left: `${cx-3}px`,top:`${cy-5}px`, width:`${length}px`, MozTransform:`rotate(${angle}deg)`,WebkitTransform:`rotate(${angle}deg)`, OTransform:`rotate(${angle}deg)`,msTransform:`rotate(${angle}deg)`, transform:`rotate(${angle}deg)`}}></div>}
    <div style={{  height:"5px",lineHeight:"5px",       padding:"0px" , margin:"0px", height:`2px`,backgroundColor:"black", position:"absolute", left: `${cx}px`,top:`${cy}px`, width:`${length}px`, MozTransform:`rotate(${angle}deg)`,WebkitTransform:`rotate(${angle}deg)`, OTransform:`rotate(${angle}deg)`,msTransform:`rotate(${angle}deg)`, transform:`rotate(${angle}deg)`}} >
        
    
    </div>
    <input type="text" className="w-25 px-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring focus:border-blue-500" onChange={(e)=>{
      graph[2*idnum].weight=parseInt(e.target.value);
      graph[2*idnum+1].weight=parseInt(e.target.value);
      setgraph([...graph]);
    }} style={{position:"absolute",left: `${cx+length/2}px`,top:`${cy+2}px`,border: '1px solid black',width:"25px"  }}></input>
    {/* <button style={{position:"absolute",left: `${cx+length/2+25}px`,top:`${cy+2}px`,border: '1px solid black',width:"25px"}}>ok</button> */}
    {/* <buton onClick={handleClick} style={{position:"absolute",left: `${cx+length/2+60}px`,top:`${cy+2}px`,border: '1px solid black',width:"25px"}}>animate</buton> */}
    </div>
    
  )
}

export default line