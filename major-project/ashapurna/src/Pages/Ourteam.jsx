import { Link } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import "./Ourteam.css";
import teamimg from "./ourteamimages/organization-chart3.jpg";
import axios from "axios";
import { ApiBaseUrl } from "../API/ApiBaseUrl";
import { useEffect, useState } from "react";

export function Ourteam(){

    let [teamData,setTeamData]=useState([])
    let[getOurTeamData,setGetOurTeam]=useState([])
    let getTeamData=()=>{
        let apiurl=ApiBaseUrl+'web/about-us/our-team'
        axios.post(apiurl)
        .then((res)=>res.data)
       
        .then((finalData)=>{
          
            setTeamData(finalData._data.getOurTeamPageContent)
            setGetOurTeam([finalData._data.getOurTeams,finalData._data.our_team_image_path])
        })
    }

useEffect(()=>{
    getTeamData()
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
                                                <Link to={'/our-team'}>Our Team</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">Our Team</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Get team section start here */}
        {
            getOurTeamData.length>=1
        }
        <section className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-3">
                        <div className="our-team text-center py-5">
                            <h2 className="hcolor">{teamData.title}</h2>
                            <p className="pcolor" dangerouslySetInnerHTML={{__html:teamData.description}}></p>
                       
                            <img src={teamimg} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}