import React from "react";
import Headers from "../../Header/Headers";
import DoctorsHome from "../DoctorsHome/DoctorsHome";

import Departments from "../Services/Departments";

import Servicess from "../Services/Servicess";

import Chooseus from "../chooseus/Chooseus";

import Offer from "../Offer/Offer";
import Emergency from "../chooseus/Emergency";

function Body() {
  return (
    <>
      <Headers />
      <Departments />
      <DoctorsHome />
      <Chooseus />
      <Servicess/>
      <Offer/>
      <Emergency />
    </>
  );
}

export default Body;
