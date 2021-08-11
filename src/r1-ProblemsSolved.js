import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Percentage_circle from "./helpers/ProblemsSolved-percentage_circle";
import UserDataCard from "./_SquareCard";

import { getUserProfile as UserProfile } from "./data/getUserProfile";

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
  let countEasy = UserProfile.data.allQuestionsCount[1].count;
  let countMedium = UserProfile.data.allQuestionsCount[2].count;
  let countHard = UserProfile.data.allQuestionsCount[3].count;
  let totalCount =
    UserProfile.data.matchedUser.submitStats.acSubmissionNum[0].count;
  let subCountE =
    UserProfile.data.matchedUser.submitStats.acSubmissionNum[1].count;
  let subCountM =
    UserProfile.data.matchedUser.submitStats.acSubmissionNum[2].count;
  let subCountH =
    UserProfile.data.matchedUser.submitStats.acSubmissionNum[3].count;

  return (
    <UserDataCard>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ padding: "0px", height: "45.2px" }}>
          <span className={classes.eachCardHeading}>Problems Solved{"\n"}</span>
          <span style={{ fontSize: "22px", fontWeight: "600" }}>
            {" "}
            {totalCount}
          </span>
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
            {subCountE}
            <span
              style={{
                fontWeight: "500",
                color: "rgba(60, 60, 67, 0.3)",
                fontSize: "12px"
              }}
            >
              /{countEasy}
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
            {subCountM}
            <span
              style={{
                fontWeight: "500",
                color: "rgba(60, 60, 67, 0.3)",
                fontSize: "12px"
              }}
            >
              /{countMedium}
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
            {subCountH}
            <span
              style={{
                fontWeight: "500",
                color: "rgba(60, 60, 67, 0.3)",
                fontSize: "12px"
              }}
            >
              /{countHard}
            </span>
          </span>
        </div>
      </div>
    </UserDataCard>
  );
}
