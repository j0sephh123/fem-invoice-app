import clsx from "clsx";
import { PropsWithChildren } from "react";
import classes from "./Flex.module.css";

type Props = {
  className?: string;
  gap?: number;
} & PropsWithChildren;

export default function Flex({ children, className, gap }: Props) {
  return (
    <div style={{ gap }} className={clsx(classes.Flex, className)}>
      {children}
    </div>
  );
}
