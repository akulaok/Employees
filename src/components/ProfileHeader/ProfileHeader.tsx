import {JSX} from "react";
import {EmployeType} from "../../types/empoyee-type";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import styles from "./ProfileHeader.module.css";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import ProfileTagList from "../ProfileTagList/ProfileTagList";

type ProfileHeaderProps = {
  employe: EmployeType | null;
};
function ProfileHeader({employe}: ProfileHeaderProps): JSX.Element {
  return employe ? (
    <>
      <div className={styles.profileHeader}>
        <ProfilePhoto photoURL={employe.photo} />
        <div className={styles.info}>
          <ProfileDetails name={employe.name} position={employe.position} />
          <ProfileTagList stack={employe.stack} />
        </div>
      </div>
      <div className={styles.profileHeaderMobile}>
        <div className={styles.info}>
          <ProfilePhoto photoURL={employe.photo} />
          <ProfileDetails name={employe.name} position={employe.position} />
        </div>
        <ProfileTagList stack={employe.stack} />
      </div>
    </>
  ) : (
    <div>Пользователь не найден</div>
  );
}

export default ProfileHeader;
