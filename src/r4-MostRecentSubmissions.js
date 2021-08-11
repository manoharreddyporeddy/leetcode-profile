import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";

import { userData } from "./data/pgmreddy";

const useStyles = makeStyles((theme) => ({
    recentPostsListItems: {
        textDecoration: "none",
        padding: "12px 0px",
        display: "flex",
        flex: "1",
        alignItems: "center",
        justifyContent: "space-between",
    },

    iconContainer: {
        display: "flex",
        flex: "1",
        alignItems: "center",
        marginRight: "10px",
        color: "rgb(119, 119, 119)",
    },

    badge: {
        color: "rgb(255, 255, 255)",
        fontSize: "12px",
        fontWeight: "700",
        padding: "1px 7px",
        borderRadius: "10px",
    },
}));

export default function MostRecentSubmissions() {
    const classes = useStyles();
    const recentSubmissions = userData.recentSubmissions;

    return (
        <div style={{ marginBottom: "15px" }}>
            <Card>
                <div style={{ height: "27.8px", padding: "9px 12px 0px 12px" }}>
                    <div style={{ fontWeight: 600 }}>Most Recent Submissions</div>
                </div>
                <Divider />
                <div style={{ paddingLeft: "12px", paddingRight: "12px" }}>
                    <ul style={{ listStyleType: "none", margin: "0px", padding: "0px" }}>
                        {recentSubmissions.map((item, index) => {
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
                                                {item.time}
                                            </span>
                                        </span>
                                        <span style={{ display: "flex", minWidth: "141.738px" }}>
                                            <span className={classes.iconContainer} style={{ marginRight: "4px" }}>
                                                <span className={classes.badge} style={{ backgroundColor: "rgb(64, 196, 255)" }}>
                                                    JavaScript
                                                </span>
                                            </span>
                                            <span className={classes.iconContainer} style={{ marginRight: "0px" }}>
                                                <span className={classes.badge} style={{ backgroundColor: "rgb(76, 175, 80)" }}>
                                                    Accepted
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
