import React, {Component, useState , useContext } from 'react';
import { Link } from 'react-router-dom';
import auth from "../../services/loginServices";
// Import Images
import logo from "../../images/logo.png";

import LanguageContext from '../../context/LanguageContext';


const FormLogin = () => {
	const {isEnglish} = useContext(LanguageContext)


	console.log(isEnglish);
	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.login(email, password);

      if (auth.getCurrentUser) {
        let user = auth.getCurrentUser();
        let name = user.username?user.username:user.name;
        if(user.isSuperAdmin||user.isAdmin||user.isSubAdmin){
        //   toast.success(`مرحبا ${name}`);
          setTimeout(() => {
            window.location = "/dashboard";
          }, 1200);
        }else {
        //   toast.success(`مرحبا ${name}`);
          setTimeout(() => {
            window.location = "/";
          }, 1200);
        }
       
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        // toast.error(ex.response.data);
      }
    }
  };

		return (
			<>
				<div className="section-area account-wraper2">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xl-5 col-lg-6 col-md-8">
								<div className="appointment-form form-wraper">
									<div className="logo">
										<img src={logo} alt=""/>
									</div>
									<form action="#">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)}/>
										</div>
										<div className="form-group">
											<input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
										</div>
										<div className="form-group">
											<Link to="/" type="button" className="btn mb-30 btn-lg btn-primary w-100" onClick={onSubmit}>login</Link>
											<Link to="/form-forget-password" data-toggle="tab">Forgot Password</Link>
										</div>
										<div className="text-center mt-40">
											<p className="mt-0">Dont have any account?</p>
											<Link className="btn btn-lg btn-secondary w-100" data-toggle="tab" to="/form-register">Register</Link>
										</div>											
									</form>
								</div>
							</div>
						</div>					
					</div>
				</div>
				
			</>
		);
	
}

export default FormLogin;