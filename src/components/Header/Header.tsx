import ArrowIcon from "@/icons/ArrowIcon/ArrowIcon";
import PlusIcon from "@/icons/PlusIcon/PlusIcon";
import Button from "../Button/Button";
import classes from "./Header.module.css";
import TextNode from "@/components/TextNode/TextNode";

type Props = {
  totalInvoices: number;
};

export default function Header({ totalInvoices }: Props) {
  return (
    <div className={classes.Header}>
      <div className={classes.left}>
        <TextNode className={classes.title} variant="title">
          Invoices
        </TextNode>
        <TextNode variant="subtitle">
          There are {totalInvoices} total invoices
        </TextNode>
      </div>
      <div className={classes.right}>
        <div className={classes.filter}>
          <TextNode>Filter by status</TextNode>
          <ArrowIcon orientation="bottom" />
        </div>
        <div className={classes.action}>
          <Button onClick={() => {}} icon={<PlusIcon />}>
            New Invoice
          </Button>
        </div>
      </div>
    </div>
  );
}
