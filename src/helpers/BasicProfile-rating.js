import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import { Tooltip } from "@material-ui/core";

import { userData } from "../data/pgmreddy-lcp";

const useStyles = makeStyles((theme) => ({
  ratingList: {
    position: "absolute",
    display: "flex",
    gap: "5px",
    overflow: "hidden",
  },

  ratingListBackground: {
    position: "absolute",
    display: "flex",
    gap: "5px",
  },
}));

const BlackTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "rgba(33, 33, 33, 0.9)",
    color: "#fff",
    fontSize: "12px",
    padding: "10px",
    borderRadius: "3px",
    lineHeight: "1",
    borderColor: "rgba(33, 33, 33, 0.9)",
  },
  arrow: {
    color: "rgba(33, 33, 33, 0.9)",
    borderColor: "rgba(33, 33, 33, 0.9)",
  },
}))(Tooltip);

export default function Rating({ getUserProfile }) {
  const classes = useStyles();
  const starClasses = userData.starClasses;
  let starRating = getUserProfile.data.matchedUser.profile.starRating;
  starRating = starRating * 20.1;
  let ranking = getUserProfile.data.matchedUser.profile.ranking;
  ranking = `Ranking: ${ranking}`;

  return (
    <BlackTooltip title={ranking} placement="bottom" arrow>
      <div
        style={{
          margin: "5px 0px",
          position: "relative",
          width: "100px",
          height: "15px",
          cursor: "pointer",
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
                    color: "#e0e0e0",
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
                    color: "#f9a825",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </BlackTooltip>
  );
}
