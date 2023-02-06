import InvoicePage from "@/components/pages/InvoicePage/InvoicePage";
import { Invoice } from "@/types";
import { store } from "@/utils/store";
import { useRouter } from "next/router";
import { useSnapshot } from "valtio";

export default function InvoicePageIndex() {
  const {
    query: { id },
  } = useRouter();

  const snap = useSnapshot(store);

  const invoice = snap.invoices.find((item) => item.id === id) as Invoice;

  if (!invoice) {
    return <div>Loading..</div>;
  }

  return <InvoicePage invoice={invoice} />;
}
