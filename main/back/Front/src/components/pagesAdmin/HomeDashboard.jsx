import "./home.css"
import { useState,useEffect } from "react";
import {getOfferLimit} from '../../services/offerServices';
import {getServicesLimit} from '../../services/serviceServices';
import {reserveLimit,resOffersLimit} from '../../services/reserveServices';
import{blogLimit} from '../../services/blogServices';
import {getEventsLimit} from '../../services/eventServices';
import {getMembersLimit} from '../../services/teamServices';
import {getDepartments} from '../../services/departmentsServices';
import {getUsersLimit} from '../../services/adminUsers';
import {getAdmins} from '../../services/adminsServices';

function HomeDashboard() {
    const [offers, setOffers] = useState([]);
    const [services, setServices] = useState([]);
    const [reserves, setReserves] = useState([]);
    const [reserveOffer, setReserveOffer] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [events, setEvents] = useState([]);
    const [members, setMembers] = useState([]);
    const [departments,setDepartments]=useState([]);
    const [users,setUsers]=useState([]);
    const [admins,setAdmins] = useState([]);

    const PF = "https://biollife.herokuapp.com/uploads/";
    useEffect(() => {
      async function getOffers() {
        const offersResult = await getOfferLimit();
        setOffers(offersResult.data);
      }
      getOffers();

      async function getServices() {
        const servicesResult = await getServicesLimit();
        setServices(servicesResult.data);
      }
      getServices();

      async function getReserve() {
        const result = await reserveLimit();
        setReserves(result.data);
      }
      getReserve();

      async function getReserveOffer() {
        const result = await resOffersLimit();
        setReserveOffer(result.data);
      }
      getReserveOffer();

      async function getBlogs() {
        const result = await blogLimit();
        setBlogs(result.data);
      }
      getBlogs();

      async function getEvents() {
        const result = await getEventsLimit();
        setEvents(result.data);
      }
      getEvents();

      async function getMembers() {
        const result = await getMembersLimit();
        setMembers(result.data);
      }
      getMembers();

      async function getallDepartments() {
        const result = await getDepartments();
        setDepartments(result.data);
      }
      getallDepartments();

      async function getUsers() {
        const result = await getUsersLimit();
        setUsers(result.data);
      }
      getUsers();

      async function getallAdmins() {
        const result = await getAdmins();
        setAdmins(result.data);
      }
      getallAdmins();
   
    
    }, []);

    return (
        <div className="home-container">
            <div className="flex-row">

            <div className="card"> 
            <div>
            <a href='/dashboard/offers'> <h1>Offers</h1></a>
            </div>
            <div className="members1">
            {offers?.map((offer)=>(
            <div className="MembersContainer" key={offer?._id}>
            <div className="MemberCard">
            <div className="MemberCardIcon">
            <img src={PF+offer?.image} className="MemberImage" alt="pic"/>
            </div>
            <hr />
           <div className="MemberCardInfo">
           <h4>{offer?.title}</h4>
           <h4>{offer?.price}</h4>
           <span>{new Date(offer?.expiredate).toLocaleDateString()}</span>
           </div>
         </div>
        </div>
        
         ))}
         </div>
           </div>
            
           <div className="card"> 
            <div>
            <a href='/dashboard/services'> <h1>Services</h1></a>
            </div>
            <div className="members1">
            {services?.map((service)=>(
            <div className="MembersContainer" key={service?._id}>
            <div className="MemberCard">
            <div className="MemberCardIcon">
            <img src={PF+service?.image} className="MemberImage" alt="pic"/>
            </div>
            <hr />
           <div className="MemberCardInfo">
           <h4>{service?.title}</h4>
           <ul>
        {service?.points.map((point)=>(
          <li key={Math.floor(100000 + Math.random() * 900000)}>{point}</li>
        ))}

           </ul>
           </div>
         </div>
        </div>
        
         ))}
         </div>
           </div>
            </div>

            <div className="flex-row">
            <div className="card"> 
            <div>
            <a href='/dashboard/employees'> <h1>Members</h1></a>
            </div>
            <div className="members1">
            {members?.map((member)=>(
            <div className="MembersContainer" key={member?._id}>
            <div className="MemberCard">
            <div className="MemberCardIcon">
            <img src={PF+member?.image} className="MemberImage" alt="pic"/>
            </div>
            <hr />
           <div className="MemberCardInfo">
           <h4>{member?.name}</h4>
           <h4>{member?.department.name}</h4>
           <span>{member?.position}</span>
           </div>
         </div>
        </div>
        
         ))}
         </div>
           </div>
            <div className="card"> 
            <a href='/dashboard/departments'> <h1>Departments</h1></a>
            <div className="members1">
            {departments?.map((depart)=>(
            <div className="MembersContainer" key={depart?._id}>
            <div className="MemberCard">
           <div className="MemberCardInfo">
           <h4>{depart?.name}</h4>
           </div>
         </div>
        </div>
         ))}
         </div>
            </div>
            </div>

            <div className="flex-row">
            <div className="card"> 
            <a href='/dashboard/users'> <h1>Users</h1></a>
            <div className="table-parent">
        <table className="table">
          <thead>
            <tr>
              <th>username</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {users?.map((user) => {
              return (
                <tr key={user._id}>
                  <td data-label="username">{user?.username}</td>
                  <td data-label="Email">{user?.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
            </div>
            <div className="card"> 
            <a href='/dashboard/admins'> <h1>Admins</h1></a>
            <div className="table-parent">
        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {admins?.map((admin) => {
              return (
                <tr key={admin?._id}>
                  <td data-label="username">{admin?.name}</td>
                  <td data-label="Email">{admin?.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
            </div>
            </div>

            <div className="flex-row">
            <div className="card"> 
            <div>
            <a href='/dashboard/reservations'> <h1>Reservations</h1></a>
            </div>
            <div className="members1">

            {reserves?.map((reserve)=>(
            <div className="MembersContainer" key={reserve?._id}>
            <div className="MemberCard">
          
           <div className="MemberCardInfo">
           <h4>{reserve?.fname+' '+reserve?.lname}</h4>
           <h4>{new Date(reserve?.date).toLocaleDateString()}</h4>
           <h4>{reserve?.department?reserve?.department.name:reserve?.doctor.name}</h4>
           </div>
         </div>
        </div>
         ))}

         <h3>حجوزات العروض</h3>

            {reserveOffer?.map((reserve)=>(
            <div className="MembersContainer" key={reserve?._id}>
            <div className="MemberCard">
          
           <div className="MemberCardInfo">
           <h4>{reserve?.fname+' '+reserve?.lname}</h4>
           <h4>{reserve?.offer.title}</h4>
           <h4>{reserve?.offer.price}</h4>
           <h4>{new Date(reserve?.offer.expiredate).toLocaleDateString()}</h4>
           </div>
         </div>
        </div>
        
         ))}
         </div>
           </div>
           
           <div className="card"> 
            <div>
            <a href='/dashboard/blogs'> <h1>Blogs</h1></a>
            </div>
            <div className="members1">
            {blogs?.map((blog)=>(
            <div className="MembersContainer" key={blog?._id}>
            <div className="MemberCard">
            <div className="MemberCardIcon">
            <img src={PF+blog?.image} className="MemberImage" alt="pic"/>
            </div>
            <hr />
           <div className="MemberCardInfo">
           <h4>{blog?.title}</h4>
           <h4>{blog?.subject.slice(0,50)}</h4>
           <span>{new Date(blog?.createdAt).toLocaleDateString()}</span>
           </div>
         </div>
        </div>
        
         ))}
الفعاليات
{events?.map((event)=>(
            <div className="MembersContainer" key={event?._id}>
            <div className="MemberCard">
            <div className="MemberCardIcon">
            <img src={PF+event?.image} className="MemberImage" alt="pic"/>
            </div>
            <hr />
           <div className="MemberCardInfo">
           <h4>{event?.title}</h4>
           <h4>{event?.subject.slice(0,50)}</h4>
           <span>{new Date(event?.createdAt).toLocaleDateString()}</span>
           </div>
         </div>
        </div>
        
         ))}
         </div>
           </div>
            </div>
        </div>
    )
}

export default HomeDashboard;