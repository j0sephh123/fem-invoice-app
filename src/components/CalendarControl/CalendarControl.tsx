import CalendarIcon from "@/icons/CalendarIcon";
import { displayDate } from "@/utils/date";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import Calendar from "../Calendar/Calendar";
import ConditionalWrapper from "../ConditionalWrapper/ConditionalWrapper";
import Field from "../Field/Field";
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
        <Field
          isActive={isCalendarActive}
          label={
            <Label onClick={() => setIsCalendarActive(false)}>Issue Date</Label>
          }
          onClickInside={() => setIsCalendarActive(!isCalendarActive)}
          icon={<CalendarIcon />}
        >
          {displayDate(date)}
        </Field>
        {isCalendarActive && <Calendar onClickDay={setDate} value={date} />}
      </div>
    </ConditionalWrapper>
  );
}
