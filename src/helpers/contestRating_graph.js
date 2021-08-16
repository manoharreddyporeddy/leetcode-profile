import React from "react";
import "../css/contestRating_graph.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { getContestRankingData as ContestRankingData } from "../data/getContestRankingData";

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
            pointInterval: 3600000, // one hour
            pointStart: Date.UTC(2018, 1, 13, 0, 0, 0),
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
    let { userContestRankingHistory } = props;

    if (!userContestRankingHistory) {
        userContestRankingHistory = ContestRankingData.data.userContestRankingHistory;
    }
    let ratingData = userContestRankingHistory.map((item) => Math.round(item.rating));
    highchart_data.series[0].data = ratingData;

    return (
        <div>
            <HighchartsReact containerProps={{ className: "dimensions" }} highcharts={Highcharts} options={highchart_data} />
        </div>
    );
};

export default Highchart;
