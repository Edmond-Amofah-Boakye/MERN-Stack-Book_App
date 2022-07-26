import React from "react";
import "../../styles/Home.css";
import libImage from "../../images/dusan-jovic-4JpCi9jWaOA-unsplash.jpg";

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <div className="content">
          <div className="message">
            <p>Explore Your Favourite Books</p>
            <h1>
              Get Your new <br /> Book With The <br />
              <span className="best">B</span>est price{" "}
              <span className="now">now!!!</span>
            </h1>
            <input
              type="text"
              placeholder="search your favourite books here......."
            />
          </div>
          <div className="content-image">
            <img src={libImage} alt="" />
          </div>
        </div>
        <div className="latext">
          <h1>LATEST BOOKS</h1>
          <img src={libImage} alt="" />
          <img src={libImage} alt="" />
          <img src={libImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
