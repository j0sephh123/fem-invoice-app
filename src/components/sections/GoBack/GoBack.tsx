import ArrowIcon from "@/components/icons/ArrowIcon/ArrowIcon";
import Link from "next/link";
import classes from "./GoBack.module.css";

export default function GoBack() {
  return (
    <Link href="/">
      <div className={classes.GoBack}>
        <ArrowIcon orientation="left" />
        Go Back
      </div>
    </Link>
  );
}
