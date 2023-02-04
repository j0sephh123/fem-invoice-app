import { PropsWithChildren } from "react";
import classes from "./DropdownItemCard.module.css";

type Props = {
 
} & PropsWithChildren;

export default function DropdownItemCard({ children }: Props) {
  return <div className={classes.DropdownItemCard}>{children}</div>;
}
