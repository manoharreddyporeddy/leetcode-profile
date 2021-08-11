import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Highchart from "./helpers/contestRating_graph";
import UserDataCard from "./_SquareCard";

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

    return (
        <UserDataCard>
            <div style={{ padding: "0px", height: "45.2px" }}>
                <span className={classes.eachCardHeading}>Contest Rating{"\n"}</span>
                <span style={{ fontSize: "22px", fontWeight: "600" }}> 1,618</span>
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
                        34,094
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
                        30
                    </span>
                </div>
            </div>
        </UserDataCard>
    );
}
