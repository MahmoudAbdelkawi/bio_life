
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar/Navbar';
import ServicesPage from './components/common/Services/ServicessPage';
import OfferPage from './components/common/Offer/OfferPage';
import Aboutus from './components/pages/Aboutus';
import Blogs from './components/pages/Blogs';
import Doctors from './components/pages/Doctors';
import Home from './components/pages/Home';
import Logout from './components/common/Logout/Logout';
import Offers from './components/pages/Offers';
import Register from './components/common/Registeration/Registeration';
import EventCard from './components/common/EventCard/EventCard';
import InsideBlog from './components/common/InsideBlog/InsideBlog';
import InsideEvent from './components/common/InsideBlog/InsideEvent';
import Appointment from './components/common/Appointment/Appointment';
import Appointment_Doctor from './components/common/Appointment/Appointment_Doctor';
import ProfilePage from './components/common/ProfilePage/ProfilePage';
import  React, { useState, useEffect } from 'react';
import Login from './components/common/Login/Login';
import { getCurrentUser } from './services/loginServices';
import UserProfile from './components/common/UserProfile/UserProfile';
import ScrollToTop from "./components/ScrollTop";
import Chooseus from "./components/common/chooseus/Chooseus";
import Emergency from "./components/common/chooseus/Emergency";
import OffersbtnHomes from './components/common/Offer/OffersbtnHomes';
import "react-toastify/dist/ReactToastify.css";
import HomeDashboard from "./components/pagesAdmin/HomeDashboard";
import OffersDashboard from "./components/pagesAdmin/OffersDashboard";
import ServicesDashboard from "./components/pagesAdmin/ServicesDashboard";
import Teams from "./components/pagesAdmin/Teams";
import Reservations from "./components/pagesAdmin/Reservations";
import Users from "./components/pagesAdmin/Users";
import BlogsDashboard from "./components/pagesAdmin/BlogsDashboard";
import Departments from "./components/pagesAdmin/DepartmentsDashboard";
import Employees from "./components/pagesAdmin/Employees";
import AddFormOffer from "./components/admin/offers/AddFormOffer";
import AddDepartments from "./components/admin/departments/AddDepartments";
import SingleBlog from "./components/admin/blogs/SingleBlog";
import SingleEvent from "./components/admin/blogs/SingleEvent";
import AddBlogs from "./components/admin/blogs/AddBlogs";
import Admins from "./components/pagesAdmin/Admins";
import SingleAdmin from "./components/admin/admin/SingleAdmin";
import AddAdmin from "./components/admin/admin/AddAdmin";
import AddFormService from "./components/admin/services/AddFormService";
import AddFormEmployee from "./components/admin/employee/AddFormEmployee";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/admin/bars/Sidebar";
import TopNav from "./components/admin/bars/TopNav";

let type;


function App() {
  const [user, setUser] = useState('');
  useEffect(() => {
    const user = getCurrentUser();
    setUser(user);
    if(user){
      if(user.isSuperAdmin||user.isAdmin||user.isSubAdmin){
        type='admin';
      }
    }
  },[]);

  return (
<React.Fragment>
      <Router>
      <ScrollToTop>
        {type==='admin'&&
      <div className='App'>
       <TopNav className='topNav'/>
        <div className='container'>
          <div className='home'>
            <Routes>
              <Route path='/dashboard' element={<HomeDashboard/>} />
              <Route path='/dashboard/offers' element={<OffersDashboard />} />
              <Route path='/dashboard/services' element={<ServicesDashboard />} />
              <Route path='/dashboard/teams' element={<Teams />} />
              <Route path='/dashboard/reservations' element={<Reservations />} />
              <Route path='/dashboard/users' element={<Users />} />
              <Route path='/dashboard/blogs' element={<BlogsDashboard />} />
              <Route path='/dashboard/AddBlogs' element={<AddBlogs />} />
              <Route path='/dashboard/departments' element={<Departments />} />
              <Route path='/dashboard/employees' element={<Employees />} />
              <Route path='/dashboard/AddFormOffer' element={<AddFormOffer />} />
              <Route path='/dashboard/AddDepartments' element={<AddDepartments />} />
              <Route path='/dashboard/SingleBlog/:id' element={<SingleBlog />} />
              <Route path='/dashboard/SingleEvent/:id' element={<SingleEvent />} />
              <Route path='/dashboard/Admins' element={<Admins />} />
              <Route path='/dashboard/SingleAdmin' element={<SingleAdmin />} />
              <Route path='/dashboard/AddAdmin' element={<AddAdmin />} />
              <Route path='/dashboard/addFormService' element={<AddFormService />} />
              <Route path='/dashboard/addFormEmployee' element={<AddFormEmployee />} />
            </Routes>
          </div>
        <div className='sidebarContainer'>
          <Sidebar />
          </div>
        </div>
      </div>
}



{type!=='admin'&&<Navbar user={user}/>}
        <Routes>
        {type!=='admin'&&<Route exact path="/" element={<Home />}/>}
      <Route path="/Aboutus" element={<Aboutus/>}/>
      <Route path="/Blogs" element={<Blogs/>}/>
      <Route path="/Doctors" element={<Doctors/>}/>
      <Route path="/Offers" element={<Offers/>} />
      <Route path="/OfferPage" element={<OfferPage/>} />
      <Route path='/Register' element={<Register/>}/>
      <Route path="/ServicesPage" element={<ServicesPage/>} />
      <Route path="/EventCard" element={<EventCard/>} />
      <Route path="/ProfilePage/:id" element={<ProfilePage/>} />
      <Route path="/Appointment" element={<Appointment/>} />
      <Route path="/Appointment_Doctor/:id" element={<Appointment_Doctor/>} />
      <Route path="/InsideBlog/:id" element={<InsideBlog/>} />
      <Route path="/InsideEvent/:id" element={<InsideEvent/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/UserProfile/:id" element={<UserProfile/>} />
      <Route path="/Logout" element={<Logout/>} />
      <Route path="/Chooseus" element={<Chooseus />} />
      <Route path="/Emergency" element={<Emergency />} />
      <Route path="/booking-offer/:id" element={<OffersbtnHomes/>} />
      </Routes>
      {type!=='admin'&&<Footer />}
 

        </ScrollToTop>
      </Router>
      </React.Fragment> 
    
  );
}

export default App;
