import { PropsWithChildren } from "react";
import classes from "./DropdownItemCard.module.css";

type Props = {
  onClick: () => void;
} & PropsWithChildren;

export default function DropdownItemCard({ children, onClick }: Props) {
  return (
    <div onClick={onClick} className={classes.DropdownItemCard}>
      {children}
    </div>
  );
}
