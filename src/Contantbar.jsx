import React from 'react'
import { useState } from 'react'


function Contantbar() {
  const[toDos,setToDos]=useState([])
  const[toDo,setToDo]=useState('')
  return (
    <div className=' h-[585px]  w-[580px] flex  border'>
      <div className='h-[185px] w-[580px]  flex justify-center items-center  flex-col justify-evenly '>
      <div className='h-[100px]  w-[580px] flex   justify-center items-center '>
         <div className='h-[50px] w-[800px] flex   justify-center items-center gap-3 border-4 border-slate-200 rounded '>
          <input className='h-[30px] w-[300px] border-black' type="text" value={toDo} onChange={(e)=>setToDo(e.target.value)} />
          <button className='h-[30px] w-[40px] bg-slate-100 rounded' onClick={()=>setToDos([...toDos,{id:Date.now(), text:toDo,status:false}])}>add</button>
          </div>
         

       </div>
       
       { toDos.map((obj)=>{

        return   (<div className='h-[100px]  w-[580px]   flex justify-center items-center'>
          <div className='h-[50px]  w-[580px] flex flex-row gap-1'>
           <input onChange={(e)=>{
          console.log(e.target.checked)
          console.log(obj)
          setToDos(toDos.filter(obj2=>{
            if(obj2.id===obj.id){
              obj2.status=e.target.checked
            }
            return obj2
          }))
            }}  type="checkbox" value={obj.status} />
            <p>{obj.text}</p>
             <button  className='h-[30px] w-[40px] bg-slate-100 rounded'onClick={(e)=>{
                setToDos(toDos.filter(obj2 => {
                  let temp;
                  if (obj2.id != obj.id){
                    temp = obj2
                  }
                  return temp;
                }));
              }}>×</button>
             </div>
           </div>)
        })}
        <h1>Active Taske</h1>
        {
            toDos.map((obj)=>{
              if(obj.status){
               return(<h1>{obj.text}</h1>)
              }
               return null
              })}
      </div>
    </div>
  )
}

export default Contantbar
