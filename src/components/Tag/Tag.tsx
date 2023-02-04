import { InvoiceStatus } from "@/types";
import clsx from "clsx";
import classes from "./Tag.module.css";

type Props = {
  type: InvoiceStatus;
};

export default function Tag({ type }: Props) {
  return (
    <div className={clsx(classes.Tag, classes[type])}>
      <span className={clsx(classes.dot, classes[type])} />
      {type}
    </div>
  );
}
