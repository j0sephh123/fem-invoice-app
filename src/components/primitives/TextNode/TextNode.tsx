import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = {
  color?: "dark" | "grey" | "purple" | "cove";
  size?: "xl" | "lg" | "md" | "sm";
  fontFamily?: "regular" | "bold";
  className?: string;
  onClick?: () => void;
} & PropsWithChildren;

export default function TextNode({
  children,
  color = "dark",
  size = "md",
  fontFamily = "regular",
  className,
  onClick,
}: Props) {
  return (
    <div onClick={onClick} className={clsx(color, size, fontFamily, className)}>
      {children}
    </div>
  );
}
