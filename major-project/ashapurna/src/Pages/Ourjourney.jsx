import { Link } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import "./Ourjourney.css";


import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faRoute } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Experienced from "./HomePage/Experienced";
import { ApiBaseUrl } from "../API/ApiBaseUrl";
export function Ourjourney(){
    
let[getjourney,setGetJourneyData]=useState([])
let [getourjourneyData,setOurJourneyData]=useState([])

   let getJourneyData=()=>{
    let apiurl=ApiBaseUrl+'web/about-us/our-journies'
    
    axios.post(apiurl)
    .then((res)=>res.data)
      .then((finalData)=>
        {
       
            setGetJourneyData(finalData._data.getOurJourneyPageContent
                )
                setOurJourneyData(finalData._data.getOurJournies)
        })
        
       
       
    }

    useEffect(()=>{
        getJourneyData()
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
                                                <Link to={'/our-journey'}>Our Journey</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">Our Journey</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid our-journey-main">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-7 col-12  p-3">
                        <div className="our-journey-info bg-white position-relative shadow-lg p-3 ">
                            <span>{getjourney.title}</span>
                            <div className="spanborder"></div>
                            <h3 className="hcolor">{getjourney.tagline}</h3>
                            <p dangerouslySetInnerHTML={{__html:getjourney.description}}></p> 
                         
                       
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        <section className="container-fluid mb-3">
            <section className="container counter-info">
           <Experienced/>
            </section>
        </section>
        
        <section className="container-fluid  my-3">
            <div className="container ">
                
                <div className="row">
                    <div className="col-lg-12 p-3 journey-info">
                        <h2 className="hcolor py-3">Our Flourishing Journey Over The Last Decade</h2>
                    </div>
                </div>
                
                <div className="position-relative">
                    {
                        getourjourneyData.length>=1
                        ?
                        getourjourneyData.map((v,i)=>{
                         
                            return(

                                <Journey  journeyData={v} journeyId={i+1}/>
                              
                               
                            )
                        })
                   
                        :
                        ""
                    }
             
                        
                <div className="jborder"></div>
                
                </div>
                
            </div>
        </section>
        <Footer/>
        </>
    )
}


let Journey=({journeyData ,journeyId})=>{
return(

        journeyId %  2 === 0 ?
        <div className="row px-5 position-relative ">
        <div className="col-lg-6"></div>
        <div className="col-lg-6 p-lg-3 p-4 ">
            <div className="jinfo-main d-flex flex-column justify-content-end bg-white shadow-lg p-3">
            <h3 className="hcolor px-3">{journeyData.title}</h3>
            <div  dangerouslySetInnerHTML={{__html:journeyData.description}}></div>
                <div class="triangle_left"></div>
                
            </div>
            <div class="milestone-dotr"></div>
        </div>
    </div>

        :
        
        <div className="row px-5 position-relative">
        <div className="col-lg-6 p-lg-3 p-4 ">
            <div className="jinfo-main d-flex flex-column justify-content-end bg-white shadow-lg p-3">
                <h3 className="hcolor px-3">{journeyData.title}</h3>
            <div  dangerouslySetInnerHTML={{__html:journeyData.description}}></div>
               
                <div class="triangle_right"></div>
            </div>
        </div>
        <div className="col-lg-6"></div>
        <div class="milestone-dotl"></div>
        </div>
   
)
}

