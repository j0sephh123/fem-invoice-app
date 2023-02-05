import ArrowIcon from "@/icons/ArrowIcon/ArrowIcon";
import PlusIcon from "@/icons/PlusIcon/PlusIcon";
import Button from "../Button/Button";
import classes from "./Header.module.css";
import TextNode from "@/components/TextNode/TextNode";
import { useState } from "react";
import FilterItems from "./FilterItems/FilterItems";

type Props = {
  totalInvoices: number;
};

export default function Header({ totalInvoices }: Props) {
  const [isFiltering, setIsFiltering] = useState(false);

  return (
    <div className={classes.Header}>
      <div className={classes.left}>
        <TextNode className={classes.title} variant="title">
          Invoices
        </TextNode>
        <TextNode variant="subtitle">
          There are {totalInvoices} total invoices
        </TextNode>
      </div>
      <div className={classes.right}>
        <div onClick={() => setIsFiltering(true)} className={classes.filter}>
          <TextNode>Filter by status</TextNode>
          <ArrowIcon orientation="bottom" />
          {isFiltering && (
            <FilterItems onClose={() => setIsFiltering(false)}>
              <div className={classes.filterItems}>filterItems</div>
            </FilterItems>
          )}
        </div>
        <div className={classes.action}>
          <Button onClick={() => {}} icon={<PlusIcon />}>
            New Invoice
          </Button>
        </div>
      </div>
    </div>
  );
}
