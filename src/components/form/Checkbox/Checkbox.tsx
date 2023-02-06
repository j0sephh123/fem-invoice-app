import CheckIcon from "@/components/icons/CheckIcon/CheckIcon";
import TextNode from "@/components/primitives/TextNode/TextNode";
import { InvoiceStatus } from "@/types";
import clsx from "clsx";
import classes from "./Checkbox.module.css";

type Props = {
  isChecked?: boolean;
  type: InvoiceStatus;
  onClick: () => void;
};

export default function Checkbox({ isChecked, type, onClick }: Props) {
  return (
    <div onClick={onClick} className={classes.wrapper}>
      <div className={clsx(classes.checkbox, isChecked && classes.active)} />
      {isChecked && <CheckIcon />}
      <TextNode>{type}</TextNode>
    </div>
  );
}
