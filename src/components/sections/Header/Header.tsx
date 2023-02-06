import ArrowIcon from "@/components/icons/ArrowIcon/ArrowIcon";
import PlusIcon from "@/components/icons/PlusIcon/PlusIcon";
import Button from "../../primitives/Button/Button";
import classes from "./Header.module.css";
import TextNode from "@/components/primitives/TextNode/TextNode";
import { useState } from "react";
import Menu from "../../utility/Menu/Menu";
import { InvoiceStatus } from "@/types";
import Checkbox from "../../form/Checkbox/Checkbox";

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
        <TextNode size="xl">Invoices</TextNode>
        <TextNode size="sm" color="grey">
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
