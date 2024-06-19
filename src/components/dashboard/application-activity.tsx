import React from "react";

import ActivityCalendar, {
  BlockElement,
  Activity,
} from "react-activity-calendar";

import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import moment from "moment";

const startDate = "2024-01-01";
const endDate = "2024-12-31";

// Sample data
const data = [
  { date: startDate, count: 0, level: 0 },
  { date: "2024-06-06", count: 1, level: 1 },
  { date: "2024-06-29", count: 1, level: 1 },
  { date: endDate, count: 0, level: 0 },
];

function ApplicationActivity() {
  return (
    <>
      <ActivityCalendar
        data={data}
        showWeekdayLabels
        blockSize={12}
        blockMargin={4}
        labels={{
          totalCount: "{{count}} Applications submitted in {{year}}",
        }}
        renderBlock={(block: BlockElement, activity: Activity) =>
          React.cloneElement(block, {
            "data-tooltip-id": "react-tooltip",
            "data-tooltip-html": `${activity.count} applications on ${moment(activity.date).format("MMM DD, YYYY")}`,
          })
        }
      />

      <ReactTooltip id="react-tooltip" />
    </>
  );
}
export default ApplicationActivity;
