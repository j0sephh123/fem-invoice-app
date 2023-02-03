import Calendar from "react-calendar";
import { useState } from "react";
import ArrowIcon from "@/icons/ArrowIcon";
import { months } from "@/utils/date";

export default function Home() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="app">
      <div className="calendarContainer">
        <Calendar
          formatMonthYear={(_, date) =>
            `${months[date.getMonth()]} ${date.getFullYear()}`
          }
          showWeekNumbers={false}
          prevLabel={<ArrowIcon orientation="left" />}
          prev2Label={null}
          nextLabel={<ArrowIcon orientation="right" />}
          next2Label={null}
          onChange={onChange}
          value={value}
          view="month"
          onClickMonth={() => {
            console.log("month click");
          }}
          minDetail="month"
        />
      </div>
    </div>
  );
}
