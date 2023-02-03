import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import Calendar from "../Calendar/Calendar";
import Input from "../Input/Input";

type Props = {
  date: Date;
  setDate: (date: Date) => void;
};

export default function CalendarControl({ date, setDate }: Props) {
  const [isCalendarActive, setIsCalendarActive] = useState(false);
  const handleDayClick = () => {
    console.log("handleDayClick");
  };

  return (
    <ClickAwayListener onClickAway={() => console.log("AWAY")}>
      <div className="calendarControl">
        <Input
          value={date}
          signalIsActive={(isActive) => {
            if (isActive) {
              setIsCalendarActive(true);
            }
          }}
        />
        {isCalendarActive && (
          <Calendar shouldClose={() => setIsCalendarActive(false)} onClickDay={setDate} value={date} />
        )}
      </div>
    </ClickAwayListener>
  );
}
