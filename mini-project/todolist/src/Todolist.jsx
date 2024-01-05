import { ToDoItems } from "./TodoItems"


export function Todolist({listItems,deleteList,updateListItems}){
       
       return(
        <>
        <div className=" max-w-[1170px] mx-auto p-[20px]"> 
        <h2 className="text-[bold] text-[#fff] text-[24px]">ToDO List</h2>
  {
  (listItems.length>0)? 
  listItems.map((v,i)=>{
    return(
       <ToDoItems v={v} i={i} deleteList={deleteList} updateListItems={updateListItems}   />
    )
  })
  
  
  :
  
  <div className="text-[bold] text-[#fff] text-[24px]">No Data Found!</div>
  
  }

       
        </div>
        </>
       )
}