import "./css/LeftContentPanel.css";

import React, { useState, useEffect } from "react";

import BasicProfile from "./l1-BasicProfile";
import Contributions from "./l2-Contributions";
import Discuss from "./l3-Discuss";


export default function App({getUserProfile}) {

    return (
        <>
            <BasicProfile getUserProfile={getUserProfile}/>
            <Contributions getUserProfile={getUserProfile}/>
            <Discuss getUserProfile={getUserProfile}/>
        </>
    );
}
