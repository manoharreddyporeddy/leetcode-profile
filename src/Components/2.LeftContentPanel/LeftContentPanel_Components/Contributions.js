import { makeStyles } from "@material-ui/core/styles";

import React from "react";

import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";

import { userData } from "/src/Components/2.LeftContentPanel/data/pgmreddy";

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

export default function Contributions() {
  const classes = useStyles();

  return (
    <Card className={classes.profileCard}>
      <div className={classes.cardTitleContainer}>
        <div style={{ fontWeight: 600 }}>Contributions</div>
      </div>
      <Divider />
      <div style={{ padding: "12px" }}>
        <div
          className={classes.cardItem}
          style={{ borderBottom: "1px solid #e8e8e8" }}
        >
          <div
            style={{
              fontWeight: 400,
              display: "flex",
              alignItems: "center",
              height: "20.8px"
            }}
          >
            <svg
              aria-hidden="true"
              style={{ marginRight: "5px", color: "rgba(0, 0, 0, 0.65)" }}
              data-icon="gift"
              data-prefix="fas"
              viewBox="0 0 512 512"
              width="14px"
              height="14px"
              fill="currentColor"
            >
              <path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"></path>
            </svg>
            <span>Points</span>
          </div>
          <span className={classes.chip}>1011</span>
        </div>
        <div
          className={classes.cardItem}
          style={{ borderBottom: "1px solid #e8e8e8", paddingTop: "12px" }}
        >
          <div
            style={{
              fontWeight: 400,
              display: "flex",
              alignItems: "center",
              height: "20.8px"
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="14px"
              height="14px"
              style={{ marginRight: "5px", color: "rgba(0, 0, 0, 0.65)" }}
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
              ></path>
            </svg>
            Problems
          </div>
          <span className={classes.chip}>0</span>
        </div>
        <div
          className={classes.cardItem}
          style={{ paddingTop: "12px", paddingBottom: "0px" }}
        >
          <div
            style={{
              fontWeight: 400,
              display: "flex",
              alignItems: "center",
              height: "20.8px"
            }}
          >
            <svg
              aria-hidden="true"
              style={{ marginRight: "5px", color: "rgba(0, 0, 0, 0.65)" }}
              data-icon="gift"
              data-prefix="fas"
              viewBox="0 0 512 512"
              width="14px"
              height="14px"
              fill="currentColor"
            >
              <path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"></path>
            </svg>
            Testcases
          </div>
          <span className={classes.chip}>11</span>
        </div>
      </div>
    </Card>
  );
}
