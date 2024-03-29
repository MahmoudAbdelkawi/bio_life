import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import { getDepartments } from "../../services/membersServices";
// Import Images
import lineCircleBlue from "../../images/shap/line-circle-blue.png";
import squareDotsOrange from "../../images/shap/square-dots-orange.png";
import waveBlue from "../../images/shap/wave-blue.png";
import squareRotate from "../../images/shap/square-rotate.png";

// import icons
import Icon1 from '../../images/icon/cardiology.png'
import { useEffect } from 'react';
import { useState } from 'react';


const ServicesSliderSection = ()  => {
	const [departments, setDepartments] = useState([]);
	useEffect(() => {
	  async function get() {
		const departmentResult = await getDepartments();
		setDepartments(departmentResult.data);
		console.log(departmentResult.data)
	  }
	  get();
	}, []);
			
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 591,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				
				<section className="section-area section-sp1 service-wraper">
					<div className="row align-items-center">
						<div className="col-xl-4 col-lg-7 mb-30">	
							<div className="heading-bx">
								<h6 className="title-ext text-secondary">Services</h6>
								<h2 className="title">We Cover A Big Variety Of Medical Services</h2>
								<p>We provide the special tips and advice’s of heath care treatment and high level of best.</p>
							</div>
							<Link to="/services" className="btn btn-secondary btn-lg shadow">All Services</Link>
						</div>
						<div className="col-xl-8 mb-15">	
							<Slider {...settings} className="service-slide slick-arrow-none">
								{departments.map(department=>(<div className="slider-item">
									<div className="feature-container feature-bx2 feature1">
										<div className="feature-box-xl mb-30">
											<span className="icon-cell">
												<svg enable-background="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg">	
													<path d="m218.578 512c-29.085 0-52.748-23.656-52.748-52.734v-102.154c0-5.522 4.477-10 10-10s10 4.478 10 10v102.153c0 18.05 14.69 32.734 32.748 32.734s32.748-14.685 32.748-32.734v-116.18c0-20.084 16.343-36.423 36.432-36.423s36.432 16.339 36.432 36.423v59.66c0 24.042 19.567 43.602 43.619 43.602s43.619-19.56 43.619-43.602v-170.256c0-5.522 4.477-10 10-10s10 4.478 10 10v170.256c0 35.07-28.54 63.602-63.619 63.602s-63.619-28.531-63.619-63.602v-59.66c0-9.056-7.371-16.423-16.432-16.423s-16.432 7.367-16.432 16.423v116.181c0 29.078-23.663 52.734-52.748 52.734z" fill="#020288"/>
													<ellipse cx="175.83" cy="336.898" fill="#b2f0fb" rx="30.275" ry="30.265"/>
													<path d="m317.745 103.718h-10.12v-78.989c0-5.522-4.477-10-10-10h-55.743v-4.729c0-5.522-4.477-10-10-10s-10 4.478-10 10v29.456c0 5.522 4.477 10 10 10s10-4.478 10-10v-4.728h45.743v68.989h-10.119c-5.523 0-10 4.478-10 10v47.531c0 50.532-41.126 91.644-91.677 91.644-50.55 0-91.676-41.111-91.676-91.644v-47.531c0-5.522-4.477-10-10-10h-10.119v-68.988h45.743v4.728c0 5.522 4.477 10 10 10s10-4.478 10-10v-29.457c0-5.522-4.477-10-10-10s-10 4.478-10 10v4.729h-55.743c-5.523 0-10 4.478-10 10v78.989h-10.119c-5.523 0-10 4.478-10 10v47.531c0 83.741 68.149 151.869 151.915 151.869s151.915-68.128 151.915-151.869v-47.531c0-5.523-4.477-10-10-10zm-10 57.531c0 72.713-59.177 131.869-131.915 131.869s-131.915-59.156-131.915-131.869v-37.531h20.238v37.531c0 61.561 50.098 111.644 111.676 111.644s111.677-50.083 111.677-111.644v-37.531h20.239z" fill="#020288"/>
													<ellipse cx="421.426" cy="170.539" fill="#b2f0fb" rx="66.659" ry="66.637"/>
													<path d="m421.427 202.534c-17.646 0-32.001-14.353-32.001-31.995s14.356-31.994 32.001-31.994 32.001 14.353 32.001 31.994c0 17.643-14.356 31.995-32.001 31.995zm0-43.989c-6.618 0-12.001 5.381-12.001 11.994 0 6.614 5.384 11.995 12.001 11.995s12.001-5.381 12.001-11.995c0-6.613-5.384-11.994-12.001-11.994z" fill="#020288"/>
												</svg>
											
												
											</span> 
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">{department.name}</h3>
											<p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
											<Link to="/service-detail" className="btn btn-primary light">View More</Link>
										</div>
									</div>
								</div>))}
							
							
							</Slider>
						</div>	 
					</div>
					<img className="pt-img1 animate-rotate" src={lineCircleBlue} alt=""/>
					<img className="pt-img2 animate2" src={squareDotsOrange} alt=""/>
					<img className="pt-img3 animate-wave" src={waveBlue} alt=""/>
					<img className="pt-img4 animate1" src={squareRotate} alt=""/>
				</section>
				
			</>
		);
	
}

export default ServicesSliderSection;