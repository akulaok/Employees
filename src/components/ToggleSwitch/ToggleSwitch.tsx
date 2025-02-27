import styles from "./ToggleSwitch.module.css";
import {JSX} from "react";
import {switchTheme} from "../../store/action";
import {useAppDispatch, useAppSelector} from "../../hooks";

function ToggleSwitch(): JSX.Element {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(switchTheme(newTheme));
  };

  console.log(useAppSelector((state) => state.theme));

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={theme === "dark"} // Синхронизация с хранилищем
        onChange={handleThemeToggle}
      />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
}

export default ToggleSwitch;
