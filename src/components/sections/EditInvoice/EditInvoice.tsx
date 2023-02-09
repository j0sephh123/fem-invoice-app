import FormField from "@/components/composables/FormField/FormField";
import FormLabel from "@/components/composables/FormLabel/FormLabel";
import CalendarControl from "@/components/form/CalendarControl/CalendarControl";
import TextField from "@/components/form/TextField/TextField";
import Button from "@/components/primitives/Button/Button";
import TextNode from "@/components/primitives/TextNode/TextNode";
import Flex from "@/components/utility/Flex/Flex";
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

      <FormLabel>Bill From</FormLabel>
      <FormField label="Street Address" value={invoice.senderAddress.street} />
      <Flex gap={24}>
        <FormField label="City" value={invoice.senderAddress.city} />
        <FormField label="Post Code" value={invoice.senderAddress.postCode} />
        <FormField label="Country" value={invoice.senderAddress.country} />
      </Flex>

      <FormLabel>Bill To</FormLabel>
      <FormField label="Client's Name" value={invoice.clientName} />
      <FormField label="Client's Email" value={invoice.clientEmail} />
      <FormField label="Street Address" value={invoice.clientAddress.street} />

      <Flex gap={24}>
        <FormField label="City" value={invoice.clientAddress.city} />
        <FormField label="Post Code" value={invoice.clientAddress.postCode} />
        <FormField label="Country" value={invoice.clientAddress.country} />
      </Flex>

      <Flex className={classes.dateAndTerms} gap={24}>
        <CalendarControl
          label="Invoice Date"
          date={new Date()}
          setDate={() => {}}
        />
        <CalendarControl
          label="Payment Terms"
          date={new Date()}
          setDate={() => {}}
        />
      </Flex>

      <FormField label="Project Description" value={invoice.description} />

      <div>
        <TextNode>Item List</TextNode>
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
