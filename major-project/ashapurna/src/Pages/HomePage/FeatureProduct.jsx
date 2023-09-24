import { faHome, faRoute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Slider from 'react-slick';

export default function FeatureProduct({getProject}) {
    
    let settings4 = {
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
   <>
  {
        getProject.length>=1
        ?
        

       
      
<div className="container">
            <div className="row project-row1">
                <div className="col-lg-8 col-12 pt-3">
                    <div className="project-header position-relative py-3">
                        <div className='d-flex align-items-center'>                            <span>Our Projects</span>
                            <div className="spanborder1"></div></div>
                            <h1>{getProject[2].project_overview_tagline}</h1>
                            <p>{getProject[2].project_overview_description}</p>
                    </div> 
                </div>
            </div>
           
            
                        
            <Slider {...settings4}>
          
                    {
                        getProject[1].map((v,i)=>{
                            return(
                           
                                <div className="  project-row2 d-flex z-auto ">
                                <div className="project-col position-relative ">
                                    <img src={getProject[0]+v.project_logo_1} alt="" className="img-fluid"/>
                                    <div className="pbtn position-absolute">{v.current_status}</div>
                                    <div className="project-box position-absolute bg-white text-left rounded shadow-lg ">
                                        <div className="d-flex align-items-center px-4 py-2 gap-3">
                                            <img src={getProject[0]+v.project_logo_2} alt="" className="img-fluid rounded" width="60"/>
                                            <h3>{v.name}</h3>
                                        </div>
                                        <div className="px-4">
                                        
                                        <FontAwesomeIcon icon={faRoute}/>
                                            <span>{v.address}</span>
                                        </div>
                                        <div className="project-box-inner d-flex align-items-center justify-content-between px-3 py-4 ">
                                            <div className="project-inner-data d-flex align-items-center">
                                            <FontAwesomeIcon icon={faHome} className="ficon"/>
                                            <span>{v.current_status}</span>
                                            </div>
                                            <div>
                                                <button>See All</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                          </div>
                            )
                        })
                    }
                     
                             
           
                                       
            </Slider> 
            
        </div>
         :
         ""
       
       }
   </>
  )
}
