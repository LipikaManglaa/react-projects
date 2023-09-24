import { Link } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import "./About.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faRoute } from "@fortawesome/free-solid-svg-icons";
import { ApiBaseUrl} from "../API/ApiBaseUrl";
import axios from "axios";
import FeatureProduct from "./HomePage/FeatureProduct";
import Experienced from "./HomePage/Experienced";
import Slider from "react-slick";


export function About(){

    
    let [aboutData,setaboutData]=useState([])
  
    let[imagePath,setImagePath]=useState([])
  
    let getAboutData=()=>{

            let apiurl=ApiBaseUrl+'web/about-us'
    
        axios.post(apiurl)
        .then((res)=>res.data)
          .then((finalData)=>
            {
               
                setImagePath(finalData._data)
               setaboutData(finalData._data.aboutUs)
      
        })
       
       
    }


    
    
useEffect(()=>{
    getAboutData()
},[])


    return(
        <>
        <Header/>
        <section className="about-main position-relative">
            <div className="container-fluid">
                <div className="row">
                    <div className="px-0 col-lg-12">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="about-info1">
                                    <nav aria-label="breadcrumb">
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                            
                                                <Link to={'/'}>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                <Link to={'/about-us'}>{aboutData.title}</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">{aboutData.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid px-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-6 col-12 p-3">
                        <div className="mb-5 mb-lg-0">
                            
                            <div className="px-2 py-4 rounded">
                     
                                <img  src={imagePath.about_us_image_path+aboutData.image} alt={aboutData.image_alt_text} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 p-3 mt-3">
                            <div className="office-info position-relative rounded p-3">
                                <span className="hcolor">{aboutData.title}</span>
                                <div className="spanborder"></div>
                                <h3 className="hcolor fs-35 text-capitalize fw-900 ">Welcome To Ashapurna</h3>
                                <p className="pcolor  lh-24 fw-400" style={{textAlign:'justify'}} dangerouslySetInnerHTML={{__html:aboutData.description}}></p>
                               
                            </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <section className="container counter-info">
          <Experienced/>
            </section>
        </section>

  
        <section className="container-fluid vision my-5">
            <div className="container">
                <div className="row vision-row py-3">
                    <div className="col-lg-6 col-12 vision-col">
                        <div className="vision-info bg-white d-flex justify-content-bentween align-items-center rounded">
                            <div className="row">
                                <div className="col-lg-5 col-6">
                                    <div className="vision-img">
                                        <img src={imagePath.about_us_image_path+aboutData.our_vision_image} alt={aboutData.our_vision_title} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-6">
                                    <div className="vision-content p-3">
                                        <h3>{aboutData.our_vision_title
}</h3>
                                        <div className="visionhr"></div>
                                        <p className="pcolor" dangerouslySetInnerHTML={{__html:aboutData.our_vision_description
}}></p>
                                    </div>
                                </div>
                            </div>
                            
                           
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 vision-col">
                        <div className="vision-info bg-white d-flex justify-content-bentween align-items-center rounded">
                            <div className="row">
                                <div className="col-lg-5 col-6">
                                    <div className="vision-img">
                                        <img src={imagePath.about_us_image_path+aboutData.our_mission_image} alt={aboutData.our_mission_title} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-6">
                                    <div className="vision-content p-3">
                                        <h3>{aboutData.our_mission_title}</h3>
                                        <div className="visionhr"></div>
                                        <p className="pcolor" dangerouslySetInnerHTML={{__html:aboutData.our_mission_description}}></p>
                                    </div>
                                </div>
                            </div>
                            
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid floor-plan mb-2 "  style={{ 
      backgroundImage: `url('${imagePath.about_us_image_path
        +aboutData.our_achievement_image}')`  
    }}>
       
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-12 ms-auto">
                        <div className="ach-info bg-white p-4 position-relative">
                                <h2 className="hcolor text-capitalize">{aboutData.our_achievement_title
}</h2>
                                <p className="pcolor fs-14" dangerouslySetInnerHTML={{__html:aboutData.our_achievement_description
}}></p>
                              
                        </div>
                    </div>
                </div>
            </div>
        </section>
       <Footer/>
       </>
    )
}