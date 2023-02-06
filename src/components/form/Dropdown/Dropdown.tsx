import ArrowIcon from "@/components/icons/ArrowIcon/ArrowIcon";
import { Dispatch, SetStateAction, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import ConditionalWrapper from "../../utility/ConditionalWrapper/ConditionalWrapper";
import Field from "../Field/Field";
import TextNode from "../../primitives/TextNode/TextNode";
import classes from "./Dropdown.module.css";
import DropdownItemCard from "./DropdownItem/DropdownItemCard";
import { DropdownItem, ActiveDropdownItem } from "./types";

type Props = {
  items: DropdownItem[];
  activeItem: ActiveDropdownItem;
  setActiveItem: Dispatch<SetStateAction<ActiveDropdownItem>>;
};

export default function Dropdown({ items, activeItem, setActiveItem }: Props) {
  const [isActive, setIsActive] = useState(false);

  const handleItemClick = (itemData: DropdownItem) => {
    setActiveItem(itemData);
    setIsActive(false);
  };

  return (
    <ConditionalWrapper
      condition={isActive}
      wrapper={(children: any) => (
        <ClickAwayListener onClickAway={() => setIsActive(false)}>
          {children}
        </ClickAwayListener>
      )}
    >
      <div className={classes.Dropdown}>
        <Field
          isActive={isActive}
          label={
            <TextNode onClick={() => setIsActive(false)}>
              Payment terms
            </TextNode>
          }
          icon={<ArrowIcon orientation="bottom" />}
          onClickInside={() => setIsActive(!isActive)}
        >
          {activeItem?.label}
        </Field>
        {isActive && (
          <div className={classes.Items}>
            {items.map((item) => (
              <DropdownItemCard
                onClick={() => handleItemClick(item)}
                key={item.value}
              >
                {item.label}
              </DropdownItemCard>
            ))}
          </div>
        )}
      </div>
    </ConditionalWrapper>
  );
}
