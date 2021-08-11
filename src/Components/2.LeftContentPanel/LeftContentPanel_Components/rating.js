import { makeStyles } from "@material-ui/core/styles";

import React from "react";

import StarIcon from "@material-ui/icons/Star";

import { userData } from "../../2.LeftContentPanel/data/pgmreddy";

const useStyles = makeStyles((theme) => ({
  ratingList: {
    position: "absolute",
    display: "flex",
    width: "50.5%",
    gap: "5px",
    overflow: "hidden"
  },

  ratingListBackground: {
    position: "absolute",
    display: "flex",
    gap: "5px"
  }
}));

export default function Rating() {
  const classes = useStyles();
  const starClasses = userData.starClasses;

  return (
    <div
      style={{
        width: "70%",
        margin: "5px 0px",
        position: "relative"
      }}
    >
      <div className={classes.ratingListBackground}>
        {starClasses.map((item, index) => {
          return (
            <div>
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
      <div className={classes.ratingList}>
        {starClasses.map((item, index) => {
          return (
            <div>
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
