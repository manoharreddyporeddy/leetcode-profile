import React from "react";

import "./highchart.css";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { highchart_data } from "./highchart_data";

const Highchart = () => (
  <div>
    <HighchartsReact
      containerProps={{ className: "dimensions" }}
      highcharts={Highcharts}
      options={highchart_data}
    />
  </div>
);

export default Highchart;
