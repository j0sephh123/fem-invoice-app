import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = {
  color?: "dark" | "grey";
  size?: "xl" | "lg" | "md" | "sm";
  fontFamily?: "regular" | "bold";
} & PropsWithChildren;

export default function TextNode({
  children,
  color = "dark",
  size = "md",
  fontFamily = "regular",
}: Props) {
  return <div className={clsx(color, size, fontFamily)}>{children}</div>;
}
