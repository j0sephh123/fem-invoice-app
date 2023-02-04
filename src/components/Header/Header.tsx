import ArrowIcon from "@/icons/ArrowIcon/ArrowIcon";
import PlusIcon from "@/icons/PlusIcon/PlusIcon";
import Button from "../Button/Button";
import classes from "./Header.module.css";

type Props = {
  totalInvoices: number;
};

export default function Header({ totalInvoices }: Props) {
  return (
    <div className={classes.Header}>
      <div className={classes.left}>
        <h1>Invoices</h1>
        <span>There are {totalInvoices} total invoices</span>
      </div>
      <div className={classes.right}>
        <div className={classes.filter}>
          Filter by status
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
