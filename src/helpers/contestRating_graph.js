import React from "react";
import "../css/contestRating_graph.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { highchart_data } from "../data/contestRating_graph_data";

console.log(highchart_data)
// getContestRankingData

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
