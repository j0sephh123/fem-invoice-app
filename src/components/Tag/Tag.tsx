import { InvoiceStatus } from "@/types";
import clsx from "clsx";
import classes from "./Tag.module.css";

type Props = {
  status: InvoiceStatus;
};

export default function Tag({ status }: Props) {
  return (
    <div className={clsx(classes.Tag, classes[status])}>
      <span className={clsx(classes.dot, classes[status])} />
      {status}
    </div>
  );
}
