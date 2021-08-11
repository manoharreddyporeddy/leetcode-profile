import "./css/LeftContentPanel.css";

import React from "react";

import BasicProfile from "./l1-BasicProfile";
import Contributions from "./l2-Contributions";
import Discuss from "./l3-Discuss";

export default function App() {
    return (
        <>
            <BasicProfile />
            <Contributions />
            <Discuss />
        </>
    );
}
