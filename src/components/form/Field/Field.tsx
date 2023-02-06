import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";
import classes from "./Field.module.css";

type Props = {
  onClickInside: () => void;
  label?: ReactNode;
  icon?: ReactNode;
  isActive?: boolean;
} & PropsWithChildren;

export default function Field({
  onClickInside,
  label,
  isActive,
  icon,
  children,
}: Props) {
  return (
    <div>
      {label}
      <div onClick={onClickInside} className={classes.fieldWrapper}>
        <div className={clsx("field", isActive && classes.active)}>
          {children}
        </div>
        <div className={classes.icon}>{icon}</div>
      </div>
    </div>
  );
}
