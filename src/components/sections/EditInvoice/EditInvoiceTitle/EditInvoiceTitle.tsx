import TextNode from "@/components/primitives/TextNode/TextNode";
import Flex from "@/components/utility/Flex/Flex";
import { PropsWithChildren } from "react";
import classes from "./EditInvoiceTitle.module.css";

export default function EditInvoiceTitle({ children }: PropsWithChildren) {
  return (
    <Flex className={classes.wrapper}>
      <TextNode fontFamily="bold" size="lg" className={classes.edit}>
        Edit
      </TextNode>
      <TextNode fontFamily="bold" size="lg" color="grey">
        #
      </TextNode>
      <TextNode fontFamily="bold" size="lg">
        {children}
      </TextNode>
    </Flex>
  );
}
