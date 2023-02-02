import Calendar from "react-calendar";
import { useState } from "react";

export default function Home() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="app">
      <div className="calendarContainer">
        <Calendar
          showWeekNumbers={false}
          prev2Label={null}
          next2Label={null}
          onChange={onChange}
          value={value}
          view="month"
          onClickMonth={() => {
            console.log("month click");
          }}
          minDetail='month'
        />
      </div>
    </div>
  );
}
