import "./styles.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Leftbar from "./Components/Leftbar";
import Rightbar from "./Components/Rightbar";
import Bottombar from "./Components/Bottombar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <>
      <div className="nav-container">
        <Navbar />
      </div>
      <div className="profile-container">
        <div className="profile-container2">
          <div className="left-container">
            <Leftbar />
          </div>
          <div className="right-container">
            <Rightbar />
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <Bottombar />
      </div>
    </>
  );
}
