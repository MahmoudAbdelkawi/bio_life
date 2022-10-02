import React, {Component} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Accordion} from 'react-bootstrap';

// Layout
import Header from "../layout/header2";
import Footer from "../layout/footer";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import servicesPic1 from "../../images/services/pic1.jpg";
import pdf from "../../images/icon/pdf.png";
import doc from "../../images/icon/doc.png";
import { useState } from 'react';
import { useEffect } from 'react';

import { getMember } from "../../services/membersServices";



import teamMember1 from "../../images/team/member1.jpg";




const DoctorDetails = () => {
	
    const [member, setMember] = useState([]);
	let { id } = useParams();
	const PF = "https://biollife.herokuapp.com/uploads/";
  
	useEffect(() => {
	  async function get() {
		const memberResult = await getMember(id);
		setMember(memberResult.data);
        console.log(memberResult.data)
	  }
	  get();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);


		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Doctor Details</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</a></li>
											<li className="breadcrumb-item active" aria-current="page">Doctor Details</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
							<img className="pt-img2 animate2" src={circleDots} alt=""/>
							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
						</div>
					</div>
					
					<section className="section-area section-sp1">
						<div className="container">
							
                            
                        <div className="card mb-3 p-3 w-100" style={{border: '2px solid rgba(86, 90, 207, 0.2)'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={teamMember1} className="img-fluid rounded-start h-100" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Dr Khaled</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        {/* <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        <ul className='card-text'>
        <li className='text-muted'><i className="far fa-clock me-1"></i> from 9:00 to 5:00 </li>
            <li className='text-muted'><i className="fas fa-calendar-day me-1"></i> from mon to fri </li>
        </ul>
        <Link to="/booking">
        <button className='btn' style={{position:'absolute' , bottom:'20px' , right:'20px' , backgroundColor:"#565acf" , color:'#fff'}}>Reserve Now</button>
        </Link>
      </div>
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

export default DoctorDetails;