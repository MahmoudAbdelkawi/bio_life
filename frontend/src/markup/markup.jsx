import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// All Pages Router
import Index from './pages/index';
import AboutUs from './pages/about-us';
import Team from './pages/team';
import Services from './pages/services';
import ServiceDetail from './pages/service-detail';
import DoctorDetails from './pages/doctor-details';
import FormLogin from './pages/form-login';
import FormRegister from './pages/form-register';
import FormForgetPassword from './pages/form-forget-password';
import ContactUs from './pages/contact-us';
import Booking from './pages/booking';
import BlogGrid from './pages/blog-grid';
import BlogDetails from './pages/blog-details';
import Error from './pages/error-404';
import Offers  from './pages/offers';
import OfferDetail from './pages/offer-detail';

class Markup extends Component{
	render(){
		return(
			<>
				<BrowserRouter basename={'/react/'}>
				
					<Switch>

						<Route path='/' exact component={Index} />
						<Route path='/about-us' exact component={AboutUs} /> 
						<Route path='/team' exact component={Team} />
						<Route path='/team/:id' exact component={BlogDetails} />
						<Route path='/services' exact component={Services} />
						<Route path='/doctor-details/:id' exact component={DoctorDetails} />
						<Route path='/offers' exact component={Offers} />
						<Route path='/OfferDetail' exact component={OfferDetail} />
						<Route path='/service-detail' exact component={ServiceDetail} />
						<Route path='/form-login' exact component={FormLogin} />
						<Route path='/form-register' exact component={FormRegister} />
						<Route path='/form-forget-password' exact component={FormForgetPassword} />
						<Route path='/contact-us' exact component={ContactUs} />
						<Route path='/booking' exact component={Booking} />
						<Route path='/blog-grid' exact component={BlogGrid} />
						<Route path='/blog-details/:id' exact component={BlogDetails} />
						<Route component={Error} />
						
					</Switch>
					
					<PageScrollTop />
					
				</BrowserRouter>
				
				<BackToTop />
				
			</>
		);
	}
}

export default Markup;