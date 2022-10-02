import React, { Component, useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';
const LatestNewsSection =()=>{

	const {isEnglish} = useContext(LanguageContext)	
		
		return(
			<>
				
				<section className="section-sp1 service-wraper2" style={{direction:isEnglish?"ltr":"rtl"}}>
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-sm-6 mb-30">
								<div className="feature-container feature-bx3">
									<h2 className="counter text-secondary">120</h2>
									<h5 className="ttr-title">{isEnglish?"Years With You":"سنوات معك"}</h5>
									<p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
								</div>
							</div>
							<div className="col-xl-3 col-sm-6 mb-30">
								<div className="feature-container feature-bx3">
									<h2 className="counter text-secondary">400</h2>
									<h5 className="ttr-title">{isEnglish?"Awards":"الجوائز"}</h5>
									<p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
								</div>
							</div>
							<div className="col-xl-3 col-sm-6 mb-30">
								<div className="feature-container feature-bx3">
									<h2 className="counter text-secondary">250</h2>
									<h5 className="ttr-title">{isEnglish?"Doctors":"الدكاترة"}</h5>
									<p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
								</div>
							</div>
							<div className="col-xl-3 col-sm-6 mb-30">
								<div className="feature-container feature-bx3">
									<h2 className="counter text-secondary">800</h2>
									<h5 className="ttr-title">{isEnglish?"Satisfied Client":"عميل راضٍ"}</h5>
									<p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				
			</>
		);

}

export default LatestNewsSection;