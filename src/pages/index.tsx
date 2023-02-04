import Header from "@/components/Header/Header";
import InvoiceCard from "@/components/InvoiceCard/InvoiceCard";
import { Invoice } from "@/types";
import data from "../data.json";

const getData = () => {
  return data as Invoice[];
};

export default function Home() {
  return (
    <>
      <Header totalInvoices={7} />

      {getData().map((invoice) => (
        <InvoiceCard key={invoice.id} invoice={invoice} />
      ))}
    </>
  );
}
