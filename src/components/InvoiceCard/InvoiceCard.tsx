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
  invoice: { due, id, person, sum, type },
}: Props) {
  return (
    <Link href={`invoices/${id}`}>
      <div className={classes.InvoiceCard}>
        <div className={clsx(classes.item, classes.id)}>
          <span>#</span>
          {id}
        </div>
        <div className={clsx(classes.item, classes.due)}>{due}</div>
        <div className={clsx(classes.item, classes.person)}>{person}</div>
        <div className={clsx(classes.item, classes.sum)}>{sum}</div>
        <div className={clsx(classes.item, classes.tag)}>
          <Tag type={type} />
          <ArrowIcon orientation="right" />
        </div>
      </div>
    </Link>
  );
}
