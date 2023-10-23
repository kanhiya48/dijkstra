import React, { useEffect } from 'react'
import {RxCrossCircled} from 'react-icons/rx'
function Nodee({x,y,toggle,setToggle,createLine,id,deleteNode,setPoints,handleline,anime}) {
  var animateproperty;
  
    animateproperty = (anime===true) ? "animate-pulse" : "";
 
  console.log("avgh"+animateproperty);
  // const
  return (
    <div id={String.fromCharCode(id+65)} className={`nodess p-4  bg-grey-500 shadow-lg rounded-lg ${animateproperty}`}
    style={{
      width:"40px",
      height:"40px",
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
      padding:"10px",
      backgroundColor:"black", 
      
      border: '1px solid black'
    }} >
      <div style={{backgroundColor:"white"}} className='rounded-lg'>
      {/* <span id={id} className='inline-block border-black border-2'>=</span> */}
      <span> <button  className='inline-block absolute  bottom-10  right-8' onClick={async ()=>{
        if(toggle===true)
        {
          setToggle(false)
          deleteNode(id)
          setTimeout( ()=>{setToggle(true)},10)
          
        }
        else
        {
          
          deleteNode(id)
          
        
           
          
        }
        
        }}><RxCrossCircled/></button></span>
       <span className='inline-block border-black border-2 absolute border-none left-4 top-9'>{id}</span>
       {/* <span id={id+1000} className='inline-block border-black border-2'>=</span> */}
       </div>
      </div>
  
  )
}

export default Nodee