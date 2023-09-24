import React from 'react'
import { toast } from 'react-toastify'

export default function EnquirySave(data) {

    fetch(`http://localhost:3000/users`,{
        method:"POST",
        headers:{
            "Content-Type":"Application/json"
        },
        body:JSON.stringify(data)
    }).then(()=>{
        toast.success("Thank you for enquiry!",{autoClose:1000})
    })
}
