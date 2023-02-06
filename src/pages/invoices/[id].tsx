import InvoicePage from "@/components/pages/InvoicePage/InvoicePage";
import { Invoice } from "@/types";
import { getData } from "@/utils/api";
import { useRouter } from "next/router";

export default function InvoicePageIndex() {
  const {
    query: { id },
  } = useRouter();

  const invoice = getData().find((item) => item.id === id) as Invoice;

  if (!invoice) {
    return <div>Loading..</div>;
  }

  return <InvoicePage invoice={invoice} />;
}
