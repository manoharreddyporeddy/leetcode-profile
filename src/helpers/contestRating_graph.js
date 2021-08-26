import React from "react";
import "../css/contestRating_graph.css";
import Highcharts, { getOptions } from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { getContestRankingData as ContestRankingData } from "../data/getContestRankingData";

const Highchart = (props) => {
  let {
    userContestRankingHistory,
    contestRatingRef,
    constestDateRef,
    contestNameRef,
    rankedTitleRef,
    rankingRef,
    rating,
    globalRanking,
    attendedContestsCount,
  } = props;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const highchart_data = {
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
              if (
                contestRatingRef.current &&
                constestDateRef.current &&
                contestNameRef.current &&
                rankedTitleRef.current &&
                rankingRef.current
              ) {
                contestRatingRef.current.innerText = numberWithCommas(this.y);
                constestDateRef.current.innerText = `${new Date(
                  this.x
                ).toLocaleDateString()} \n`;
                contestNameRef.current.innerText = this.title;
                rankedTitleRef.current.innerText = "Ranked\n";
                this.ranking === 0
                  ? (rankingRef.current.innerText = "-")
                  : (rankingRef.current.innerText = this.ranking);
              }
            },
          },
        },
        events: {
          mouseOut: function () {
            if (
              contestRatingRef.current &&
              constestDateRef.current &&
              contestNameRef.current &&
              rankedTitleRef.current &&
              rankingRef.current
            ) {
              contestRatingRef.current.innerText = rating;
              constestDateRef.current.innerText = `Ranking\n`;
              contestNameRef.current.innerText = globalRanking;
              rankedTitleRef.current.innerText = "Attended\n";
              rankingRef.current.innerText = attendedContestsCount;
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

  if (!userContestRankingHistory) {
    userContestRankingHistory =
      ContestRankingData.data.userContestRankingHistory;
  }

  let ratingData = [];
  for (let i = 0; i < userContestRankingHistory.length; i++) {
    ratingData.push({
      x: userContestRankingHistory[i].contest.startTime * 1000,
      y: Math.round(userContestRankingHistory[i].rating),
      title: userContestRankingHistory[i].contest.title,
      ranking: userContestRankingHistory[i].ranking,
    });
  }

  highchart_data.series[0].data = ratingData;
  console.log(
    props.contestRatingRef.current && props.contestRatingRef.current.innerText
  );

  return (
    <div>
      <HighchartsReact
        containerProps={{ className: "dimensions" }}
        highcharts={Highcharts}
        options={highchart_data}
      />
    </div>
  );
};

export default Highchart;
