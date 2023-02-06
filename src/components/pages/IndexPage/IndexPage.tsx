import classes from "./IndexPage.module.css";
import Header from "@/components/Header/Header";
import InvoiceCard from "@/components/InvoiceCard/InvoiceCard";
import NotFound from "@/components/NotFound/NotFound";
import { getData } from "@/utils/api";

type Props = {};

export default function IndexPage({}: Props) {
  const data = getData();

  return (
    <div className={classes.IndexPage}>
      <Header totalInvoices={data.length} />

      {data.length > 0 ? (
        data.map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
}
