import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Percentage_circle from "./helpers/ProblemsSolved-percentage_circle";
import UserDataCard from "./_SquareCard";

import { getUserProfile as UserProfile } from "./data/getUserProfile";

const useStyles = makeStyles((theme) => ({
  eachCardHeading: {
    fontWeight: "500",
    fontSize: "12px",
    color: "rgba(60, 60, 67, 0.6)",
    whiteSpace: "pre-wrap",
  },
}));

export default function ProblemsSolved({ getUserProfile }) {
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

  const [easyPercentHover, set_easyPercentHover] = useState(false);
  const [mediumPercentHover, set_mediumPercentHover] = useState(false);
  const [hardPercentHover, set_hardPercentHover] = useState(false);

  return (
    <UserDataCard>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            flex: "1",
          }}
        >
          <span className={classes.eachCardHeading}>Problems Solved{"\n"}</span>
          <span style={{ fontSize: "22px", fontWeight: "600" }}>
            {" "}
            {totalCount}
          </span>
        </div>
        <Percentage_circle
          getUserProfile={getUserProfile}
          easyPercentHover={easyPercentHover}
          set_easyPercentHover={set_easyPercentHover}
          mediumPercentHover={mediumPercentHover}
          set_mediumPercentHover={set_mediumPercentHover}
          hardPercentHover={hardPercentHover}
          set_hardPercentHover={set_hardPercentHover}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          onMouseEnter={() => set_easyPercentHover(true)}
          onMouseLeave={() => set_easyPercentHover(false)}
        >
          <span
            style={{
              fontSize: "12px",
              color: "rgb(67, 160, 71)",
              whiteSpace: "pre-wrap",
            }}
          >
            Easy{"\n"}
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "rgba(38, 38, 38, 0.75)",
              fontWeight: "600",
            }}
          >
            {subCountE}
            <span
              style={{
                fontWeight: "500",
                color: "rgba(60, 60, 67, 0.3)",
                fontSize: "12px",
              }}
            >
              /{countEasy}
            </span>
          </span>
        </div>
        <div
          onMouseEnter={() => set_mediumPercentHover(true)}
          onMouseLeave={() => set_mediumPercentHover(false)}
        >
          <span
            style={{
              fontSize: "12px",
              color: "rgb(251, 140, 0)",
              whiteSpace: "pre-wrap",
            }}
          >
            Medium{"\n"}
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "rgba(38, 38, 38, 0.75)",
              fontWeight: "600",
            }}
          >
            {subCountM}
            <span
              style={{
                fontWeight: "500",
                color: "rgba(60, 60, 67, 0.3)",
                fontSize: "12px",
              }}
            >
              /{countMedium}
            </span>
          </span>
        </div>
        <div
          onMouseEnter={() => set_hardPercentHover(true)}
          onMouseLeave={() => set_hardPercentHover(false)}
        >
          <span
            style={{
              fontSize: "12px",
              color: "rgb(233, 30, 99)",
              whiteSpace: "pre-wrap",
            }}
          >
            Hard{"\n"}
          </span>

          <span
            style={{
              fontSize: "14px",
              color: "rgba(38, 38, 38, 0.75)",
              fontWeight: "600",
            }}
          >
            {subCountH}
            <span
              style={{
                fontWeight: "500",
                color: "rgba(60, 60, 67, 0.3)",
                fontSize: "12px",
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
