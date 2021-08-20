import React from "react";
import "../css/contestRating_graph.css";
import Highcharts, { getOptions } from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { getContestRankingData as ContestRankingData } from "../data/getContestRankingData";

function m() {}

export const highchart_data = {
  chart: {
    type: "spline",
    scrollablePlotArea: {
      minWidth: 210,
      scrollPositionX: 1,
    },
  },
  yAxis: {
    title: null,
    visible: false,
  },
  xAxis: {
    visible: false,
    crosshair: {
      color: "rgb(255, 161, 22)",
    },
  },
  title: {
    text: null,
  },
  tooltip: {
    enabled: false,
    valueSuffix: " pt",
  },
  plotOptions: {
    series: {
      color: "rgb(255, 161, 22)",
      point: {
        events: {
          mouseOver: function () {
            var chart = this.series.chart;
            if (!chart.lbl) {
              chart.lbl = chart.renderer
                .label("")
                .attr({
                  padding: 10,
                  r: 10,
                  fill: Highcharts.getOptions().colors[1],
                })
                .css({
                  color: "#FFFFFF",
                })
                .add();
            }
            chart.lbl.show().attr({
              text: "x: " + this.x + ", y: " + this.y,
            });
            return 0;
          },
          //   h: mouseOver,
        },
      },
      events: {
        mouseOut: function () {
          if (this.chart.lbl) {
            this.chart.lbl.hide();
          }
        },
      },
    },
    spline: {
      lineWidth: 2,
      states: {
        hover: {
          lineWidth: 3,
        },
      },
      marker: {
        enabled: false,
      },
    },
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      name: "Contest Rating",
      showInLegend: false,
      data: [], // ratingData,
    },
  ],
  navigation: {
    menuItemStyle: {
      fontSize: "10px",
    },
  },
};

// getContestRankingData

const Highchart = (props) => {
  let { userContestRankingHistory, graphHover, set_graphHover } = props;

  if (!userContestRankingHistory) {
    userContestRankingHistory =
      ContestRankingData.data.userContestRankingHistory;
  }

  let ratingData = [];
  for (let i = 0; i < userContestRankingHistory.length; i++) {
    ratingData.push([
      userContestRankingHistory[i].contest.startTime * 1000,
      Math.round(userContestRankingHistory[i].rating),
    ]);
  }

  //   console.log(highchart_data);

  //   console.log(highchart_data.plotOptions.series.point.events.mouseOver);

  //   console.log();

  //   let ratingData = userContestRankingHistory.map((item) =>
  //     Math.round(item.rating)
  //   );
  //   console.log(ratingData);
  highchart_data.series[0].data = ratingData;

  return (
    <div
      onMouseEnter={() => set_graphHover(true)}
      onMouseLeave={() => set_graphHover(false)}
    >
      <HighchartsReact
        containerProps={{ className: "dimensions" }}
        highcharts={Highcharts}
        options={highchart_data}
      />
    </div>
  );
};

export default Highchart;
