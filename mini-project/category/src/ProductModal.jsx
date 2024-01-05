import React, { useState } from 'react'
import { Card } from './Cat'
import axios from 'axios';

export default function ProductModal() {
    <Card/>
    let [productModalData,setproductModal]=useState([])
    function productModalDetail(id){
        let apiUrl1=`https://dummyjson.com/products/${id}`;
      axios.get(apiUrl1)
    .then((res)=>{
      return res
    
    })
     .then((finaldata)=>{
      setproductModal(finaldata.data)
     })
    }
    
  return (
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

  )
}
