import CalendarControl from "@/components/form/CalendarControl/CalendarControl";
import TextField from "@/components/form/TextField/TextField";
import Button from "@/components/primitives/Button/Button";
import TextNode from "@/components/primitives/TextNode/TextNode";
import { Invoice } from "@/types";
import classes from "./EditInvoice.module.css";
import EditInvoiceTitle from "./EditInvoiceTitle/EditInvoiceTitle";

type Props = {
  invoice: Invoice;
};

export default function EditInvoice({ invoice }: Props) {
  return (
    <div className={classes.EditInvoice}>
      <EditInvoiceTitle>{invoice.id}</EditInvoiceTitle>

      <div>
        <TextNode
          className={classes.bill}
          size="sm"
          fontFamily="bold"
          color="purple"
        >
          Bill From
        </TextNode>
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
            <TextField label="Country" value={invoice.senderAddress.country} />
          </div>
        </div>
      </div>
      <div>
        <TextNode
          className={classes.bill}
          size="sm"
          fontFamily="bold"
          color="purple"
        >
          Bill To
        </TextNode>
        <TextField label="Client’s Name" value={invoice.clientName} />
        <TextField label="Client’s Name" value={invoice.clientEmail} />
        <TextField label="Client’s Name" value={invoice.clientAddress.street} />
        <div className="flex">
          <TextField label="Client’s Name" value={invoice.clientAddress.city} />
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
    </div>
  );
}
