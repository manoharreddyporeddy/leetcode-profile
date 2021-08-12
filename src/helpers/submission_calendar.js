import React from "react";
import "../css/submission_calendar.css";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";

import { heatmapdata, heatmapdata2 } from "../data/submission_calendar_data";
import { getUserProfile as UserProfile } from "../data/getUserProfile";

const today = new Date();

let submissionCalendar = UserProfile.data.matchedUser.submissionCalendar;

let object = JSON.parse(submissionCalendar);

const ordered = Object.keys(object)
  .sort()
  .reduce((obj, key) => {
    obj[key] = object[key];
    return obj;
  }, {});

// const o = Object.keys(ordered).reduce((obj, key) => {
//   let dateObject = new Date(key * 1000);
//   let humanDateFormat = dateObject.toLocaleString().slice(0, 10);
//   key = humanDateFormat;
//   return obj;
// }, {});

console.log(ordered);

const heatmap = heatmapdata.reverse();

function Heatmap() {
  const data = getRange(365).map((index) => {
    return {
      date: shiftDate(today, -index),
      count: heatmap[index]
    };
  });
  return (
    <div>
      <CalendarHeatmap
        startDate={shiftDate(today, -365)}
        endDate={today}
        values={[
          { date: "2021/01/01", count: 1 },
          { date: "2021/01/03", count: 4 },
          { date: "2021/01/06", count: 2 }
          // ...and so on
        ]}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `${value.count}` < 5
            ? `color-github-${value.count}`
            : `color-github-5`;
        }}
        tooltipDataAttrs={(value) => {
          return {
            "data-tip": `${value.count} submissions on ${value.date}`
          };
        }}
        showWeekdayLabels={false}
      />
      <ReactTooltip />
    </div>
  );
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Heatmap;
