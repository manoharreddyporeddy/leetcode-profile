import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { highchart_data } from "./highchart_data";
import "./highchart.css";

const Highchart = () => (
  <div className="high">
    <HighchartsReact
      containerProps={{ className: "high" }}
      highcharts={Highcharts}
      options={highchart_data}
    />
  </div>
);

export default Highchart;
