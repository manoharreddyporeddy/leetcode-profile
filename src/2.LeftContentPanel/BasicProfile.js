import { makeStyles } from "@material-ui/core/styles";

import React from "react";

import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { Tooltip } from "@material-ui/core";

import { userData } from "./data/pgmreddy";

import Rating from "./rating";

const useStyles = makeStyles((theme) => ({
  profileCard: {
    borderRadius: "8px",
    marginBottom: "15px"
  },

  cardTitleContainer: {
    padding: "0.5625rem 0.75rem 0rem",
    height: "27.8px"
  },

  editProfileButton: {
    border: "0px",
    borderRadius: "3px",
    boxShadow: "rgb(38 50 56 / 20%) 0px 0px 0px 1px inset",
    padding: "0px 7px",
    height: "24px",
    float: "right",
    cursor: "pointer",
    color: "rgb(69, 90, 100)",
    background: "rgb(250, 250, 250)",
    fontSize: "12px"
  }
}));

export default function BasicProfile() {
  const classes = useStyles();
  const profileDetails = userData.profileDetails;
  const profileInfo = userData.profileInfo;

  return (
    <Card className={classes.profileCard}>
      <div
        className={classes.cardTitleContainer}
        style={{ paddingBottom: "0.2rem" }}
      >
        <span style={{ fontWeight: 600 }}>Basic Profile</span>
        <button className={classes.editProfileButton}>Edit Profile</button>
      </div>

      <Divider />

      <div style={{ padding: "12px" }}>
        <div style={{ display: "flex" }}>
          {profileDetails.map((item) => {
            return (
              <>
                <img
                  src={item.profileImg}
                  alt="Profile"
                  style={{ height: "80px", borderRadius: "6px" }}
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "0px 4px 0px 15px"
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "rgba(0, 0, 0, 0.65)",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {" "}
                    {item.name}
                  </span>
                  <span
                    style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.65)" }}
                  >
                    {item.id}
                    <Tooltip
                      title="Check the below post."
                      placement="top"
                      arrow
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="16px"
                        height="16px"
                        style={{
                          color: "#337ab7",
                          margin: "3px 0px 0px 4px",
                          position: "absolute"
                        }}
                        fill="currentColor"
                      >
                        <path d={item.i_path_d}></path>
                      </svg>
                    </Tooltip>
                  </span>

                  <Tooltip title="Ranking: 5474" arrow>
                    <Rating />
                  </Tooltip>
                </div>
              </>
            );
          })}
          <div className="githubContainer">
            {profileDetails.map((item) => {
              return (
                <a href={item.github_link}>
                  <svg
                    viewBox="0 0 24 24"
                    width="32px"
                    height="32px"
                    className="githubIcon"
                    fill="currentColor"
                  >
                    <path d={item.github_path_d}></path>
                  </svg>
                </a>
              );
            })}
          </div>
        </div>
        <div className="linkAndLocationWrapper">
          {profileInfo.map((item, index) => {
            return (
              <div className={item.cName} style={{}}>
                <svg
                  viewBox="0 0 24 24"
                  width="14px"
                  height="14px"
                  style={{ marginRight: "5px", color: "rgba(0, 0, 0, 0.65)" }}
                  fill="currentColor"
                >
                  <path d={item.path_d}></path>
                </svg>
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "rgba(0, 0, 0, 0.65)"
                  }}
                >
                  {item.title}
                </span>
                <span
                  style={{
                    marginLeft: "12px"
                  }}
                >
                  <a href={item.link} className={item.subCName}>
                    {item.sub}
                  </a>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
