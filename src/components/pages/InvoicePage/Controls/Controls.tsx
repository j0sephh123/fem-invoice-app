import Button from "@/components/Button/Button";
import Tag from "@/components/Tag/Tag";
import classes from "./Controls.module.css";

export default function Controls() {
  return (
    <div className={classes.Controls}>
      <div className={classes.left}>
        Status
        <Tag type="Pending" />
      </div>
      <div className={classes.right}>
        <Button onClick={() => undefined} variant="secondary">
          Edit
        </Button>
        <Button onClick={() => undefined} variant="danger">
          Delete
        </Button>
        <Button onClick={() => undefined}>Mark as Paid</Button>
      </div>
    </div>
  );
}
