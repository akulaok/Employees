import {Link} from "react-router-dom";
import styles from "./Header.module.css";
import {AppRoute} from "../../consts";
import {JSX} from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useAppSelector } from "../../hooks";

function Header(): JSX.Element {
  const theme = useAppSelector((state) => state.theme)
  return (
    <div className={`${styles.wrapper} ${styles[`${theme}Wrapper`]}`}>
      <div className={styles.icon}>
        <Link to={AppRoute.EmployeesList} />
      </div>
      <div className={styles.info}>
        <div className={styles.contacts}>
          <span className={styles.text}>+7 343 290 84 76</span>
          <span className={styles.text}>info@66bit.ru</span>
        </div>
        <ToggleSwitch />
      </div>
    </div>
  );
}
export default Header;
