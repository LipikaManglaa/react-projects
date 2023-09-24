import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import "./Home.css";

import happy from "./homeimages/happy.png";
import units from "./homeimages/units.png";
import property from "./homeimages/property.svg";
import mtape from "./homeimages/measuring-tape.png";
import echeck from "./homeimages/experience-check.png";
import ourwork1 from "./homeimages/ourwork1.webp";

import hlogo from "./homeimages/hlogo.webp";
import swimming from "./homeimages/swimming.svg";
import temple from  "./homeimages/temple.svg";
import community from "./homeimages/community.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route } from "react-router";
import { faClock, faHome, faRoute, faShare, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faStackpath, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import komal from "./homeimages/komal.webp";
import quotes from "./homeimages/quotes.png";
import media1 from "./homeimages/media1.webp";
import media2 from "./homeimages/media2.webp";
import media3 from "./homeimages/media3.webp";
import CountUp from 'react-countup';
import Slider from "react-slick";
import ScrollTrigger from "react-scroll-trigger";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeSlider from "./HomePage/HomeSlider";
import { ApiBaseUrl } from "../API/ApiBaseUrl";
import axios from "axios";
import { findAllByAltText } from "@testing-library/react";
import FeatureProduct from "./HomePage/FeatureProduct";
import EnquirySave from "../API/EnquirySave";

export function Home(){ 
    let[counter,setCounter]=useState('false');

    let [sliderData,setSlierData]=useState([])
    let [aboutData,setaboutData]=useState([])
    let[chooseUs,setChooseUs]=useState([])
    let [getTestimonailData,setGetTestimonialData]=useState([])
    let [getFeaturesData,setGetFeaturesData]=useState([])
    let[getProject,setGetproject]=useState([])
    let[getutsav,setGetUtsav]=useState([])
    let getHomeData=()=>{
        let apiurl=ApiBaseUrl+'web/home'
        axios.get(apiurl)
        .then((res)=>res.data)
        .then((finalData)=>{
            let sliderData={
                'imagePath':finalData._data.slider_image_path,
                'sData':finalData._data.getSliders
            }
            setSlierData([sliderData])
            setaboutData([finalData._data.home_page_image_path,finalData._data.aboutUs])
            setChooseUs([finalData._data.why_choose_us_image_path,finalData._data.getWhyChooseUs,finalData._data.getHomePage])
            setGetTestimonialData([finalData._data.testimonial_image_path,finalData._data.getTestimonials,finalData._data.getHomePage])
            setGetFeaturesData([finalData._data.company_image_path,finalData._data.getFeaturedProjects,finalData._data.getHomePage])
            setGetproject([finalData._data.project_image_path,finalData._data.getProjects,finalData._data.getHomePage])
            setGetUtsav([finalData._data.utsav_camps_image_path,finalData._data.getUtsavCamps])
        })
    }

useEffect(()=>{
    getHomeData()
},[])


const[data,setData]=useState({
    name:"",
    email:"",
    phone:"",
    property:"",
    enquiry:""
})

let InputData=(e)=>{
  
    setData({...data,[e.target.name]:e.target.value})
}

let handleSubmit=((e)=>{
e.preventDefault()

EnquirySave(data)
setData({
    name:"",
    email:"",
    phone:"",
    property:"",
    enquiry:""
})
})

    let settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      let settings1 = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      let settings2 = {
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      let settings3 = {
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      let settings4 = {
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return(
        <>
        <Header/>
        <div className="fixed-btn">Enquire</div>
        <div className="fixed-wapp d-flex justify-content-center align-items-center position-fixed">
            <FontAwesomeIcon icon={faWhatsapp} className="fwicon"/>
        </div>
        <div className="fixed-wapp fixed-wapp1 d-flex justify-content-center align-items-center position-fixed">
            <FontAwesomeIcon icon={faShareAlt} className="fwicon"/>
        </div>
       <section>
            <div className="container-fluid banner mb-2">
                <div className="container">
<HomeSlider sliderData={sliderData}/>
                
                      
                <div className="container banner-form mt-3">
                    <div className="row py-2 align-items-center">
                        <form className="row py-2 py-3 justify-content-center align-items-center" onSubmit={handleSubmit} >
                                <div className="col-md-2" >
                                    <input required placeholder="Name" type="text" name="name" value={data.name} onChange={InputData}/>
                                </div>
                                <div className="col-md-2">
                                    <input required placeholder="Email" type="email" name="email" value={data.email} onChange={InputData} />
                                </div>
                                <div className="col-md-2">
                                    <input required placeholder="Phone" type="tel" name="phone" value={data.phone} onChange={InputData}/>
                                </div> 
                                <div className="col-md-2">
                                    <select className="form-select" name="property" value={data.property} onChange={InputData}>
                                        <option>Select Property</option>
                                        <option>Ashapurna NRI</option>
                                        <option>Ashapurna Mall</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <input required placeholder="Explain your Query" type="text" name="enquiry" id="" value={data.enquiry} onChange={InputData}/>
                                </div>
                                <div className="col-md-2 text-end">
                                    <button className="fbtn" >Submit</button>
                                </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
       </section>
       {/* About Data */}
       {
        aboutData.length>=1
        ?
        <section className="container-fluid py-3 mb-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div>
                        <img src={aboutData[0]+aboutData[1].homepage_image} alt={aboutData.homepage_title} title={aboutData.omepage_title} className="img-fluid" />
                    </div>
                </div>
                <div className="col-lg-7 p-3">
                    <div className="about-content position-relative ">
                        <span className="text-uppercase"> {aboutData[1].homepage_title}<div className="spanborder"></div></span>
                        <h1 >{aboutData[1].homepage_tagline}</h1>
                       <p dangerouslySetInnerHTML={{__html:aboutData[1].homepage_description}}></p> 
                        <div className="position-absolute about-overlay px-2">
                        <div class="row row-cols-5 align-items-center">
                        <div class="col p-2">
                                <div className="overlay-inner p-2">
                                    <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{width:"70px", height:"70px"}}>
                                    <img alt="" src={happy} className=" img-fluid"/>
                                    </div>
                                    <div><span>
                                        <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                                        {counter && <CountUp end={26000} duration={2}/>}+
                                        </ScrollTrigger>
                                        </span>
                                    </div>
                                    
                                    <h4>Years of Experience</h4>
                                </div>
                            </div>
                            <div class="col p-2">
                                <div className="overlay-inner p-2">
                                    <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{width:"70px", height:"70px"}}>
                                    <img alt="" src={units} className=" img-fluid"/>
                                    </div>
                                    <div><span>
                                        <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                                        {counter && <CountUp end={11000} duration={2}/>}+
                                        </ScrollTrigger></span></div>
                                    <h4>Units</h4>
                                </div>
                            </div>
                            <div class="col p-2">
                                <div className="overlay-inner p-2">
                                    <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{width:"70px", height:"70px"}}>
                                    <img alt="" src={property} className=" img-fluid"/>
                                    </div>
                                    <div><span>
                                    <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                                        {counter && <CountUp end={40} duration={2}/>}+
                                        </ScrollTrigger>
                                        </span></div>
                                    <h4>Projects</h4>
                                </div>
                            </div>
                            <div class="col p-2">
                                <div className="overlay-inner p-2">
                                    <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{width:"70px", height:"70px"}}>
                                    <img alt="" src={echeck} className=" img-fluid"/>
                                    </div>
                                    <div><span>
                                    <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                                        {counter && <CountUp end={26} duration={2}/>}+
                                        </ScrollTrigger>
                                        </span></div>
                                    <h4>Years Of Experience</h4>
                                </div>
                            </div>
                            <div class="col p-2">
                                <div className="overlay-inner p-2">
                                    <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{width:"70px", height:"70px"}}>
                                    <img alt="" src={mtape} className=" img-fluid"/>
                                    </div>
                                    <div><span>
                                    <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                                        {counter && <CountUp end={36} duration={2}/>}+
                                        </ScrollTrigger>
                                        </span></div>
                                    <h4>Lakh Sq.Ft Delivered</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
   </section>



        :
        ""
       }

       {/* Chhose us section start here */}
   
      {
          chooseUs.length>=1
          ?
    
         <section className="container-fluid py-5 why-section mt-5 ">
         <div className="container">
             <div className="row align-items-center">
                 <div className="col-lg-4 p-3">
                     <div className="why-content position-relative p-4">
                         <span className="text-uppercase">{chooseUs[2].why_us_title} <div className="spanborder"></div></span>
                         <h1 >{chooseUs[2].why_us_tagline}</h1>
                         <p>{chooseUs[2].why_us_description}</p>
                     </div>
                 </div>
                 <div className="col-lg-8 p-3">
                     <div className="row">
{
     
      
       chooseUs[1].map((v,i)=>{

return(
    <div className="col-12 col-md-6 py-4 px-5">
    <div className="why-block1 p-4 bg-white">
       <img src={chooseUs[0]+v.image} alt={v.title} title={v.title} className="img-fluid" width="60"/>
       <h3>{v.title}</h3>
       <div className="whyborder"></div>
       <p>{v.short_description}</p>
       <Link to={'#'} className="wbtn ">Read More</Link>
       <div className="transparent"></div>
   </div>
   </div>
)
      
       })
    }
    
                       
                     </div>
                    
                        
                 </div>
             </div>
         </div>
     </section>

:
""
    }
     
       {/* Feature projectsection start here */}
       {
        getFeaturesData.length>=1
        ?

        <section className="container-fluid our-work">
        <Slider {...settings3}>
            {
                getFeaturesData[1].map((v,i)=>{
                   
                    return(
                       
                        <div className="container">
                        <div className="row position-relative">
                            <span>{getFeaturesData[2].our_work_title}</span>
                            <div className="spanborder"></div>
                            <h1>{getFeaturesData[2].our_work_tagline}</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-12 p-3">
                                <div className="our-work-img">
                                    <img src={ourwork1} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 p-3">
                                <div className="our-work-content">
                                    <div className="d-flex align-items-center">
                                        <img src={getFeaturesData[0]+v.homepage_image} alt="" className="img-fluid" width="60"/>
                                       
                                    </div>
                                    <p dangerouslySetInnerHTML={{__html:v.short_description}}></p>
                                    <div className="scontent d-flex align-items-center  block-content p-lg-4 ">
                                        <div className="row gx-0">
                                            <div className="col-6">
                                                <img src={swimming} alt="" className="img-fluid" width="40"/>
                                            </div>
                                            <div className="col-6">
                                                <h3>{v.amenities[0].title}</h3>
                                                <span>{v.amenities[0].sub_title}</span>
                                            </div>
                                        </div>
                                        <div className="row gx-0">
                                            <div className="col-6">
                                                <img src={temple} alt="" className="img-fluid" width="40"/>
                                            </div>
                                            <div className="col-6">
                                            <h3>{v.amenities[1].title}</h3>
                                                <span>{v.amenities[2].sub_title}</span>
                                            </div>
                                        </div>
                                        <div className="row gx-0">
                                            <div className="col-6">
                                                <img src={community} alt="" className="img-fluid" width="40"/>
                                            </div>
                                            <div className="col-6">
                                            <h3>{v.amenities[2].title}</h3>
                                                <span>{v.amenities[2].sub_title}</span>
                                            </div>
                                        </div>
                
                                    </div>
                                    <button className="wbtn">See All</button>
                                </div>
                            </div>
                        </div>
                            </div>
                    )
                })
            }
          
           
        </Slider>

</section>

        :
        ""
       }
      {/* project section start here */}
     
        <section className="container-fluid project mb-3 pb-5 ">
     <FeatureProduct getProject={getProject}/>
    </section>

     

        {/* Testimnoal section start here */}
        {
            getTestimonailData.length>=1
            ?

            <section className="container-fluid testimonial">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-12 px-3 pt-lg-5 pt-3 pb-lg-5 ">
                        <div className="testimonial-left position-relative">
                                <span>{getTestimonailData[2].our_testimonial_title}</span>
                                <div className="spanborder"></div>
                                <h1>{getTestimonailData[2].our_testimonial_tagline}</h1>
                                <p>{getTestimonailData[2].our_testimonial_description}</p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 pb-lg-5 pb-2 pt-lg-3 mt-0">

                        <Slider {...settings2}>
                            {
                                getTestimonailData[1].map((v,i)=>{
                                    return(
<div className="testimonial-right position-relative bg-white px-3 py-3">
                            <div className="d-flex p-3">
                                <div className="testimonial-img position-relative ">
                                    <img src={getTestimonailData[0]+v.image} alt="" className="img-fluid" />
                                </div>
                                <div className="testimonial-info px-3">
                                    <h5>{v.name}</h5>
                                    <span>{v.position}</span>
                                </div>
                            </div>
                            <div className="testimonial-ex p-5 position-relative">
                                 <p>{v.message}</p>
                                 <div className="position-absolute quote-img">
                                    <img src={quotes} alt="" className="img-fluid"/>
                                 </div>
                            </div>
                        </div>
                                    )
                                })
                            }
                        
                      
                        </Slider>
                    
                    </div>
                </div>
               
            </div>
        </section>

            :
            ""
        }
        
    {/* get utsav section start here */}
    {
        getutsav.length>0
        ?
        <section className="container-fluid media p-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 p-3">
                    <div className="media-header d-flex justify-content-between">
                        <h1>Media and Events</h1>
                        <button>See All</button>
                    </div>
                </div>
            </div>
            <Slider {...settings4}>
        
                {
                    getutsav[1].map((v,i)=>{
                    
                        return(
                    

                          
                                <div className="media-box" style={{marginRight:'15px'}}>
                                    <div className="media-box-img">
                                        <img src={getutsav[0]+v.image} alt="" className="img-fluid" />
                                    </div>
                                    <div className="media-box-info bg-white text-start p-2">
                                        <p>{v.short_description}</p>
                                        <div className="text-left">
                                          
                                           <FontAwesomeIcon icon={faRoute} className="px-2 ricon"/>
                                            <span>{v.title}</span>
                                        </div>
                                        <div className="text-left">
                                          
                                           <FontAwesomeIcon icon={faClock} className="px-2 ricon"/>
                                            <span>{v.date}</span>
                                        </div>
                                    </div>
                                </div>
                           
                      
            
            
                      
                        )
                    })
                }
          
        
         
          
            </Slider>
        </div>
    </section>

        :
        ""
    }
       
       <Footer/>
       </>
    )
}