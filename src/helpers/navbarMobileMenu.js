import "../css/Navbar.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import React, { useState, useRef, useEffect } from "react";

import {
  linksList,
  storeMenuItems,
  profileMenuItems,
  InterviewMenuItem,
} from "../data/Navbar-data";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    position: "fixed",
  },
}));

export default function NavSidebar(props) {
  const classes = useStyles();

  const mobileMenuRef = useRef();

  let navItems = [];
  navItems.push(storeMenuItems[1]);
  navItems.push(linksList[0], linksList[1]);
  navItems.push(InterviewMenuItem[0], InterviewMenuItem[1]);
  navItems.push(linksList[3], linksList[4]);
  navItems.push(storeMenuItems[0]);
  for (let i = 1; i < 11; i++) {
    navItems.push(profileMenuItems[i]);
  }
  console.log(navItems);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        props.setTrigger(false);
      }
    });
  });

  let slide = "";
  if (props.trigger) {
    slide = "220px";
  }

  return props.trigger ? (
    <div className="mask">
      <div
        ref={mobileMenuRef}
        className="menu"
        // style={{ left: slide, transition: "10s" }}
      >
        <a class="username" href="/pgmreddy">
          <img
            alt="pgmreddy's avatar"
            class="usernameImg"
            src="https://assets.leetcode.com/users/pgmreddy/avatar_1590316229.png"
          />
          <div class="usernameText">
            {/* <svg
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              class="icon__1Md2 icon__35VI"
            >
              <path d="M17 3c1.1 0 2 .9 2 2v16l-7-3-7 3 .01-16c0-1.1.89-2 1.99-2h10zm-5 10.43L14.472 15l-.656-2.96L16 10.048l-2.876-.256L12 7l-1.124 2.792L8 10.048l2.184 1.992L9.528 15 12 13.43z"></path>
            </svg> */}
            <span>pgmreddy</span>
          </div>
        </a>
        <div
          style={{
            marginBottom: "40px",
            borderBottom: "1px solid #eeeeee",
            borderTop: "1px solid #eeeeee",
          }}
        >
          {navItems.map((item, index) => {
            let dynamicColor = "#37474f";
            if (index === 0 || index === 7) {
              dynamicColor = "#f9a825";
            }

            let dynamicBorder = "";
            if (index === 2 || index === 4 || index === 6) {
              dynamicBorder = "1px solid #eeeeee";
            }

            let icons;
            if (index === 3 || index === 4) {
              icons = (
                <img
                  style={{
                    height: "20px",
                    marginRight: "5px",
                    verticalAlign: "middle",
                  }}
                  src={item.src}
                  alt="logo"
                ></img>
              );
            }

            if (7 < index) {
              icons = (
                <svg
                  viewBox="0 0 24 24"
                  style={{
                    height: "18px",
                    marginRight: "5px",
                    verticalAlign: "middle",
                  }}
                  fill="currentColor"
                >
                  <path d={item.svg}></path>
                </svg>
              );
            }

            if (index === 17) {
              dynamicColor = "#c62928";
            }
            return (
              <a
                href=""
                className="navListItem"
                style={{ color: dynamicColor, borderBottom: dynamicBorder }}
              >
                <span>
                  {icons}
                  {item.title}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
