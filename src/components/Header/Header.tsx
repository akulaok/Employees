import {Link} from "react-router-dom";
import styles from "./Header.module.css";
import {AppRoute} from "../../consts";
import {JSX, memo} from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import {useAppSelector} from "../../hooks";

function Header(): JSX.Element {
  const theme = useAppSelector((state) => state.theme);
  return (
    <header className={`${styles.wrapper} ${styles[`${theme}Wrapper`]}`}>
      <div className={styles.icon}>
        <Link to={AppRoute.EmployeesList} aria-label="На главную страницу" />
      </div>
      <div className={styles.info}>
        <address className={styles.contacts}>
          <span className={styles.text}>+7 343 290 84 76</span>
          <span className={styles.text}>info@.ru</span>
        </address>
        <ToggleSwitch />
      </div>
    </header>
  );
}
export default memo(Header);
