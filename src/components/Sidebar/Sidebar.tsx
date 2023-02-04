import LogoIcon from "@/icons/LogoIcon/LogoIcon";
import MoonIcon from "@/icons/MoonIcon/MoonIcon";
import Avatar from "./Avatar";
import classes from "./Sidebar.module.css";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className={classes.Sidebar}>
      <div className={classes.logo}>
        <div className={classes.top} />
        <div className={classes.bottom} />
        <LogoIcon />
      </div>
      <div className={classes.footer}>
        <div className={classes.theme}>
          <MoonIcon />
        </div>
        <div className={classes.separator} />
        <Avatar src="image-avatar.jpg" />
      </div>
    </div>
  );
}
