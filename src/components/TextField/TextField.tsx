import clsx from "clsx";
import Label from "../Label/Label";
import classes from "./TextField.module.css";

type Props = {};

export default function TextField({}: Props) {
  return (
    <div>
      <Label>label</Label>
      <input className={clsx("field", classes.TextField)} type="text" />
    </div>
  );
}
