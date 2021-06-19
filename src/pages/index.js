import React from "react";
import "../assets/css/style.css";
import logo from "../assets/images/KUMPARAN.png";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <h1 className="title">Technical Test</h1>
      <img src={logo} alt="logo-kumparan" className="image" />
    </div>
  );
};

export default Home;
