import { Link } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import "./WhyInvest.css";
import whyimg from "./whyinvestimages/why-invest--in-jodhpur.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { ApiBaseUrl } from "../API/ApiBaseUrl";
export function WhyInvest(){
   
    let [whyInvestData,setWhyInvestData]=useState([])
    let getWhyInvestData=()=>{
        let apiurl=ApiBaseUrl+'web/about-us/why-invest-in-jodhpur'
        axios.post(apiurl)
        .then((res)=>res.data)
       
        .then((finalData)=>{
            console.log(finalData)
            setWhyInvestData([finalData._data.getWhyInvestJodhpur,finalData._data.why_invest_in_jodhpur_image_path])
        })
    }

useEffect(()=>{
    getWhyInvestData()
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
                                        <ul className="breadcrumb ps-5">
                                            <li className="breadcrumb-item">
                                            
                                                <Link to={'#'}>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                <Link to={'/why-invest'}>
WHY INVEST IN JODHPUR</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">
WHY INVEST IN JODHPUR</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        {
            whyInvestData.length>=1
            ?
        <section className="container-fluid">
            <div className="container">
                <div className="row why-invest">
                    <div className="col-lg-12 p-3">
                        <h2 className="text-center hcolor pt-5 pb-2">{whyInvestData[0].title}</h2>
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-lg-4 col-12 p-3">
                        <div className="invest-img border rounded-1 shadow p-2">
                            <img alt="" src={whyInvestData[1]+whyInvestData[0].image} className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 p-3">
                        <div className="why-info px-4 pt-5">
                            <h3>{whyInvestData[0].tagline}</h3>
                            <p className="pcolor  py-3" dangerouslySetInnerHTML={{__html:whyInvestData[0].description}}></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 p-3">
                    <div className="why-info px-4 pt-5 mt-3">
                            <h3>{whyInvestData[0].top_reason_title}</h3>
                            <ol className="pt-2">
                                <li className="pcolor" dangerouslySetInnerHTML={{__html:whyInvestData[0].top_reason_description}}></li>
                              
                            </ol>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
             :
             ""
         }
        <Footer/>
        </>
    )
}