import React, { useState, useEffect } from "react";
import { profileMenuItems } from "../data/Navbar-data";

import "../css/Navbar.css";

function ProfileMenuDropdown({ click, setClick }) {
  const handleClick = () => setClick(!click);

  return click ? (
    <>
      <ul onClick={handleClick} className="profileMenuContainer">
        {profileMenuItems.map((item, index) => {
          return (
            <li
              key={index}
              className="profileMenuItem"
              onClick={() => setClick(false)}
            >
              <a href={item.url} className={item.cName}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    class="profileMenuItemIcon"
                  >
                    <path d={item.svg}></path>
                  </svg>
                  <div className="profileMenuItemText">{item.title}</div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  ) : (
    ""
  );
}

export default ProfileMenuDropdown;
