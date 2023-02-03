import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import Calendar from "../Calendar/Calendar";
import ConditionalWrapper from "../ConditionalWrapper";
import Input from "../Input/Input";
import Label from "../Label/Label";
import classes from "./CalendarControl.module.css";

type Props = {
  date: Date;
  setDate: (date: Date) => void;
};

export default function CalendarControl({ date, setDate }: Props) {
  const [isCalendarActive, setIsCalendarActive] = useState(false);

  return (
    <ConditionalWrapper
      condition={isCalendarActive}
      wrapper={(children: any) => (
        <ClickAwayListener onClickAway={() => setIsCalendarActive(false)}>
          {children}
        </ClickAwayListener>
      )}
    >
      <div className={classes.CalendarControl}>
        <Input
          isActive={isCalendarActive}
          label={
            <Label onClick={() => setIsCalendarActive(false)}>Issue Date</Label>
          }
          value={date}
          onClickInside={() => setIsCalendarActive(!isCalendarActive)}
        />
        {isCalendarActive && (
          <Calendar
            shouldClose={() => setIsCalendarActive(false)}
            onClickDay={setDate}
            value={date}
          />
        )}
      </div>
    </ConditionalWrapper>
  );
}
