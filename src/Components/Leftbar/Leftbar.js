import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import "./Leftbar.css";
import Divider from "@material-ui/core/Divider";
import { Tooltip } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

export default function App() {
  return (
    <>
      <Card className="profileCardContainer" direction="row">
        <div className="cardTitle" style={{ paddingBottom: "0.3rem" }}>
          <span style={{ fontWeight: 600 }}>Basic Profile</span>
          <button className="editProfile">Edit Profile</button>
        </div>

        <Divider />

        <div style={{ padding: "12px" }}>
          <div className="profileDetailsContainer">
            <img
              src="https://assets.leetcode.com/users/pgmreddy/avatar_1590316229.png"
              alt="Profile"
              style={{ height: "80px", borderRadius: "6px" }}
            />

            <div className="profileDetailsTextbox">
              <div className="profileNameID">
                <Typography
                  variant="h7"
                  style={{
                    fontWeight: 600,
                    fontSize: "18px",
                    color: "rgba(0, 0, 0, 0.65)"
                  }}
                >
                  Manohar Reddy Poreddy
                </Typography>
              </div>

              <div className="profileNameID">
                <Typography
                  variant="subtitle1"
                  style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.65)" }}
                >
                  pgmreddy{" "}
                </Typography>
                <Tooltip title="Check the below post." placement="top" arrow>
                  <svg
                    viewBox="0 0 24 24"
                    width="16px"
                    height="16px"
                    style={{ color: "#337ab7", marginLeft: "4px" }}
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.91 3.5c.436.031.795.187 1.075.468.28.28.421.63.421 1.052 0 .42-.14.771-.42 1.052-.281.28-.64.42-1.076.42-.437 0-.795-.14-1.076-.42-.28-.28-.42-.631-.42-1.052 0-.421.14-.772.42-1.052.28-.281.64-.437 1.076-.468zm-.374 4.77c.56 0 .85.233.865.7.015.468-.024.874-.117 1.217l-1.17 4.395c-.404 1.465-.576 2.385-.514 2.759.125.25.398.25.819 0 .42-.25.818-.5 1.192-.748l.047-.047c.062 0 .125.03.187.093l.187.328c.031.062 0 .124-.094.187L12.6 18.79c-.405.28-.966.507-1.683.678-.717.172-1.029-.35-.935-1.566.561-2.681 1.036-4.684 1.426-6.009.39-1.325.101-1.675-.865-1.052l-1.075.702c-.094.062-.156.085-.187.07-.032-.016-.078-.102-.14-.257L9 11.122c0-.031.047-.094.14-.187.094-.094.678-.522 1.754-1.286 1.075-.764 1.956-1.224 2.642-1.38z"
                    ></path>
                  </svg>
                </Tooltip>
              </div>

              <Tooltip title="Ranking: 5474" arrow>
                <div className="ratingContainer">
                  <div className="ratingListBackground">
                    <div>
                      <StarIcon
                        style={{ height: "0.9rem", width: "0.9rem" }}
                        className="ratingStarBackground ratingStarBase"
                      />
                    </div>
                    <div>
                      <StarIcon
                        style={{ height: "0.9rem", width: "0.9rem" }}
                        className="ratingStarBackground ratingStarBase"
                      />
                    </div>
                    <div>
                      <StarIcon
                        style={{ height: "0.9rem", width: "0.9rem" }}
                        className="ratingStarBackground ratingStarBase"
                      />
                    </div>
                    <div>
                      <StarIcon
                        style={{ height: "0.9rem", width: "0.9rem" }}
                        className="ratingStarBackground ratingStarBase"
                      />
                    </div>
                    <div>
                      <StarIcon
                        style={{ height: "0.9rem", width: "0.9rem" }}
                        className="ratingStarBackground ratingStarBase"
                      />
                    </div>
                  </div>
                  <div className="ratingList">
                    <div>
                      <StarIcon
                        style={{ height: "0.9rem", width: "0.9rem" }}
                        className="ratingStar ratingStarBase"
                      />
                    </div>
                    <div>
                      <StarIcon
                        style={{ height: "0.9rem", width: "0.9rem" }}
                        className="ratingStar ratingStarBase"
                      />
                    </div>
                    <div>
                      <StarIcon
                        style={{ height: "0.9rem", width: "0.9rem" }}
                        className="ratingStar ratingStarBase"
                      />
                    </div>
                    <div>
                      <StarIcon
                        style={{ height: "0.9rem", width: "0.9rem" }}
                        className="ratingStar ratingStarBase"
                      />
                    </div>
                    <div>
                      <StarIcon
                        style={{ height: "0.9rem", width: "0.9rem" }}
                        className="ratingStar ratingStarBase"
                      />
                    </div>
                  </div>
                </div>
              </Tooltip>
            </div>
            <div className="githubContainer">
              <a
                rel="noopener noreferrer"
                href="https://github.com/manoharreddyporeddy"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="32px"
                  height="32px"
                  className="githubIcon"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.337 21a1.646 1.646 0 0 1-1.652-1.635l-.007-1.17c-3.246.706-3.931-1.377-3.931-1.377-.531-1.348-1.296-1.707-1.296-1.707-1.06-.724.08-.71.08-.71 1.17.082 1.788 1.203 1.788 1.203 1.04 1.784 2.73 1.268 3.395.97.105-.754.408-1.269.741-1.56-2.591-.295-5.316-1.297-5.316-5.767 0-1.274.456-2.314 1.203-3.132-.121-.295-.52-1.48.112-3.088 0 0 .98-.313 3.21 1.196a11.197 11.197 0 0 1 2.921-.392c.991.004 1.99.133 2.923.392 2.227-1.51 3.206-1.196 3.206-1.196.635 1.608.236 2.794.115 3.088.748.816 1.201 1.858 1.201 3.132 0 4.482-2.73 5.468-5.328 5.757.418.363.791 1.072.791 2.161 0 1.562-.005 2.2-.005 2.2A1.647 1.647 0 0 1 13.838 21h-2.502z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="linkLocationWrapper">
            <div
              className="linkLocationContainer"
              style={{ borderBottom: "1px solid #e8e8e8" }}
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
                  d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
                ></path>
              </svg>
              <Typography
                variant="h7"
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "rgba(0, 0, 0, 0.65)"
                }}
              >
                Website
              </Typography>
              <Typography
                variant="h7"
                style={{
                  marginLeft: "12px"
                }}
              >
                <a
                  rel="noopener noreferrer"
                  href="https://leetcode.com/discuss/topic/910825"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#1890ff" }}
                >
                  https://leetcode.com/discuss/topic/910825
                </a>
              </Typography>
            </div>
            <div
              className="linkLocationContainer"
              style={{ paddingBottom: "0px" }}
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
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                ></path>
              </svg>
              <Typography
                variant="h7"
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "rgba(0, 0, 0, 0.65)",
                  fill: "currentColor"
                }}
              >
                Location
              </Typography>
              <Typography
                variant="h7"
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "rgba(0, 0, 0, 0.65)",
                  marginLeft: "245px"
                }}
              >
                India
              </Typography>
            </div>
          </div>
        </div>
      </Card>

      <Card className="profileCardContainer" direction="row">
        <div className="cardTitle">
          <div style={{ fontWeight: 600 }}>Contributions</div>
        </div>
        <Divider />
        <div style={{ padding: "12px" }}>
          <div
            className="cardItem"
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
            <span className="chip">1011</span>
            {/* <chip
                size="small"
                height="18px"
                label="981"
                className={classes.chip}
                style={{ marginLeft: "250px" }}
              /> */}
          </div>
          <div
            className="cardItem"
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
            <span className="chip">0</span>
          </div>
          <div
            className="cardItem"
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
            <span className="chip">11</span>
          </div>
        </div>
      </Card>

      <Card className="profileCardContainer" direction="row">
        <div className="cardTitle">
          <span style={{ fontWeight: 600 }}>Discuss</span>
        </div>
        <Divider />
        <div className="cardItem" style={{ padding: "12px" }}>
          <Typography variant="h7" style={{ fontWeight: 400 }}>
            <svg
              viewBox="0 0 24 24"
              width="14px"
              height="14px"
              style={{ marginRight: "5px", color: "rgba(0, 0, 0, 0.65)" }}
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              ></path>
            </svg>
            Reputation
          </Typography>
          <span className="chip">2708</span>
        </div>
      </Card>
    </>
  );
}
