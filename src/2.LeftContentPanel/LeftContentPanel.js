import "./LeftContentPanel.css";

import React from "react";

import BasicProfile from "./BasicProfile";
import Contributions from "./Contributions";
import Discuss from "./Discuss";

export default function App() {
    return (
        <>
            <BasicProfile />
            <Contributions />
            <Discuss />
        </>
    );
}
