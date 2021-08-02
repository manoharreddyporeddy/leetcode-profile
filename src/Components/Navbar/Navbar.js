import React, { useState, useEffect, useRef } from "react";
import { LeftMenu } from "./Menuitems";
import { Profileitems } from "./Profileitems";
import Button from "@material-ui/core/Button";
import "./Navbar.css";
import Popup from "./Popup";
import MenuListComposition from "./Dropdown";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StoreIcon from "@material-ui/icons/Store";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },

  paper: {
    marginRight: theme.spacing(2)
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [buttonPopup, setbuttonPopup] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [drop, setdrop] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    // if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //   return;
    // }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // let menuRef = useRef();

  // useEffect(() => {
  //   document.addEventListener("mousedown", (event) => {
  //     if (!menuRef.current.contains(event.target)) {
  //     setbuttonPopup(false);
  //     }
  //   });
  // });

  return (
    <div className="Navitems">
      <ul className="Navmenu">
        <li className="Navitem-container">
          <a href="https://leetcode.com/">
            <img
              className="Navlogo"
              src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"
              alt="Logo"
            />
          </a>
        </li>
        {LeftMenu.map((item, index) => {
          return { index } === 2 ? (
            <li key={index} className="Navitem-container">
              <a className={item.cName} href={item.url} onClick={handleToggle}>
                {item.title}
              </a>
            </li>
          ) : (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
        <li className="Navitem-container">
          <Button
            className="storeButton"
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            {" "}
            <StoreIcon style={{ height: "18px" }} /> Store{" "}
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper style={{ margin: "10px" }}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem
                        style={{ color: "#f9a825", fontSize: "14px" }}
                        onClick={handleClose}
                      >
                        Redeem
                      </MenuItem>
                      <MenuItem
                        style={{ color: "#f9a825", fontSize: "14px" }}
                        onClick={handleClose}
                      >
                        Premium
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </li>
      </ul>

      <ul className="NavmenuRight">
        <li className="NavitemRight-container">
          <Button
            variant="outlined"
            className="premiumButton"
            onClick={() => setdrop(true)}
          >
            <StarOutlineIcon style={{ height: "14px", width: "14px" }} />{" "}
            Premium{" "}
          </Button>
        </li>
        <li className="NavitemRight-container">
          <Tooltip title="New Playground" arrow>
            <IconButton
              className="btnrighticon"
              disableRipple
              onClick={() => setbuttonPopup(true)}
            >
              <svg
                viewBox="0 0 24 24"
                width="22px"
                height="22px"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M21 5H3v14h9v2H1V3h22v7h-2V5zm-3 11v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3zM6 8l7 4.001L6 16v-2.303l2.969-1.696L6 10.303V8z"
                ></path>
              </svg>
            </IconButton>
          </Tooltip>
        </li>
        <li className="NavitemRight-container">
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="btnrighticon-2"
            >
              <svg
                viewBox="0 0 24 24"
                width="22px"
                height="22px"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-6 6c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2z"
                ></path>
              </svg>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" className="dropdown-menu">
                <Paper className="notifycard">
                  <ul className="notifylist">
                    <li className="notifyitem">
                      <div className="contestnotify">
                        <svg
                          viewBox="0 0 24 24"
                          width="18px"
                          height="18px"
                          style={{ color: "#f9a825" }}
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6.5 5V3h11v2h4v4.571c0 1.894-1.343 3.429-3 3.429h-1.207a5.511 5.511 0 0 1-3.793 3.793V19h2a3 3 0 0 1 3 3h-13a3 3 0 0 1 3-3h2v-2.207A5.511 5.511 0 0 1 6.707 13H5.5a3 3 0 0 1-3-3V5h4zm-2 2v3a1 1 0 0 0 1 1h1V7h-2zm13 0v4h1c.488 0 1-.585 1-1.429V7h-2z"
                          ></path>
                        </svg>{" "}
                        Contest
                      </div>
                      <div className="timenotify">July 08, 2021 4:50 AM</div>
                      <div className="linknotify">
                        {" "}
                        Biweekly Contest 56 and Weekly Contest 249 are
                        approaching.{" "}
                      </div>
                    </li>
                    <Divider />
                    <li className="notifyitem">
                      <div className="contestnotify">
                        <svg
                          viewBox="0 0 24 24"
                          width="18px"
                          height="18px"
                          style={{ color: "#f9a825" }}
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6.5 5V3h11v2h4v4.571c0 1.894-1.343 3.429-3 3.429h-1.207a5.511 5.511 0 0 1-3.793 3.793V19h2a3 3 0 0 1 3 3h-13a3 3 0 0 1 3-3h2v-2.207A5.511 5.511 0 0 1 6.707 13H5.5a3 3 0 0 1-3-3V5h4zm-2 2v3a1 1 0 0 0 1 1h1V7h-2zm13 0v4h1c.488 0 1-.585 1-1.429V7h-2z"
                          ></path>
                        </svg>{" "}
                        Contest
                      </div>
                      <div className="timenotify">July 01, 2021 4:50 AM</div>
                      <div className="linknotify">
                        {" "}
                        Weekly Contest 248 is approaching.{" "}
                      </div>
                    </li>
                    <Divider />
                    <li className="notifyitem">
                      <div className="contestnotify">
                        <svg
                          viewBox="0 0 24 24"
                          width="18px"
                          height="18px"
                          style={{ color: "#f9a825" }}
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6.5 5V3h11v2h4v4.571c0 1.894-1.343 3.429-3 3.429h-1.207a5.511 5.511 0 0 1-3.793 3.793V19h2a3 3 0 0 1 3 3h-13a3 3 0 0 1 3-3h2v-2.207A5.511 5.511 0 0 1 6.707 13H5.5a3 3 0 0 1-3-3V5h4zm-2 2v3a1 1 0 0 0 1 1h1V7h-2zm13 0v4h1c.488 0 1-.585 1-1.429V7h-2z"
                          ></path>
                        </svg>{" "}
                        Contest
                      </div>
                      <div className="timenotify">June 24, 2021 4:53 AM</div>
                      <div className="linknotify">
                        {" "}
                        Biweekly Contest 55 and Weekly Contest 247 are
                        approaching.{" "}
                      </div>
                    </li>
                    <Divider />
                    <li className="notifyitem">
                      <div className="contestnotify">
                        <svg
                          viewBox="0 0 24 24"
                          width="18px"
                          height="18px"
                          style={{ color: "#f9a825" }}
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6.5 5V3h11v2h4v4.571c0 1.894-1.343 3.429-3 3.429h-1.207a5.511 5.511 0 0 1-3.793 3.793V19h2a3 3 0 0 1 3 3h-13a3 3 0 0 1 3-3h2v-2.207A5.511 5.511 0 0 1 6.707 13H5.5a3 3 0 0 1-3-3V5h4zm-2 2v3a1 1 0 0 0 1 1h1V7h-2zm13 0v4h1c.488 0 1-.585 1-1.429V7h-2z"
                          ></path>
                        </svg>{" "}
                        Contest
                      </div>
                      <div className="timenotify">June 17, 2021 4:48 AM</div>
                      <div className="linknotify">
                        {" "}
                        Weekly Contest 246 is approaching.{" "}
                      </div>
                    </li>
                    <Divider />
                    <li className="notifyitem">
                      <div className="contestnotify">
                        <svg
                          viewBox="0 0 24 24"
                          width="1em"
                          height="1em"
                          class="icon__1Md2 notification-icon__2kqT"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.356-4.21l.011.01a3.342 3.342 0 0 0 4.641-.043l1.38-1.367a.787.787 0 0 0 0-1.117.797.797 0 0 0-1.122-.002l-1.38 1.368a1.748 1.748 0 0 1-2.42.02l-2.472-2.406c-.663-.645-.73-1.627-.165-2.244l.013-.014 2.225-2.364c.61-.642 1.84-.718 2.544-.153l2.015 1.618a.797.797 0 0 0 1.116-.118.787.787 0 0 0-.119-1.11l-2.014-1.619a3.366 3.366 0 0 0-1.597-.686l1.16-1.234a.787.787 0 0 0-.037-1.116.797.797 0 0 0-1.123.037L9.198 8.55a2.99 2.99 0 0 0-.01.01l-2.217 2.357c-1.19 1.265-1.064 3.235.2 4.466l2.461 2.396a.809.809 0 0 0 .012.011zm1.56-3.887h5.856a.792.792 0 0 0 .794-.79.792.792 0 0 0-.794-.79h-5.856a.792.792 0 0 0-.794.79c0 .437.355.79.794.79z"
                          ></path>
                        </svg>
                        LeetCoin Reward
                      </div>
                      <div className="timenotify">June 10, 2021 6:57 PM</div>
                      <div className="linknotify">
                        {" "}
                        Weekly Contest 248 is approaching.{" "}
                      </div>
                    </li>
                    <Divider />
                    <li className="notifyitem">
                      <div className="contestnotify">
                        <svg
                          viewBox="0 0 24 24"
                          width="18px"
                          height="18px"
                          style={{ color: "#f9a825" }}
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6.5 5V3h11v2h4v4.571c0 1.894-1.343 3.429-3 3.429h-1.207a5.511 5.511 0 0 1-3.793 3.793V19h2a3 3 0 0 1 3 3h-13a3 3 0 0 1 3-3h2v-2.207A5.511 5.511 0 0 1 6.707 13H5.5a3 3 0 0 1-3-3V5h4zm-2 2v3a1 1 0 0 0 1 1h1V7h-2zm13 0v4h1c.488 0 1-.585 1-1.429V7h-2z"
                          ></path>
                        </svg>{" "}
                        Contest
                      </div>
                      <div className="timenotify">July 01, 2021 4:50 AM</div>
                      <div className="linknotify">
                        {" "}
                        Weekly Contest 248 is approaching.{" "}
                      </div>
                    </li>
                    <Divider />
                    <li className="notifyitem">
                      <div className="contestnotify">
                        <svg
                          viewBox="0 0 24 24"
                          width="18px"
                          height="18px"
                          style={{ color: "#f9a825" }}
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6.5 5V3h11v2h4v4.571c0 1.894-1.343 3.429-3 3.429h-1.207a5.511 5.511 0 0 1-3.793 3.793V19h2a3 3 0 0 1 3 3h-13a3 3 0 0 1 3-3h2v-2.207A5.511 5.511 0 0 1 6.707 13H5.5a3 3 0 0 1-3-3V5h4zm-2 2v3a1 1 0 0 0 1 1h1V7h-2zm13 0v4h1c.488 0 1-.585 1-1.429V7h-2z"
                          ></path>
                        </svg>{" "}
                        Contest
                      </div>
                      <div className="timenotify">July 01, 2021 4:50 AM</div>
                      <div className="linknotify">
                        {" "}
                        Weekly Contest 248 is approaching.{" "}
                      </div>
                    </li>
                    <Divider />
                  </ul>
                </Paper>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <div
                  style={{
                    padding: "15px",
                    height: "19px",
                    backgroundColor: "white"
                  }}
                >
                  settings
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li className="NavitemRight-container">
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="btnrighticon-2"
            >
              <svg
                viewBox="0 0 24 24"
                width="22px"
                height="22px"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"
                ></path>
              </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu className="profile-items">
              <Paper>
                <ul className="profile-menu">
                  <li>
                    <a href="/subscribe?ref=um_pl" class="">
                      <svg
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                        class=""
                      >
                        <path
                          fill-rule="evenodd"
                          d="M17 3c1.1 0 2 .9 2 2v16l-7-3-7 3 .01-16c0-1.1.89-2 1.99-2h10zm-5 10.43L14.472 15l-.656-2.96L16 10.048l-2.876-.256L12 7l-1.124 2.792L8 10.048l2.184 1.992L9.528 15 12 13.43z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="profile-links"
                      href="https://leetcode.com/akshayvarmamit/"
                    >
                      {" "}
                      akshayvarmamit{" "}
                    </a>
                  </li>
                  <Divider />
                  {Profileitems.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href="/subscribe?ref=um_pl" class="">
                          <svg
                            viewBox="0 0 24 24"
                            width="24px"
                            height="24px"
                            class=""
                          >
                            <path fill-rule="evenodd" d={item.svg}></path>
                          </svg>
                        </a>
                        <a
                          className={item.cName}
                          href={item.url}
                          onClick={handleToggle}
                        >
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Paper>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
      <Popup trigger={buttonPopup} setTrigger={setbuttonPopup}></Popup>
    </div>
  );
}
