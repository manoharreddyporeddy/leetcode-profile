import "./Navbar.css";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";

import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StoreIcon from "@material-ui/icons/Store";
import Tooltip from "@material-ui/core/Tooltip";
import { Divider } from "@material-ui/core";

import Popup from "./Popup";
import { LeftMenu } from "./Menuitems";
import { Profileitems } from "./Profileitems";

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "13px",
    maxWidth: "1240px",
    width: "100%"
  },

  linksList: {
    display: "flex",
    flexWrap: "nowrap",
    listStyle: "none",
    alignItems: "center",
    width: "fit-content",
    padding: "0"
  }
}));

export default function Navbar() {
  const classes = useStyles();

  const [buttonPopup, setbuttonPopup] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [drop, setDrop] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
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
    <div className={classes.navbarContainer}>
      <ul className={classes.linksList}>
        <li>
          <a href="https://leetcode.com/">
            <img
              style={{ marginLeft: "20px", cursor: "pointer", height: "20px" }}
              src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"
              alt="Logo"
            />
          </a>
        </li>
        {LeftMenu.map((item, index) => {
          return (
            <li key={index}>
              <a
                className={item.cName + " " + item.c2Name + " " + item.c3Name}
                href={item.url}
              >
                {item.title}
              </a>
            </li>
          );
        })}
        <li>
          <Button
            ref={anchorRef}
            // aria-controls={open ? "menu-list-grow" : undefined}
            // aria-haspopup="true"
            // className="storeButton"
            style={{
              height: "18px",
              padding: "0px",
              fontSize: "13px",
              textTransform: "none",
              color: "#f9a825",
              marginLeft: "20px"
            }}
            onClick={handleToggle}
          >
            <StoreIcon className="storeButton" style={{ height: "18px" }} />
            Store
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            style={{ zIndex: 1 }}
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

      <ul className="rightItemList">
        <li>
          <Button
            variant="outlined"
            // className="premiumButton"
            style={{
              justifyContent: "center",
              padding: "0px",
              fontSize: "12px",
              textTransform: "none",
              color: "#f9a825",
              borderColor: "#f9a825",
              paddingLeft: "7px",
              paddingRight: "7px",
              borderRadius: "3px",
              height: "24px"
            }}
            onClick={() => setDrop(true)}
          >
            <StarOutlineIcon style={{ height: "14px", width: "14px" }} />{" "}
            Premium{" "}
          </Button>
        </li>
        <li>
          <Tooltip title="New Playground" arrow>
            <IconButton
              className="newplaygroundButton"
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
        <li>
          <IconButton className="alertprofileButtons">
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
          </IconButton>
        </li>
        <li>
          <IconButton className="alertprofileButtons">
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
          </IconButton>
        </li>
      </ul>
      <Popup trigger={buttonPopup} setTrigger={setbuttonPopup}></Popup>
    </div>
  );
}
