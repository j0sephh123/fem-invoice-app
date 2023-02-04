import { useState } from "react";
import CalendarControl from "@/components/CalendarControl/CalendarControl";
import Dropdown from "@/components/Dropdown/Dropdown";
import { ActiveDropdownItem } from "@/components/Dropdown/types";
import TextField from "@/components/TextField/TextField";
import Button from "@/components/Button/Button";
import PlusIcon from "@/icons/PlusIcon/PlusIcon";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import InvoiceCard from "@/components/InvoiceCard/InvoiceCard";
import { Invoice } from "@/types";

const dropdownItems = [
  { value: "1", label: "Net 1 days" },
  { value: "7", label: "Net 7 days" },
  { value: "14", label: "Net 14 days" },
  { value: "30", label: "Net 30 days" },
];

const invoices: Invoice[] = [
  {
    id: "#RT3080",
    due: "Due 19 Aug 2021",
    person: "Jensen Huang",
    sum: "£ 1,800.90",
    type: "Paid",
  },
  {
    id: "#TY9141",
    due: "Due 19 Aug 2021",
    person: "John Morrison",
    sum: "£ 14,002.33",
    type: "Pending",
  },
  {
    id: "#RT2080",
    due: "Due  14 Oct 2021",
    person: "Anita Wainwright",
    sum: "£ 102.04",
    type: "Draft",
  },
];

export default function Home() {
  const [date, setDate] = useState(new Date());
  const [activeDropdownItem, setActiveDropdownItem] =
    useState<ActiveDropdownItem>(null);

  return (
    <div className="page">
      <Sidebar />
      <main className="main">
        <Header totalInvoices={7} />
        {invoices.map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))}
      </main>
      {/* <div>
        <div className="app">
          <CalendarControl setDate={setDate} date={date} />
          <Dropdown
            items={dropdownItems}
            activeItem={activeDropdownItem}
            setActiveItem={setActiveDropdownItem}
          />
          <br />
        </div>
        <div style={{ width: "300px", marginLeft: "20px" }}>
          <TextField />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Button onClick={() => {}} icon={<PlusIcon />}>
            New Invoice
          </Button>
          <Button onClick={() => {}}>Mark as paid</Button>
          <Button variant="secondary" onClick={() => {}}>
            Edit
          </Button>
          <Button variant="danger" onClick={() => {}}>
            Delete
          </Button>
          <Button variant="dark" onClick={() => {}}>
            Save as draft
          </Button>
        </div>
      </div> */}
    </div>
  );
}
