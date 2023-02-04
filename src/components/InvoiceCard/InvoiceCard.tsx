import ArrowIcon from "@/icons/ArrowIcon/ArrowIcon";
import { Invoice } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import Tag from "../Tag/Tag";
import classes from "./InvoiceCard.module.css";

type Props = {
  invoice: Invoice;
};

export default function InvoiceCard({
  invoice: { paymentDue, id, clientName, total, status },
}: Props) {
  return (
    <Link href={`invoices/${id}`}>
      <div className={classes.InvoiceCard}>
        <div className={clsx(classes.item, classes.id)}>
          <span>#</span>
          {id}
        </div>
        <div className={clsx(classes.item, classes.paymentDue)}>{paymentDue}</div>
        <div className={clsx(classes.item, classes.clientName)}>{clientName}</div>
        <div className={clsx(classes.item, classes.total)}>{total}</div>
        <div className={clsx(classes.item, classes.tag)}>
          <Tag status={status} />
          <ArrowIcon orientation="right" />
        </div>
      </div>
    </Link>
  );
}
