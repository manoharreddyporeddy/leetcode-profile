import React from "react";
import "../css/submission_calendar.css";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";

// import { heatmapdata } from "../data/submission_calendar_data";
import { getUserProfile as UserProfile } from "../data/getUserProfile";

function Heatmap({ getUserProfile }) {
  const today = new Date();

  let submissionCalendar = getUserProfile.data.matchedUser.submissionCalendar;

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

  function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function (item, index) {
      total += item;
      count++;
    });

    return total / count;
  }

  console.log(calculateAverage(countValues));

  let count = Object.values(orderedFormattedDates).length;

  const data = Array.from(Array(count).keys()).map((index) => {
    return {
      date: dateValues[index],
      count: countValues[index],
    };
  });
  return (
    <div>
      <CalendarHeatmap
        startDate={shiftDate(today, -365)}
        endDate={today}
        values={data}
        classForValue={(values) => {
          if (!values) {
            return "color-empty";
          }
          return `${values.count}` < 7
            ? `color-github-${values.count}`
            : `color-github-7`;
        }}
        tooltipDataAttrs={(data) => {
          let readableDate = new Date(data.date).toDateString();

          if (data.count === null) {
            return null;
          } else {
            return {
              "data-tip": `${data.count} submissions on ${readableDate}`,
            };
          }
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
// export const totalSubmissionCount={totalSubmissionCount};
