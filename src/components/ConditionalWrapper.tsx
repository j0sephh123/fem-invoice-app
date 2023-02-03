import { PropsWithChildren } from "react";

export default function ConditionalWrapper({
  condition,
  wrapper,
  children,
}: {
  condition: boolean;
  wrapper: any;
  children: any;
}) {
  return condition ? wrapper(children) : children;
}
