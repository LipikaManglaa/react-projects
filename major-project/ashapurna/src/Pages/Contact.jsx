import { Link, useActionData } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import "./Contact.css";
import banner from "./contactimages/conatactbanner.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap, faMapLocation, faMapMarked, faMapSigns, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { BaseURL } from "./BaseURL";
import axios, { toFormData } from "axios";

import { useEffect, useState } from "react";
import { ApiBaseUrl } from "../API/ApiBaseUrl";
import { toast } from "react-toastify";
import EnquirySave from "../API/EnquirySave";

export function Contact(){


    let [conatctData,setContactData]=useState([])

    let getContactData=()=>{
        let apiurl=ApiBaseUrl+'web/common-content'
        axios.post(apiurl)
        .then((res)=>res.data)
       
        .then((finalData)=>{
            console.log(finalData)
            setContactData(finalData._data.getCompanyInfo)
            
        })
    }

useEffect(()=>{
    getContactData()
},[])

  




const[data,setData]=useState({
    name:"",
    email:"",
    password:"",
    mobile:"",
    message:""
})

let InputData=(e)=>{
    console.log(e.target.name,e.target.value)
    setData({...data,[e.target.name]:e.target.value})
}

let handleSubmit=((e)=>{
e.preventDefault()

EnquirySave(data)
setData({
    name:"",
    email:"",
    password:"",
    mobile:"",
    message:""
})
})
      
    

    return(
        <>
        <Header/>
        
        <section className="contact-main position-relative">
            <div className="container-fluid">
                <div className="row">
                    <div className="px-0 col-lg-12">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="contact-info1">
                                    <nav aria-label="breadcrumb">
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                            
                                                <Link to={'#'}>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                <Link to={'/contact-us'}>Contact Us</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">Contact Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                       <div className="col-lg-12 p-3">
                            <div className="text-center ">
                                <h2 className="fs-35 fw-600 hcolor pt-3">Get In Touch</h2>
                                <p className="fs-14 pcolor py-3">To request a quote, contact us directly or fill out the form and we will get back to you promptly.</p>
                            </div>  
                       </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-12 p-3">
                            <div className="contact-info rounded d-flex justify-content-center align-items-center py-3">
                                <div className="social-icon  fs-22 text-white fs-30 d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </div>
                                <div className="ms-4 pe-2">
                                    <h5 className="hcolor fw-800">Email</h5>
                                    <p className="text-white fs-14  mb-0">
                                        {conatctData.company_email}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 p-3">
                            <div className="contact-info rounded d-flex justify-content-center align-items-center py-3">
                                <div className="social-icon ms-3 fs-22 text-white fs-30 d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </div>
                                <div className="ms-4 pe-2">
                                    <h5 className="hcolor fw-800">Address</h5>
                                    <p className="text-white fs-14  mb-0">
                                        {conatctData.company_address}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 p-3">
                            <div className="contact-info rounded d-flex justify-content-center align-items-center py-3">
                                <div className="social-icon  fs-22 text-white fs-30 d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faPhone}/>
                                </div>
                                <div className="ms-4">
                                    <h5 className="hcolor fw-800">Phone</h5>
                                    <p className="text-white fs-14  mb-0">
                                       {conatctData.company_mobile_2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="container-fluid">
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-6 col-12 p-3">
                        <div className="mb-5 mb-lg-0">
                            <h2 className="hcolor fs-26 text-capitalize mb-20">Find us on Map</h2>
                            <div className="p-2 rounded">
                            
                                <iframe className="rounded" width="100%" height="440px" src={conatctData.company_map} title="
                                Learning Point Jind,126102" aria-label="Learning Point Jind,126102"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 p-3 mt-3">
                            <div className="contact-form position-relative rounded p-3">
                                <span>Write to Us!</span>
                                <div className="spanborder"></div>
                                <h3 className="hcolor fs-22 text-capitalize fw-900 ">Have A Question?</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                    <div className="col-md-6">
                                        <label for="your-name" className="form-label">Your Name</label>
                                        <input value={data.name} onChange={InputData} type="text"  className="form-control" name="name" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="your-surname" className="form-label">Your Phone</label>
                                        <input value={data.mobile} onChange={InputData} type="text" className="form-control"  name="mobile" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="your-surname" className="form-label">Your Email</label>
                                        <input value={data.email} onChange={InputData} type="text"  className="form-control"  name="email" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="your-subject" className="form-label">Password</label>
                                        <input value={data.password} onChange={InputData} type="text" className="form-control" name="password"/>
                                    </div>
                                    <div className="col-12">
                                        <label for="your-message" class="form-label">Your Message</label>
                                        <textarea class="form-control" id="your-message" name="message" rows="5" required  value={data.message} onChange={InputData}/>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                        <div className="col-md-6">
                                            <button type="submit" className="btn cform-btn w-100 fw-bold" >
                                          Send
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </section>


       <Footer/>
       </>
    )
}