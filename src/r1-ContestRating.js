import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Highchart from "./helpers/contestRating_graph";
import UserDataCard from "./_SquareCard";

import { getContestRankingData as getContestRankingDataDefault } from "./data/getContestRankingData";
import { requests } from "./services/urls";

// let getContestRankingData = getContestRankingDataDefault || {};
let { url, method, headers, body } = requests.getContestRankingData;
// console.log(url, method, headers, body);

const fetchData = async () => {
    // console.log("100");
    const response = await fetch(
        url, //
        {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, *cors, same-origin
            // mode: 'no-cors', // no-cors, *cors, same-origin
            // mode: 'same-origin', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: headers,
            // {
            //   'Content-Type': 'application/json'
            //   // 'Content-Type': 'application/x-www-form-urlencoded',
            // },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
            body: JSON.stringify(body), // body data type must match "Content-Type" header
        }
    );

    let resp = await response.json();
    // console.log("101", resp);
    // console.log(resp); // parses JSON response into native JavaScript objects
    // console.log(getContestRankingData?.data?.userContestRanking?.rating);
    // console.log(resp?.data?.userContestRanking?.rating);
    return resp;
};

// console.log(requests);

const useStyles = makeStyles((theme) => ({
    eachCardHeading: {
        fontWeight: "500",
        fontSize: "12px",
        color: "rgba(60, 60, 67, 0.6)",
        whiteSpace: "pre-wrap",
    },
}));

export default function ContestRating() {
    const classes = useStyles();

    const [getContestRankingData, set_getContestRankingData] = useState(getContestRankingDataDefault); //

    console.log("yyy", getContestRankingDataDefault);

    let rating = getContestRankingData.data.userContestRanking.rating;
    let globalRanking = getContestRankingData.data.userContestRanking.globalRanking;
    let attendedContestsCount = getContestRankingData.data.userContestRanking.attendedContestsCount;

    rating = Math.round(rating);
    rating = rating.toLocaleString();
    globalRanking = globalRanking.toLocaleString();

    useEffect(async () => {
        // let a = await fetchData();
        // set_getContestRankingData(a);
    });

    return (
        <UserDataCard>
            <div style={{ padding: "0px", height: "45.2px" }}>
                <span className={classes.eachCardHeading}>Contest Rating{"\n"}</span>
                <span style={{ fontSize: "22px", fontWeight: "600" }}> {rating} </span>
                <span style={{ fontSize: "12px", fontWeight: "600" }}>pt</span>
            </div>

            <div>
                <Highchart />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <span
                        style={{
                            fontSize: "12px",
                            color: "rgba(60, 60, 67, 0.6)",
                            whiteSpace: "pre-wrap",
                        }}
                    >
                        Ranking{"\n"}
                    </span>
                    <span
                        style={{
                            fontSize: "14px",
                            color: "rgba(38, 38, 38, 0.75)",
                            fontWeight: "600",
                        }}
                    >
                        {globalRanking}
                    </span>
                </div>
                <div>
                    <span
                        style={{
                            fontSize: "12px",
                            color: "rgba(60, 60, 67, 0.6)",
                            whiteSpace: "pre-wrap",
                        }}
                    >
                        Attended{"\n"}
                    </span>
                    <span
                        style={{
                            fontSize: "14px",
                            color: "rgba(38, 38, 38, 0.75)",
                            fontWeight: "600",
                            float: "right",
                        }}
                    >
                        {attendedContestsCount}
                    </span>
                </div>
            </div>
        </UserDataCard>
    );
}
