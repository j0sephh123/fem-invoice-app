import CalendarIcon from "@/icons/CalendarIcon";
import { displayDate } from "@/utils/date";
import classes from "./Input.module.css";

type Props = {
  signalIsActive: (isActive: boolean) => void;
  value: Date;
};

export default function Input({ signalIsActive, value }: Props) {
  return (
    <div className={classes.field}>
      <label className={classes.label}>Issue Date</label>
      <div className={classes.inputWrapper}>
        <input
          value={displayDate(value)}
          readOnly
          onBlur={() => signalIsActive(false)}
          onFocus={() => {
            console.log("focusss");
            signalIsActive(true);
          }}
          className={classes.input}
        />
        <CalendarIcon />
      </div>
    </div>
  );
}
