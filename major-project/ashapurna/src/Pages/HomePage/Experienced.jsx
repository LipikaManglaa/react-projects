import React, { useState } from 'react'
import counter1 from "./../aboutimages/happy.svg";
import counter2 from "./../aboutimages/villas.svg";
import counter3 from "./../aboutimages/units.svg";
import counter4 from "./../aboutimages/happy.svg";
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";
import { counter } from '@fortawesome/fontawesome-svg-core';

export default function () {
    let[counter,setCounter]=useState('false');
  return (
    <>
          <div className="row">
                <div className="col-lg-3 col-6 p-3">
                    <div className="counter-info-box py-3">
                            <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{width:"70px", height:"70px"}}>
                                <img alt="" src={counter1} className=" img-fluid"/>
                            </div>
                            <div className="text-white text-center">
                                <span className="scolor pt-2">
                                    
                                    <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                                                {counter && <CountUp end={26000} duration={2}/>}+
                                    </ScrollTrigger>
                                </span>
                                <h4 className="text-capitalize pt-2">Happy Families</h4>
                            </div>
                                            
                           

                        </div>
                    </div>
                    <div className="col-lg-3 col-6 p-3">
                    <div className="counter-info-box py-3">
                            <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{width:"70px", height:"70px"}}>
                                <img alt="" src={counter2} className=" img-fluid"/>
                            </div>
                            <div className="text-white text-center">
                                <span className="scolor pt-2">
                                    
                                    <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                                                {counter && <CountUp end={40} duration={2}/>}+
                                    </ScrollTrigger>
                                </span>
                                <h4 className="text-capitalize pt-2">Projects Completed</h4>
                            </div>
                                            
                           

                        </div>
                    </div>
                    <div className="col-lg-3 col-6 p-3">
                    <div className="counter-info-box py-3">
                            <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{width:"70px", height:"70px"}}>
                                <img alt="" src={counter3} className=" img-fluid"/>
                            </div>
                            <div className="text-white text-center">
                                <span className="scolor pt-2">
                                    
                                    <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                                                {counter && <CountUp end={11000} duration={2}/>}+
                                    </ScrollTrigger>
                                </span>
                                <h4 className="text-capitalize pt-2">Units</h4>
                            </div>
                                            
                           

                        </div>
                    </div>
                    <div className="col-lg-3 col-6 p-3">
                    <div className="counter-info-box py-3">
                            <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{width:"70px", height:"70px"}}>
                                <img alt="" src={counter4} className=" img-fluid"/>
                            </div>
                            <div className="text-white text-center">
                                <span className="scolor pt-2">
                                    
                                    <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                                                {counter && <CountUp end={26} duration={2}/>}+
                                    </ScrollTrigger>
                                </span>
                                <h4 className="text-capitalize pt-2">Years of Experience</h4>
                            </div>
                                            
                           

                        </div>
                    </div>
                    
                </div></>
  )
}
