import { PropsWithChildren } from "react";
import classes from "./Label.module.css";

type Props = { onClick?: () => void } & PropsWithChildren;

export default function Label({ onClick, children }: Props) {
  return <div onClick={onClick} className={classes.Label}>{children}</div>;
}
