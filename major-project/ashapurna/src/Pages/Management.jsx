import { Link } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import "./Management.css";
import quote from "./Managementimages/quotes.png";
import member1 from "./Managementimages/member1.jpg";
import member2 from "./Managementimages/member2.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { ApiBaseUrl } from "../API/ApiBaseUrl";
export function  Management(){
    let [managementData,setManagementData]=useState([])
    let [managementSpeak,setManagementSpeak]=useState([])
    let getManagementData=()=>{
        let apiurl=ApiBaseUrl+'web/about-us/management-speak'
    
        axios.post(apiurl)
        .then((res)=>res.data)
          .then((finalData)=>{
         
         
            setManagementData(finalData._data.getManagementSpeakPageContent
                )
            setManagementSpeak([finalData._data.getManagementSpeaks,finalData._data.management_speak_image_path
            ])
        })
    }
        useEffect(()=>{
            getManagementData()
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
                                                <Link to={'/management-speaks'}>{managementData.title}</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    
                                        <h2 className="text-white fw-700 fs-35 text-center text-capitalize">{managementData.title}</h2>

                                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-3">
                        <div className="board-team text-center py-5">
                            <h2 className="hcolor">Board of Directors</h2>
                            <p className="pcolor" dangerouslySetInnerHTML={{__html:managementData.description}}></p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <div className="container">
              
                    {
                        managementSpeak.length>=1
                        ?
                        managementSpeak[0].map((v,i)=>{
                       console.log(i)
                      return(

                        i == 1 ?
<div className="row align-items-center mb-lg-5" >
                        <div className="col-lg-6 col-12 p-3 order-lg-0 order-1">
                        <div className="board-info position-relative p-3">
                            <span>{v.position}</span>
                            <div className="spanborder"></div>
                            <h3 className="hcolor pb-3">{v.name}</h3>
              
                            <p className="pcolor" dangerouslySetInnerHTML={{__html:v.description
}} ></p>
                            <img src={quote} alt="" className="img-fluid position-absolute" />
                            <button className="wbtn mt-5">Read More</button>
                           

                        </div>
                    </div>
                    <div className="col-lg-6 col-12 py-3 px-5 order-lg-1 order-0 ">
                        <div className="board-img ">
                            <img src={managementSpeak[1]+v.image} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
                :
                <div className="row align-items-center mb-lg-5">
                <div className="col-lg-6 col-12 py-3 px-5">
                        <div className="board-img ">
                        <img src={managementSpeak[1]+v.image} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 p-3">
                        <div className="board-info position-relative p-3">
                        <span>{v.position}</span>
                            <div className="spanborder"></div>
                            <h3 className="hcolor pb-3">{v.name}</h3>
              
                            <p className="pcolor" dangerouslySetInnerHTML={{__html:v.description
}} ></p>
                            <img src={quote} alt="" className="img-fluid position-absolute" />
                            <button className="wbtn mt-5">Read More</button>

                        </div>
                    </div>
                    
                </div>
                        
                      )
                    })
                        
                        :
                        ""
                    }
                
        
            </div>
        </section>
        <Footer/>
        </>
    )
}