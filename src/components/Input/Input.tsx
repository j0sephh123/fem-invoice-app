import clsx from "clsx";
import CalendarIcon from "@/icons/CalendarIcon";
import { displayDate } from "@/utils/date";
import { ReactNode } from "react";
import classes from "./Input.module.css";

type Props = {
  onClickInside: () => void;
  value: Date;
  label?: ReactNode;
  isActive?: boolean;
};

export default function Input({
  onClickInside,
  value,
  label,
  isActive,
}: Props) {
  return (
    <div className={classes.field}>
      {label}
      <div onClick={onClickInside} className={classes.inputWrapper}>
        <input
          value={displayDate(value)}
          readOnly
          className={clsx(classes.input, isActive && classes.active)}
        />
        <CalendarIcon />
      </div>
    </div>
  );
}
