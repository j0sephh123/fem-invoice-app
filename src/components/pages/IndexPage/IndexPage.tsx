import classes from "./IndexPage.module.css";
import Header from "@/components/Header/Header";
import InvoiceCard from "@/components/InvoiceCard/InvoiceCard";
import { Invoice } from "@/types";
import data from "../../../data.json";
import NotFound from "@/components/NotFound/NotFound";

const getData = () => {
  return data as Invoice[];
};

type Props = {};

export default function IndexPage({}: Props) {
  const data = getData();

  return (
    <div className={classes.IndexPage}>
      <Header totalInvoices={data.length} />

      {data.length > 0 ? (
        getData().map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
}
