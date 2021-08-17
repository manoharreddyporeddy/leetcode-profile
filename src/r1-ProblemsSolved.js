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

export default function ProblemsSolved({getUserProfile}) {
  const classes = useStyles();
  let countEasy = getUserProfile.data.allQuestionsCount[1].count;
  let countMedium = getUserProfile.data.allQuestionsCount[2].count;
  let countHard = getUserProfile.data.allQuestionsCount[3].count;
  let totalCount =
    getUserProfile.data.matchedUser.submitStats.acSubmissionNum[0].count;
  let subCountE =
    getUserProfile.data.matchedUser.submitStats.acSubmissionNum[1].count;
  let subCountM =
    getUserProfile.data.matchedUser.submitStats.acSubmissionNum[2].count;
  let subCountH =
    getUserProfile.data.matchedUser.submitStats.acSubmissionNum[3].count;

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
          <Percentage_circle getUserProfile={getUserProfile}/>
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
