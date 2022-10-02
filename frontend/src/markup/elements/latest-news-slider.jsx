import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import lingBg2 from "../../images/background/line-bg2.png"
import animate1 from "../../images/shap/trangle-orange.png"
import animate2 from "../../images/shap/square-dots-orange.png"
import animateRotate from "../../images/shap/line-circle-blue.png"
import animateWave from "../../images/shap/wave-blue.png"
import testPic1 from "../../images/testimonials/pic1.jpg"
import testPic2 from "../../images/testimonials/pic2.jpg"
import testPic3 from "../../images/testimonials/pic3.jpg"
import testPic4 from "../../images/testimonials/pic4.jpg"
import testPic5 from "../../images/testimonials/pic5.jpg"
import blogGridPic1 from "../../images/blog/grid/pic1.jpg"
import blogGridPic2 from "../../images/blog/grid/pic2.jpg"
import blogGridPic3 from "../../images/blog/grid/pic3.jpg"
import blogGridPic4 from "../../images/blog/grid/pic4.jpg"
import blogGridPic5 from "../../images/blog/grid/pic5.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask, faFlaskVial, faTruck, faTruckMedical, faUserNurse } from '@fortawesome/free-solid-svg-icons';



// Team Content
const content = [
	{ 
		thumb: blogGridPic1,
		authorPic: testPic1,
		author: "John deo",
		title: "Can you get a diflucan prescription online?",		
		date: "21 July 2021",
	},
	{ 
		thumb: blogGridPic2,
		authorPic: testPic2,
		author: "Peter Packer",
		title: "Can you get a diflucan prescription online?",		
		date: "20 July 2021",
	},
	{ 
		thumb: blogGridPic3,
		authorPic: testPic3,
		author: "Sonar Moyna",
		title: "Why Is Skin Surgeon Considered Underrated",		
		date: "19 July 2021",
	},
	{ 
		thumb: blogGridPic4,
		authorPic: testPic4,
		author: "Kalina Mollika",
		title: "Dental Care for Women is very important",		
		date: "18 July 2021",
	},
	{ 
		thumb: blogGridPic5,
		authorPic: testPic5,
		author: "Michel",
		title: "Health Will Be A Thing Of The Past And Here's Why",		
		date: "17 July 2021",
	},
]

class LatestNewsSection extends Component{
	render(){
			
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1191,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				
				<section className="section-area section-sp1 blog-area" style={{backgroundImage: "url("+lingBg2+")", backgroundPosition: "center", backgroundSize: "cover",}}>
					<div className="container">
						<div className="heading-bx text-center">
							<h6 className="title-ext text-secondary">Latest News</h6>
							<h2 className="title">Our Latest News</h2>
						</div>
						<Slider {...settings} className="tt-slider blog-slide slider-sp0 slick-arrow-none">
							{content.map((item) =>(
								<div className="slider-item">
									<div className="blog-card">
										<div className="post-media">
											<Link to="/blog-details"><img src={item.thumb} alt=""/></Link>
										</div>
										<div className="post-info">
											<ul className="post-meta">
												<li className="author"><Link to="/blog-details"><img src={item.authorPic} alt=""/>{item.author}</Link></li>
												<li className="date"><i className="far fa-calendar-alt"></i>{item.date}</li>
											</ul>
											<h5 className="post-title"><Link to="/blog-details">{item.title}</Link></h5>		
											<Link to="/blog-details" className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
										</div>
									</div>	
								</div>
							))}						
						</Slider>
					</div>
					<img className="pt-img1 animate1" src={animate1} alt=""/>
					<img className="pt-img2 animate2" src={animate2} alt=""/>
					<img className="pt-img3 animate-rotate" src={animateRotate} alt=""/>
					<img className="pt-img4 animate-wave" src={animateWave} alt=""/>
				</section>
				<section className="container">
						
									<section className=" row">
										<div  className="tt-slider blog-slide slider-sp0 slick-arrow-none col-12 col-lg-4  mb-5 col-md-6">
												<div className="">
													<div className="blog-card" style={{display:"flex" , gap:'20px'}}>
														<div>
															<Link to="/blog-details">{/* <img src={item.thumb} alt=""/> */}
																{/* <i className="fa-sharp fa-solid fa-truck-medical bg-blue-400 border-black rounded-circle" style={{padding:"30px",fontSize:"35px	"}}></i> */}
																<FontAwesomeIcon className=" bg-blue-400 border-black rounded-circle" icon={faTruckMedical} style={{padding:"15px",fontSize:"35px	"}} />
															</Link>
														</div>
														<div>
															
															<h5 className="post-title ms-4"><Link to="/blog-details">Services for 12 hours</Link></h5>		
															<p style={{fontSize:"15px", marginLeft:"20px"}}>For speed and ease of access</p>
														</div>
													</div>	
												</div>	
										</div>
										<div  className="tt-slider blog-slide slider-sp0 slick-arrow-none col-12 col-lg-4  mb-5 col-md-6">
												<div className="">
													<div className="blog-card" style={{display:"flex" , gap:'20px' }}>
														<div>
															<Link to="/blog-details" style={{zIndex:"15"}}>{/* <img src={item.thumb} alt=""/> */}
																{/* <i className="fa-solid fa-flask-vial bg-blue-400 border-black rounded-circle" style={{padding:"30px",fontSize:"35px",zIndex:"15"}}></i> */}
																<FontAwesomeIcon className=" bg-blue-400 border-black rounded-circle" icon={faFlaskVial} style={{padding:"15px",fontSize:"35px"}} />
															</Link>
														</div>
														<div  >
															
															<h5 className="post-title ms-4"><Link to="/blog-details" style={{zIndex:"-1",fontSize:"16px"}}>Completed services</Link></h5>		
															<p style={{fontSize:"15px", marginLeft:"20px" ,zIndex:"-1"}}>Effective and comprehensive laboratory services</p>
															
														</div>
													</div>	
												</div>	
										</div>
										<div  className="tt-slider blog-slide slider-sp0 slick-arrow-none col-12 col-lg-4  mb-5 col-md-6">
												<div className="">
													<div className="blog-card" style={{display:"flex" , gap:'20px'}}>
														<div>
															<Link to="/blog-details">{/* <img src={item.thumb} alt=""/> */}
															

																{/* <i className="fa-solid fa-user-nurse bg-blue-400 border-black rounded-circle" style={{padding:"30px",fontSize:"35px	"}}></i> */}
																<FontAwesomeIcon className=" bg-blue-400 border-black rounded-circle" icon={faUserNurse} style={{padding:"15px",fontSize:"35px"}} />

															</Link>
														</div>
														<div>
															
															<h5 className="post-title ms-4"><Link to="/blog-details">medical professionals</Link></h5>		
															<p style={{fontSize:"15px", marginLeft:"20px"}}>Qualified and Certified Doctors</p>
															
														</div>
													</div>	
												</div>	
										</div>
									</section>
				</section>
			</>
		);
	}
}

export default LatestNewsSection;