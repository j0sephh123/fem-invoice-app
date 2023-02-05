import NotFoundIcon from "@/icons/NotFoundIcon/NotFoundIcon";
import classes from "./NotFound.module.css";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div className={classes.NotFound}>
      <div className={classes.NotFoundContent}>
        <NotFoundIcon />
        <h1>There is nothing here</h1>
        <p>Create an invoice by clicking the</p>
        <p>New Invoice button and get started</p>
      </div>
    </div>
  );
}
