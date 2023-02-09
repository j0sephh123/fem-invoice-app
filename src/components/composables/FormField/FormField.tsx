import TextField from "../../form/TextField/TextField";
import TextNode from "../../primitives/TextNode/TextNode";
import classes from './FormField.module.css';

type Props = {
  label: string;
  value: string;
};

export default function FormField({ label, value }: Props) {
  return (
    <TextField
      label={
        <TextNode size="sm" color="cove">
          {label}
        </TextNode>
      }
      value={value}
    />
  );
}
