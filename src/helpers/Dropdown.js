import React, { useState, useEffect } from "react";
import { storeMenuItems, InterviewMenuItem } from "../data/Navbar-data";

import "../css/Navbar.css";

function Dropdown({ store, interview }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  if (store) {
    return (
      <div className="dropdownWrapper" style={{ display: "flex" }}>
        <ul
          onClick={handleClick}
          className="dropdownContainer"
          style={{ padding: "15px 0px" }}
        >
          {storeMenuItems.map((item, index) => {
            return (
              <li
                key={index}
                className="profileMenuItem"
                style={{ height: "30px" }}
              >
                <a
                  href={item.url}
                  className="dropdownMenuItem store"
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  if (interview) {
    return (
      <div className="dropdownWrapper" style={{ display: "flex" }}>
        <ul
          onClick={handleClick}
          className="dropdownContainer"
          style={{ padding: "15px 0px" }}
        >
          {InterviewMenuItem.map((item, index) => {
            return (
              <li
                key={index}
                className="profileMenuItem"
                style={{ height: "30px" }}
              >
                <a
                  href={item.url}
                  className="dropdownMenuItem interview"
                  style={{ color: "rgba(0, 0, 0, 0.65)" }}
                  onClick={() => setClick(false)}
                >
                  <img
                    style={{
                      height: "20px",
                      marginRight: "5px",
                      verticalAlign: "middle",
                    }}
                    src={item.src}
                    alt="logo"
                  />
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else return "";
}

export default Dropdown;
