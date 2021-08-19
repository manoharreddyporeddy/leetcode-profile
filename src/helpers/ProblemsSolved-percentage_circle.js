import React, { useState, useEffect } from "react";
import "../css/ProblemsSolved_circle.css";

const Percentage_circle = ({
  getUserProfile,
  easyPercentHover,
  set_easyPercentHover,
  mediumPercentHover,
  set_mediumPercentHover,
  hardPercentHover,
  set_hardPercentHover,
}) => {
  let acSubmissionNum =
    getUserProfile.data.matchedUser.submitStats.acSubmissionNum;
  let totalSubmissionNum =
    getUserProfile.data.matchedUser.submitStats.totalSubmissionNum;
  let totalAcSubmissions = acSubmissionNum[0].submissions;
  let totalAcCount = acSubmissionNum[0].count;
  let totalSubmissions = totalSubmissionNum[0].submissions;
  let totalAcEasyCount = acSubmissionNum[1].count;
  let totalAcMediumCount = acSubmissionNum[2].count;
  let totalAcHardCount = acSubmissionNum[3].count;

  let rawEasyPercent =
    (acSubmissionNum[1].submissions / totalSubmissionNum[1].submissions) * 100;
  let easyPerncentInt = Math.trunc(rawEasyPercent.toFixed(1));
  let easyPerncentDecimal = Math.trunc(
    (rawEasyPercent.toFixed(1) - easyPerncentInt) * 10
  );

  let rawMediumPercent =
    (acSubmissionNum[2].submissions / totalSubmissionNum[2].submissions) * 100;
  let mediumPerncentInt = Math.trunc(rawMediumPercent.toFixed(1));
  let mediumPerncentDecimal = Math.trunc(
    (rawMediumPercent.toFixed(1) - mediumPerncentInt) * 10
  );

  let rawHardPercent =
    (acSubmissionNum[3].submissions / totalSubmissionNum[3].submissions) * 100;
  let hardPerncentInt = Math.trunc(rawHardPercent.toFixed(1));
  let hardPerncentDecimal = Math.trunc(
    (rawHardPercent.toFixed(1) - hardPerncentInt) * 10
  );

  let rawPerncentage = (totalAcSubmissions / totalSubmissions) * 100;
  let perncentageInt = Math.trunc(rawPerncentage.toFixed(1));
  let perncentageDecimal = Math.trunc(
    (rawPerncentage.toFixed(1) - perncentageInt) * 10
  );

  let allQuestionsCount = getUserProfile.data.allQuestionsCount;
  let totalQuestions = allQuestionsCount[0].count;
  let width = totalAcCount / totalQuestions;
  let length = 318.086 * width;
  let easyLength = length * (totalAcEasyCount / totalAcCount);
  let mediumLength = length * (totalAcMediumCount / totalAcCount);
  let hardLength = length * (totalAcHardCount / totalAcCount);

  let easyRotateLength =
    easyLength + 2 * ((easyLength * 54) / 50.625 - easyLength);
  let mediumRotateLength =
    easyRotateLength +
    mediumLength +
    2 * ((mediumLength * 54) / 50.625 - mediumLength);

  function percentColor() {
    if (easyPercentHover) {
      return "rgb(67, 160, 71)";
    } else if (mediumPercentHover) {
      return "rgb(251, 140, 0)";
    } else if (hardPercentHover) {
      return "rgb(233, 30, 99)";
    } else return "rgb(33, 33, 33)";
  }

  function percentInt() {
    if (easyPercentHover) {
      return easyPerncentInt;
    } else if (mediumPercentHover) {
      return mediumPerncentInt;
    } else if (hardPercentHover) {
      return hardPerncentInt;
    } else return perncentageInt;
  }

  function percentDecimal() {
    if (easyPercentHover) {
      return easyPerncentDecimal;
    } else if (mediumPercentHover) {
      return mediumPerncentDecimal;
    } else if (hardPercentHover) {
      return hardPerncentDecimal;
    } else return perncentageDecimal;
  }

  let easy_strokeWidth = "3.375px";
  let medium_strokeWidth = "3.375px";
  let hard_strokeWidth = "3.375px";

  if (easyPercentHover) {
    easy_strokeWidth = "10px";
  } else if (mediumPercentHover) {
    medium_strokeWidth = "10px";
  } else if (hardPercentHover) {
    hard_strokeWidth = "10px";
  }

  return (
    <div size="108" className="cicleContainer">
      <div radius="52.3125" className="backgroundCircle"></div>
      <svg viewBox="0 0 108 108" className="svgCircle">
        <circle
          from="0"
          cx="54"
          cy="54"
          r="50.625"
          transform="rotate(0 54 54)"
          data-difficulty="Easy"
          style={{
            strokeDasharray: `${easyLength}, 318.086px`,
            strokeWidth: easy_strokeWidth,
          }}
          className="easyCircle"
          onMouseEnter={() => set_easyPercentHover(true)}
          onMouseLeave={() => set_easyPercentHover(false)}
        ></circle>
        <circle
          from="0"
          to="62.3222457646164"
          cx="54"
          cy="54"
          r="50.625"
          transform={`rotate(${easyRotateLength} 54 54)`}
          data-difficulty="Medium"
          style={{
            strokeDasharray: `${mediumLength}, 318.086px`,
            strokeWidth: medium_strokeWidth,
          }}
          className="mediumCircle"
          onMouseEnter={() => set_mediumPercentHover(true)}
          onMouseLeave={() => set_mediumPercentHover(false)}
        ></circle>
        <circle
          from="0"
          to="4.046898933536469"
          cx="54"
          cy="54"
          r="50.625"
          transform={`rotate(${mediumRotateLength} 54 54)`}
          data-difficulty="Hard"
          style={{
            strokeDasharray: `${hardLength}, 318.086px`,
            strokeWidth: hard_strokeWidth,
          }}
          className="hardCircle"
          onMouseEnter={() => set_hardPercentHover(true)}
          onMouseLeave={() => set_hardPercentHover(false)}
        ></circle>
      </svg>
      <div className="circleTextContainer">
        <div>
          <div
            size="108"
            className="circelPercentage"
            style={{ color: percentColor() }}
          >
            <span>{percentInt()}</span>
            <span size="108" style={{ fontSize: "13.5px" }}>
              .{percentDecimal()}%
            </span>
          </div>
          <div>Acceptance</div>
        </div>
      </div>
    </div>
  );
};

export default Percentage_circle;
