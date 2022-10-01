import React  from "react";

import CopySlider from './CopySlider/Slider'


// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Carousel} from 'react-bootstrap';




function Header () {
  
// let SliderImg= useState();
// SliderImg=[
//   {
//     Image: "/images/banner/banner1-2.jpg"
//   },
//   {
//     Image: "/images/banner/banner1-3.jpg"
//   },
//   {
//     Image: "/images/banner/banner1-4.jpg"
//   }
// ]





    return (


      <header className="header-bottom">

      <div className="main">        
        
        {/* <Carousel>
          
       
             <Slider 
            key={SliderImg.length} 
            counting={SliderImg} />
     
        {SliderImg.map((img,index)=>
        
          <Carousel.Item>
                    
        <Block /> 

<img src={img.Image} key={index} alt='/'/>
          </Carousel.Item>
          
          )} 
     
             </Carousel>
         */}
   

  

          <CopySlider />






        </div> 

      
    

    
      </header>

    );
  }


export default Header;
