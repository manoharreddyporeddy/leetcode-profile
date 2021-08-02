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
        styles={buildStyles({
          pathColor: "rgb(251, 140, 0)",
          trailColor: "#eee",
          strokeLinecap: "butt"
        })}
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
  </div>
);

export function Example(props) {
  return <div style={{ width: "108px", float: "right" }}>{props.children}</div>;
}

export default Chart;
