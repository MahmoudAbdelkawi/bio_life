import React  from "react";

import   './Block.css'

function  Block () {

   
    return (
      <div className="container_block" >
        <div className="slide-item__block">
      
          <h3 className="slide-item__title">
            Bio Life<span>clinic<br />in</span>Jeddah
          </h3>
        
          <a
            href="#form_block"
            className="btn btn_blue"
            style={{ fontWeight: "700" }}
          >
            أحجز موعد
          </a>
        </div>
      </div>
    )
  
}
 
export default Block;

