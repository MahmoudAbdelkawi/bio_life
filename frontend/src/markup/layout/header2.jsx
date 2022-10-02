import React, { Component, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import logo from '../../images/logo.png';
import logoWhite from '../../images/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faUser } from '@fortawesome/free-solid-svg-icons';

import LanguageContext from '../../context/LanguageContext';



const Header= () => {
const { isEnglish , setIsEnglish} = useContext(LanguageContext)
	
	useEffect(() => {
	  
	// Search Form Popup
	var searchBtn = document.getElementById("quikSearchBtn")
	var searchForm = document.querySelector(".nav-search-bar")
	var closeBtn = document.getElementById("searchRemove")
	
	searchBtn.addEventListener('click',function(){
		searchForm.classList.add("show")
	})

	closeBtn.addEventListener('click',function(){
		searchForm.classList.remove("show")
	})
	
	// Mobile Menu Open
	var menuIcon = document.querySelector(".menuicon")
	var menuLinks = document.querySelector(".menu-links")
	var menuClose = document.getElementById("menuClose")

	menuIcon.addEventListener('click',function(){
		menuLinks.classList.add("show")
	})

	menuClose.addEventListener('click',function(){
		menuLinks.classList.remove("show")
	})
	
	// Mobile Submenu open close function
	var navMenu = [].slice.call(document.querySelectorAll('.menu-links > ul > li'));
	for (var y = 0; y < navMenu.length; y++) {
		navMenu[y].addEventListener('click', function () { menuClick(this) });
	}

	function menuClick(current) {
		const active = current.classList.contains("open")
		navMenu.forEach(el => el.classList.remove('open'));
		
		if(active){
			current.classList.remove('open') 
			console.log("active")
		} else{
			current.classList.add('open');
			console.log("close")
		}
	}
	  
	}, [])

	
		return(
			<>
				<header className="header rs-nav">
					<Sticky enabled={true} className="sticky-header navbar-expand-lg">
					<div className="menu-bar clearfix">
							<div className="container-fluid clearfix">
								<div className="menu-logo logo-dark">
									{/* <Link to="/"><img src={logo} alt=""/></Link> */}
									<Link to="/"><img src={logo} alt=""/></Link>
								</div>
								<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								<div className="secondary-menu">
									<ul>
										<li className="search-btn"><button id="quikSearchBtn" type="button" className="btn-link"><i className="las la-search"></i></button></li>
										<li className="num-bx"><a href="tel:(+01)999888777"><i className="fas fa-phone-alt"></i> (+01) 999 888 777</a></li>
										<li className="btn-area"><Link to="/form-login" className="btn btn-outline-primary shadow">Login 
										<FontAwesomeIcon className="ms-2" icon={faUser}/></Link></li>
										<li className="btn-area btn btn-outline-primary shadow ms-1" style={{fontSize:'12px'}} onClick={()=>setIsEnglish( !isEnglish )}>{isEnglish ? 'english' :'العربية'}</li>
									</ul>
								</div>
								<div className="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
									<div className="menu-logo">
										<Link to="/"><img src={logoWhite} alt=""/></Link>
									</div>
									<ul className="nav navbar-nav">	
										<li className="active"><Link to="/">Home</Link></li>
										<li>
											<Link to="/team">our Doctors <i className="fas fa-plus"></i></Link>
										</li>
										<li>
											<Link to="/services">Services <i className="fas fa-plus"></i></Link>
										</li>
										<li>
											<Link to="/offers">Offers <i className="fas fa-plus"></i></Link>
										</li>
										
										<li><Link to="/blog-grid">Blogs <i className="fas fa-plus"></i></Link>
										</li>
										<li><Link to="/about-us">ِAbout us <i className="fas fa-plus"></i></Link>
										</li>
										<li><Link to="/contact-us">Contact Us</Link></li>
									</ul>
									<ul className="social-media">
										<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="btn btn-primary"><i className="fab fa-facebook-f"></i></a></li>
										<li><a target="_blank" rel="noreferrer" href="https://www.google.com/" className="btn btn-primary"><i className="fab fa-google"></i></a></li>
										<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn btn-primary"><i className="fab fa-linkedin-in"></i></a></li>
										<li><a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn btn-primary"><i className="fab fa-twitter"></i></a></li>
									</ul>
									<div className="menu-close" id="menuClose">
										<i className="ti-close"></i>
									</div>
								</div>
							</div>
						</div>
					</Sticky>
					<div className="nav-search-bar">
						<form>
							<input type="text" className="form-control" placeholder="Type to search"/>
							<span><i className="ti-search"></i></span>
						</form>
						<span id="searchRemove"><i className="ti-close"></i></span>
					</div>
				</header>
				
			</>
		);
	
}

export default Header;