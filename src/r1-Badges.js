import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import UserDataCard from "./_SquareCard";

const useStyles = makeStyles((theme) => ({
  eachCardHeading: {
    fontWeight: "500",
    fontSize: "12px",
    color: "rgba(60, 60, 67, 0.6)",
    whiteSpace: "pre-wrap"
  },

  badgeImgContainer: {
    display: "flex",
    justifyContent: "center",
    height: "90px",
    opacity: "0.3"
  }
}));

export default function Badges({getUserProfile}) {
  const classes = useStyles();
  let badges = (getUserProfile.data.matchedUser.badges = []
    ? 0
    : getUserProfile.data.matchedUser.badges);
  let badgeImg = getUserProfile.data.matchedUser.upcomingBadges[0].icon;
  let badgeUpc = getUserProfile.data.matchedUser.upcomingBadges[0].name;
  let badgeIcon = `https://leetcode.com${badgeImg}`;

  return (
    <UserDataCard>
      <div style={{ padding: "0px", height: "45.2px" }}>
        <div>
          <span className={classes.eachCardHeading}>
            Badges{"\n"}
            <span
              style={{
                fontSize: "22px",
                fontWeight: "600",
                display: "flex",
                color: "black"
              }}
            >
              {" "}
              {badges}
            </span>
          </span>
        </div>
      </div>
      <div className={classes.badgeImgContainer}>
        <img src={badgeIcon} alt="Jul LeetCoding Challenge" height="72px" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <span
            style={{
              fontSize: "12px",
              color: "rgba(60, 60, 67, 0.6)",
              whiteSpace: "pre-wrap"
            }}
          >
            Upcoming Badge{"\n"}
            <span
              style={{
                fontSize: "14px",
                color: "rgba(38, 38, 38, 0.75)",
                fontWeight: "600"
              }}
            >
              {badgeUpc}
            </span>
          </span>
        </div>
      </div>
    </UserDataCard>
  );
}
