import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import UserDataCard from "./userDataCard";

const useStyles = makeStyles((theme) => ({
  eachCardHeading: {
    fontWeight: "500",
    fontSize: "12px",
    color: "rgba(60, 60, 67, 0.6)",
    whiteSpace: "pre-wrap"
  },

  badgeImgContainer: {
    display: "flex",
    justifyContent: "center",
    height: "90px",
    opacity: "0.3"
  }
}));

export default function Badges() {
  const classes = useStyles();

  return (
    <UserDataCard>
      <div style={{ padding: "0px", height: "45.2px" }}>
        <div>
          <span className={classes.eachCardHeading}>
            Badges{"\n"}
            <span
              style={{
                fontSize: "22px",
                fontWeight: "600",
                display: "flex",
                color: "black"
              }}
            >
              {" "}
              0
            </span>
          </span>
        </div>
      </div>
      <div className={classes.badgeImgContainer}>
        <img
          src="https://leetcode.com/static/images/badges/dcc-2021-8.png"
          alt="Jul LeetCoding Challenge"
          height="72px"
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <span
            style={{
              fontSize: "12px",
              color: "rgba(60, 60, 67, 0.6)",
              whiteSpace: "pre-wrap"
            }}
          >
            Upcoming Badge{"\n"}
            <span
              style={{
                fontSize: "14px",
                color: "rgba(38, 38, 38, 0.75)",
                fontWeight: "600"
              }}
            >
              Aug LeetCoding Challenge
            </span>
          </span>
        </div>
      </div>
    </UserDataCard>
  );
}
