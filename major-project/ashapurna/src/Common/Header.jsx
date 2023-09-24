import logoheader from './images/logoheader.webp';
import { Link, useLocation } from 'react-router-dom';
import { Contact } from '../Pages/Contact';
import modalimg from "./images/modalimg.jpg";
import './Header.css';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import EnquirySave from '../API/EnquirySave';
export function Header(){



	const[data,setData]=useState({
		uname:"",
		usname:"",
		uemail:"",
		uphone:"",
		
	})
	
	let InputData=(e)=>{
		console.log(e.target.name,e.target.value)
		setData({...data,[e.target.name]:e.target.value})
	}
	
	let handleSubmit=((e)=>{
	e.preventDefault()
	
	EnquirySave(data)
	setData({
		uname:"",
		usname:"",
		uemail:"",
		uphone:"",
	})
	})

	let url=useLocation();
	let path=url.pathname;
	useEffect(()=>{
			window.scrollTo({
				top:0,
				behavior:'smooth'
			})
	},[path]);
	let [modal,setModal]=useState(false);
	
	let showModal=()=>{
		setModal(!modal);
	  }
	 
    return(
        <>
            
          
		<header className="container-fluid">
            <div className="container">
			<nav className="navbar navbar-expand-lg  navbar-light align-items-center">
				<Link className="navbar-brand" to="#">
					<img src={logoheader} height="130" alt="" className="position-absolute top-0 hlogo"/>
				</Link>
				<button className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
      				<span className="navbar-toggler-icon"></span>
    			</button>
				<div className="collapse navbar-collapse justify-content-end menu" id="menubar">
					<ul className="navbar-nav align-items-lg-center text-uppercase">
						<li className="nav-item">
                            <Link className="nav-link" to={'/'}>Home</Link>
						</li>
						<li className="nav-item dropdown" >
                            <Link className="nav-link dropdown-toggle" to={'#'} data-bs-toggle="dropdown" aria-expanded="false">About Us</Link>
							<ul className='dropdown-menu px-3 py-0 my-0'>
								<li>
									<Link className="dropdown-item" to={'/about-us'}>About-us</Link>
								</li>
								<li>
									<Link className="dropdown-item" to={'/our-journey'}>Our Journey</Link>
								</li>
								<li>
									<Link className="dropdown-item" to={'/management-speaks'}>Management Speaks</Link>
								</li>
								<li>
									<Link className="dropdown-item" to={'/our-team'}>Our Team</Link>
								</li>
								<li>
									<Link className="dropdown-item" to={'/social-responsibility'}>CSR Social Responsilbility</Link>
								</li>
								<li>
									<Link className="dropdown-item" to={'/news-letter'}>News Letter</Link>
								</li>
								<li>
									<Link className="dropdown-item" to={'/nri-corner'}>NRI Corner</Link>
								</li>
								<li>
									<Link className="dropdown-item" to={'/why-invest'}>Why Invest in Jodhpur</Link>
								</li>
								<li>
									<Link className="dropdown-item" to={'#'}>Corporate Profile</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to={'#'} data-bs-toggle="dropdown" aria-expanded="false">Projects</Link>
							<ul className='dropdown-menu py-0 my-0'>
								<li>
									<Link className="dropdown-item" to={'/projects'}>Residential</Link>
								</li>
								<li>
									<Link className="dropdown-item" to={'#'}>Commercial</Link>
								</li>
								<li>
									<Link className="dropdown-item" to={'#'}>Rental & Lease</Link>
								</li>
								<li>
									<Link className="dropdown-item" to={'#'}>Hospitality</Link>
								</li>
								<li>
									<Link className="dropdown-item" to={'#'}>Education</Link>
								</li>
								<li>
									<Link className="dropdown-item" to={'#'}>Windmills</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item">
                            <Link className="nav-link" to={'/media-events'}>Media and Events</Link>
						</li>
						<li className="nav-item">
                            <Link className="nav-link" to={'/blogs'}>Blogs</Link>
						</li>
						<li className="nav-item">
                            <Link className="nav-link" to={'/contact-us'}>Contact Us</Link> 
						</li>
                        <li className="nav-item">
                            <button className="ebtn" onClick={showModal}>Enquire</button>
                        </li>
						
					</ul>
				</div>
            </nav>
            </div>
            <div className="offcanvas offcanvas-start" id="offcanvasExample">
  				<div className="offcanvas-header">
  					<a className="navbar-brand" href="#">
	  		    		<img src={logoheader} height="130"/>
	  		    	</a>
  					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  				</div>
  				<div className="offcanvas-body">
                  <ul className="navbar-nav align-items-lg-center text-uppercase ">
						<li className="nav-item">
                            <Link to={'/about-us'}>About Us</Link>
						</li>
						<li className="nav-item">
                            <Link className="nav-link" to={'/'}>Home</Link>
						</li>
						<li className="nav-item">
                            <Link className="nav-link" to={'/about-us'}>About Us</Link>
						</li>
						<li className="nav-item">
                            <Link className="nav-link" to={'/projects'}>Projects</Link>
						</li>
						<li className="nav-item">
                            <Link className="nav-link" to={'/media-events'}>Media & Events</Link>
						</li>
						<li className="nav-item">
                            <Link className="nav-link" to={'/blogs'}>Blogs</Link>
						</li>
						<li className="nav-item">
                            <Link className="nav-link" to={'/contact-us'}>Contact Us</Link> 
						</li>
						
					</ul>
  				</div>
  			</div>

		</header>
	
		<div className={`enq-modal ${(modal===true)?"show":""}` }>
			<div className='container p-0'>
				<div className='row shadow-lg modal1 justify-content-center'>
					<div className='col-lg-5 col-6 modal-img'>
						<img src={modalimg} className='img-fluid' alt=""/>
					</div>
					<div className='col-lg-7 col-6 modal-info'>
						<div className='position-relative px-2 py-2'>
							<h2>Enquire Now</h2>
							<p>Feel free to connect with us. We will contact with you shortly.</p>
							<button className="position-absolute closebtn fw-400 bg-transparent border-0" onClick={showModal}><span className=''>&times;</span></button>
						</div>
						
						<div className='modal-form p-3'>
							<form className="row mb-3 formHandling" onSubmit={handleSubmit} >
									<div className="col-md-6 p-3" key="index" >
										<input required placeholder="First Name" type="text" name="uname" value={data.uname} onChange={InputData}  />
									</div>
									<div className="col-md-6 p-3" key="index">
										<input required placeholder="Last Name" type="tel" name="usname" value={data.usname} onChange={InputData} />
									</div>
									<div className="col-md-6 p-3" key="index">
										<input required placeholder="E-mail" type="email" name="uemail" value={data.uemail} onChange={InputData}/>
									</div> 
									<div className="col-md-6 p-3" key="index">
										<input required placeholder="Phone" type="tel" name="uphone" value={data.uphone} onChange={InputData}/>
									</div>
													
									<div className="text-end mt-4">
										<button className="btn px-4 py-3 btn-outline-dark btns" type="submit" value="Send Message"  >Submit</button>
									</div>
							</form>
						</div>
					</div>
				</div>
				</div>
		</div>


	</>
    )
}