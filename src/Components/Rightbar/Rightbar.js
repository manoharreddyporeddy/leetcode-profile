import React from "react";
import "./Rightbar.css";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Highchart from "./highchart";
import Heatmap from "./heatmap";
import { Recentposts } from "./Recentposts";
import { Submissions } from "./Submissions";
import Chart from "./Percentage_circle";

export default function App() {
  return (
    <>
      <div className="threeCardsContainer">
        <div className="topCardContainer">
          <Card className="topCard">
            <div style={{ padding: "0px", height: "45.2px" }}>
              <span className="topCardHeading">Contest Rating</span>
              <span style={{ fontSize: "22px", fontWeight: "600" }}>
                {" "}
                1,618
              </span>
              <span style={{ fontSize: "12px", fontWeight: "600" }}>pt</span>
            </div>

            <div>
              <Highchart />
            </div>

            <div className="topCardContent">
              <div>
                <p style={{ fontSize: "12px", color: "rgba(60, 60, 67, 0.6)" }}>
                  Ranking
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(38, 38, 38, 0.75)",
                    fontWeight: "600"
                  }}
                >
                  34,094
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "rgba(60, 60, 67, 0.6)"
                  }}
                >
                  Attended
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(38, 38, 38, 0.75)",
                    fontWeight: "600",
                    float: "right"
                  }}
                >
                  30
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div className="topCardContainer">
          <Card className="topCard">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ padding: "0px", height: "45.2px" }}>
                <span className="topCardHeading">Problems Solved</span>
                <span style={{ fontSize: "22px", fontWeight: "600" }}>
                  {" "}
                  840
                </span>
              </div>
              <div className="pieContainer">
                <Chart />
              </div>
            </div>
            <div className="topCardContent">
              <div>
                <p style={{ fontSize: "12px", color: "rgb(67, 160, 71)" }}>
                  Easy
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(38, 38, 38, 0.75)",
                    fontWeight: "600"
                  }}
                >
                  438
                  <span
                    style={{
                      fontWeight: "500",
                      color: "rgba(60, 60, 67, 0.3)",
                      fontSize: "12px"
                    }}
                  >
                    /509
                  </span>
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "rgb(251, 140, 0)"
                  }}
                >
                  Medium
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(38, 38, 38, 0.75)",
                    fontWeight: "600"
                  }}
                >
                  378
                  <span
                    style={{
                      fontWeight: "500",
                      color: "rgba(60, 60, 67, 0.3)",
                      fontSize: "12px"
                    }}
                  >
                    /1032
                  </span>
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "rgb(233, 30, 99)"
                  }}
                >
                  Hard
                </p>

                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(38, 38, 38, 0.75)",
                    fontWeight: "600"
                  }}
                >
                  25
                  <span
                    style={{
                      fontWeight: "500",
                      color: "rgba(60, 60, 67, 0.3)",
                      fontSize: "12px"
                    }}
                  >
                    /414
                  </span>
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div className="topCardContainer">
          <Card className="topCard">
            <div style={{ padding: "0px", height: "45.2px" }}>
              <div>
                <span className="topCardHeading">
                  Badges
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      display: "flex",
                      color: "black"
                    }}
                  >
                    {" "}
                    0
                  </span>
                </span>
              </div>
            </div>
            <div className="badgeImgContainer">
              <img
                src="https://leetcode.com/static/images/badges/dcc-2021-8.png"
                alt="Jul LeetCoding Challenge"
                height="72px"
              />
            </div>
            <div className="topCardContent">
              <div>
                <p style={{ fontSize: "12px", color: "rgba(60, 60, 67, 0.6)" }}>
                  Upcoming Badge
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(38, 38, 38, 0.75)",
                    fontWeight: "600"
                  }}
                >
                  Aug LeetCoding Challenge
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div>
        <Card>
          <div className="cardHeader">
            <div style={{ fontWeight: 600 }}>
              1781 submissions in the last year
            </div>
          </div>
          <Divider />
          <div className="heatmapContainer">
            <Heatmap />
          </div>
        </Card>
      </div>
      <div>
        <Card style={{ margin: "15px 0px" }}>
          <div className="cardHeader">
            <div style={{ fontWeight: 600 }}>Recent Posts</div>
          </div>
          <Divider />
          <div style={{ paddingLeft: "12px", paddingRight: "12px" }}>
            <ul
              style={{ listStyleType: "none", margin: "0px", padding: "0px" }}
            >
              {Recentposts.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="postsSubmissionsListItems"
                      href="https://leetcode.com/problems/number-of-provinces/discuss/1346298/547-graph-dfs"
                    >
                      <span style={{ display: "flex" }}>
                        <span
                          style={{
                            fontWeight: "700",
                            color: "rgb(85, 85, 85)"
                          }}
                        >
                          {item.title}
                        </span>
                        <span
                          style={{
                            color: "rgb(119, 119, 119)",
                            marginLeft: "8px",
                            marginRight: "8px"
                          }}
                        >
                          {item.time}
                        </span>
                      </span>
                      <span style={{ display: "flex", minWidth: "100px" }}>
                        <span class="postsSubmissionsIcon">
                          <svg
                            viewBox="0 0 24 24"
                            width="14px"
                            height="14px"
                            style={{ marginRight: "4px" }}
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7 19v-8H4v8h3zM7 9c0-.55.22-1.05.58-1.41L14.17 1l1.06 1.05c.27.27.44.65.44 1.06l-.03.32L14.69 8H21c1.1 0 2 .9 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3zm2 0v10h9l3-7v-2h-9l1.34-5.34L9 9z"
                            ></path>
                          </svg>
                          {item.like}
                        </span>
                        <span class="postsSubmissionsIcon">
                          <svg
                            aria-hidden="true"
                            data-icon="comments"
                            data-prefix="far"
                            viewBox="0 0 576 512"
                            width="14px"
                            height="14px"
                            style={{ marginRight: "4px" }}
                            fill="currentColor"
                          >
                            <path d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"></path>
                          </svg>
                          {item.comment}
                        </span>
                      </span>
                    </a>
                    <Divider />
                  </li>
                );
              })}
              {/* <li>
                <a
                  className="recent-content"
                  href="https://leetcode.com/problems/number-of-provinces/discuss/1346298/547-graph-dfs"
                >
                  <span style={{ fontWeight: "700", color: "rgb(85, 85, 85)" }}>
                    1333 - Price & distance max, plus if vegan-friendly is 1,
                    sort by rating & ids desc, return ids
                  </span>
                  <span
                    style={{
                      color: "rgb(119, 119, 119)",
                      marginLeft: "8px",
                      marginRight: "8px"
                    }}
                  >
                    an hour ago
                  </span>
                  <span class="recent-icons">
                    <span class="recent-icons2">
                      <svg
                        viewBox="0 0 24 24"
                        width="14px"
                        height="14px"
                        style={{ marginRight: "4px" }}
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7 19v-8H4v8h3zM7 9c0-.55.22-1.05.58-1.41L14.17 1l1.06 1.05c.27.27.44.65.44 1.06l-.03.32L14.69 8H21c1.1 0 2 .9 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3zm2 0v10h9l3-7v-2h-9l1.34-5.34L9 9z"
                        ></path>
                      </svg>
                      0
                    </span>
                    <span class="recent-icons2">
                      <svg
                        aria-hidden="true"
                        data-icon="comments"
                        data-prefix="far"
                        viewBox="0 0 576 512"
                        width="14px"
                        height="14px"
                        style={{ marginRight: "4px" }}
                        fill="currentColor"
                      >
                        <path d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"></path>
                      </svg>
                      0
                    </span>
                  </span>
                </a>
                <Divider className={classes.divider} />
              </li>
              <CardContent className={classes.card2} style={{ height: "24px" }}>
                <a href="https://leetcode.com/problems/number-of-provinces/discuss/1346298/547-graph-dfs">
                  <span>785 - Graph DFS</span>
                  <span>13 hours ago</span>
                  <span>
                    <span>
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          fill-rule="evenodd"
                          d="M7 19v-8H4v8h3zM7 9c0-.55.22-1.05.58-1.41L14.17 1l1.06 1.05c.27.27.44.65.44 1.06l-.03.32L14.69 8H21c1.1 0 2 .9 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3zm2 0v10h9l3-7v-2h-9l1.34-5.34L9 9z"
                        ></path>
                      </svg>
                      0
                    </span>
                    <span class="css-19t9jfg">
                      <svg
                        aria-hidden="true"
                        class="icon__1Md2 css-g4bnbg"
                        data-icon="comments"
                        data-prefix="far"
                        viewBox="0 0 576 512"
                        width="1em"
                        height="1em"
                      >
                        <path d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"></path>
                      </svg>
                      0
                    </span>
                  </span>
                </a>
              </CardContent>
              <Divider className={classes.divider} /> */}
            </ul>
          </div>
        </Card>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <Card>
          <div className="cardHeader">
            <div style={{ fontWeight: 600 }}>Most Recent Submissions</div>
          </div>
          <Divider />
          <div style={{ paddingLeft: "12px", paddingRight: "12px" }}>
            <ul
              style={{ listStyleType: "none", margin: "0px", padding: "0px" }}
            >
              {Submissions.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="postsSubmissionsListItems"
                      href="https://leetcode.com/problems/number-of-provinces/discuss/1346298/547-graph-dfs"
                    >
                      <span style={{ display: "flex" }}>
                        <span
                          style={{
                            fontWeight: "700",
                            color: "rgb(85, 85, 85)"
                          }}
                        >
                          {item.title}
                        </span>
                        <span
                          style={{
                            color: "rgb(119, 119, 119)",
                            marginLeft: "8px",
                            marginRight: "8px"
                          }}
                        >
                          {item.time}
                        </span>
                      </span>
                      <span style={{ display: "flex", minWidth: "141.738px" }}>
                        <span
                          class="postsSubmissionsIcon"
                          style={{ marginRight: "4px" }}
                        >
                          <span class="langBadge">JavaScript</span>
                        </span>
                        <span
                          class="postsSubmissionsIcon"
                          style={{ marginRight: "0px" }}
                        >
                          <span class="statusBadge">Accepted</span>
                        </span>
                      </span>
                    </a>
                    <Divider />
                  </li>
                );
              })}
            </ul>
            {/* <a href="/problems/number-of-provinces">
              <span>Number of Provinces</span>
              <span>12 hours ago</span>
              <span>
                <span>
                  <span type="info">JavaScript</span>
                </span>
                <span>
                  <span type="success">Accepted</span>
                </span>
              </span>
            </a> */}
          </div>
        </Card>
      </div>
    </>
  );
}

//   return (
//     <div className={classes.root}>
//       <Grid container xs={12} direction="row">
//         <Paper className={classes.paper3}>
//           <Grid item xs={3} cointainer spacing={1}>
//             <Paper className={classes.paper}>
//               {/* <Grid item xs={4}>
//                 <Paper className={classes.paper}>1.</Paper>
//               </Grid>
//               <Grid item xs={4}>
//                 <Paper className={classes.paper}>2.</Paper>
//               </Grid>
//               <Grid item xs={4}>
//                 <Paper className={classes.paper}>3.</Paper>
//               </Grid> */}
//             </Paper>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper className={classes.paper}>2.</Paper>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper className={classes.paper}>3.</Paper>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper className={classes.paper}>4.</Paper>
//           </Grid>
//         </Paper>
//       </Grid>
//     </div>
//   );
// }
