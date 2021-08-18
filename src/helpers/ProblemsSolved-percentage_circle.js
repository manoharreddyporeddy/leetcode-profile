import React from "react";
import "../css/ProblemsSolved_circle.css";

import { getUserProfile as UserProfile } from "../data/getUserProfile";

const Percentage_circle = ({getUserProfile}) => {
  let acSubmissionNum = getUserProfile.data.matchedUser.submitStats.acSubmissionNum;
  let totalSubmissionNum =
    getUserProfile.data.matchedUser.submitStats.totalSubmissionNum;
  let totalAcSubmissions = acSubmissionNum[0].submissions;
  let totalAcCount = acSubmissionNum[0].count;
  let totalSubmissions = totalSubmissionNum[0].submissions;
  let totalAcEasyCount = acSubmissionNum[1].count;
  let totalAcMediumCount = acSubmissionNum[2].count;
  let totalAcHardCount = acSubmissionNum[3].count;

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

  let easyRotateLength = easyLength + (2*((easyLength*54/50.625)-easyLength));
  let mediumRotateLength = easyRotateLength + mediumLength + (2*((mediumLength*54/50.625)-mediumLength));

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
        style={{ strokeDasharray: `${easyLength}, 318.086px` }}
        className="easyCircle"
      ></circle>
      <circle
        from="0"
        to="62.3222457646164"
        cx="54"
        cy="54"
        r="50.625"
        transform={`rotate(${easyRotateLength} 54 54)`}
        data-difficulty="Medium"
        style={{ strokeDasharray: `${mediumLength}, 318.086px` }}
        className="mediumCircle"
      ></circle>
      <circle
        from="0"
        to="4.046898933536469"
        cx="54"
        cy="54"
        r="50.625"
        transform={`rotate(${mediumRotateLength} 54 54)`}
        data-difficulty="Hard"
        style={{ strokeDasharray: `${hardLength}, 318.086px` }}
        className="hardCircle"
      ></circle>
    </svg>
    <div className="circleTextContainer">
      <div>
        <div size="108" className="circelPercentage">
          <span>{perncentageInt}</span>
          <span size="108" style={{ fontSize: "13.5px" }}>
            .{perncentageDecimal}%
          </span>
        </div>
        <div>Acceptance</div>
      </div>
    </div>
  </div>
);
}

export default Percentage_circle;
