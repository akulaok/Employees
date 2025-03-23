import {JSX} from "react";
import styles from "./ProfileTag.module.css";
import {useAppSelector} from "../../hooks";
type ProfileTagProps = {
  tag: string;
};

function ProfileTag({tag}: ProfileTagProps): JSX.Element {
  const theme = useAppSelector((state) => state.theme);

  return <div className={`${styles.tag} ${styles[`${theme}Tag`]}`}>{tag}</div>;
}

export default ProfileTag;
