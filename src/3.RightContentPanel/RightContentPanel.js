import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ContestRating from "./ContestRating";
import ProblemsSolved from "./ProblemsSolved";
import Badges from "./Badges";
import NoOfSubmissions from "./NoOfSubmissionsPastYear";
import RecentPosts from "./RecentPosts";
import MostRecentSubmissions from "./MostRecentSubmissions";

// import { userData } from "./data/akshay";

const useStyles = makeStyles((theme) => ({
    threeCardsFlexWrapper: {
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "-12px",
    },
}));
export default function App() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.threeCardsFlexWrapper}>
                <ContestRating />
                <ProblemsSolved />
                <Badges />
            </div>
            <NoOfSubmissions />
            <RecentPosts />
            <MostRecentSubmissions />
        </>
    );
}
