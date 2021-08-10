import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ContestRating from "./RightContentPanel_Components/ContestRating";
import ProblemsSolved from "./RightContentPanel_Components/ProblemsSolved";
import Badges from "./RightContentPanel_Components/Badges";
import NoOfSubmissions from "./RightContentPanel_Components/NoOfSubmissionsPastYear";
import RecentPosts from "./RightContentPanel_Components/RecentPosts";
import MostRecentSubmissions from "./RightContentPanel_Components/MostRecentSubmissions";

// import { userData } from "./data/akshay";

const useStyles = makeStyles((theme) => ({
  threeCardsFlexWrapper: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "-12px"
  }
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
