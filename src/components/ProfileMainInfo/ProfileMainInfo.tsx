import {JSX} from "react";
import {EmployeType} from "../../types/empoyee-type";
import styles from "./ProfileMainInfo.module.css";
import {formatDate} from "../../utils/formatDate";
type ProfileMainInfoProps = {
  employe: EmployeType | null;
};

function ProfileMainInfo({employe}: ProfileMainInfoProps): JSX.Element {
  return (
    <div className={styles.mainInfo}>
      <h2>Основная информация</h2>
      <div className={styles.gridContainer}>
        <div className={styles.label}>Контактный телефон:</div>
        <div className={styles.value}>{employe?.phone}</div>

        <div className={styles.label}>Дата рождения:</div>
        <div className={styles.value}>{formatDate(employe?.birthdate)}</div>

        <div className={styles.label}>Дата устройства:</div>
        <div className={styles.value}>
          {formatDate(employe?.dateOfEmployment)}
        </div>
      </div>
    </div>
  );
}

export default ProfileMainInfo;
