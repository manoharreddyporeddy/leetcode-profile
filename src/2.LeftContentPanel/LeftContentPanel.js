import "./LeftContentPanel.css";

import React from "react";

import BasicProfile from "./LeftContentPanel_Components/BasicProfile";
import Contributions from "./LeftContentPanel_Components/Contributions";
import Discuss from "./LeftContentPanel_Components/Discuss";

export default function App() {
  return (
    <>
      <BasicProfile />
      <Contributions />
      <Discuss />
    </>
  );
}
