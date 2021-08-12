import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";

import { getUserProfile as UserProfile } from "./data/getUserProfile";

const useStyles = makeStyles((theme) => ({
  profileCard: {
    borderRadius: "8px",
    marginBottom: "15px"
  },

  cardTitleContainer: {
    padding: "0.5625rem 0.75rem 0rem",
    height: "27.8px"
  },

  cardItem: {
    paddingBottom: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  chip: {
    borderRadius: "10px",
    backgroundColor: "rgb(76, 175, 80)",
    padding: "0px 7px",
    fontWeight: "700",
    color: "rgb(255, 255, 255)",
    fontSize: "12px"
  }
}));

export default function Discuss() {
  const classes = useStyles();
  let reputation = UserProfile.data.matchedUser.profile.reputation;

  return (
    <Card className={classes.profileCard}>
      <div className={classes.cardTitleContainer}>
        <span style={{ fontWeight: 600 }}>Discuss</span>
      </div>
      <Divider />
      <div className={classes.cardItem} style={{ padding: "12px" }}>
        <span style={{ fontWeight: 400 }}>
          <svg
            viewBox="0 0 24 24"
            width="14px"
            height="14px"
            style={{ marginRight: "5px", color: "rgba(0, 0, 0, 0.65)" }}
            fill="currentColor"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
          </svg>
          Reputation
        </span>
        <span className={classes.chip}>{reputation}</span>
      </div>
    </Card>
  );
}
