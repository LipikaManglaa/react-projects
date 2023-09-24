import "./Newsletter.css";
import { Link } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { ApiBaseUrl } from "../API/ApiBaseUrl";

export function Newsletter(){
    let [newsLetterData,setnewsLetterData]=useState([])
    let getNewsletterData=()=>{
        let apiurl=ApiBaseUrl+'web/newsletter'
        axios.post(apiurl)
        .then((res)=>res.data)
       
        .then((finalData)=>{
            console.log(finalData)
            setnewsLetterData([finalData._data.getNewsletters,finalData._data.newsletter_image_path])
        })
    }

useEffect(()=>{
    getNewsletterData()
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
                                                <Link to={'/news-letter'}>News Letter</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">News Letter</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {
          newsLetterData.length>=1
            ?
            <section className="container-fluid">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-12 news-heading ">
                        <h2 className="hcolor text-center py-4 mt-5">Ashapurana Newsletters</h2>
                    </div>
                </div>
                    <div className="row gx-5">
                        {
                            newsLetterData[0].map((v,i)=>{
                                return(
                                    <div className="col-lg-6 col-12 p-3">
                                    <div className="news-letter bg-white d-flex pe-1">
                                        <img src={newsLetterData[1]+v.image} alt="" className="img-fluid"/>
                                            <div class="py-4 px-5 d-flex flex-column">
                                                <h3 class="hcolor">{v.title}</h3>
                                                <p className="pcolor">Ashapurna Township Pachpadra is the address of a life that welcomes you with all modernity and grandeur. The imposing gate of the township gives a sense of luxury to its visitors. The township houses everything that makes life comfortable and luxurious. Ashapura Township Pachpadra is a complete world in itself where life experiences a new joy everyday. The township is not a fresh beginning in Pachpadra only but it’s also the dawn of a new era in Barmer as a whole.</p>
                                                <Link>Read More 
                                                <FontAwesomeIcon icon={faArrowRight} className="ps-2 mt-1" />
                                                </Link>
                                             </div>    
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