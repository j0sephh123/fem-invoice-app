import classes from "./ArrowIcon.module.css";

type Props = {
  orientation: "left" | "right" | "bottom" | "top";
};

export default function ArrowIcon({ orientation }: Props) {
  return (
    <svg
      className={classes[`ArrowIcon__${orientation}`]}
      width="7"
      height="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.342.886L2.114 5.114l4.228 4.228"
        stroke="#9277FF"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}
