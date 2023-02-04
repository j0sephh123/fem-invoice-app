# Summary

This challenge is from [FrontEndMentor](https://www.frontendmentor.io)

# Additional components to install

https://www.radix-ui.com/docs/primitives/components/dialog

## https://github.com/wojtekmaj/react-calendar

**className** Class name(s) that will be added along with "react-calendar" to the main React-Calendar <div> element.
**tileClassName** Class name(s) that will be applied to a given calendar item (day on month view, month on year view and so on).

demo notes

```tsx
import { useState } from "react";
import { ActiveDropdownItem } from "@/components/Dropdown/types";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
const dropdownItems = [
  { value: "1", label: "Net 1 days" },
  { value: "7", label: "Net 7 days" },
  { value: "14", label: "Net 14 days" },
  { value: "30", label: "Net 30 days" },
];

const [date, setDate] = useState(new Date());
const [activeDropdownItem, setActiveDropdownItem] =
  useState<ActiveDropdownItem>(null);
<div>
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
</div>;
```
