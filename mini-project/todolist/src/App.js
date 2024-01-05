import logo from './logo.svg';
import './App.css';
import { Todolist } from './Todolist';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {
       let [cuurentId,setCurrentId]=useState('')
       const input1=useRef();
       let[list,updateList]=useState([])
        let handleSubmit=()=>{
          if(cuurentId==='' || cuurentId===null){
            updateList([...list,
              {
                title:input1.current.value,
                date:new Date().toLocaleTimeString()
              }
          
      ])
    }

    else{
      // list.filter((v,i)=>{
      //   if(i===cuurentId){
      //     v['title']=input1.current.value
      //     v['date']=new Date().toLocaleTimeString()
      //   }
      //   return v;
      // })
      let finalData=list;
      finalData[cuurentId]['title']=input1.current.value
      finalData[cuurentId]['date']=new Date().toLocaleTimeString()
      updateList(
        finalData

      )
      toast("Update done",true)
    }
        input1.current.value=""
        setCurrentId("")
    }
let deleteList=(delItem)=>{
  
 let updateItem=list.filter((v,i)=>{

    if(i!==delItem){
      return v;
     
    }
   
 })
 
 updateList(updateItem)


}

//update 
let updateListItems=(updateId)=>{
  setCurrentId(updateId)
  let updateItem=list.filter((v,i)=> i===updateId);
  input1.current.value=updateItem[0].title;
  toast("Now can edit you list Item",true)
}
    return(
        <>
         <div className="max-w-[1170px] mx-auto mt-[50px]">
            <div className="grid grid-cols-[80%_auto] mx-auto gap-[20px] ">
                <input type='text' ref={input1} className="h-[50px] pl-[20px]"/>
                <button className=" text-[#10B981] bg-[#fff] " onClick={handleSubmit}>
                  {(cuurentId==='' || cuurentId===null) ? 'Save' : 'Update'}
                </button>
            </div>
         </div>
         <Todolist listItems={list} deleteList={deleteList} updateListItems={updateListItems}/>
         </>
  
  
  );
}

export default App;
