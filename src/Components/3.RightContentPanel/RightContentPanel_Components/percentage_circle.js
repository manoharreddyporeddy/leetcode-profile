import React from "react";
import "./circle.css";

const Percentage_circle = () => (
  <div size="108" class="main">
    <div radius="52.3125" class="main2"></div>
    <svg
      from="0"
      height="108"
      width="108"
      size="108"
      viewBox="0 0 108 108"
      class="svg1"
    >
      <circle
        cx="54"
        cy="54"
        r="50.625"
        size="108"
        class="circle1"
        style={{ strokeWidth: "3.375px" }}
      ></circle>
      <circle
        from="0"
        to="70.73979335821748"
        cx="54"
        cy="54"
        r="50.625"
        size="108"
        transform="rotate(0 54 54)"
        data-difficulty="Easy"
        class="circle2"
        // style={{ strokeWidth: "3.375px" }}
      ></circle>
      <circle
        from="0"
        to="62.32224357646164"
        cx="54"
        cy="54"
        r="50.625"
        size="108"
        transform="rotate(80.06106870229007 54 54)"
        data-difficulty="Medium"
        class="circle3"
      ></circle>
      <circle
        from="0"
        to="4.046898933536469"
        cx="54"
        cy="54"
        r="50.625"
        size="108"
        transform="rotate(150.59541984732823 54 54)"
        data-difficulty="Hard"
        class="circle4"
      ></circle>
    </svg>
    <div class="text">
      <div>
        <div size="108" class="percent">
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
