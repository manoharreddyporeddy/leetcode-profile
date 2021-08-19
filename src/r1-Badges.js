import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import UserDataCard from "./_SquareCard";

const useStyles = makeStyles((theme) => ({
  eachCardHeading: {
    fontWeight: "500",
    fontSize: "12px",
    color: "rgba(60, 60, 67, 0.6)",
    whiteSpace: "pre-wrap",
  },

  badgeImgContainer: {
    display: "flex",
    justifyContent: "center",
    height: "94px",
    alignItems: "center",
  },
}));

export default function Badges({ getUserProfile }) {
  const classes = useStyles();
  let badges = getUserProfile.data.matchedUser.badges;
  let badgesCount = badges === [] ? 0 : badges.length;
  let badgeImg = getUserProfile.data.matchedUser.upcomingBadges[0].icon;
  let badgeUpc = getUserProfile.data.matchedUser.upcomingBadges[0].name;
  let badgeIcon = `https://leetcode.com${badgeImg}`;

  var badge;
  var badgeOpacity = "1";
  var badgeDetailHeading;
  var badgeDetail;
  if (badgesCount === 0) {
    badge = (
      <img src={badgeIcon} alt="Jul LeetCoding Challenge" height="72px" />
    );
    badgeOpacity = "0.2";
    badgeDetailHeading = "Upcoming Badges";
    badgeDetail = badgeUpc;
  } else {
    let badge1 = badges[0].icon;
    let badge2 = badges[1].icon;
    let badge3 = badges[2].icon;
    let badge1Icon = `https://leetcode.com${badge1}`;
    let badge2Icon = `https://leetcode.com${badge2}`;
    let badge3Icon = `https://leetcode.com${badge3}`;
    badgeDetailHeading = "Most Recent Badge";
    badgeDetail = badges[0].displayName;

    badge = (
      <>
        <img src={badge2Icon} alt="JuN LeetCoding Challenge" height="46px" />
        <img
          src={badge1Icon}
          alt="Jul LeetCoding Challenge"
          height="72px"
          style={{ marginLeft: "20px" }}
        />
        <img
          src={badge3Icon}
          alt="JuN LeetCoding Challenge"
          height="46px"
          style={{ marginLeft: "20px" }}
        />
      </>
    );
  }

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
                color: "black",
              }}
            >
              {" "}
              {badgesCount}
            </span>
          </span>
        </div>
      </div>
      <div
        className={classes.badgeImgContainer}
        style={{ opacity: badgeOpacity }}
      >
        {badge}
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
            {badgeDetailHeading}
            {"\n"}
            <span
              style={{
                fontSize: "14px",
                color: "rgba(38, 38, 38, 0.75)",
                fontWeight: "600",
              }}
            >
              {badgeDetail}
            </span>
          </span>
        </div>
      </div>
    </UserDataCard>
  );
}
