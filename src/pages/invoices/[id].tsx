import InvoicePage from "@/components/pages/InvoicePage/InvoicePage";
import { Invoice } from "@/types";
import { useRouter } from "next/router";
import data from "../../data.json";

export default function InvoicePageIndex() {
  const {
    query: { id },
  } = useRouter();

  const invoice = data.find((item) => item.id === id) as Invoice;

  if (!invoice) {
    return <div>Loading..</div>;
  }

  return <InvoicePage invoice={invoice} />;
}
