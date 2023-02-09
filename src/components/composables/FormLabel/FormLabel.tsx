import { PropsWithChildren } from "react";
import TextNode from "../../primitives/TextNode/TextNode";
import classes from "./FormLabel.module.css";

type Props = { onClick?: () => void } & PropsWithChildren;

export default function FormLabel({ children, onClick }: Props) {
  return (
    <TextNode
      onClick={onClick}
      className={classes.FormLabel}
      size="sm"
      fontFamily="bold"
      color="purple"
    >
      {children}
    </TextNode>
  );
}
