import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";
import classes from "./Button.module.css";

type Props = {
  icon?: ReactNode;
  onClick: () => void;
  type?: "primary" | "secondary" | "danger";
} & PropsWithChildren;

export default function Field({
  children,
  icon,
  onClick,
  type = "primary",
}: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(classes.Button, classes[type])}
      type="button"
    >
      {icon}
      {children}
    </button>
  );
}
