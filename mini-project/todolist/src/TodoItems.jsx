import { faUber } from "@fortawesome/free-brands-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { ToastContainer } from "react-toastify"

export function ToDoItems({v,i,deleteList,updateListItems}){
    let [cstatus,setcStatus]=useState(false)

    return(
        <>
                 <div key={i}
        
         className={`p-[10px] grid grid-cols-[10%_50%_20%_10%_10%] text-white bg-[#10B981;;] tolist text-[20px] mb-[20px] px-[20px] ${cstatus===true ? 'line-through':''} `} >
         
         
         
          
            <div>{i+1}</div>
            <div  onClick={()=>setcStatus(!cstatus)}>{v.title}</div>
            <div>{v.date}</div>
            <div className="cursor-[pointer]" onClick={()=>deleteList(i)}> <FontAwesomeIcon icon={faTrash}/></div>
        <div className="text-[]">  <button onClick={()=>updateListItems(i)}>Edit</button></div>
        </div>
        <ToastContainer osition="top-center"
            autoClose={1000}
            hideProgressBar={false}/>
        </>
    )
}