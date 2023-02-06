import { Invoice } from "@/types";
import Button from "../Button/Button";
import CalendarControl from "../CalendarControl/CalendarControl";
import Flex from "../Flex/Flex";
import Label from "../Label/Label";
import TextField from "../TextField/TextField";
import TextNode from "../TextNode/TextNode";
import classes from "./EditInvoice.module.css";

type Props = {
  invoice: Invoice;
};

export default function EditInvoice({ invoice }: Props) {
  return (
    <div className={classes.EditInvoice}>
      <Flex>
        <TextNode fontFamily="bold" size="lg">
          Edit
        </TextNode>
        <TextNode fontFamily="bold" size="lg" color="grey">
          #
        </TextNode>
        <TextNode fontFamily="bold" size="lg">
          {invoice.id}
        </TextNode>
      </Flex>
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
            <TextField label="Country" value={invoice.senderAddress.country} />
          </div>
        </div>
      </div>
      <div>
        <Label>Bill To</Label>
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
