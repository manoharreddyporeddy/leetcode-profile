import React, { useState, useEffect, useRef } from "react";
import "../css/Navbar-Popup.css";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";

function Popup(props) {
  let popupRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        props.setTrigger(false);
      }
    });
  });

  return props.trigger ? (
    <div className="popupBackground">
      <div ref={popupRef} className="popupForeground">
        <div className="header">
          <h2> Playground </h2>
          <button
            className="exitButton"
            onClick={() => props.setTrigger(false)}
          >
            <svg
              viewBox="0 0 24 24"
              width="20px"
              height="20px"
              color="#cfd8dc"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <a
            className="playgroundButton"
            href="https://leetcode.com/playground/"
          >
            {" "}
            My Playgrounds{" "}
            <svg
              viewBox="0 0 24 24"
              width="20px"
              height="20px"
              className="buttonArrow"
            >
              <path
                fill-rule="evenodd"
                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
              ></path>
            </svg>
          </a>
        </div>
        <Divider />

        <div>
          <div className="console1">
            <h3> Console Application </h3>
            <div className="consoleApplicationContent">
              <div>
                <Card className="newPlayground">
                  <a href="https://leetcode.com/playground/new/empty">
                    <div className="plusImg">+</div>
                  </a>
                </Card>
                <div className="itemHeader">
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "14px",
                      color: "black",
                    }}
                  >
                    New
                  </div>
                </div>
              </div>
              <div>
                <Card className="consoleApplicationItems">
                  <a href="https://leetcode.com/playground/new/linked-list">
                    <img
                      src="https://leetcode.com/static/images/playground/card-linked-list.jpg"
                      alt="logo"
                      height="100px"
                    />
                  </a>
                </Card>
                <div className="itemHeader">
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "14px",
                      color: "black",
                    }}
                  >
                    Linked List
                  </div>
                </div>
              </div>
              <div>
                <Card className="consoleApplicationItems">
                  <a href="https://leetcode.com/playground/new/binary-tree">
                    <img
                      src="https://leetcode.com/static/images/playground/card-binary-tree.jpg"
                      alt="logo"
                      height="100px"
                    />
                  </a>
                </Card>
                <div className="itemHeader">
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "14px",
                      color: "black",
                    }}
                  >
                    Binary Tree
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="console1">
            <h3> Frontend </h3>
            <div style={{ paddingTop: "5px" }}>
              <Card className="consoleApplicationItems">
                <a href="https://leetcode.com/playground/new/react">
                  <img
                    src="https://leetcode.com/static/images/playground/card-react.png"
                    alt="logo"
                    height="100px"
                  />
                </a>
              </Card>
              <div className="itemHeader">
                <div
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    color: "black",
                  }}
                >
                  React
                </div>
              </div>
            </div>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
export default Popup;
