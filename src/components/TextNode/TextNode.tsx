import clsx from "clsx";
import { PropsWithChildren } from "react";
import classes from "./TextNode.module.css";

type Props = {
  variant?: "title" | "subtitle" | "boldedSubtitle" | "bold";
  className?: string;
} & PropsWithChildren;

export default function TextNode({ children, variant, className }: Props) {
  if (variant === "title") {
    return <h1 className={clsx(classes[variant], className)}>{children}</h1>;
  }

  if (
    variant === "subtitle" ||
    variant === "boldedSubtitle" ||
    variant === "bold"
  ) {
    return <p className={clsx(classes[variant], className)}>{children}</p>;
  }

  return <p className={clsx(classes.normal, className)}>{children}</p>;
}
