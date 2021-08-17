import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Badges from "./r1-Badges";
import ContestRating from "./r1-ContestRating";
import ProblemsSolved from "./r1-ProblemsSolved";
import NoOfSubmissions from "./r2-dddd-submissions_in_the_last_year";
import RecentPosts from "./r3-RecentPosts";
import MostRecentSubmissions from "./r4-MostRecentSubmissions";

// import { userData } from "./data/akshay";

const useStyles = makeStyles((theme) => ({
    threeCardsFlexWrapper: {
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "-12px",
    },
}));
export default function App({getUserProfile}) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.threeCardsFlexWrapper}>
                <ContestRating />
                <ProblemsSolved getUserProfile={getUserProfile}/>
                <Badges getUserProfile={getUserProfile}/>
            </div>
            <NoOfSubmissions getUserProfile={getUserProfile}/>
            <RecentPosts />
            <MostRecentSubmissions />
        </>
    );
}
