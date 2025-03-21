import {Link, useLocation} from "react-router-dom";
import {RouteNames} from "../../consts";
import {useAppSelector} from "../../hooks";
import styles from './Breadcrumbs.module.css'
function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const selectedEmploye = useAppSelector((state) => state.selectedEmploye);

  return (
    <nav className={styles.breadcrumbs}>
      <ul className={styles.breadcrumbsList}>
        <li className={styles.text}>Главная</li>
        {pathnames.map((segment, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          if (selectedEmploye?.id.toString() == segment) {
            return (
              <li key={to} className={styles.link}>
                <Link to={to}>{`${selectedEmploye.name}`}</Link>
              </li>
            );
          }

          return (
            <li key={to} className={styles.link}>
              {!isLast ? <Link to={to}>{RouteNames[to]}</Link> : RouteNames[to]}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
