import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { Tooltip } from "@material-ui/core";

import { userData } from "./data/pgmreddy-lcp";
import { getUserProfile as getUserProfileDefault } from "./data/getUserProfile";
import { requests } from "./services/urls";

import Rating from "./helpers/BasicProfile-rating";

const useStyles = makeStyles((theme) => ({
  profileCard: {
    borderRadius: "8px",
    marginBottom: "15px",
    boxShadow: "rgb(0 0 0 / 10%) 0px 1px 2px, rgb(0 0 0 / 8%) 0px 2px 8px",
    minWidth: "370px"
  },

  cardTitleContainer: {
    padding: "0.5625rem 0.75rem 0rem",
    height: "27.8px"
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
    fontSize: "12px"
  }
}));

const fetchData = async (username) => {
  let { url, method, headers, body } = JSON.parse(JSON.stringify(requests.getUserProfile));

  console.log(body);
  body.username = body.username.replace("{USER_NAME}", username || "pgmreddy");
  console.log(body);

  const response = await fetch(
      url, //
      {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          // mode: 'cors', // no-cors, *cors, same-origin
          // mode: 'no-cors', // no-cors, *cors, same-origin
          // mode: 'same-origin', // no-cors, *cors, same-origin
          // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: 'same-origin', // include, *same-origin, omit
          headers: headers,
          // {
          //   'Content-Type': 'application/json'
          //   // 'Content-Type': 'application/x-www-form-urlencoded',
          // },
          // redirect: 'follow', // manual, *follow, error
          // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          // body: JSON.stringify(data) // body data type must match "Content-Type" header
          body: JSON.stringify(body), // body data type must match "Content-Type" header
      }
  );

  let resp = await response.json();
  return resp;
};


export default function BasicProfile() {
  const classes = useStyles();

  let { username } = useParams();
  // alert(username);

  const [getUserProfile, set_getUserProfile] = useState(getUserProfileDefault); //

  useEffect(async () => {
      console.log("-----------------------");
      let a = await fetchData(username);
      console.log(a);
      set_getUserProfile(a);
  }, [username]);


  const profileDetails = userData.profileDetails;
  let matchedUser = getUserProfile.data.matchedUser;
  let realName = matchedUser.profile.realName;
  let usernameID = matchedUser.username;
  let githubUrl = matchedUser.githubUrl;
  let userAvatar = matchedUser.profile.userAvatar;
  let aboutMe = matchedUser.profile.aboutMe;
  // let ranking = matchedUser.profile.ranking;
  // ranking = `Ranking: ${ranking}`;
  let websites = matchedUser.profile.websites;
  let countryName = matchedUser.profile.countryName;

  let items = [
    {
      cName: "linkContainer",
      title: "Websites",
      content: websites[0],
      link: websites[0],
      contentClass: "webLink",
      path_d:
        "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
    },
    {
      cName: "locationContainer",
      title: "Location",
      content: countryName,
      contentClass: "location",
      path_d:
        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
    }
  ];

if(websites = [] && countryName === null) {
   items = [];

} else if(countryName === null){
    items.pop();
} else if(websites === []){
  items.shift();   
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

      <div style={{ padding: "12px 12px 0px 12px" }}>
        {profileDetails.map((item, index) => {
          return (
            <div style={{ display: "flex" }} key={index}>
              <img
                src={userAvatar}
                alt="Profile"
                style={{ height: "80px", borderRadius: "6px" }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0px 4px 0px 15px",
                  minWidth: "201px"
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "18px",
                    color: "rgba(0, 0, 0, 0.65)",
                    whiteSpace: "nowrap"
                  }}
                >
                  {" "}
                  {realName}
                </span>
                <span
                  style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.65)" }}
                >
                  {usernameID}
                  <Tooltip title={aboutMe} placement="top" arrow>
                    <svg
                      viewBox="0 0 24 24"
                      width="16px"
                      height="16px"
                      style={{
                        color: "#337ab7",
                        margin: "3px 0px 0px 4px",
                        position: "absolute"
                      }}
                      fill="currentColor"
                    >
                      <path d={item.i_path_d}></path>
                    </svg>
                  </Tooltip>
                </span>

                {/* <Tooltip title={ranking} arrow> */}
                <Rating />
                {/* </Tooltip> */}
              </div>

              <div className="githubContainer">
                <a href={githubUrl} key={index}>
                  <svg
                    viewBox="0 0 24 24"
                    width="32px"
                    height="32px"
                    className="githubIcon"
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
          {items.map((item, index) => {
            return (
              <div className={item.cName} style={{}} key={index}>
                <svg
                  viewBox="0 0 24 24"
                  width="14px"
                  height="14px"
                  style={{ marginRight: "5px", color: "rgba(0, 0, 0, 0.65)" }}
                  fill="currentColor"
                >
                  <path d={item.path_d}></path>
                </svg>
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "rgba(0, 0, 0, 0.65)"
                  }}
                >
                  {item.title}
                </span>
                <span
                  style={{
                    marginLeft: "12px"
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
