
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import PeopleIcon from "@mui/icons-material/People";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BookIcon from "@mui/icons-material/Book";
import SecurityUpdateGoodIcon from "@mui/icons-material/SecurityUpdateGood";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import '../../../App.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color:isActive?"#f22283":""
    };
  };
  return (
    <div className='sidebar'>
      <ul className='sidebarList'>
        <NavLink className='link' to='/dashboard' style={navLinkStyles}>
          <li className='row'>
            <div className='row-icon'>
              <HomeIcon />
            </div> 
            <div className='row-title'>Home</div>
          </li>
        </NavLink>
        <NavLink className='link' to='/dashboard/offers' style={navLinkStyles}>
          <li className='row'>
            <div className='row-icon'>
              <LocalOfferIcon />
            </div>
            <div className='row-title'>Offers</div>
          </li>
        </NavLink>
        <NavLink className='link' to='/dashboard/services' style={navLinkStyles}>
          <li className='row'>
            <div className='row-icon'>
              <MedicalInformationIcon />
            </div>
            <div className='row-title'>services</div>
          </li>
        </NavLink>
        <NavLink className='link' to='/dashboard/Teams' style={navLinkStyles}>
          <li className='row'>
            <div className='row-icon'>
              <PeopleIcon />
            </div>
            <div className='row-title'>Teams</div>
          </li>
        </NavLink>
        <NavLink className='link' to='/dashboard/Blogs' style={navLinkStyles}>
          <li className='row'>
            <div className='row-icon'>
              <AccountBoxIcon />
            </div>
            <div className='row-title'>Blogs</div>
          </li>
        </NavLink>
        <NavLink className='link' to='/dashboard/users' style={navLinkStyles}>
          <li className='row'>
            <div className='row-icon'>
              <AdminPanelSettingsIcon />
            </div>
            <div className='row-title'>users</div>
          </li>
        </NavLink>
        <NavLink className='link' to='/dashboard/employees'>
          <li className='row'>
            <div className='row-icon'>
              <SecurityUpdateGoodIcon />
            </div>
            <div className='row-title'>employees</div>
          </li>
        </NavLink>
        <NavLink className='link' to='/dashboard/departments' style={navLinkStyles}>
          <li className='row'>
            <div className='row-icon'>
              <BookOnlineIcon />
            </div>
            <div className='row-title'>Departments</div>
          </li>
        </NavLink>
        <NavLink className='link' to='/dashboard/reservations' style={navLinkStyles}>
          <li className='row'>
            <div className='row-icon'>
              <BookIcon />
            </div>
            <div className='row-title'>reservations</div>
          </li>
        </NavLink>
        <NavLink className='link' to='/dashboard/Admins' style={navLinkStyles}>
          <li className='row'>
            <div className='row-icon'>
              <ManageAccountsIcon />
            </div>
            <div className='row-title'>Admins</div>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;

// {SidebarData.map((val,key)=> {
//     return <li
//     className='row'
//     id={window.location.pathname === val.link ? 'active' : ''}
//     key={key}
//     onClick={() => {
//         window.location.pathname = val.link;
//     }}
//     >
//         <div className='row-icon'>{val.icon}</div>
//         <div className='row-title'>{val.title}</div>
//     </li>;

// })}
