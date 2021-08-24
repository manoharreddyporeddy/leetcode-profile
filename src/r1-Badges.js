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

export default function Badges({
  getUserProfile,
  badgeButtonClick,
  set_badgeButtonClick,
  handleBadgeButtonClick,
}) {
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
  var badgeButton;
  if (badgesCount === 0) {
    badge = (
      <img src={badgeIcon} alt="Jul LeetCoding Challenge" height="72px" />
    );
    badgeOpacity = "0.2";
    badgeDetailHeading = "Upcoming Badges";
    badgeDetail = badgeUpc;
    badgeButton = <></>;
  } else if (badges[0].displayName === "Guardian") {
    badge = (
      <img
        src={`https://leetcode.com${badges[0].icon}`}
        alt="logo"
        height="72px"
      />
    );
    badgeDetailHeading = "Most Recent Badge";
    badgeDetail = badges[0].displayName;
    badgeButton = <></>;
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

    // const handleBadgeButtonClick = () => set_badgeButton(!badgeButton);
    badgeButton = (
      <svg
        viewBox="0 0 24 24"
        width="32px"
        height="32px"
        style={{
          overflow: "hidden",
          color: "rgba(60, 60, 67, 0.3)",
          fill: "currentColor",
          transform: `scaleX(${badgeButtonClick ? -1 : 1})`,
        }}
        cursor="pointer"
        onClick={handleBadgeButtonClick}
      >
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </svg>
    );
  }
  if (!badgeButtonClick) {
    return (
      <UserDataCard>
        <div style={{ display: "flex" }}>
          <div
            style={{
              flex: "1 1 0%",
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
            }}
          >
            <span className={classes.eachCardHeading}>Badges{"\n"}</span>
            <span
              style={{
                fontSize: "22px",
                fontWeight: "600",
                whiteSpace: "nowrap",
                color: "black",
                lineHeight: "100%",
              }}
            >
              {" "}
              {badgesCount}
            </span>
          </div>
          {badgeButton}
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
  } else {
    return (
      <UserDataCard>
        <div style={{ display: "flex" }}>
          <div
            style={{
              flex: "1 1 0%",
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
            }}
          >
            <span className={classes.eachCardHeading}>Badges{"\n"}</span>
          </div>
          {badgeButton}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {badges.map((item, index) => {
            return (
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "relative",
                    textAlign: "center",
                    margin: "20px 15px 0",
                  }}
                >
                  <img
                    src={`https://leetcode.com${item.icon}`}
                    alt="Jul LeetCoding Challenge"
                    height="60px"
                    style={{ marginLeft: "0 auto", position: "relative" }}
                  />
                  <b
                    style={{
                      color: "rgba(38, 38, 38, 0.75)",
                      marginTop: "10px",
                      fontSize: "14px",
                      fontWeight: "500",
                      width: "105px",
                      display: "block",
                    }}
                  >
                    {item.displayName}
                  </b>
                  <span
                    style={{
                      display: "block",
                      fontSize: "12px",
                      color: "rgba(60, 60, 67, 0.6)",
                      maxWidth: "86px",
                      margin: "4px auto 0",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.creationDate}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </UserDataCard>
    );
  }
}
