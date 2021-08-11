import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Percentage_circle from "./percentage_circle";

import UserDataCard from "./userDataCard";

import { getUserProfile } from "./../../../data/getUserProfile";

const useStyles = makeStyles((theme) => ({
  eachCardHeading: {
    fontWeight: "500",
    fontSize: "12px",
    color: "rgba(60, 60, 67, 0.6)",
    whiteSpace: "pre-wrap"
  }
}));

export default function ProblemsSolved() {
  const classes = useStyles();

  return (
    <UserDataCard>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ padding: "0px", height: "45.2px" }}>
          <span className={classes.eachCardHeading}>Problems Solved{"\n"}</span>
          <span style={{ fontSize: "22px", fontWeight: "600" }}> 840</span>
        </div>
        <div style={{ margin: "12px 0px 15px 0px" }}>
          <Percentage_circle />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <span
            style={{
              fontSize: "12px",
              color: "rgb(67, 160, 71)",
              whiteSpace: "pre-wrap"
            }}
          >
            Easy{"\n"}
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "rgba(38, 38, 38, 0.75)",
              fontWeight: "600"
            }}
          >
            438
            <span
              style={{
                fontWeight: "500",
                color: "rgba(60, 60, 67, 0.3)",
                fontSize: "12px"
              }}
            >
              {getUserProfile.data.allQuestionsCount.count}
            </span>
          </span>
        </div>
        <div>
          <span
            style={{
              fontSize: "12px",
              color: "rgb(251, 140, 0)",
              whiteSpace: "pre-wrap"
            }}
          >
            Medium{"\n"}
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "rgba(38, 38, 38, 0.75)",
              fontWeight: "600"
            }}
          >
            378
            <span
              style={{
                fontWeight: "500",
                color: "rgba(60, 60, 67, 0.3)",
                fontSize: "12px"
              }}
            >
              /1032
            </span>
          </span>
        </div>
        <div>
          <span
            style={{
              fontSize: "12px",
              color: "rgb(233, 30, 99)",
              whiteSpace: "pre-wrap"
            }}
          >
            Hard{"\n"}
          </span>

          <span
            style={{
              fontSize: "14px",
              color: "rgba(38, 38, 38, 0.75)",
              fontWeight: "600"
            }}
          >
            25
            <span
              style={{
                fontWeight: "500",
                color: "rgba(60, 60, 67, 0.3)",
                fontSize: "12px"
              }}
            >
              /414
            </span>
          </span>
        </div>
      </div>
    </UserDataCard>
  );
}
