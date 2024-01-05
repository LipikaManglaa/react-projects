import React, { useState } from 'react'

export default function Cart() {
  let [valueChange,setValueChange]=useState("")
    let oldData=JSON.parse(localStorage.getItem('cartData')) ?? []
    let qtyChange=(e,id)=>{

oldData.map((v,i)=>{
    if(v.id==id){
   if(e.target.value>v.qty){
    v[0]['qty'] = v[0]['qty'] + 1
    // let finalData1=[...oldData]
   
    //   localStorage.setItem("cartData",JSON.stringify(finalData1))
   }
    }
    else{
      console.log("false")
    }
   })
    }
    
  return (
    <>
   
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
            {
                 
       oldData.length>=1 ?
         oldData.map((v,i)=>{

          return(
         
              <tr>
                <th scope="row">{v.id}</th>
                <td>{v.title}</td>
                <td>{v.description}</td>
                <td><img src={v.thumbnail} style={{width:"50px"}}/></td>
                <td>{v.price}</td>
                <td ><input type='number' value={v.qty} onChange={(e)=>qtyChange(e,v.id)}/></td>
                <td>{v.qty*v.price}</td>
              </tr>
          )

       
      
       })
       :
       "No data "
    }
         </tbody>
      </table>

       
    
    </>
  )
}
