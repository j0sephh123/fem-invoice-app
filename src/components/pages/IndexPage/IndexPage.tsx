import classes from "./IndexPage.module.css";
import Header from "@/components/Header/Header";
import InvoiceCard from "@/components/InvoiceCard/InvoiceCard";
import NotFound from "@/components/NotFound/NotFound";
import { useSnapshot } from "valtio";
import { store } from "@/utils/store";


type Props = {};

export default function IndexPage({}: Props) {
  // const data = getData();
  const snap =  useSnapshot(store)

  return (
    <div className={classes.IndexPage}>
      <Header totalInvoices={snap.invoices.length} />

      {snap.invoices.length > 0 ? (
        snap.invoices.map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
}
