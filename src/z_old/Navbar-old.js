import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: "0px",
    margin: "auto",
    maxWidth: "100%",
    height: "44px"
  },
  badge: {},
  navbar: {
    backgroundColor: "white",
    justifyContent: "center",
    maxHeight: "44px"
  },
  leftbar: {
    width: "fit-content",
    maxWidth: "507.8px"
  },
  btnleft: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "PingFang SC",
      "Hiragino Sans GB",
      "Microsoft YaHei",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol"
    ].join(","),
    color: "#546e7a",
    fontWeight: "400",
    textTransform: "none",
    height: "20px",
    marginTop: "12px",
    lineHeight: "20px",
    marginBottom: "22px",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
      boxShadow: "none",
      color: "black"
    }
  },
  btnrighticon: {
    color: "#90a4ae",
    fontWeight: "400",
    textTransform: "none",
    height: "20px",
    marginTop: "12px",
    lineHeight: "20px",
    marginBottom: "22px",
    paddingLeft: "24px",
    paddingRight: "0px",
    "&:hover": {
      backgroundColor: "white",
      boxShadow: "none",
      color: "#546e7a"
    }
  },

  btnleftStore: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "PingFang SC",
      "Hiragino Sans GB",
      "Microsoft YaHei",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol"
    ].join(","),
    color: "#f9a825",
    fontWeight: "400",
    textTransform: "none",
    height: "20px",
    marginTop: "12px",
    lineHeight: "20px",
    marginBottom: "22px",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
      boxShadow: "none",
      color: "#f07318"
    }
  },

  btnleftPremium: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "PingFang SC",
      "Hiragino Sans GB",
      "Microsoft YaHei",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol"
    ].join(","),
    color: "#f9a825",
    fontWeight: "400",
    textTransform: "none",
    height: "20px",
    marginTop: "12px",
    lineHeight: "20px",
    marginBottom: "22px",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#f9a825",
      boxShadow: "none",
      color: "white"
    }
  }
}));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

export default function App() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let text = "Day 13";

  return (
    <div className={classes.root}>
      <Grid xs={12} container className={classes.navbar}>
        <Grid item className={classes.leftbar}>
          <a href="/" className="navbar-logo">
            <img
              src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"
              alt="Logo"
            />
          </a>

          <Button
            className={classes.btnleft}
            disableRipple
            style={{ fontSize: "13px" }}
          >
            <Badge
              badgeContent={text}
              color="secondary"
              className={classes.badge}
            >
              Explore
            </Badge>
          </Button>
          <Button
            className={classes.btnleft}
            disableRipple
            style={{ fontSize: "13px" }}
          >
            Problems
          </Button>

          <Button
            className={classes.btnleft}
            disableRipple
            style={{ fontSize: "13px" }}
            aria-controls="customized-menu"
            aria-haspopup="true"
            color="white"
            onMouseOver={handleClick}
          >
            <Badge
              badgeContent={"new"}
              color="secondary"
              className={classes.badge}
            >
              Interview
            </Badge>
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onMouseLeave={handleClose}
          >
            <StyledMenuItem>
              <ListItem>
                <a
                  href="https://interview.leetcode.com/interview/?utm_medium=navbar"
                  target="_blank"
                >
                  <img
                    src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/online-interview.bdc7e113a.png"
                    alt="logo"
                  />
                  Online Interview
                </a>
              </ListItem>
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <img
                  src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/mock-assessment.b7bc636b4.png"
                  alt="logo"
                />
              </ListItemIcon>
              <ListItem>
                <a href="/assessment/">Assessment</a>
              </ListItem>
            </StyledMenuItem>
          </StyledMenu>
          <Button
            className={classes.btnleft}
            disableRipple
            style={{ fontSize: "13px" }}
          >
            Contest
          </Button>
          <Button
            className={classes.btnleft}
            disableRipple
            style={{ fontSize: "13px" }}
          >
            Discuss
          </Button>
          <Button
            className={classes.btnleftStore}
            disableRipple
            style={{ fontSize: "13px" }}
            aria-controls="customized"
            aria-haspopup="true"
            color="white"
            // onMouseOver={handleClick}
          >
            <svg
              viewBox="0 0 24 24"
              width="18px"
              height="18px"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 4h16v2H4V4zm10 14h4v2h-4v-2zM4 7h16l1 5v2h-1v6h-2v-6h-4v6H4v-6H3v-2l1-5zm2 7v4h6v-4H6zm12.96-2l-.6-3H5.64l-.6 3h13.92z"
              ></path>
            </svg>
            Store
          </Button>
          {/* <Menu
            id="customized"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onMouseLeave={handleClose}
          >
            <MenuItem>
              <ListItem>
                <a href="/store">Redeem</a>
              </ListItem>
            </MenuItem>
            <MenuItem>
              <ListItem>
                <a href="/subscribe?ref=sto_npl">Premium</a>{" "}
              </ListItem>
            </MenuItem>
          </Menu> */}
        </Grid>
        <Grid item xs className="dummygrid"></Grid>
        <Grid item className="right-navbar">
          <Button
            variant="outlined"
            className={classes.btnleftPremium}
            disableRipple
            style={{
              fontSize: "12px",
              borderBlockColor: "#f9a825",
              padding: "12px 6px"
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="14px"
              height="14px"
              // class="icon-premium"
              // color= "#f9a825"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
              ></path>
            </svg>
            Premium
          </Button>
          <Tooltip title="New Playground" arrow>
            <IconButton className={classes.btnrighticon} disableRipple>
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
          <IconButton className={classes.btnrighticon} disableRipple>
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
          <IconButton
            className={classes.btnrighticon}
            disableRipple
            onClick={handleClick}
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
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onMouseLeave={handleClose}
          >
            <MenuItem>
              <ListItem>
                <a href="/store">aaaaaaaaa</a>
              </ListItem>
            </MenuItem>
            <MenuItem>
              <ListItem>
                <a href="/subscribe?ref=sto_npl">Premium</a>{" "}
              </ListItem>
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </div>
  );
}
