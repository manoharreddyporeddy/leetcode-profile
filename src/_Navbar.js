import "./css/Navbar.css";
import { makeStyles } from "@material-ui/core/styles";

import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StoreIcon from "@material-ui/icons/Store";
// import Tooltip from "@material-ui/core/Tooltip";

import Popup from "./helpers/Navbar-Popup";
import ProfileMenuDropdown from "./helpers/profileMenuDropdown";
import Dropdown from "./helpers/Dropdown";
import { linksList, iconLinks, profileMenuItems } from "./data/Navbar-data";

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
    maxWidth: "1230px",
    width: "100%",
  },

  navLinksList: {
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
    listStyle: "none",
    padding: "0",
  },

  storeButton: {
    height: "18px",
    padding: "0px",
    marginLeft: "15px",
    fontSize: "13px",
    textTransform: "none",
    color: "#f9a825",

    "&:hover": {
      color: "#f07318",
      backgroundColor: "white",
      transition: "all 0.3s ease-in-out",
    },
  },

  premiumButton: {
    padding: "1px 7px",
    fontSize: "12px",
    marginRight: "12px",
    textTransform: "none",
    color: "#f9a825",
    borderColor: "#f9a825",
    borderRadius: "3px",

    "&:hover": {
      color: "white",
      backgroundColor: "#f9a825",
      transition: "all 0.3s ease-in-out",
    },
  },

  navIcons: {
    color: "#90a4ae",

    "&:hover": {
      color: "#546e7a",
      backgroundColor: "white",
      transition: "all 0.3s ease-in-out",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const [buttonPopup, setbuttonPopup] = useState(false);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [interviewDrop, setInterviewDrop] = useState(false);
  const [store, setStore] = useState(false);
  const [interview, setInterview] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
    setStore(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
    setStore(false);
  };

  const onMouseEnterInt = () => {
    setInterviewDrop(true);
    setInterview(true);
  };

  const onMouseLeaveInt = () => {
    setInterviewDrop(false);
    setInterview(false);
  };

  return (
    <div className={classes.navbarContainer}>
      <ul className={classes.navLinksList}>
        <li>
          <a href="/">
            <img
              style={{ marginLeft: "20px", cursor: "pointer", height: "20px" }}
              src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"
              alt="Logo"
            />
          </a>
        </li>
        {linksList.map((item, index) => {
          if (index !== 2) {
            return (
              <li key={index}>
                <a
                  className={
                    item.cName + " " + item.afterCName + " " + item.contentCName
                  }
                  href={item.url}
                >
                  {item.title}
                </a>
              </li>
            );
          } else {
            return (
              <li
                key={index}
                onMouseEnter={onMouseEnterInt}
                onMouseLeave={onMouseLeaveInt}
              >
                <a
                  className={
                    item.cName + " " + item.afterCName + " " + item.contentCName
                  }
                  href={item.url}
                >
                  {item.title}
                </a>
                {interviewDrop && (
                  <Dropdown store={store} interview={interview} />
                )}
              </li>
            );
          }
        })}
        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Button disableTouchRipple className={classes.storeButton}>
            <StoreIcon style={{ height: "18px" }} />
            Store
          </Button>
          {dropdown && <Dropdown store={store} interview={interview} />}
        </li>
      </ul>

      <ul className={classes.navLinksList}>
        <li>
          <Button variant="outlined" className={classes.premiumButton}>
            <StarOutlineIcon style={{ height: "14px", width: "14px" }} />{" "}
            Premium{" "}
          </Button>
        </li>

        {iconLinks.map((item, index) => {
          const handleClick = () => {
            if (index === 0) {
              setbuttonPopup(true);
            }
            if (index === 2) {
              setClick(!click);
            }
          };

          function profileDropdown() {
            if (index === 2) {
              return (
                <div className="profileMenuWrapper">
                  <div className="profileMenuArrow"></div>
                  <ProfileMenuDropdown
                    click={click}
                    setClick={setClick}
                  ></ProfileMenuDropdown>
                </div>
              );
            }
          }

          return (
            <li key={index}>
              <IconButton
                className={classes.navIcons}
                disableRipple
                onClick={handleClick}
              >
                <svg
                  viewBox={item.viewBox}
                  width={item.width}
                  height={item.height}
                  fill="currentColor"
                >
                  <path d={item.path_d}></path>
                </svg>
              </IconButton>
              {profileDropdown()}
            </li>
          );
        })}
        {/* 
          <Tooltip title="New Playground" arrow>
          </Tooltip>*/}
      </ul>
      <Popup trigger={buttonPopup} setTrigger={setbuttonPopup}></Popup>
    </div>
  );
}
