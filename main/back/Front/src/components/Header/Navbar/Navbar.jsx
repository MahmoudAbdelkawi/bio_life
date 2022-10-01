import React, { useState} from "react";
import { NavLink} from "react-router-dom";
import "./Navbar.css";
import Appointment from "../../common/Appointment/Appointment";

const Navbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState("");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      color:isActive?"#f22283":""
    };
  };

  return (
    <div className="Navbar">
      <div className="nav-logo">
        <Appointment />
      </div>
      <div
        className={`nav-items-container ${isOpen && "open"} `}
        onClick={handleClick}
      >
        <div className="nav-items">
          <NavLink to="/" className="nav-items-1" style={navLinkStyles}>
            الرئيسية
          </NavLink>
          <NavLink to="/doctors" className="nav-items" style={navLinkStyles}>
            الاطباء
          </NavLink>
          <NavLink to="/ServicesPage" className="nav-items" style={navLinkStyles}>
            الخدمات
          </NavLink>
          <NavLink to="/OfferPage" className="nav-items" style={navLinkStyles}>
            العروض
          </NavLink>
          <NavLink to="/blogs" className="nav-items" style={navLinkStyles}>
            المدونة
          </NavLink>
          <NavLink to="/Aboutus" className="nav-items" style={navLinkStyles}>
            من نحن
          </NavLink>
         
          {user && (
            <React.Fragment>
              <NavLink
                to="/Logout"
                className= "nav-items-signout"
                style={{navLinkStyles,marginRight:'24px'}}
              >
                تسجيل خروج
              </NavLink>
            </React.Fragment>
          )}
          {!user && (
            <>
              <NavLink
                to="/login"
                className={`${
                  isOpen ? "nav-items-signup" : "nav-items-signup"
                } `}
                style={{navLinkStyles,marginRight:'24px'}}
              >
                تسجيل الدخول
              </NavLink>
            </>
          )}
          {user && (
            <>
              <NavLink
                to={`/personalInformation/${user._id}`}
                className={`${
                  isOpen ? "nav-items-signup" : "nav-items-signup"
                } `}
                style={navLinkStyles}
              >
                حسابي
              </NavLink>
            </>
          )}
        </div>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={handleClick}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
