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

import Popup from "./Navbar_Components/Popup";
import { linksList } from "./data/navbarItems";
import { iconLinks } from "./data/navbarItems";

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
    maxWidth: "1230px",
    width: "100%"
  },

  navLinksList: {
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
    listStyle: "none",
    padding: "0"
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
      transition: "all 0.3s ease-in-out"
    }
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
      transition: "all 0.3s ease-in-out"
    }
  },

  navIcons: {
    color: "#90a4ae",

    "&:hover": {
      color: "#546e7a",
      backgroundColor: "white",
      transition: "all 0.3s ease-in-out"
    }
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
      <ul className={classes.navLinksList}>
        <li>
          <a href="https://leetcode.com/">
            <img
              style={{ marginLeft: "20px", cursor: "pointer", height: "20px" }}
              src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"
              alt="Logo"
            />
          </a>
        </li>
        {linksList.map((item, index) => {
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
        })}
        <li>
          <Button
            disableTouchRipple
            ref={anchorRef}
            className={classes.storeButton}
            onClick={handleToggle}
          >
            <StoreIcon style={{ height: "18px" }} />
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

      <ul className={classes.navLinksList}>
        <li>
          <Button
            variant="outlined"
            className={classes.premiumButton}
            onClick={() => setDrop(true)}
          >
            <StarOutlineIcon style={{ height: "14px", width: "14px" }} />{" "}
            Premium{" "}
          </Button>
        </li>

        {iconLinks.map((item, index) => {
          return (
            <li>
              <IconButton
                className={classes.navIcons}
                disableRipple
                onClick={() => setbuttonPopup(false)}
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
