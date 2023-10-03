import React from "react";
// import { Categories } from "./Categories";
import { MasVistos } from "./components/MasVistos";
import { Title } from "./components/Title";

// import { Navbar } from "./Navbar";
import "./App.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Title className ="Title-instance"/>
      <div className="div-2">
        <MasVistos className="mas-vistos-instance" />
          <div className="overlap-2">
          <div className="text-wrapper-7">Ellos</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;