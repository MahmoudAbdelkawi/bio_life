import React, {Component, useContext} from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
// Layout
import Header from "../layout/header2";
import Footer from "../layout/footer";

import testPic4 from "../../images/testimonials/pic4.jpg"
import testPic5 from "../../images/testimonials/pic5.jpg"
import blogGridPic1 from "../../images/blog/grid/pic1.jpg"
import blogGridPic2 from "../../images/blog/grid/pic2.jpg"
import blogGridPic3 from "../../images/blog/grid/pic3.jpg"
import blogGridPic4 from "../../images/blog/grid/pic4.jpg"
import blogGridPic5 from "../../images/blog/grid/pic5.jpg"
// Elements
import FeatureSection3 from "../elements/feature-section3";
import TeamSection from "../elements/team";
import LatestNewsSection from "../elements/latest-news-slider";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import aboutThumb1 from '../../images/about/bio-1.jpg';
import aboutThumb2 from '../../images/about/bio-2.jpg';
import aboutThumb3 from '../../images/about/bio-3.jpg';
import LanguageContext from '../../context/LanguageContext';




const Offers =()=> {
	
	const {isEnglish} = useContext(LanguageContext)	
	const content = [
		{ 
			thumb: blogGridPic1,
			authorPic: aboutThumb1,
			author:isEnglish ? "khaled Halawani" : "خالد حلواني",
			title:isEnglish ? "Can you get a diflucan prescription online?" : "هل يمكنك الحصول على وصفة طبية ديفلوكان على الإنترنت؟",		
			date: "21 July 2021",
		},
		{ 
			thumb: blogGridPic2,
			authorPic: aboutThumb2,
			author: isEnglish ?"Peter Packer":"بيتر باكر",
			title: isEnglish ?"Can you get a diflucan prescription online?":"هل يمكنك الحصول على وصفة طبية ديفلوكان على الإنترنت؟",		
			date: "20 July 2021",
		},
		{ 
			thumb: blogGridPic3,
			authorPic: aboutThumb3,
			author:isEnglish? "Sonar Moyna" :"سونار موينا",
			title:isEnglish ? "Why Is Skin Surgeon Considered Underrated":"لماذا يعتبر جراح الجلد الاستخفاف",		
			date: "19 July 2021",
		},
		{ 
			thumb: blogGridPic4,
			authorPic: testPic4,
			author: isEnglish ?"Kalina Mollika":"كالينا موليكا",
			title:isEnglish ? "Dental Care for Women is very important":"العناية بالأسنان للنساء مهمة جدا",		
			date: "18 July 2021",
		},
		{ 
			thumb: blogGridPic5,
			authorPic: testPic5,
			author: isEnglish ?"Michel":"مايكل",
			title: isEnglish ?"Health Will Be A Thing Of The Past And Here's Why":"ستكون الصحة شيئًا من الماضي وإليك السبب",		
			date: "17 July 2021",
		},
	]

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
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1> {isEnglish?"Offers":"العروض"}</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> {isEnglish?"Home":"الرئيسية"}</Link></li>
											<li className="breadcrumb-item active" aria-current="page">{isEnglish?"Offers":"العروض"}</li>
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
							<div className="row">
							
							{content.map((item) =>(
								<div className="slider-item col-lg-4 col-md-6 mb-30">
									<div className="blog-card" style={{direction:isEnglish?"ltr":"rtl"}}>
										<div className="post-media">
											<Link ><img src={item.thumb} alt=""/></Link>
										</div>
										<div className="post-info">
											<ul className="post-meta">
												<li className="author"><Link ><img src={item.authorPic} alt=""/>{item.author}</Link></li>
												<li className="date"><i className="far fa-calendar-alt"></i>{item.date}</li>
											</ul>
											<h5 className="post-title"><Link >{item.title}</Link></h5>		
											<p className="">this is offer one </p>		
											<Link to="/booking" className="btn btn-outline-primary btn-sm"> {isEnglish? "Order Now":"اطلب الان"}<i className={`btn-icon-bx fas ${isEnglish ? "fa-chevron-right" : "fa-chevron-left"}`} style={{margin :isEnglish? "0 0 0 10px":"0 10px 0 0"}}></i></Link>
											<span className='ms-4 text-decoration-line-through'>3500</span> <span>2500$</span>
										</div>
									</div>	
								</div>
							))}						

							</div>	
						</div>
					</section>
					
					<FeatureSection3 />
					
					<TeamSection />
					
					<LatestNewsSection />
					
				</div>
				
				<Footer />
				
			</>
		);
	}


export default Offers;