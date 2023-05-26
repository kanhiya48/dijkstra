import React, { useEffect } from 'react'

function Nodee({x,y,toggle,setToggle,createLine,id,deleteNode,setPoints,handleline}) {
  
 
  return (
    <div id={String.fromCharCode(id+65)} className='nodess'
    style={{
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
      padding:"10px",
      backgroundColor:"black",
      border: '1px solid black'
    }} >
      <div style={{backgroundColor:"white"}}>
      {/* <span id={id} className='inline-block border-black border-2'>=</span> */}
      <span> <button  className='inline-block absolute border-black border-2 bottom-12  ' onClick={async ()=>{
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
        
        }}>*</button></span>
       <div className='inline-block border-black border-2'>node</div>
       {/* <span id={id+1000} className='inline-block border-black border-2'>=</span> */}
       </div>
      </div>
  
  )
}

export default Nodee