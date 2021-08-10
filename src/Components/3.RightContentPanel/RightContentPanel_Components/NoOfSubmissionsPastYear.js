import React from "react";

import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Heatmap from "./submission_calendar";

export default function NoOfSubmissions() {
  return (
    <div>
      <Card>
        <div style={{ height: "27.8px", padding: "9px 12px 0px 12px" }}>
          <div style={{ fontWeight: 600 }}>
            1781 submissions in the last year
          </div>
        </div>
        <Divider />
        <div style={{ padding: "12px" }}>
          <Heatmap />
        </div>
      </Card>
    </div>
  );
}
