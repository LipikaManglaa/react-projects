import { Link } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import "./CSR.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { ApiBaseUrl } from "../API/ApiBaseUrl";


export function CSR(){
   let[socialEvent,setSocialEvent]=useState([])
   let[socialResponsiblity,setResponsibiltyData]=useState([])
   let[socialUpdate,setUpdateData]=useState([])
    let getCSRData=()=>{
        
        let apiurl=ApiBaseUrl+'web/about-us/csr-social-resposibilities'
    
        axios.post(apiurl)
        .then((res)=>res.data)
          .then((finalData)=>
            {
      
            setSocialEvent(finalData._data.getCsrSocialEvents )
            setResponsibiltyData([finalData._data.getCsrSocialResponsibilities,finalData._data.csr_social_resposibilities_image_path])
          setUpdateData([finalData._data.getCsrSocialUpdates,finalData._data.csr_social_updates_image_path])
          
        })
    }

    useEffect(()=>{
        getCSRData()
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
                                        <ul className="breadcrumb px-5">
                                            <li className="breadcrumb-item">
                                            
                                                <Link to={'#'}>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                <Link to={'/social-responsibility'}>Social Responsibility</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">Social Responsibility</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-4">
                        <div className="csr-events position-relative p-3">
                            <span>{socialEvent.title}</span>
                            <div className="spanborder"></div>
                            <h2 className="hcolor">{socialEvent.tagline}</h2>
                            <p className="pcolor pt-3" dangerouslySetInnerHTML={{__html:socialEvent.description}}></p>
                         
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* social responsiblity section start here */}
        {
            socialResponsiblity.length>=1
            ?

            <section className="container-fluid">
            <div className="container">
                {
                    socialResponsiblity[0].map((v,i)=>{
                        return(
                            <div className="row align-items-center gx-3 mb-5">
                            <div className="col-lg-6 col-12 order-lg-0 order-1 p-3">
                                <div className="csr-events-info position-relative">
                                    <span>{v.title}</span>
                                    <div className="spanborder"></div>
                                    <h3 className="hcolor">{v.tagline}</h3>
                                    <p className="pcolor pt-3" dangerouslySetInnerHTML={{__html:v.description}}></p>

                                </div>
                            </div>
                            <div className="col-lg-6 col-12 order-lg-1 order-0 ps-lg-5 ps-0">
                                <div className="csr-events-img p-3">
                                    <img src={socialResponsiblity[1]+v.image} alt={v.alt_image_text} title={v.title} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
         
             
            </div>
        </section>
            :
            ""
        }
    
    {/* socail update section start here */}
    {
        socialUpdate.length>=1
        ?
        <section className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 p-3 supdate text-center">
                    <h2 className="hcolor">Social Updates</h2>
                </div>
            </div>
            <div className="row mb-3">
                {
                    socialResponsiblity[0].map((v,i)=>{
                        return(
                            <div className="col-lg-4 col-12 p-3 mb-5">
                            <div className="supdate-box py-3 px-4 text-lg-start text-center">
                                <div className="supdate-box-img p-2 bg-white ms-lg-0 ms-5">
                                    <img src={socialResponsiblity[1]+v.image} alt={v.alt_image_text} className="img-fluid" />
                                </div>
                                <h4>{v.tagline}</h4>
                                <h6>{v.title}</h6>
                                <p className="pcolor" style={{height:'50px' ,overflow:'hidden'}} dangerouslySetInnerHTML={{__html:v.description}}></p>
                                <button className="wbtn ms-0">Read More</button>
                            </div>
                        </div>
                        )
                    })
                }
           
            
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