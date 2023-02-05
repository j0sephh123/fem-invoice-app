import Button from "@/components/Button/Button";
import Tag from "@/components/Tag/Tag";
import classes from "./Controls.module.css";

type Props = {
  onEdit: () => void;
};

export default function Controls({ onEdit }: Props) {
  return (
    <div className={classes.Controls}>
      <div className={classes.left}>
        Status
        <Tag status="pending" />
      </div>
      <div className={classes.right}>
        <Button onClick={onEdit} variant="secondary">
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
