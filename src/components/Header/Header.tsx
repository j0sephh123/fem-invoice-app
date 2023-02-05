import ArrowIcon from "@/icons/ArrowIcon/ArrowIcon";
import PlusIcon from "@/icons/PlusIcon/PlusIcon";
import Button from "../Button/Button";
import classes from "./Header.module.css";
import TextNode from "@/components/TextNode/TextNode";
import { useState } from "react";
import Menu from "../Menu/Menu";
import Checkbox from "../Checkbox/Checkbox";
import { InvoiceStatus } from "@/types";

type Props = {
  totalInvoices: number;
};
type Filters = [InvoiceStatus?, InvoiceStatus?, InvoiceStatus?];

const filters: Filters = ["draft", "pending", "paid"];

export default function Header({ totalInvoices }: Props) {
  const [isFiltering, setIsFiltering] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Filters>([]);

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
          <ArrowIcon orientation={isFiltering ? "top" : "bottom"} />
          {isFiltering && (
            <Menu onClose={() => setIsFiltering(false)}>
              <div className={classes.filterItems}>
                {filters.map((filter) => (
                  <Checkbox
                    onClick={() =>
                      setActiveFilters((prevFilters) => {
                        const foundIndex = prevFilters.findIndex(
                          (prevFilter) => prevFilter === filter
                        );

                        if (foundIndex === -1) {
                          return [...prevFilters, filter] as any;
                        } else {
                          return [
                            ...prevFilters.slice(0, foundIndex),
                            ...prevFilters.slice(foundIndex + 1),
                          ] as Filters;
                        }
                      })
                    }
                    type={filter as InvoiceStatus}
                    isChecked={activeFilters.includes(filter)}
                  />
                ))}
              </div>
            </Menu>
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
