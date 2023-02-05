import ArrowIcon from "@/icons/ArrowIcon/ArrowIcon";
import { Invoice } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import Flex from "../Flex/Flex";
import Tag from "../Tag/Tag";
import TextNode from "../TextNode/TextNode";
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
        <Flex>
          <TextNode variant="boldedSubtitle">#</TextNode>
          <TextNode>{id}</TextNode>
        </Flex>
        <TextNode variant="subtitle">Due {paymentDue}</TextNode>
        <TextNode variant="subtitle">{clientName}</TextNode>
        <TextNode variant="bold">£{total}</TextNode>
        <div className={clsx(classes.item, classes.tag)}>
          <Tag status={status} />
          <ArrowIcon orientation="right" />
        </div>
      </div>
    </Link>
  );
}
