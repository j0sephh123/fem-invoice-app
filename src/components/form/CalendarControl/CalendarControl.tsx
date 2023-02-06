import CalendarIcon from "@/components/icons/CalendarIcon";
import TextNode from "@/components/primitives/TextNode/TextNode";
import ConditionalWrapper from "@/components/utility/ConditionalWrapper/ConditionalWrapper";
import { displayDate } from "@/utils/date";
import { Dispatch, SetStateAction, useState } from "react";
import Calendar from "react-calendar";
import ClickAwayListener from "react-click-away-listener";
import Field from "../Field/Field";

import classes from "./CalendarControl.module.css";

type Props = {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
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
            <TextNode onClick={() => setIsCalendarActive(false)}>
              Issue Date
            </TextNode>
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
