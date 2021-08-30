import "./css/Navbar.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import React, { useState, useRef } from "react";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StoreIcon from "@material-ui/icons/Store";
import { Tooltip } from "@material-ui/core";

import Popup from "./helpers/Navbar-Popup";
import ProfileMenuDropdown from "./helpers/profileMenuDropdown";
import Dropdown from "./helpers/Dropdown";
import { linksList, iconLinks, profileMenuItems } from "./data/Navbar-data";
import NavSidebar from "./helpers/navbarMobileMenu";

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

  const [buttonPopup, setbuttonPopup] = useState(false);
  const [click, setClick] = useState(false);
  const [notificationClick, setNotificationClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [interviewDrop, setInterviewDrop] = useState(false);
  const [store, setStore] = useState(false);
  const [interview, setInterview] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileMenuRef = useRef();

  let iconRefProfile = useRef();
  let iconRefNotification = useRef();
  let iconRef;
  let profileIconRef;
  let notificationIconRef;

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
    <div className={`${classes.navbarContainer} mobileNBC`}>
      <ul className={`${classes.navLinksList} mobileNLL`}>
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
              <li key={index} style={{ marginLeft: "20px" }}>
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
                style={{ marginLeft: "20px", transitionDelay: "10s" }}
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
        <li
          style={{ marginLeft: "15px" }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Button disableTouchRipple className={classes.storeButton}>
            <StoreIcon style={{ height: "18px" }} />
            Store
          </Button>
          {dropdown && <Dropdown store={store} interview={interview} />}
        </li>
      </ul>

      <ul className={`${classes.navLinksList} mobileNLL`}>
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
          let notificationPlacement;
          const handleClick = () => {
            if (index === 0) {
              setbuttonPopup(true);
            }
            if (index === 1) {
              setNotificationClick(!notificationClick);
              notificationPlacement = "200px";
            }
            if (index === 2) {
              setClick(!click);
            }
          };

          if (index === 1) {
            iconRef = iconRefNotification;
          } else if (index === 2) {
            iconRef = iconRefProfile;
          }

          function profileDropdown() {
            if (index === 2) {
              profileIconRef = iconRef;
              notificationIconRef = iconRef;
              return (
                <>
                  <div
                    className="profileMenuWrapperT"
                    style={{ right: notificationPlacement }}
                  >
                    <ProfileMenuDropdown
                      click={click}
                      setClick={setClick}
                      profileIconRef={profileIconRef}
                      notificationIconRef={notificationIconRef}
                      notificationClick={notificationClick}
                      setNotificationClick={setNotificationClick}
                      iconRefProfile={iconRefProfile}
                      iconRefNotification={iconRefNotification}
                    ></ProfileMenuDropdown>
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
            <li ref={iconRef} key={index}>
              <BlackTooltip
                title={warningText == null ? "" : warningText}
                placement="bottom"
                visibility="hidden"
                arrow
              >
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
              </BlackTooltip>
              {profileDropdown()}
            </li>
          );
        })}
      </ul>

      <Popup trigger={buttonPopup} setTrigger={setbuttonPopup}></Popup>

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
