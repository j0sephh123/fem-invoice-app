import { PropsWithChildren } from "react";
import classes from "./Checkbox.module.css";

type Props = {
  isChecked?: boolean;
} & PropsWithChildren;

export default function Checkbox({ isChecked, children }: Props) {
  return (
    <label className={classes.container}>
      {children}
      <input checked={isChecked} type="checkbox" />
      <span className={classes.checkmark}></span>
    </label>
  );
}
