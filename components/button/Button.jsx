import Image from "next/image";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <Image className={classes.button} src={props.image} alt="home button" width={240} height={60} />
  );
};

export default Button;
