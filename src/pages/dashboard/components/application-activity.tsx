import React from "react";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

import ActivityCalendar, {
  BlockElement,
  Activity,
} from "react-activity-calendar";

import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { getActivityCalendarData } from "@/services/dashboard.service";

function ApplicationActivity() {
  const { data, isLoading } = useQuery({
    queryKey: ["activity"],
    queryFn: getActivityCalendarData,
    initialData: [],
  });

  return (
    <>
      <ActivityCalendar
        loading={isLoading}
        data={data}
        showWeekdayLabels
        blockSize={12}
        blockMargin={4}
        labels={{
          totalCount: "{{count}} applications submitted in past year",
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
