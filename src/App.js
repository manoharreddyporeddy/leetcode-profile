import "./css/styles.css";

import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getUserProfile as getUserProfileDefault } from "./data/getUserProfile";
import { requests } from "./services/requests";

import Navbar from "./_Navbar";
import LeftContentPanel from "./_LeftContentPanel";
import RightContentPanel from "./_RightContentPanel";
import Footer from "./_Footer";
import PageTitle from "./pageTitle";

const useStyles = makeStyles((theme) => ({
  navbarWrapper: {
    display: "flex",
    alignItems: "stretch",
    height: "44px",
    justifyContent: "center",
    borderBottom: "rgb(238, 238, 238) solid 1px",
  },

  mainContentContainer: {
    backgroundColor: "rgb(245, 245, 245)",
    padding: "20px 0px",
    justifyContent: "center",
    minHeight: "calc(100vh - 93px)",
  },

  flexWrapper: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1170px",
    margin: "0 auto",
  },

  leftPanelContainer: {
    width: "100%",
    maxWidth: "370px",
    minWidth: "250px",
    margin: "0px 15px",
  },

  rightPanelContainer: {
    flex: 1,
    margin: "0px 15px",
  },

  footerWrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
}));

const fetchData = async (username) => {
  let { url, method, headers, body } = JSON.parse(
    JSON.stringify(requests.getUserProfile)
  );

  // console.log(body);
  body.username = body.username.replace("{USER_NAME}", username || "pgmreddy");
  // console.log(body);

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

export default function App(props) {
  const classes = useStyles();

  let { username } = useParams();
  // alert(username);

  const [getUserProfile, set_getUserProfile] = useState(getUserProfileDefault); //

  useEffect(async () => {
    // console.log("-----------------------");
    let a = await fetchData(username);
    // console.log(a);
    set_getUserProfile(a);
    // document.title = `${realName} - Leetcode Profile`;
  }, [username]);

  let matchedUser = getUserProfile.data.matchedUser;
  let realName = matchedUser.profile.realName;
  let usernameID = matchedUser.username;

  return (
    <>
      <PageTitle title={`${realName} - LeetCode Profile`} />
      <div className={classes.navbarWrapper}>
        <Navbar />
      </div>
      <div className={`${classes.mainContentContainer} mobileMCP`}>
        <div className={classes.flexWrapper}>
          <div className={`${classes.leftPanelContainer} mobileLPC`}>
            <LeftContentPanel getUserProfile={getUserProfile} />
          </div>
          <div className={classes.rightPanelContainer}>
            <RightContentPanel getUserProfile={getUserProfile} />
          </div>
        </div>
      </div>
      <div className={classes.footerWrapper}>
        <Footer />
      </div>
    </>
  );
}
