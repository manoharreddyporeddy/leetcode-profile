import React from "react";
import "./Bottombar.css";

export default function App() {
  return (
    <div className="bottomContainer">
      <div className="itemContainer">
        <div className="leftItemWrapper">
          <div className="leftItemContainer">
            <span
              style={{
                color: "#757575",
                marginTop: "8px",
                marginRight: "20px"
              }}
            >
              Copyright © 2021 LeetCode
            </span>
            <nav>
              <ul className="leftItemList">
                <li className="leftListItem">
                  <a
                    href="https://leetcode.com/support"
                    className="leftButtons"
                    style={{ marginLeft: "0px" }}
                  >
                    Help Center
                  </a>
                </li>

                <li className="leftListItem">
                  <a href="https://leetcode.com/jobs" className="leftButtons">
                    Jobs
                  </a>
                </li>

                <li className="leftListItem">
                  <a href="https://leetcode.com/jobs" className="leftButtons">
                    Bug Bounty
                  </a>
                </li>

                <li className="leftListItem">
                  <a
                    href="https://leetcode.com/interview/"
                    className="leftButtons"
                  >
                    Online Interview
                  </a>
                </li>

                <li className="leftListItem">
                  <a
                    href="https://leetcode.com/student"
                    className="leftButtons"
                  >
                    Students
                  </a>
                </li>

                <li className="leftListItem">
                  <a href="https://leetcode.com/terms" className="leftButtons">
                    Terms
                  </a>
                </li>

                <li className="privacyButton">
                  <a
                    href="https://leetcode.com/privacy"
                    className="leftButtons"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <a href="https://leetcode.com/region/" className="regionLink">
          <img
            alt="USA"
            src="https://leetcode.com/static/images/region/us.svg"
            height="18px"
            style={{ marginRight: "10px", verticalAlign: "middle" }}
          />
          <span className="regionLinkText">United States </span>
        </a>
      </div>
    </div>
  );
}
