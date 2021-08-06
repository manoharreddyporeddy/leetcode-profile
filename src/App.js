import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";

import Navbar from "./Components/1.Navbar/Navbar";
import LeftContentPanel from "./Components/2.LeftContentPanel/LeftContentPanel";
import RightContentPanel from "./Components/3.RightContentPanel/RightContentPanel";
import Footer from "./Components/4.Footer/Footer";

const useStyles = makeStyles((theme) => ({
  navbarWrapper: {
    display: "flex",
    alignItems: "stretch",
    height: "44px",
    justifyContent: "center",
    borderBottom: "rgb(238, 238, 238) solid 1px"
  },

  mainContentContainer: {
    display: "flex",
    backgroundColor: "rgb(245, 245, 245)",
    padding: "20px 0px",
    justifyContent: "center"
  },

  flexWrapper: {
    display: "flex",
    flexWrap: "wrap"
  },

  leftPanelContainer: {
    maxWidth: "370px",
    minWidth: "250px",
    margin: "0px 15px"
  },

  rightPanelContainer: {
    flex: 1,
    maxWidth: "745px",
    margin: "0px 15px"
  },

  footerWrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px"
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.navbarWrapper}>
        <Navbar />
      </div>
      <div className={classes.mainContentContainer}>
        <div className={classes.flexWrapper}>
          <div className={classes.leftPanelContainer}>
            <LeftContentPanel />
          </div>
          <div className={classes.rightPanelContainer}>
            <RightContentPanel />
          </div>
        </div>
      </div>
      <div className={classes.footerWrapper}>
        <Footer />
      </div>
    </>
  );
}
