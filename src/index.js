import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useLocation } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <Router>
            <Switch>
                <Route path="/:username">
                    <App />
                </Route>
                <Route path="*">
                    <Redirect to="/pgmreddy" />
                </Route>
            </Switch>
        </Router>
    </StrictMode>,
    rootElement
);
