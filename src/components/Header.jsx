import styles from "./Header.module.css";
import img from "../images/Ignite-logo.svg";

export const HeaderComponent = ({}) => {
  return (
    <header className={styles.header}>
      <img src={img} alt="logotipo" />
    </header>
  );
};
