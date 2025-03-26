import styles from "./ToggleSwitch.module.css";
import {JSX, memo, useCallback} from "react";
import {switchTheme} from "../../store/action";
import {useAppDispatch, useAppSelector} from "../../hooks";
import { ThemeType } from "../../types/filter-type";

function ToggleSwitch(): JSX.Element {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const handleThemeToggle = useCallback(() => {
    const newTheme: ThemeType = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    dispatch(switchTheme(newTheme));
  }, [theme, dispatch]);

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

export default memo(ToggleSwitch);
