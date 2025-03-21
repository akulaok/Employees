import {JSX, useEffect} from "react";
import styles from "./ProfilePage.module.css";
import Header from "../../components/Header/Header";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getEmployee} from "../../store/api-action";
import ProfileMainInfo from "../../components/ProfileMainInfo/ProfileMainInfo";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function ProfilePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const employe = useAppSelector((state) => state.selectedEmploye);
  const empoyeId = localStorage.getItem("employeId");

  useEffect(() => {
    if (empoyeId && !employe) { dispatch(getEmployee(empoyeId)); }
  }, [empoyeId, dispatch, employe]);

  return (
    <div className={styles.page}>
      <Header />
      <Breadcrumbs/>
      <ProfileHeader employe={employe} />
      <ProfileMainInfo employe={employe} />
    </div>
  );
}

export default ProfilePage;
