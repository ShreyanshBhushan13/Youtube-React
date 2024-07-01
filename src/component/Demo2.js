import React, { useState,useRef, useEffect } from 'react'

const Demo2 = () => {

    const[y,setY]=useState(0);
let x=0;

const ref=useRef(0);
 // (not like =>ref=0)
// but ref={current:0}

const i=useRef(null);
useEffect(()=>{
    if(i.current) return;
 i.current=setInterval(()=>{
//console.log("namaste react",Math.random())
},1000);

 // return()=>clearInterval(i.current);
},[])



  return (
    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
        <div>
            <button className="bg-green-300 p-2 m-4 " onClick={()=>{
                x=x+1;
               // console.log("1st",x);
            }}
           
            >
                Increase x
            </button>
            <span className='font-bold text-xl'>
               let= {x}
               </span>
              
        </div>
{/* ////////////////////////////////////// */}
        <div>
            <button className="bg-green-300 p-2 m-4 " onClick={()=>{
               setY(y+1);
                console.log("2nd",y);
                //console.log("rendering...");
            }}
           
            >
                Increase y
            </button>
            <span className='font-bold text-xl '>
               State= {y}
               </span>
              
        </div>
{/* /////////////////////////// */}
        <div>
            <button className="bg-green-300 p-2 m-4 " onClick={()=>{
               //setY(y+1);
               ref.current=ref.current+1; 
                //console.log("ref",ref.current);
            }}
           
            >
                Increase ref
            </button>
            <span className='font-bold text-xl'>
               Ref= {ref.current}
               </span>
              
        </div>
{/* ///////////////////////////// */}
<button className='bg-red-500 p-4 m-4 font-bold rounded-lg text-white'
onClick={()=>{clearInterval(i.current)}}> Stop Printing</button>
    </div>
  )
}

export default Demo2