import React, { useState } from "react";
import "./Bottombar.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  navbar: {
    backgroundColor: "white",
    justifyContent: "center",
    height: "44px",
    paddingBottom: "0px"
  },
  leftbar1: {
    width: "fit-content",
    height: "44px",
    fontSize: "12px"
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className="root">
      <div className="item-container">
        <div className="item-container2">
          <div className="item-container">
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
              <ul className="bottom">
                <li className="listitem">
                  <a
                    href="https://leetcode.com/support"
                    className="btnleft"
                    style={{ marginLeft: "0px" }}
                  >
                    Help Center
                  </a>
                </li>

                <li className="listitem">
                  <a href="https://leetcode.com/jobs" className="btnleft">
                    Jobs
                  </a>
                </li>

                <li className="listitem">
                  <a href="https://leetcode.com/jobs" className="btnleft">
                    Bug Bounty
                  </a>
                </li>

                <li className="listitem">
                  <a href="https://leetcode.com/interview/" className="btnleft">
                    Online Interview
                  </a>
                </li>

                <li className="listitem">
                  <a href="https://leetcode.com/student" className="btnleft">
                    Students
                  </a>
                </li>

                <li className="listitem">
                  <a href="https://leetcode.com/terms" className="btnleft">
                    Terms
                  </a>
                </li>

                <li className="listitem2">
                  <a href="https://leetcode.com/privacy" className="btnleft">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <a href="https://leetcode.com/region/" className="region">
          <img
            alt="USA"
            src="https://leetcode.com/static/images/region/us.svg"
            height="18px"
            style={{ marginRight: "10px" }}
          />
          <span className="region-text">United States </span>
        </a>
      </div>
    </div>
  );
}
