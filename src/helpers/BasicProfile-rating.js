import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";

import { userData } from "../data/pgmreddy-lcp";

const useStyles = makeStyles((theme) => ({
  ratingList: {
    position: "absolute",
    display: "flex",
    gap: "5px",
    overflow: "hidden"
  },

  ratingListBackground: {
    position: "absolute",
    display: "flex",
    gap: "5px"
  }
}));

export default function Rating({getUserProfile}) {
  const classes = useStyles();
  const starClasses = userData.starClasses;
  let starRating = getUserProfile.data.matchedUser.profile.starRating;
  starRating = starRating * 20;

  return (
    <div
      style={{
        margin: "5px 0px",
        position: "relative",
        width: "100px"
      }}
    >
      <div className={classes.ratingListBackground}>
        {starClasses.map((item, index) => {
          return (
            <div key={index}>
              <StarIcon
                style={{
                  height: "1rem",
                  width: "1rem",
                  color: "#e0e0e0"
                }}
              />
            </div>
          );
        })}
      </div>
      <div className={classes.ratingList} style={{ width: `${starRating}%` }}>
        {starClasses.map((item, index) => {
          return (
            <div key={index}>
              <StarIcon
                style={{
                  height: "1rem",
                  width: "1rem",
                  color: "#f9a825"
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
