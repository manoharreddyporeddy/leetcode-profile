import React from "react";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";

import Heatmap from "./helpers/submission_calendar";

export default function NoOfSubmissions({getUserProfile}) {

  let submissionCalendar = getUserProfile.data.matchedUser.submissionCalendar;
  let submissionCalendarObject = JSON.parse(submissionCalendar);
  let count = 0;

  for(let key in submissionCalendarObject) {

    count = count + submissionCalendarObject[key];
}

  return (
    <div>
      <Card>
        <div style={{ height: "27.8px", padding: "9px 12px 0px 12px" }}>
          <div style={{ fontWeight: 600 }}>
            {count} submissions in the last year
          </div>
        </div>
        <Divider />
        <div style={{ padding: "12px" }}>
          <Heatmap getUserProfile={getUserProfile}/>
        </div>
      </Card>
    </div>
  );
}
