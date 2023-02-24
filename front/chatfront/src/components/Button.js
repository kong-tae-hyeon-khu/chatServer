import styles from "./Button.module.css";

const Button = (props) => {
  console.log(props);
  return <button className={styles.btn}>{props.children}</button>;
};

export default Button;
