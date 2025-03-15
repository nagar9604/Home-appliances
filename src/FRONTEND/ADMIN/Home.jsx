import React, { useState, useEffect } from "react";
import "./Style/Home.css";
import Header from "./Header";


const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 1000);
  }, []);

  return (
    <>
     <Header/>
      <div className="home-container">
        <img
          src="https://wallpaperaccess.com/full/6424688.png"
          alt="Placeholder Image"
          className={`custom-image ${fadeIn ? "fade-in-zoom" : ""}`}
        />
      </div>
      
    </>
  );
};

export default Home;