import "./styles.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Leftbar from "./Components/Leftbar/Leftbar";
import Rightbar from "./Components/Rightbar/Rightbar";
import Bottombar from "./Components/Bottombar/Bottombar";

export default function App() {
  return (
    <>
      <div className="navWrapper">
        <Navbar />
      </div>
      <div className="contentWrapper">
        <div className="profileContainer">
          <div className="profileLeftContainer">
            <Leftbar />
          </div>
          <div className="profileRightContainer">
            <Rightbar />
          </div>
        </div>
      </div>
      <div className="bottomWrapper">
        <Bottombar />
      </div>
    </>
  );
}
