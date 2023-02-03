import ArrowIcon from "@/icons/ArrowIcon";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import ConditionalWrapper from "../ConditionalWrapper/ConditionalWrapper";
import Field from "../Field/Field";
import Label from "../Label/Label";
import classes from "./Dropdown.module.css";

type Props = {};

const items = [
  { value: "1", label: "Net 1 days" },
  { value: "7", label: "Net 7 days" },
  { value: "14", label: "Net 14 days" },
  { value: "30", label: "Net 30 days" },
];

export default function Dropdown({}: Props) {
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
          Net 30 Days
        </Field>
        {isActive && (
          <div className={classes.Items}>
            {items.map((item) => (
              <div className={classes.Item} key={item.value}>
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </ConditionalWrapper>
  );
}
