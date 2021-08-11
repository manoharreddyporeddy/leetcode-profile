import React from "react";

import "./contestRating_graph.css";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { highchart_data } from "./contestRating_graph_data";

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
