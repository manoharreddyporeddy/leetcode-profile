import React, { useState, useEffect, useRef } from "react";
import { profileMenuItems, notificationMenuItems } from "../data/Navbar-data";

import "../css/Navbar.css";

function ProfileMenuDropdown({
  click,
  setClick,
  profileIconRef,
  notificationIconRef,
  iconRefProfile,
  iconRefNotification,
  notificationClick,
  setNotificationClick,
}) {
  const handleClick = () => setClick(!click);
  const handleNotificationClick = () =>
    setNotificationClick(!notificationClick);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (
        iconRefProfile.current &&
        !iconRefProfile.current.contains(event.target)
      ) {
        setClick(false);
      }
    });
  });

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (
        iconRefNotification.current &&
        !iconRefNotification.current.contains(event.target)
      ) {
        setNotificationClick(false);
      }
    });
  });

  if (click) {
    return (
      <>
        <ul onClick={handleClick} className="profileMenuContainerT">
          {profileMenuItems.map((item, index) => {
            if (index === 0) {
              return (
                <>
                  <li
                    key={index}
                    className="profileMenuItem"
                    onClick={() => setClick(false)}
                  >
                    <a
                      href={profileMenuItems[0].url}
                      className={profileMenuItems[0].cName}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          height: "100%",
                          borderBottom: "1px solid rgb(224, 224, 224)",
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="1em"
                          height="1em"
                          class="profileMenuItemIcon usernameIcon"
                          fill="currentColor"
                          style={{ marginRight: "0px" }}
                        >
                          <path d={profileMenuItems[0].svg}></path>
                        </svg>
                        <div
                          style={{
                            alignItems: "center",
                            paddingLeft: "15px",
                            alignSelf: "stretch",
                            flex: "1 1 auto",
                            display: "flex",
                          }}
                        >
                          <div
                            className="profileMenuItemText"
                            style={{ justifyContent: "space-between" }}
                          >
                            <div style={{ color: "#212121" }}>
                              {profileMenuItems[0].title}
                            </div>
                            <svg
                              viewBox="0 0 24 24"
                              width="24px"
                              height="24px"
                              fill="currentColor"
                              style={{
                                flex: "0 0 auto",
                                marginLeft: "10px",
                                color: "#cfd8dc",
                              }}
                            >
                              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </>
              );
            } else {
              return (
                <li
                  key={index}
                  className="profileMenuItem"
                  onClick={() => setClick(false)}
                >
                  <a href={item.url} className={item.cName}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="1em"
                        height="1em"
                        class="profileMenuItemIcon"
                      >
                        <path d={item.svg}></path>
                      </svg>
                      <div className="profileMenuItemText">{item.title}</div>
                    </div>
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </>
    );
  } else if (notificationClick) {
    return (
      <div
        onClick={handleNotificationClick}
        className="notificationContainer"
        style={{
          boxShadow: "0 2px 8px rgb(0 0 0 / 15%)",
          right: "-60px",
          position: "absolute",
          marginBlockStart: "1em",
        }}
      >
        <div
          style={{
            maxHeight: "330px",
            backgroundColor: "white",
            position: "relative",
            width: "500px",
            borderRadius: "4px",
            height: "100%",
            zIndex: "2",
          }}
          className="notificationListContainer"
        >
          <ul className="profileMenuContainerN">
            {notificationMenuItems.map((item, index) => {
              let coin = "+10";
              index === 6 ? coin : (coin = "+5");
              const subContent = () => {
                if (index < 6) {
                  return (
                    <a
                      href="/contest/"
                      style={{ color: "#546e7a" }}
                      className="ntfLink"
                    >
                      Join here!
                    </a>
                  );
                }
                if (index === 6 || 7) {
                  return (
                    <>
                      <img
                        src="https://leetcode.com/static/images/coin.gif"
                        alt="LeetCoin"
                        style={{ height: "12px", marginLeft: "5px" }}
                      />
                      <span
                        style={{ padding: "0 5px 0 2px", color: "#fea116" }}
                      >
                        {coin}
                      </span>
                    </>
                  );
                } else return "";
              };

              return (
                <li key={index} className="notificationMenuItem">
                  <a href="" className={item.cName}>
                    <div
                      style={{
                        transition: "box-shadow 0.18s ease-in-out",
                        color: "#424242",
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          minHeight: "45px",
                          padding: "16px 0 12px 0",
                          borderBottom: "1px solid #eeeeee",
                          position: "relative",
                          zIndex: "2",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            height: "18px",
                            marginBottom: "7px",
                          }}
                        >
                          <div style={{ color: "#bdbdbd" }}>
                            <svg
                              viewBox="0 0 24 24"
                              width="18px"
                              height="18px"
                              style={{
                                color: "#f9a825",
                                marginRight: "8px",
                                verticalAlign: "middle",
                              }}
                              fill="currentColor"
                            >
                              <path d={item.svg}></path>
                            </svg>
                            {item.title}
                          </div>
                          <div style={{ fontSize: "12px", color: "#9e9e9e" }}>
                            {item.time}
                          </div>
                        </div>
                        <div
                          style={{
                            lineHeight: "20px",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.content}
                          {subContent()}
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          style={{
            height: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px",
            borderTop: "1px solid #f5f5f5",
            position: "relative",
            borderRadius: "4px",
            backgroundColor: "#fff",
          }}
        >
          <a
            style={{ color: "#b0bec5", transition: "color 0.18s ease-in-out" }}
            href=""
          >
            <svg
              className="ntfSettings"
              viewBox="0 0 24 24"
              width="20px"
              height="20px"
              fill="currentColor"
            >
              <path d="M14.895 2c-.69.734-1.724 1.212-2.896 1.212-1.17 0-2.203-.478-2.894-1.212-.279.084-3.866 2.176-4.146 2.449.275.975.163 2.124-.42 3.157-.586 1.033-1.505 1.706-2.472 1.949-.09.383-.09 4.507 0 4.89.967.243 1.887.916 2.471 1.949.585 1.033.697 2.182.42 3.157.28.273 3.868 2.365 4.146 2.449.69-.734 1.725-1.212 2.895-1.212 1.172 0 2.206.478 2.897 1.212.278-.084 3.864-2.176 4.145-2.449-.276-.975-.164-2.124.42-3.157.585-1.033 1.505-1.706 2.472-1.949.09-.383.09-4.507 0-4.89-.967-.243-1.886-.916-2.471-1.949-.584-1.033-.696-2.182-.42-3.157-.28-.273-3.868-2.365-4.147-2.449m.195 2.39c.556.318 1.23.714 1.765 1.038a6.275 6.275 0 0 0 .817 3.147 6.215 6.215 0 0 0 2.276 2.314c.01.679.01 1.543 0 2.222a6.208 6.208 0 0 0-2.276 2.314 6.277 6.277 0 0 0-.818 3.148c-.535.323-1.207.718-1.763 1.037a6.175 6.175 0 0 0-3.092-.822c-1.103 0-2.172.29-3.09.822a91.762 91.762 0 0 1-1.763-1.037 6.277 6.277 0 0 0-.818-3.148 6.215 6.215 0 0 0-2.276-2.314 80.47 80.47 0 0 1 0-2.222 6.213 6.213 0 0 0 2.275-2.314c.552-.975.83-2.069.818-3.147.536-.324 1.209-.72 1.764-1.038a6.184 6.184 0 0 0 3.09.822 6.178 6.178 0 0 0 3.09-.822M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
            </svg>
          </a>
          <a
            href=""
            className="ntfSettings"
            style={{ color: "rgb(119, 143, 155)", fontSize: "14px" }}
          >
            All notifications
          </a>
        </div>
      </div>
      // </div>
    );
  } else return "";
}

export default ProfileMenuDropdown;
