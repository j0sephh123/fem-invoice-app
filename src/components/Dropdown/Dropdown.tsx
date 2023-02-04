import ArrowIcon from "@/icons/ArrowIcon";
import { Dispatch, SetStateAction, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import ConditionalWrapper from "../ConditionalWrapper/ConditionalWrapper";
import Field from "../Field/Field";
import Label from "../Label/Label";
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
            <Label onClick={() => setIsActive(false)}>Payment terms</Label>
          }
          icon={<ArrowIcon orientation="bottom" />}
          onClickInside={() => setIsActive(!isActive)}
        >
          {activeItem?.label}
        </Field>
        {isActive && (
          <div className={classes.Items}>
            {items.map(({ value, label }) => (
              <DropdownItemCard key={value}>{label}</DropdownItemCard>
            ))}
          </div>
        )}
      </div>
    </ConditionalWrapper>
  );
}
