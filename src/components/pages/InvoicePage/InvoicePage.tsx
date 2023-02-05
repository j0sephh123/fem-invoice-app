import GoBack from "@/components/GoBack/GoBack";
import Controls from "./Controls/Controls";
import Details from "./Details/Details";
import classes from "./InvoicePage.module.css";
import { Invoice } from "@/types";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import EditInvoice from "@/components/EditInvoice/EditInvoice";
import Label from "@/components/Label/Label";
import TextField from "@/components/TextField/TextField";
import CalendarControl from "@/components/CalendarControl/CalendarControl";
import Button from "@/components/Button/Button";

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
        <EditInvoice>
          <div>Edit #{invoice.id}</div>
          <div>
            <Label>Bill From</Label>
            <div>
              <TextField
                label="Street Address"
                value={invoice.senderAddress.street}
              />
            </div>
            <div className="flex">
              <div>
                <TextField label="City" value={invoice.senderAddress.city} />
              </div>
              <div>
                <TextField
                  label="Post Code"
                  value={invoice.senderAddress.postCode}
                />
              </div>
              <div>
                <TextField
                  label="Country"
                  value={invoice.senderAddress.country}
                />
              </div>
            </div>
          </div>
          <div>
            <Label>Bill To</Label>
            <TextField label="Client’s Name" value={invoice.clientName} />
            <TextField label="Client’s Name" value={invoice.clientEmail} />
            <TextField
              label="Client’s Name"
              value={invoice.clientAddress.street}
            />
            <div className="flex">
              <TextField
                label="Client’s Name"
                value={invoice.clientAddress.city}
              />
              <TextField
                label="Client’s Name"
                value={invoice.clientAddress.postCode}
              />
              <TextField
                label="Client’s Name"
                value={invoice.clientAddress.country}
              />
            </div>
          </div>
          <div className="flex">
            <CalendarControl date={new Date()} setDate={() => {}} />
            <CalendarControl date={new Date()} setDate={() => {}} />
          </div>
          <div>
            <h1>Item List</h1>
            {invoice.items.map((item) => (
              <div>
                <div>{item.name}</div>
                <div>{item.quantity}</div>
                <div>£{item.price}</div>
                <div>£{item.total}</div>
              </div>
            ))}
            <div></div>
          </div>
          <div>
            <Button onClick={() => {}} variant="secondary">
              Cancel
            </Button>
            <Button onClick={() => {}}>Save Changes</Button>
          </div>
        </EditInvoice>
      </div>
    </Dialog.Root>
  );
}
