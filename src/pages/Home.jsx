import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";

function Home() {
  return (
    <>
      <img className="logo" src="src/assets/cisco -logo.png" alt="" />
      <div className="main-page">
        <Header />
        <Main />
        <div className="about">
          <div className="text">
            <p className="org">About Organization</p>
            <p className="info">
              Enter the basic details about the Organization to proceed further
            </p>
          </div>
          <img src="src/assets/city.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
