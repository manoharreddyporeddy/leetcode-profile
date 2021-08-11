import { getContestRankingData as ContestRankingData } from "./getContestRankingData";

let userContestRankingHistory =
  ContestRankingData.data.userContestRankingHistory;
let ratingData = [];
userContestRankingHistory.forEach((item, index) => {
  ratingData.push(Math.round(item.rating));
});

export const highchart_data = {
  chart: {
    type: "spline",
    scrollablePlotArea: {
      minWidth: 210,
      scrollPositionX: 1
    }
  },
  yAxis: {
    title: null,
    visible: false
  },
  xAxis: {
    visible: false
  },

  title: {
    text: null
  },
  tooltip: {
    valueSuffix: " pt"
  },
  plotOptions: {
    series: {
      color: "rgb(255, 161, 22)"
    },
    spline: {
      lineWidth: 2,
      states: {
        hover: {
          lineWidth: 3
        }
      },
      marker: {
        enabled: false
      },
      pointInterval: 3600000, // one hour
      pointStart: Date.UTC(2018, 1, 13, 0, 0, 0)
    }
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Contest Rating",
      showInLegend: false,
      data: ratingData
    }
  ],
  navigation: {
    menuItemStyle: {
      fontSize: "10px"
    }
  }
};
