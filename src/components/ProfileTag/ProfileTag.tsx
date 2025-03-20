import {JSX} from "react";
import styles from "./ProfileTag.module.css";
type ProfileTagProps = {
  tag: string;
};

function ProfileTag({tag}: ProfileTagProps): JSX.Element {
  return <div className={styles.tag}>{tag}</div>;
}

export default ProfileTag;
