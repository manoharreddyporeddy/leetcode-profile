import React, { useState, useEffect } from "react";
import { profileMenuItems } from "../data/Navbar-data";

import "../css/Navbar.css";

function ProfileMenuDropdown({ click, setClick }) {
  const handleClick = () => setClick(!click);

  return click ? (
    <>
      <ul onClick={handleClick} className="profileMenuContainer">
        {profileMenuItems.map((item, index) => {
          if (index === 0) {
            return (
              <>
                <li
                  key={index}
                  className="profileMenuItem"
                  onClick={() => setClick(false)}
                >
                  <a
                    href={profileMenuItems[0].url}
                    className={profileMenuItems[0].cName}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        borderBottom: "1px solid rgb(224, 224, 224)",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="1em"
                        height="1em"
                        class="profileMenuItemIcon usernameIcon"
                        fill="currentColor"
                        style={{ marginRight: "0px" }}
                      >
                        <path d={profileMenuItems[0].svg}></path>
                      </svg>
                      <div
                        style={{
                          alignItems: "center",
                          paddingLeft: "15px",
                          alignSelf: "stretch",
                          flex: "1 1 auto",
                          display: "flex",
                        }}
                      >
                        <div
                          className="profileMenuItemText"
                          style={{ justifyContent: "space-between" }}
                        >
                          <div style={{ color: "#212121" }}>
                            {profileMenuItems[0].title}
                          </div>
                          <svg
                            viewBox="0 0 24 24"
                            width="24px"
                            height="24px"
                            fill="currentColor"
                            style={{
                              flex: "0 0 auto",
                              marginLeft: "10px",
                              color: "#cfd8dc",
                            }}
                          >
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </>
            );
          } else {
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
          }
        })}
      </ul>
    </>
  ) : (
    ""
  );
}

export default ProfileMenuDropdown;
