import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;

const Chart = () => (
  <div style={{}}>
    <Example>
      <CircularProgressbarWithChildren
        strokeWidth={3}
        value={39}
        text={"86.3%"}
        styles={{
          //   buildStyles({
          //   pathColor: "rgb(251, 140, 0)",
          //   textSize: "20px",
          //   // fontSize: "20px",
          //   textColor: "#000000",
          //   strokeWidth: "3",
          //   trailColor: "#eee",
          //   strokeLinecap: "butt",
          // }),
          path: {
            // Path color
            stroke: "rgb(251, 140, 0)"
          },
          text: {
            // Text color
            fill: "#000",
            // Text size
            fontSize: "24px",
            fontWeight: "500"
            // font: "24px"
          }
        }}
      >
        {/* Foreground path */}
        <CircularProgressbar
          strokeWidth={3}
          value={20}
          styles={buildStyles({
            pathColor: "rgb(67, 160, 71)",
            trailColor: "transparent",
            strokeLinecap: "butt"
          })}
        />
      </CircularProgressbarWithChildren>
    </Example>
    <div
      style={{
        position: "absolute",
        float: "right",
        color: "rgb(158, 158, 158)",
        paddingTop: "60px",
        paddingLeft: "20px"
      }}
    >
      Acceptance
    </div>
  </div>
);

export function Example(props) {
  return <div style={{ width: "108px", float: "right" }}>{props.children}</div>;
}

export default Chart;
