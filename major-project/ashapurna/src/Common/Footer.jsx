import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import flogo from "./images/flogo.svg";
import { faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faFacebook, faFacebookF, faInstagram, faInstagramSquare, faLinkedin, faLinkedinIn, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { ApiBaseUrl } from '../API/ApiBaseUrl';
import axios from 'axios';
export function Footer(){
    let [conatctData,setContactData]=useState([])
    let [disclaimerGetData,setDisclaimerData]=useState([])
let[footerlogo,setFooterLogo]=useState([])
    let getContactData=()=>{
        let apiurl=ApiBaseUrl+'web/common-content'
        axios.post(apiurl)
        .then((res)=>res.data)
       
        .then((finalData)=>{
            console.log(finalData)
            setContactData(finalData._data.configurations)
            setDisclaimerData(finalData._data.getDisclaimer)
            setFooterLogo([finalData._data.company_image_path,finalData._data.getCompanyInfo.company_logo])
        })
    }


useEffect(()=>{
    getContactData()
},[])
    return(
        <>
        <footer className='container-fluid'>
            <div className='container'>
                <div className='row footer-row1'>
                    <div className='col-lg-4 p-3'>
                        <div className='footer-left p-2'>
                           <img src={footerlogo[0]+footerlogo[1]} alt="" className='img-fluid  mb-4' width={120} />
                            <div className='d-flex align-items-start mb-2'>
                                <div className='ficon'>
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className='fcontact'>
                                    <p>9314041747 <br/>
                                    0291-2514747, 9610383747</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-start mb-3'>
                                <div className='ficon'>
                                    <FontAwesomeIcon icon={faMessage} />
                                </div>
                                <div className='fcontact pt-2'>
                                    <p>marketing@ashapurna.com</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-start mb-2'>
                                <div className='ficon'>
                                    <FontAwesomeIcon icon={faMessage} />
                                </div>
                                <div className='fcontact '>
                                    <p>Circuit House Road, Opposite LIC Office ,Jodhpur, Rajasthan 342006</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div className='footer-right p-2'>
                            <div className='footer-right-links mb-3 mt-2'>
                                <div className='position-relative'>
                                    <h2>Useful Links</h2>
                                    <div className='position-absolute fleft'></div>
                                    <div className='position-absolute fright'></div>
                                </div>
                                
                                <Link>Residential Projects</Link>
                                <Link>Commercial Projects</Link>
                                <Link>Investors Club</Link>
                                <Link>NRI Corner</Link>
                                <Link>Carrer</Link>
                                <Link>Become A Partner</Link>
                                <Link>Our Testimonials</Link>
                                <Link>Privacy Policy</Link>
                                <Link>Terms & Conditions</Link>
                               
                            </div>
                            <div className='footer-right-links'>
                                <div className='position-relative'>
                                    <h2>Important Links</h2>
                                    <div className='position-absolute fleft'></div>
                                    <div className='position-absolute fright'></div>
                                </div>
                                
                                <Link>Residential Projects</Link>
                                <Link>Commercial Projects</Link>
                                <Link>Investors Club</Link>
                                <Link>NRI Corner</Link>
                                <Link>Carrer</Link>
                                <Link>Become A Partner</Link>
                                <Link>Our Testimonials</Link>
                                <Link>Privacy Policy</Link>
                                <Link>Terms & Conditions</Link>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row footer-row2 text-center'>
                    <h3>Follow Us On</h3>
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='sicon d-flex justify-content-center align-items-center'>
                         <Link to={conatctData.facebook_link}>   <FontAwesomeIcon icon={faFacebookF} className='icon'/>
                  </Link>      </div>
                        <div className='sicon d-flex justify-content-center align-items-center'>
                        <Link to={conatctData.instagram_link}>  <FontAwesomeIcon icon={faInstagramSquare} className='icon'/>
                      </Link>  </div>
                        <div className='sicon d-flex justify-content-center align-items-center'>
                        <Link to={conatctData.youtube_link}>  <FontAwesomeIcon icon={faYoutube} className='icon'/>
                       </Link> </div>
                        <div className='sicon d-flex justify-content-center align-items-center'>
                        <Link to={conatctData.twitter_link}>     <FontAwesomeIcon icon={faTwitter} className='icon'/>
                     </Link>   </div>
                        <div className='sicon d-flex justify-content-center align-items-center'>
                        <Link to={conatctData.pinterest_link}>  <FontAwesomeIcon icon={faPinterest} className='icon'/>
                        </Link></div>
                        <div className='sicon d-flex justify-content-center align-items-center'>
                        <Link to={conatctData.linkedin_link}>   <FontAwesomeIcon icon={faLinkedinIn} className='icon'/>
                     </Link>   </div>
                    </div>
                </div>
                
            </div>
        </footer>
        <div className='container-fluid footer2'>
            <div className='container'>
                <div className='row'>
                <div className='row footer-row3'>
                    <div className='footer-row3-links text-center'>
                                <Link>Residential Projects</Link>
                                <Link>Commercial Projects</Link>
                                <Link>Investors Club</Link>
                                <Link>NRI Corner</Link>
                                <Link>Carrer</Link>
                                <Link>Become A Partner</Link>
                                <Link>Our Testimonials</Link>
                                <Link>Privacy Policy</Link>
                                <Link>Terms & Conditions</Link>
                                <Link>NRI Corner</Link>
                                <Link>Carrer</Link>
                                <Link>Become A Partner</Link>
                                <Link>Our Testimonials</Link>
                                <Link>Privacy Policy</Link>
                                <Link>Commercial Projects</Link>
                                <Link>Investors Club</Link>
                                <Link>NRI Corner</Link>
                    </div>
                    <hr class="divider-line-2 mx-lg-auto"/>
                    <div className='footer-row3-info'>
                        <p dangerouslySetInnerHTML={{__html:disclaimerGetData.description}}></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className='container-fluid footer3'>
            <div className='container'>
                <div className='row'>
                    <div className='footer-bottom d-flex justify-content-between align-items-center pt-3'>
                        <p>Copyright © 2022 Ashapurna Buildcon Limited</p>
                        <p>Design and Developed by WsCube Tech</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}