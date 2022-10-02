import React, {Component, useContext} from 'react';
import {Link} from 'react-router-dom';

// Layout
import Header from "../layout/header2";
import Footer from "../layout/footer";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

import LanguageContext from '../../context/LanguageContext';

const Booking =()=>{
	const {isEnglish} = useContext(LanguageContext)	
	
	
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>{isEnglish?"Booking" : "الحجز"}</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> {isEnglish?"Home" : "الرئيسية"}</Link></li>
											<li className="breadcrumb-item active" aria-current="page">{isEnglish?"Booking" : "الحجز"}</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
							<img className="pt-img2 animate2" src={circleDots} alt=""/>
							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
						</div>
					</div>
				
					<section className="section-area section-sp2 appointment-wraper">
						<div className="container">
							<div className="row justify-content-center" style={{direction:isEnglish?"ltr":"rtl"}}>
								<div className="col-xl-5 col-lg-6 col-md-6">
									<div className="appointment-form form-wraper">
										<h3 className="title">{isEnglish?"Book Appointment " : "موعد الحجز"}</h3>
										<form>
											<div className="form-group">
												<select className="form-select form-control">
													<option selected>{isEnglish?"Selecty Department " : "حدد القسم"}</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>
											</div>
											<div className="form-group">
												<select className="form-select form-control">
													<option selected>{isEnglish?"Select Doctor" : "حدد الدكتور"}</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>
											</div>
											<div className="form-group">
												<input type="text" className="form-control" placeholder={`${isEnglish?"Your Name" : "الاسم"}`}/>
											</div>
											<div className="form-group">
												<input type="number" className="form-control" placeholder={`${isEnglish?"Phone Numbers" : "رقم الهاتف"}`}/>
											</div>
											<div className="form-group">
												<input type="date" className="form-control"/>
											</div>
											<button type="submit" className="btn btn-secondary btn-lg">{isEnglish?"Appointment Now" : "احجز الان"}</button>
										</form>
									</div>
								</div>
							</div>					
						</div>
					</section>
					
				</div>
				
				<Footer />
				
			</>
		);
	}

export default Booking;