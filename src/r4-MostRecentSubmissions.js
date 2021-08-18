import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import TimeAgo from "react-timeago";

import { getRecentSubmissionList as getRecentSubmissionListDefault } from "./data/getRecentSubmissionList";
import { requests } from "./services/requests";

const useStyles = makeStyles(() => ({
    recentPostsListItems: {
        textDecoration: "none",
        padding: "12px 0px",
        display: "flex",
        flex: "1",
        alignItems: "center",
        justifyContent: "space-between",
    },

    iconContainer: {
        display: "inline-flex",
        flex: "1 1 0px",
        alignItems: "center",
        marginRight: "10px",
        color: "rgb(119, 119, 119)",
    },

    badge: {
        display: "inline-block",
        whiteSpace: "nowrap",
        color: "rgb(255, 255, 255)",
        fontSize: "12px",
        fontWeight: "700",
        padding: "1px 7px",
        borderRadius: "10px",
    },
}));

const fetchData = async (username) => {
    let { url, method, headers, body } = JSON.parse(JSON.stringify(requests.getRecentSubmissionList));

    console.log(body);
    body.username = body.username.replace("{USER_NAME}", username || "pgmreddy");
    console.log(body);

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
    return resp;
};

export default function MostRecentSubmissions() {
    const classes = useStyles();

    let { username } = useParams();
    // alert(username);

    const [getRecentSubmissionList, set_getRecentSubmissionList] = useState(getRecentSubmissionListDefault); //

    useEffect(async () => {
        console.log("-----------------------");
        let a = await fetchData(username);
        console.log(a);
        set_getRecentSubmissionList(a);
    }, [username]);

    let recentSubmissionList = getRecentSubmissionList.data.recentSubmissionList;
    let languageList = getRecentSubmissionList.data.languageList;

    for (let i = 0; i < recentSubmissionList.length; i++) {
        for (let j = 0; j < languageList.length; j++) {
            if (recentSubmissionList[i].lang === languageList[j].name) {
                recentSubmissionList[i].lang = languageList[j].verboseName;
            }
        }
    }

    if (recentSubmissionList.length == 0) {
        return "";
    } else {
        return (
            <div style={{ margin: "12px 0px 15px 0px" }}>
                <Card>
                    <div style={{ height: "27.8px", padding: "9px 12px 0px 12px" }}>
                        <div style={{ fontWeight: 600 }}>Most Recent Submissions</div>
                    </div>
                    <Divider />
                    <div style={{ paddingLeft: "12px", paddingRight: "12px" }}>
                        <ul style={{ listStyleType: "none", margin: "0px", padding: "0px" }}>
                            {recentSubmissionList.map((item, index) => {
                                var unixTimestamp = item.timestamp;
                                let milliseconds = unixTimestamp * 1000;
                                const dateObject = new Date(milliseconds);
                                var statusColor = "rgb(233, 30, 99)";
                                if (recentSubmissionList[index].statusDisplay === "Accepted") {
                                    statusColor = "rgb(76, 175, 80)";
                                }

                                return (
                                    <li key={index}>
                                        <a className={classes.recentPostsListItems} href="https://leetcode.com/problems/number-of-provinces/discuss/1346298/547-graph-dfs">
                                            <span style={{ display: "flex" }}>
                                                <span
                                                    style={{
                                                        fontWeight: "700",
                                                        color: "rgb(85, 85, 85)",
                                                    }}
                                                >
                                                    {item.title}
                                                </span>
                                                <span
                                                    style={{
                                                        color: "rgb(119, 119, 119)",
                                                        marginLeft: "8px",
                                                        marginRight: "8px",
                                                    }}
                                                >
                                                    <TimeAgo date={dateObject} />
                                                </span>
                                            </span>
                                            <span style={{ display: "flex", minWidth: "141.738px" }}>
                                                <span className={classes.iconContainer} style={{ marginRight: "4px" }}>
                                                    <span className={classes.badge} style={{ backgroundColor: "rgb(64, 196, 255)" }}>
                                                        {item.lang}
                                                    </span>
                                                </span>
                                                <span className={classes.iconContainer} style={{ marginRight: "0px" }}>
                                                    <span className={classes.badge} style={{ backgroundColor: statusColor }}>
                                                        {item.statusDisplay}
                                                    </span>
                                                </span>
                                            </span>
                                        </a>
                                        <Divider />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </Card>
            </div>
        );
    }
}
