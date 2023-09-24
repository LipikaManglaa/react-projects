import { Link } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import project1 from "./homeimages/project1.webp";
import project2 from "./homeimages/project2.webp";
import project3 from "./homeimages/project3.webp";
import pbimg1 from "./homeimages/pbimg1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Projects.css";
import { faHome, faRoute } from "@fortawesome/free-solid-svg-icons";


export function PProjects(){
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
                                                <Link to={'/media-events'}>Projects</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">Projects</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            <section className="container-fluid py-3">
                    <div className="container">
                        <div className="row align-items-center justify-content-center position-relative project-row2 ">
                                <div className="col-lg-4 col-12 p-3 mb-5">
                                    <div className="project-col position-relative ">
                                        <img src={project1} alt="" className="img-fluid"/>
                                        <div className="pbtn position-absolute">Ready to Occupy</div>
                                        <div className="project-box position-absolute bg-white text-left rounded shadow-lg ">
                                            <div className="d-flex align-items-center px-4 py-2 gap-3">
                                                <img src={pbimg1} alt="" className="img-fluid rounded" width="60"/>
                                                <h3>AshaPurna Platinum</h3>
                                            </div>
                                            <div className="px-4">
                                            
                                            <FontAwesomeIcon icon={faRoute}/>
                                                <span>Vaishali Nagar, jaipur, Rajasthan, 302021</span>
                                            </div>
                                            <div className="project-box-inner d-flex align-items-center justify-content-between px-3 py-4 ">
                                                <div className="">
                                                <FontAwesomeIcon icon={faHome} className="ficon"/>
                                                <span>Ready to Move</span>
                                                </div>
                                                <div>
                                                    <button>See All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 p-3 mb-5">
                                    <div className="project-col position-relative">
                                        <img src={project2} alt="" className="img-fluid"/>
                                        <div className="pbtn pbtn3 position-absolute">Few Units Left</div>
                                        <div className="project-box position-absolute bg-white text-left rounded shadow-lg ">
                                            <div className="d-flex align-items-center px-4 py-2 gap-3">
                                                <img src={pbimg1} alt="" className="img-fluid rounded" width="60"/>
                                                <h3>AshaPurna Platinum</h3>
                                            </div>
                                            <div className="px-4">
                                            
                                            <FontAwesomeIcon icon={faRoute}/>
                                                <span>Vaishali Nagar, jaipur, Rajasthan, 302021</span>
                                            </div>
                                            <div className="project-box-inner d-flex align-items-center justify-content-between px-3 py-4 ">
                                                <div className="">
                                                <FontAwesomeIcon icon={faHome} className="ficon"/>
                                                <span>Ready to Move</span>
                                                </div>
                                                <div>
                                                    <button>See All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 p-3 mb-5">
                                    <div className="project-col position-relative">
                                        <img src={project3} alt="" className="img-fluid"/>
                                        <div className="pbtn pbtn2 position-absolute">Possission Soon</div>
                                        <div className="project-box position-absolute bg-white text-left rounded shadow-lg ">
                                            <div className="d-flex align-items-center px-4 py-2 gap-3">
                                                <img src={pbimg1} alt="" className="img-fluid rounded" width="60"/>
                                                <h3>AshaPurna Platinum</h3>
                                            </div>
                                            <div className="px-4">
                                            
                                            <FontAwesomeIcon icon={faRoute}/>
                                                <span>Vaishali Nagar, jaipur, Rajasthan, 302021</span>
                                            </div>
                                            <div className="project-box-inner d-flex align-items-center justify-content-between px-3 py-4 ">
                                                <div className="">
                                                <FontAwesomeIcon icon={faHome} className="ficon"/>
                                                <span>Ready to Move</span>
                                                </div>
                                                <div>
                                                    <button>See All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 p-3 mb-5">
                                    <div className="project-col position-relative ">
                                        <img src={project1} alt="" className="img-fluid"/>
                                        <div className="pbtn position-absolute">Ready to Occupy</div>
                                        <div className="project-box position-absolute bg-white text-left rounded shadow-lg ">
                                            <div className="d-flex align-items-center px-4 py-2 gap-3">
                                                <img src={pbimg1} alt="" className="img-fluid rounded" width="60"/>
                                                <h3>AshaPurna Platinum</h3>
                                            </div>
                                            <div className="px-4">
                                            
                                            <FontAwesomeIcon icon={faRoute}/>
                                                <span>Vaishali Nagar, jaipur, Rajasthan, 302021</span>
                                            </div>
                                            <div className="project-box-inner d-flex align-items-center justify-content-between px-3 py-4 ">
                                                <div className="">
                                                <FontAwesomeIcon icon={faHome} className="ficon"/>
                                                <span>Ready to Move</span>
                                                </div>
                                                <div>
                                                    <button>See All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 p-3 mb-5">
                                    <div className="project-col position-relative">
                                        <img src={project2} alt="" className="img-fluid"/>
                                        <div className="pbtn pbtn3 position-absolute">Few Units Left</div>
                                        <div className="project-box position-absolute bg-white text-left rounded shadow-lg ">
                                            <div className="d-flex align-items-center px-4 py-2 gap-3">
                                                <img src={pbimg1} alt="" className="img-fluid rounded" width="60"/>
                                                <h3>AshaPurna Platinum</h3>
                                            </div>
                                            <div className="px-4">
                                            
                                            <FontAwesomeIcon icon={faRoute}/>
                                                <span>Vaishali Nagar, jaipur, Rajasthan, 302021</span>
                                            </div>
                                            <div className="project-box-inner d-flex align-items-center justify-content-between px-3 py-4 ">
                                                <div className="">
                                                <FontAwesomeIcon icon={faHome} className="ficon"/>
                                                <span>Ready to Move</span>
                                                </div>
                                                <div>
                                                    <button>See All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 p-3 mb-5">
                                    <div className="project-col position-relative">
                                        <img src={project3} alt="" className="img-fluid"/>
                                        <div className="pbtn pbtn2 position-absolute">Possission Soon</div>
                                        <div className="project-box position-absolute bg-white text-left rounded shadow-lg ">
                                            <div className="d-flex align-items-center px-4 py-2 gap-3">
                                                <img src={pbimg1} alt="" className="img-fluid rounded" width="60"/>
                                                <h3>AshaPurna Platinum</h3>
                                            </div>
                                            <div className="px-4">
                                            
                                            <FontAwesomeIcon icon={faRoute}/>
                                                <span>Vaishali Nagar, jaipur, Rajasthan, 302021</span>
                                            </div>
                                            <div className="project-box-inner d-flex align-items-center justify-content-between px-3 py-4 ">
                                                <div className="">
                                                <FontAwesomeIcon icon={faHome} className="ficon"/>
                                                <span>Ready to Move</span>
                                                </div>
                                                <div>
                                                    <button>See All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
            </section>
        <Footer/>
        </>
    )
}