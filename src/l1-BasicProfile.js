import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { Tooltip } from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";

import { userData } from "./data/pgmreddy-lcp";

import Rating from "./helpers/BasicProfile-rating";

const useStyles = makeStyles((theme) => ({
  profileCard: {
    borderRadius: "8px",
    marginBottom: "15px",
    boxShadow: "rgb(0 0 0 / 10%) 0px 1px 2px, rgb(0 0 0 / 8%) 0px 2px 8px",
    minWidth: "370px",
  },

  cardTitleContainer: {
    padding: "0.5625rem 0.75rem 0rem",
    height: "27.8px",
  },

  editProfileButton: {
    border: "0px",
    borderRadius: "3px",
    boxShadow: "rgb(38 50 56 / 20%) 0px 0px 0px 1px inset",
    padding: "0px 7px",
    height: "24px",
    float: "right",
    cursor: "pointer",
    color: "rgb(69, 90, 100)",
    background: "rgb(250, 250, 250)",
    fontSize: "12px",
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

export default function BasicProfile({ getUserProfile }) {
  const classes = useStyles();

  const profileDetails = userData.profileDetails;
  let matchedUser = getUserProfile.data.matchedUser;
  let realName = matchedUser.profile.realName;
  let usernameID = matchedUser.username;
  let githubUrl = matchedUser.githubUrl;
  let userAvatar = matchedUser.profile.userAvatar;
  let aboutMe = matchedUser.profile.aboutMe;
  let websites = matchedUser.profile.websites;
  let countryName = matchedUser.profile.countryName;
  let company = matchedUser.profile.company;
  let school = matchedUser.profile.school;

  let items = [
    {
      cName: "linkContainer",
      title: "Website",
      content: websites[0],
      link: websites[0],
      contentClass: "webLink",
      path_d:
        "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z",
    },
    {
      cName: "locationContainer",
      title: "Location",
      content: countryName,
      contentClass: "location",
      path_d:
        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    },
    {
      cName: "locationContainer",
      title: "Company",
      content: company,
      contentClass: "location",
      path_d:
        "M15.588 11.412a3.648 3.648 0 0 1-1.588-.37 5.76 5.76 0 0 0 1.059-3.336A5.76 5.76 0 0 0 14 4.37 3.648 3.648 0 0 1 15.588 4a3.71 3.71 0 0 1 3.706 3.706 3.71 3.71 0 0 1-3.706 3.706zm1.101 2.916c2.605.286 6.311 1.504 6.311 3.643v1.853h-4.235V17.97c0-1.567-.847-2.753-2.076-3.643zM9 13c3.916 0 8 1.56 8 4.667V20H1v-2.333C1 14.56 5.084 13 9 13zm-6 5h12v-.333C15 16.297 12.484 15 9 15s-6 1.296-6 2.667V18zm6-7c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-2c1.101 0 2-.899 2-2s-.899-2-2-2-2 .899-2 2 .899 2 2 2z",
    },
    {
      cName: "locationContainer",
      title: "Education",
      content: school,
      contentClass: "location",
      path_d:
        "M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z",
    },
  ];

  // if(websites.length == 0 && countryName === null) {
  //    items.splice(0, 2);
  // } else if(countryName === null){
  //     items.pop();
  // } else if(websites.length == 0){
  //   items.shift();
  // }

  let items2 = [];
  if (websites.length !== 0) {
    items2.push(items[0]);
  }
  if (countryName !== null) {
    items2.push(items[1]);
  }
  if (company !== null) {
    items2.push(items[2]);
  }
  if (school !== null) {
    items2.push(items[3]);
  }

  return (
    <Card className={classes.profileCard}>
      <div
        className={classes.cardTitleContainer}
        style={{ paddingBottom: "0.2rem" }}
      >
        <span style={{ fontWeight: 600 }}>Basic Profile</span>
        <button className={classes.editProfileButton}>Edit Profile</button>
      </div>

      <Divider />

      <div style={{ padding: "12px 12px 0px 12px", zoom: "1" }}>
        {profileDetails.map((item, index) => {
          var githubTopMargin = "12px";
          var githubOpacity = "1";
          if (githubUrl == null) {
            githubTopMargin = "0px";
            githubOpacity = "50%";
          }

          var aboutMeVisibility = "visible";
          if (aboutMe.length == 0) {
            aboutMeVisibility = "hidden";
          }

          return (
            <div style={{ display: "flex" }} key={index}>
              <img
                src={userAvatar}
                alt="Profile"
                style={{
                  height: "80px",
                  borderRadius: "6px",
                  alignSelf: "flex-start",
                  flexShrink: "0",
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0px 4px 0px 15px",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "18px",
                    color: "rgba(0, 0, 0, 0.65)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {" "}
                  {realName}
                </span>
                <span
                  style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.65)" }}
                >
                  {usernameID}
                  <BlackTooltip title={aboutMe} placement="top" arrow>
                    <svg
                      viewBox="0 0 24 24"
                      width="16px"
                      height="16px"
                      style={{
                        color: "#337ab7",
                        margin: "3px 0px 0px 4px",
                        position: "absolute",
                        visibility: aboutMeVisibility,
                      }}
                      fill="currentColor"
                    >
                      <path d={item.i_path_d}></path>
                    </svg>
                  </BlackTooltip>
                </span>

                {/* <Tooltip title={ranking} arrow> */}
                <Rating getUserProfile={getUserProfile} />
                {/* </Tooltip> */}
              </div>

              <div className="githubContainer">
                <a href={githubUrl} key={index}>
                  <svg
                    viewBox="0 0 24 24"
                    width="32px"
                    height="32px"
                    style={{
                      marginTop: githubTopMargin,
                      color: "rgba(0, 0, 0, 0.65)",
                      opacity: githubOpacity,
                    }}
                    fill="currentColor"
                  >
                    <path d={item.github_path_d}></path>
                  </svg>
                </a>
              </div>
            </div>
          );
        })}

        <div className="linkAndLocationWrapper">
          {items2.map((item, index) => {
            return (
              <div className={item.cName} style={{}} key={index}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    style={{
                      marginRight: "4px",
                      color: "rgba(0, 0, 0, 0.65)",
                    }}
                    fill="currentColor"
                  >
                    <path d={item.path_d}></path>
                  </svg>
                  <span
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.65)",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
                <span
                  style={{
                    marginLeft: "7px",
                    flex: "1 1 0%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <a href={item.link} className={item.contentClass}>
                    {item.content}
                  </a>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
