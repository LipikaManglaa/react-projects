import "./NRI.css";
import { Link } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { ApiBaseUrl } from "../API/ApiBaseUrl";
export function NRI(){
    let [NRIData,setNRIData]=useState([])

    let getNRIData=()=>{
        let apiurl=ApiBaseUrl+'web/about-us/nri-corner'
        axios.post(apiurl)
        .then((res)=>res.data)
       
        .then((finalData)=>{
            console.log(finalData)
            setNRIData(finalData._data.getNriCorner)
            
        })
    }

useEffect(()=>{
    getNRIData()
},[])
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
                                                <Link to={'/nri-corner'}>{NRIData.tagline}</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">{NRIData.tagline}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <div className="container">
                <div className="row nrih">
                    <div className="col-lg-12">
                        <h2 className="hcolor text-center pt-5 mt-3">{NRIData.title}</h2>
                    </div>
                </div>
                <div className="row pb-5 align-items-center">
                    <div className="col-lg-6 col-12 p-3 mt-3">
                       
                            
                            <div className=" nri-info position-relative p-3 rounded">
                                <span>{NRIData.title}</span>
                                <div className="spanborder"></div>
                                <h2 className="fs-30 fw-600">NRI Clients<span>{NRIData.tagline}</span></h2>
                                <p className="pcolor fs-14 lh-24" dangerouslySetInnerHTML={{__html:NRIData.description}}></p>
                              
                            </div>
                        
                    </div>
                    <div className="col-lg-6 col-12 p-3 mt-3">
                            <div className="nri-form rounded p-3">
                                <h2 className="hcolor fs-26 text-capitalize mb-20">NRI Enquiry</h2>
                                <h3 className="pcolor fs-42 text-capitalize fw-600 py-3 ">Please fill in the form and we would contact you at the earliest.ion?</h3>
                                <form >
                                    <div className="row g-3">

                                    <div className="col-12">
                                        <input  type="text"  className="form-control py-2" placeholder="Name" name="name" required/>
                                    </div>

                                    <div className="col-12">
                                       <input  type="text" className="form-control py-2" placeholder="Phone" name="mobile" required/>
                                    </div>

                                    <div className="col-12">
                                        <input  type="text"  className="form-control py-2" placeholder="Email" name="email" required/>
                                    </div>
                                    
                                    <div className="col-12">
                                        <textarea class="form-control" id="your-message" placeholder="Message" name="your-message" rows="5" required/>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                        <div className="col-md-6 pt-2">
                                            <button type="submit" className="btn cform-btn w-90 fw-bold" >
                                            Submit
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