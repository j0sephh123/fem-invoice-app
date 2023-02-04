import classes from './Avatar.module.css';

type Props = {
  src:string;
}

export default function Avatar({src}:Props) {
  return (
    <div className={classes.Avatar}>
      <img className={classes.img} src={src}  />
    </div>
  );
}
