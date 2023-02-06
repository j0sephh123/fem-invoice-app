import clsx from "clsx";
import { PropsWithChildren } from "react";
import classes from "./Flex.module.css";

type Props = {
  className?: string;
} & PropsWithChildren;

export default function Flex({ children, className }: Props) {
  return <div className={clsx(classes.Flex, className)}>{children}</div>;
}
