import ReactCalendar from "react-calendar";
import { months } from "@/utils/date";
import ArrowIcon from "@/icons/ArrowIcon";

type Props = {
  value: Date;
  onClickDay: (date: Date) => void;
};

export default function Calendar({ value, onClickDay }: Props) {
  return (
    <ReactCalendar
      formatMonthYear={(_, date) =>
        `${months[date.getMonth()]} ${date.getFullYear()}`
      }
      showWeekNumbers={false}
      prevLabel={<ArrowIcon orientation="left" />}
      prev2Label={null}
      nextLabel={<ArrowIcon orientation="right" />}
      next2Label={null}
      onClickDay={onClickDay}
      value={value}
      view="month"
      minDetail="month"
    />
  );
}
