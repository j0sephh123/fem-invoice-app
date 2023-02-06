import clsx from "clsx";
import { ReactNode } from "react";
import classes from "./TextField.module.css";

type Props = {
  value: string;
  label: ReactNode;
};

export default function TextField({ value, label }: Props) {
  return (
    <div>
      {label}
      <input
        value={value}
        className={clsx("field", classes.TextField)}
        type="text"
      />
    </div>
  );
}
