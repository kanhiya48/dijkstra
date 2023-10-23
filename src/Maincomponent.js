import React, { useEffect, useRef, useState } from 'react'
import Nodee from './Nodee';
import Line from './line.js'
import {dijkstra} from './dijk.js'
import './index.css'
import QuickGuide from './quick';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// toast.configure()
function Maincomponent() {

const[pen,setpen]=useState(false);


const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

 const moveCursor = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    setCursorPosition({ x, y });
  }





  var start;
   const [showGuide, setShowGuide] = useState(true);
 const [movline,setmovline]=useState([]);
   const bref=useRef();
  const[anime,setanime]=useState(false);
const [points,setPoints]=useState([0,0,0,0]);
const [line,setLine]=useState([]);
const[toggle1,settoggle1]=useState(false);
const [ed,sete]=useState(null);
const [ed1,sete1]=useState(null);
const [graph,setgraph]=useState([]);
const [ans1,setans]=useState(false);


const notify = () => toast.success("Select Source Node!");


const closeGuide = () => {
    setShowGuide(false);
    setTimeout(()=>{setToggle(true)},500)
    
  }


const handleans=(e)=>{
  if(ans1==true)
  {
    if(e.target.id!=="maincomp")
    {
      setanime(false);
      start= e.target.id;
    }
 setans(false);
  }
}
  console.log(graph);

  const [elements,setElements]=useState([]);
  const [toggle,setToggle]=useState(false);
  
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
      // console.log("mouseup")
      // console.log(e.target.id);
      var k=e.target.id;
      
       setTimeout(()=>{console.log("abcd")
      //  console.log("ed"+ed1);
        console.log(graph)}, 1000);
      // console.log("bjkvv"+ed1);
     var n=line.length;
     if(ed!==k)
     {
      setgraph([...graph,{source: ed,destination : k,idnum:n,weight:0},{source:k,destination:ed,idnum:n,weight:0}]);
      // setgraph([...graph,{source:k,destination:ed,idnum:n,weight:0}])
      setmovline([...movline,{idnum:n,st:false,sty:0,nod:undefined}]);
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
      // console.log("mousedown"+ed)
      // console.log("working first")
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
    

    <div onMouseMove={moveCursor} id="maincomp" className={`border-8 border-gray-400 p-4 ${ pen ? 'cursor-none' :''}`}onClick={async(e)=>{
      

     await handleans(e);
     if(start!==undefined)
      var  ans=await dijkstra(graph,start,movline,setmovline,elements);
      console.log("answeeeeeeeerrrrrr"+JSON.stringify(ans));
    }} style={{height:'100vh'}} ref={bref}>
      {

         
       toggle1 && <div style={{ height:"5px",lineHeight:"5px",       padding:"0px" , margin:"0px", height:`2px`,backgroundColor:"black", position:"absolute", left: `${cx}px`,top:`${cy}px`, width:`${length}px`, MozTransform:`rotate(${angle}deg)`,WebkitTransform:`rotate(${angle}deg)`, OTransform:`rotate(${angle}deg)`,msTransform:`rotate(${angle}deg)`, transform:`rotate(${angle}deg)`}} >
        
        </div>
      }
       <div className="text-center">
      <h1 className="text-5xl font-bold text-blue-500 hover:scale-110 transition-transform">
        dijkstra algorithm
      </h1>
      
    </div>
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
      //  console.log(i);
     return( <Line x1={x1} cx={cx} cy={cy} elements={elements}length={length} angle={angle} key={i} setmovline={setmovline} setgraph={setgraph} graph={graph} idnum={i} movline={movline}/>)
      })}
    <button className='bg-red-500 hover:bg-red-700 text-white font-bold mr-4 py-2 px-4 rounded-full transition-all transform hover:scale-110' onClick={()=>{
        if(toggle===false)
        setTimeout(()=>{setToggle(!toggle)},10);
        else
        setToggle(true)
      setpen(false)
    }}><div>Add Node</div></button>
    <button className='bg-red-500 hover:bg-red-700 text-white font-bold mr-4 py-2 px-4 rounded-full transition-all transform hover:scale-110' onClick={()=>{
        if(toggle===false)
        setTimeout(()=>{setToggle(!toggle)},10);
        else
        setToggle(false)
      setpen(true)
    }}><div>Add Line</div></button>
       {
        
         elements.map((element,i)=>{
          
            return <Nodee x = {element.x} y={element.y} toggle={toggle} setToggle={setToggle} key={i} id= {i}  setPoints={setPoints} deleteNode={deleteNode} handleline={handleline} anime={anime}/>
         })
       } 
       
       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all transform hover:scale-110" onClick={async ()=>{
        // anim=true;
        setanime(true);
        // console.log("run")
       settoggle1(false);
       setToggle(false);
       setans(true);
      //  while(start===undefined);
        movline.forEach(item=>item.st=false);
        setmovline([...movline])
        setTimeout(()=>{console.log("answer"+ans1);},1000); 
        notify();
        
       }} >find result</button>

       {showGuide && <QuickGuide onClose={closeGuide} />}
<ToastContainer />
  { pen&& <div class="curso"  style={{ position: 'absolute', left: cursorPosition.x, top: cursorPosition.y}}><img src='pencil.png' alt='no img'></img></div>}

       </div>
      
    
  )
}

export default Maincomponent