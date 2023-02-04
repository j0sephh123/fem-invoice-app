import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";
import classes from "./Button.module.css";

type Props = {
  icon?: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger" | "dark";
} & PropsWithChildren;

export default function Field({
  children,
  icon,
  onClick,
  variant = "primary",
}: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(classes.Button, classes[variant], !!icon && classes.hasIcon)}
      type="button"
    >
      {icon}
      {children}
    </button>
  );
}
