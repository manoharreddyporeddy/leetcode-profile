import "./css/styles.css";

import { makeStyles } from "@material-ui/core/styles";
import React from "react";
// import { useParams } from "react-router-dom";

import Navbar from "./_Navbar";
import LeftContentPanel from "./_LeftContentPanel";
import RightContentPanel from "./_RightContentPanel";
import Footer from "./_Footer";

const useStyles = makeStyles((theme) => ({
    navbarWrapper: {
        display: "flex",
        alignItems: "stretch",
        height: "44px",
        justifyContent: "center",
        borderBottom: "rgb(238, 238, 238) solid 1px",
    },

    mainContentContainer: {
        display: "flex",
        backgroundColor: "rgb(245, 245, 245)",
        padding: "20px 0px",
        justifyContent: "center",
    },

    flexWrapper: {
        display: "flex",
        flexWrap: "wrap",
    },

    leftPanelContainer: {
        maxWidth: "370px",
        minWidth: "250px",
        margin: "0px 15px",
    },

    rightPanelContainer: {
        flex: 1,
        maxWidth: "745px",
        margin: "0px 15px",
    },

    footerWrapper: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
    },
}));

export default function App(props) {
    const classes = useStyles();

    // let { username } = useParams();
    // alert(username);

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
