import clsx from "clsx";
import Label from "../Label/Label";
import classes from "./TextField.module.css";

type Props = {
  value: string;
  label: string;
};

export default function TextField({ value,label }: Props) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        value={value}
        className={clsx("field", classes.TextField)}
        type="text"
      />
    </div>
  );
}
