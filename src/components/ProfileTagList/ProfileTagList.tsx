import {JSX} from "react";
import styles from "./ProfileTagList.module.css";
import ProfileTag from "../ProfileTag/ProfileTag";
type ProfileTagListProps = {
  stack: string[];
};

function ProfileTagList({stack}: ProfileTagListProps): JSX.Element {
  return (
    <div className={styles.tagsBox}>
      {stack.map((tag) => (
        <ProfileTag key={tag} tag={tag} />
      ))}
    </div>
  );
}

export default ProfileTagList;
