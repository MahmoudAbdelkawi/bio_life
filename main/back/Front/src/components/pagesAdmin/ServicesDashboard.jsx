import React,{useState,useEffect} from "react";
import "./services.css";
import SingleService from "../admin/services/SingleService";
import { getServices } from "../../services/serviceServices";
import { Link } from "react-router-dom";


const ServicesDashboard = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    async function get() {
      const serviceResult = await getServices();
      setService(serviceResult.data);
    }
    
    get();
  }, []);
  
  const serviceArray = services.map((ser) => ({
    id: ser._id,
    image:ser.image,
    title: ser.title,
    points: ser.points,
  }));
  const serviceMaping = serviceArray.map((service) => {
    return (
     
      <SingleService
        key={service.id}
        id={service.id}
        image={service.image}
        title={service.title}
        points={service.points}
        
      />
     
    );
   
  });
  return (
    <div>
      <div>
        <h1 className="Service-title">الخدمات</h1>
        <div>
          <div className="ServiceContainer">{serviceMaping}</div>
        </div>
        <div className="adding-Service">
          <Link className="link" to="/dashboard/AddFormService">
            <button className="container">
              <p className="add-icon">+</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesDashboard;