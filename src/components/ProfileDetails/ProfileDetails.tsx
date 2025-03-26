import {JSX, memo} from "react";
import styles from "./ProfileDetails.module.css";
type ProfileDetailsProps = {
  name: string;
  position: string;
};

function ProfileDetails({name, position}: ProfileDetailsProps): JSX.Element {
  return (
    <div>
      <h1 className={styles.header}>{name}</h1>
      <span className={styles.text}>{position}</span>
    </div>
  );
}

export default memo(ProfileDetails);
