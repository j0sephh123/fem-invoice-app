import CalendarControl from "@/components/CalendarControl/CalendarControl";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      <CalendarControl setDate={setDate} date={date} />
    </div>
  );
}
