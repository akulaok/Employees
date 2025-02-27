import {Link} from "react-router-dom";
import styles from "./Header.module.css";
import {AppRoute} from "../../consts";
import {JSX} from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <Link className="header__logo-link" to={AppRoute.EmployeesList} />
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
