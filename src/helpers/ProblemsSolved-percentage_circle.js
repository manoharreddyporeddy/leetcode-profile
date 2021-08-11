import React from "react";
import "../css/ProblemsSolved_circle.css";

const Percentage_circle = () => (
  <div size="108" className="cicleContainer">
    <div radius="52.3125" className="backgroundCircle"></div>
    <svg viewBox="0 0 108 108" className="svgCircle">
      <circle
        from="0"
        to="70.73979335821748"
        cx="54"
        cy="54"
        r="50.625"
        transform="rotate(0 54 54)"
        data-difficulty="Easy"
        className="easyCircle"
      ></circle>
      <circle
        from="0"
        to="62.32224357646164"
        cx="54"
        cy="54"
        r="50.625"
        transform="rotate(80.06106870229007 54 54)"
        data-difficulty="Medium"
        className="mediumCircle"
      ></circle>
      <circle
        from="0"
        to="4.046898933536469"
        cx="54"
        cy="54"
        r="50.625"
        transform="rotate(150.59541984732823 54 54)"
        data-difficulty="Hard"
        className="hardCircle"
      ></circle>
    </svg>
    <div className="circleTextContainer">
      <div>
        <div size="108" className="circelPercentage">
          <span>86</span>
          <span size="108" style={{ fontSize: "13.5px" }}>
            .7%
          </span>
        </div>
        <div>Acceptance</div>
      </div>
    </div>
  </div>
);

export default Percentage_circle;
