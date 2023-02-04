import { useState } from "react";
import CalendarControl from "@/components/CalendarControl/CalendarControl";
import Dropdown from "@/components/Dropdown/Dropdown";
import { ActiveDropdownItem } from "@/components/Dropdown/types";
import TextField from "@/components/TextField/TextField";

const dropdownItems = [
  { value: "1", label: "Net 1 days" },
  { value: "7", label: "Net 7 days" },
  { value: "14", label: "Net 14 days" },
  { value: "30", label: "Net 30 days" },
];

export default function Home() {
  const [date, setDate] = useState(new Date());
  const [activeDropdownItem, setActiveDropdownItem] =
    useState<ActiveDropdownItem>(null);

  return (
    <>
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
    </>
  );
}
