import React, { useState } from 'react'
import { numbers, upperCaseLetters,lowerCaseLetters,specialCharacters } from './PasswordCharacter'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faClipboard } from '@fortawesome/free-regular-svg-icons'

export default function PasswordGenerator() {
    let [password ,setPassword]=useState('')
    let [ numberCheck, setNumberCheck]=useState(false)
    let [upperCase,setUpperCase]=useState(false)
    let [lowerCase,setlowerCase]=useState(false)
    let [specialCharacter,setspecialCharacter]=useState(false)
    let[passwordLength, setPasswordLength]=useState(16)


   let handleData=()=>{
    if(!numberCheck && !upperCase && !lowerCase && !specialCharacter){
        toast.error("please select one alleast checkbox",true)
    }
    else{;
        let character="";
        if(numberCheck){
            character=character+numbers
        }
        if(upperCase){
            character=character+upperCaseLetters
        }
        if(lowerCase){
            character=character+lowerCaseLetters
        }
        if(specialCharacter){
            character=character+specialCharacters
        }
        setPassword(passwordCreate(character))
        toast.success("password generator",true)
    }
      
   }


   let passwordCreate=(charParama)=>{
        let  passwordC="";
       let charLength=charParama.length;
       for(var i=0;i<passwordLength;i++){
            let RandomCharIndex=Math.floor(Math.random()*charLength) //Number 
            passwordC=passwordC+charParama.charAt(RandomCharIndex)
       }
       return  passwordC 
   }
let copyPassword=()=>{
    if(password.length>0){
        navigator.clipboard.writeText(password)
        toast("password copy succesfully",true)

    }else{
        toast.error(" No password available!")
    }
}
  return (
   <>
 
<div class="container">
  <h2>Password Generator</h2>
 
<div class="result-container">
<button class="btn" id="clipboard" onClick={copyPassword} >

<FontAwesomeIcon icon={faClipboard} />
    </button>
   <input type= "text"  id="result" value={password} placeholder='passowrd generator'/>
   </div>
   
   <div className='setting'>
    <label>Password length</label>
    <input type="number" value={passwordLength} onChange={(e)=>setPasswordLength(e.target.value)}/>
   </div>
   <div className='setting'>
    <label>Add Uppercase Letter</label>
    <input checked={upperCase} type="checkbox" onChange={(e)=>setUpperCase(e.target.checked)}/>
   </div>
   <div className='setting'>
    <label>Add Lowercase Letter</label>
    <input type="checkbox"  checked={lowerCase} onChange={(e)=>setlowerCase(e.target.checked)}/>
   </div>
   <div className='setting'>
    <label>Include Numbers</label>
    <input type="checkbox"  checked={numberCheck} onChange={(e)=>setNumberCheck(e.target.checked)}/>
   </div>
   <div className='setting'>
    <label >Include Symbols</label>
    <input type="checkbox"  checked={specialCharacter} onChange={(e)=>setspecialCharacter(e.target.checked)}/>
   </div>
   <button class="btn btn-large" id="generate" onClick={handleData}>Generate Password</button>
  
</div>

   <ToastContainer position="top-center"
            autoClose={2000}
            hideProgressBar={false}/>
   </>
  )
}
