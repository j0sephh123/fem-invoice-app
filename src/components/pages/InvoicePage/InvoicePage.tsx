import GoBack from "@/components/GoBack/GoBack";
import Controls from "./Controls/Controls";
import Details from "./Details/Details";
import classes from "./InvoicePage.module.css";
import { Invoice } from "@/types";

type Props = {
  invoice: Invoice;
};

export default function InvoicePage({ invoice }: Props) {
  console.log(invoice);

  return (
    <div className={classes.InvoicePage}>
      <GoBack />
      <Controls />
      <Details invoice={invoice} />
    </div>
  );
}
