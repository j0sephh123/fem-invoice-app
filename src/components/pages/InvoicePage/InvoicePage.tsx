import GoBack from "@/components/GoBack/GoBack";
import Controls from "./Controls/Controls";
import Details from "./Details/Details";
import classes from "./InvoicePage.module.css";
import { Invoice } from "@/types";
import { useState } from "react";
import DialogDemo from "@/components/Dialog/Dialog";

type Props = {
  invoice: Invoice;
};

export default function InvoicePage({ invoice }: Props) {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className={classes.InvoicePage}>
      <GoBack />
      <Controls />
      <Details invoice={invoice} />
      <div className={classes.overlay}>class</div>
      <DialogDemo />
    </div>
  );
}
