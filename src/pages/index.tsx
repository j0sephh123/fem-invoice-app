import Header from "@/components/Header/Header";
import InvoiceCard from "@/components/InvoiceCard/InvoiceCard";
import { Invoice } from "@/types";

const invoices: Invoice[] = [
  {
    id: "RT3080",
    due: "Due 19 Aug 2021",
    person: "Jensen Huang",
    sum: "£ 1,800.90",
    type: "Paid",
  },
  {
    id: "TY9141",
    due: "Due 19 Aug 2021",
    person: "John Morrison",
    sum: "£ 14,002.33",
    type: "Pending",
  },
  {
    id: "RT2080",
    due: "Due  14 Oct 2021",
    person: "Anita Wainwright",
    sum: "£ 102.04",
    type: "Draft",
  },
];

export default function Home() {
  return (
    <>
      <Header totalInvoices={7} />

      {invoices.map((invoice) => (
        <InvoiceCard key={invoice.id} invoice={invoice} />
      ))}
    </>
  );
}
