import {JSX} from "react";
import styles from "./ProfilePhoto.module.css";

type ProfilePhotoProps = {
  photoURL: string;
};

function ProfilePhoto({photoURL}: ProfilePhotoProps): JSX.Element {
  return (
    <div className={styles.photoWrapper}>
      <img  className={styles.photo} src={photoURL} alt="Profile Photo"></img>
    </div>
  );
}

export default ProfilePhoto;
