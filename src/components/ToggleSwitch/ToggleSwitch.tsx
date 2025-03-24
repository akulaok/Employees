import styles from "./ToggleSwitch.module.css";
import {JSX} from "react";
import {switchTheme} from "../../store/action";
import {useAppDispatch, useAppSelector} from "../../hooks";

function ToggleSwitch(): JSX.Element {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    dispatch(switchTheme(newTheme));
  };

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={handleThemeToggle}
      />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
}

export default ToggleSwitch;
