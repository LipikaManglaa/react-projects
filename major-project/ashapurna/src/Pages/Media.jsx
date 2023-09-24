import "./Media.css";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faRoute } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { ApiBaseUrl } from "../API/ApiBaseUrl";
import axios from "axios";
export function Media(){

    let [mediaData,setmediaData]=useState([])
    let[imageData,setImageData]=useState([])
    let [getUtsavData,setgetUtsavData]=useState([])
    let getMediaData=()=>{
        let apiurl=ApiBaseUrl+'web/media-events'
        axios.post(apiurl)
        .then((res)=>res.data)
       
        .then((finalData)=>{
            console.log(finalData)
            setmediaData(finalData._data.getMediaEvents)
            setImageData([finalData._data.getMediaEventImages,finalData._data.media_event_image_path])
            setgetUtsavData([finalData._data.getUtsavCamps,finalData._data.utsav_camps_image_path])
        })
    }

useEffect(()=>{
    getMediaData()
},[])



    let settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <>
        <Header/>
        <section className="media-main position-relative">
            <div className="container-fluid">
                <div className="row">
                    <div className="px-0 col-lg-12">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="media-info1 text-center">
                                    <nav aria-label="breadcrumb" className="px-4">
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                            
                                                <Link to={'#'}>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                <Link to={'/media-events'}>{mediaData.title}</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">{mediaData.title}</h2>
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
                        <div className="media-upper p-5 position-relative">
                            <span className="py-5">{mediaData.tagline}</span>
                            <div className="spanborder"></div>
                            <h3 className="hcolor">{mediaData.title}</h3>
                            <p className="pcolor py-2">{mediaData.description}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <div className="container">
                <div className="row align-items-center mb-5">
               
                    <div className="col-lg-6 col-12 p-3 mb-lg-0 mb-5 ms-lg-0 ms-2 ">
                        <div class="life-img-div ms-lg-4 ms-4">
                            <Slider  {...settings}>
                                {
                                    imageData.length>=1
                                    ?
imageData[0].map((v,i)=>{
    return(
<img src={imageData[1]+v.image} alt={v.title} title={v.title}  className="img-fluid mt-4 "/>
    )
})
                                    
                                    :
                                    ""
                                }
                           
                            </Slider>
                           
                        </div>
                    </div>
               
                    <div className="col-lg-6 col-12 py-3 px-3">
                        <div className="media-life">
                            <h2 className="hcolor">{mediaData.life_ashapurna_title}</h2>
                            <p className="pcolor py-2">{mediaData.life_ashapurna_description}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

{
    getUtsavData.length>=1
    ?
    <section className="container-fluid camp">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center hcolor">
                <h2 className="fw-700 py-3">Utsav and Camps</h2>
            </div>
        </div>
        <div className="row">
            {
                getUtsavData[0].slice(0,15).map((v,i)=>{
                    return(
                        <div className="col-lg-4 col-12 p-3">
                        <div className="media-box px-3">
                            <div className="media-box-img">
                                <img src={getUtsavData[1]+v.image} alt="" className="img-fluid" />
                            </div>
                       
                            <div className="media-box-info bg-white text-start p-2">
                                <h4 className="hcolor text-truncate py-2">{v.title}</h4>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faRoute} className="px-2 ricon"/>
                                    <span>{v.location}</span>
                                </div>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faClock} className="px-2 ricon"/>
                                    <span>{v.date}</span>
                                </div>
                                <p className="pcolor py-2">{v.description}</p>
                                <button className="media-btn mb-2">Read More</button>
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