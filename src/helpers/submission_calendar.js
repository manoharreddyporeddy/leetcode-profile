import React from "react";
import "../css/submission_calendar.css";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";

// import { heatmapdata } from "../data/submission_calendar_data";
import { getUserProfile as UserProfile } from "../data/getUserProfile";

const today = new Date();

let submissionCalendar = UserProfile.data.matchedUser.submissionCalendar;

let submissionCalendarObject = JSON.parse(submissionCalendar);

const ordered = Object.keys(submissionCalendarObject)
  .sort()
  .reduce((obj, key) => {
    obj[key] = submissionCalendarObject[key];
    return obj;
  }, {});

function convert(date) {
  var datearray = date.split("/");
  var newdate = datearray[2] + "/" + datearray[0] + "/" + datearray[1];
  return newdate;
}

const orderedFormattedDates = Object.keys(ordered).reduce((obj, key) => {
  let dateObject = new Date(key * 1000);
  let humanDateFormat = dateObject.toLocaleDateString();
  obj[key] = convert(humanDateFormat);
  return obj;
}, {});

let arr = [];
arr.push(ordered);

let dateValues = Object.values(orderedFormattedDates);
let countValues = Object.values(arr[0]);
export const totalSubmissionCount = countValues.reduce((a, b) => a + b, 0);

let count = Object.values(orderedFormattedDates).length;

function Heatmap() {
  const data = Array.from(Array(count).keys()).map((index) => {
    return {
      date: dateValues[index],
      count: countValues[index]
    };
  });
  return (
    <div>
      <CalendarHeatmap
        startDate={shiftDate(today, -365)}
        endDate={today}
        values={data}
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

export default Heatmap;
