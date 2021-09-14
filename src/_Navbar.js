import "./css/Navbar.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import React, { useState, useRef } from "react";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StoreIcon from "@material-ui/icons/Store";
import { Tooltip } from "@material-ui/core";

import Popup from "./helpers/Navbar-Popup";
import ProfileOrNotificationDropdown from "./helpers/profile&ntfDropdown";
import Dropdown from "./helpers/Dropdown";
import { leftLinksList, iconLinks, profileMenuItems } from "./data/Navbar-data";
import NavSidebar from "./helpers/navbarMobileMenu";

const useStyles = makeStyles((theme) => ({
  storeButton: {
    height: "18px",
    padding: "0px",
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
    padding: "0px 12px",

    "&:hover": {
      color: "#546e7a",
      backgroundColor: "white",
      transition: "all 0.3s ease-in-out",
    },
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

export default function Navbar() {
  const classes = useStyles();

  const [interviewDrop, setInterviewDrop] = useState(false);
  const [storeDrop, setStoreDrop] = useState(false);
  const [playgroundClick, setPlaygroundClick] = useState(false);
  const [profileClick, setProfileClick] = useState(false);
  const [notificationClick, setNotificationClick] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileMenuRef = useRef();

  let conditionalIconRef;
  let profileRef = useRef();
  let notificationRef = useRef();

  const onMouseEnterStore = () => {
    setStoreDrop(true);
  };

  const onMouseLeaveStore = () => {
    setStoreDrop(false);
  };

  return (
    <div className="navbarContainer mobileNBC">
      <ul className="navLinksList mobileNLL">
        <li>
          <img
            style={{ cursor: "pointer", height: "20px" }}
            src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"
            alt="LeetCode Logo"
          />
        </li>
        {leftLinksList.map((item, index) => {
          const onMouseEnterInterview = () => {
            if (index === 2) setInterviewDrop(true);
          };

          const onMouseLeaveInterview = () => {
            if (index === 2) setInterviewDrop(false);
          };

          return (
            <li
              key={index}
              style={{ marginLeft: "20px" }}
              onMouseEnter={onMouseEnterInterview}
              onMouseLeave={onMouseLeaveInterview}
            >
              <a
                className={
                  item.cName +
                  " " +
                  item.afterLinkClass +
                  " " +
                  item.chipContent
                }
                href={item.url}
              >
                {item.title}
              </a>
              {index === 2 && <Dropdown interview={interviewDrop} />}
            </li>
          );
        })}
        <li
          style={{ marginLeft: "15px" }}
          onMouseEnter={onMouseEnterStore}
          onMouseLeave={onMouseLeaveStore}
        >
          <Button disableTouchRipple className={classes.storeButton}>
            <StoreIcon style={{ height: "18px" }} />
            Store
          </Button>
          <Dropdown store={storeDrop} />
        </li>
      </ul>

      <ul className={"navLinksList mobileNLL"}>
        <li>
          <Button
            variant="outlined"
            className={classes.premiumButton}
            href="https://leetcode.com/subscribe/?ref=nb_npl"
          >
            <StarOutlineIcon style={{ height: "14px", width: "14px" }} />{" "}
            Premium{" "}
          </Button>
        </li>

        {iconLinks.map((item, index) => {
          let ntfDropdownRightDistance;
          const handleIconClick = () => {
            if (index === 0) {
              setPlaygroundClick(true);
            }
            if (index === 1) {
              setNotificationClick(!notificationClick);
              ntfDropdownRightDistance = "200px";
            }
            if (index === 2) {
              setProfileClick(!profileClick);
            }
          };

          if (index === 1) {
            conditionalIconRef = notificationRef;
          } else if (index === 2) {
            conditionalIconRef = profileRef;
          }

          function profileOrNotificationDropdown() {
            if (index === 2) {
              return (
                <>
                  <div
                    className="dropdownWrapper"
                    style={{ right: ntfDropdownRightDistance }}
                  >
                    <ProfileOrNotificationDropdown
                      profileClick={profileClick}
                      setProfileClick={setProfileClick}
                      notificationClick={notificationClick}
                      setNotificationClick={setNotificationClick}
                      profileRef={profileRef}
                      notificationRef={notificationRef}
                    ></ProfileOrNotificationDropdown>
                  </div>
                </>
              );
            }
          }

          let warningText = null;
          if (index === 0) {
            warningText = "New Playground";
          }

          return (
            <li ref={conditionalIconRef} key={index}>
              <BlackTooltip
                title={warningText == null ? "" : warningText}
                placement="bottom"
                visibility="hidden"
                arrow
              >
                <IconButton
                  className={classes.navIcons}
                  disableRipple
                  onClick={handleIconClick}
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
              </BlackTooltip>
              {profileOrNotificationDropdown()}
            </li>
          );
        })}
      </ul>

      <Popup trigger={playgroundClick} setTrigger={setPlaygroundClick}></Popup>

      {/* mobile view */}
      <div class="navbarItem">
        <svg
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          fill="currentColor"
          style={{ marginLeft: "10px", verticalAlign: "middle" }}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
        <NavSidebar
          trigger={mobileMenu}
          setTrigger={setMobileMenu}
          ref={mobileMenuRef}
          mobileMenuRef={mobileMenuRef}
        ></NavSidebar>
      </div>
      <a href="/" className="navbarItem">
        <img
          className="mobileLogo"
          src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"
          alt="logo"
        />
      </a>
      <a class="navbarItem" href="/akshayvarmamit">
        <svg
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          fill="currentColor"
          style={{
            marginLeft: "auto",
            marginRight: "10px",
            verticalAlign: "middle",
          }}
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"></path>
        </svg>
      </a>
    </div>
  );
}
