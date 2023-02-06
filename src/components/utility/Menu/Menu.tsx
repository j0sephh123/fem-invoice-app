import ConditionalWrapper from "@/components/utility/ConditionalWrapper/ConditionalWrapper";
import { PropsWithChildren, useState } from "react";
import ClickAwayListener from "react-click-away-listener";

export default function Menu({
  children,
  onClose,
}: { onClose: any } & PropsWithChildren) {
  const [isActive, setIsActive] = useState(true);

  const handleClickAway = () => {
    setIsActive(false);
    onClose();
  };

  return (
    <ConditionalWrapper
      condition={isActive}
      wrapper={(children: any) => (
        <ClickAwayListener onClickAway={handleClickAway}>
          {children}
        </ClickAwayListener>
      )}
    >
      {children}
    </ConditionalWrapper>
  );
}
