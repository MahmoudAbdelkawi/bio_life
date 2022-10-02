import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Layout
import Header from "../layout/header2";
import Footer from "../layout/footer";

// Elements
import AboutSection from "../elements/about";
import LatestNewsSection from "../elements/latest-news-slider";
import FeatureSection3 from "../elements/feature-section3";
import TeamSection from "../elements/team";
import TestimonialSection from "../elements/testimonial";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import aboutThumb1 from '../../images/about/bio-1.jpg';

class AboutUs extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white ">
					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>About Us</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">About Us</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
							<img className="pt-img2 animate2" src={circleDots} alt=""/>
							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
						</div>
					</div>
					
					<AboutSection />

					<div  style={{backgroundColor:"rgba(86, 90, 207, 0.1)" , position:"relative" , top:"16px"}}>
						<div className='container pt-5'>
							<div className="card mb-3" style={{maxWidth:" 540px;"}}>
								<div className="row g-0">
									<div className="col-md-4 py-2">
									<img src={aboutThumb1} className="img-fluid rounded-start" alt="..."/>
									</div>
									<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title my-3 text-end">Jedda Suadi Arabia</h5>
										<h5 className="card-title my-3" style={{color:"#444"}}>We offer affordable healthcare and insurance packages to our clients</h5>
										<p className="card-text text-muted">providing diagnostic and treatment services in several fields. The percentage of auditors reached 32% at the end of 2017, and in comparison, the number of auditors increased by 81% until 2021. Such as dentistry, dermatology, cosmetology, family medicine, nutrition, psychiatry and orthopedics, and the Bio Life Clinic also attracted a larger number of consultants and specialists from the medical staff, and the management of Bio Live is keen to provide the latest technology in all disciplines. The best health and treatment services were provided in accordance with international standards.</p>
										
									</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<FeatureSection3 />
					
					<TeamSection />
					
					<TestimonialSection />
					
					<LatestNewsSection />
				
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default AboutUs;