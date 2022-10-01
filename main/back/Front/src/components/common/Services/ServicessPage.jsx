import React from "react";
import { useEffect, useState } from "react";
import { getServices } from "../../../services/serviceServices";
import "./ServicessPage.css";

function Servicess() {
  const PF = "https://biollife.herokuapp.com/uploads/";
  const [services, setServices] = useState([]);
  useEffect(() => {
    async function get() {
      const serviceResult = await getServices();
      setServices(serviceResult.data);
    }
    get();
  }, []);
 
  return (
    <>
      {/* Start of .other-servises */}
      <section className="other-services" id="services">
        <div className="other-services__bg-2" />
        <div className="container">
          
          <div className="other-services__cards__page">
            {services?.map((service) => (
              <div className="card-item" key={service._id}>
                <div className="icon">
                <img
                src={PF+service.image}
                alt="Product"
                className="img-services"
              />
                </div>
                <h2
                  className="title"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {service.title}
                </h2>
                {service.points?.map((p) => (
                  <ul className="lists" key={Math.floor(100000 + Math.random() * 900000)}>
                    <li style={{ fontFamily: "'Cairo', sans-serif" }}>
                   
                      {p}
                    </li>
                  </ul>
                ))}
                <br />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End of .other-servises */}
    </>
  );
}

export default Servicess;
