import { Link, useLocation } from "react-router-dom";
import { RouteNames } from "../../consts";
import { useAppSelector } from "../../hooks";
import styles from "./Breadcrumbs.module.css";
import { useMediaQuery } from "react-responsive";
import { memo } from "react";

function Breadcrumbs() {
  const location = useLocation();
  const selectedEmploye = useAppSelector((state) => state.selectedEmploye);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const pathnames = location.pathname.split("/").filter(Boolean);
  const shouldHideMain = isMobile && pathnames.length > 1;

  const renderBreadcrumbItem = (segment: string, index: number) => {
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
    const isLast = index === pathnames.length - 1;

    if (selectedEmploye?.id.toString() === segment) {
      return (
        <li key={to} className={styles.link}>
          <Link to={to}>{selectedEmploye.name}</Link>
        </li>
      );
    }

    return (
      <li key={to} className={styles.link}>
        {!isLast ? <Link to={to}>{RouteNames[to]}</Link> : RouteNames[to]}
      </li>
    );
  };

  return (
    <nav className={styles.breadcrumbs}>
      <ul className={styles.breadcrumbsList}>
        {!shouldHideMain && <li className={styles.text}>Главная</li>}
        {pathnames.map(renderBreadcrumbItem)}
      </ul>
    </nav>
  );
}

export default memo(Breadcrumbs);