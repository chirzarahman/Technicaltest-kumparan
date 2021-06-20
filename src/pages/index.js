import React from "react";
import "../assets/css/style.css";
import logo from "../assets/images/KUMPARAN.png";

const Home = () => {
  return (
    <div className="center">
      <h1 className="title">Technical Test</h1>
      <img src={logo} alt="logo-kumparan" className="image" />
    </div>
  );
};

export default Home;
