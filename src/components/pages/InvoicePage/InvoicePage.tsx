import GoBack from "@/components/GoBack/GoBack";
import Controls from "./Controls/Controls";
import Details from "./Details/Details";
import classes from "./InvoicePage.module.css";
import { Invoice } from "@/types";
import { useState } from "react";
import DialogDemo from "@/components/Dialog/Dialog";
import * as Dialog from "@radix-ui/react-dialog";

type Props = {
  invoice: Invoice;
};

export default function InvoicePage({ invoice }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <Dialog.Root open={isEditing} onOpenChange={setIsEditing}>
      <div className={classes.InvoicePage}>
        <GoBack />
        <Controls onEdit={handleEdit} />
        <Details invoice={invoice} />
        <DialogDemo />
      </div>
    </Dialog.Root>
  );
}
