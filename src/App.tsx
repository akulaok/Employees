import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {AppRoute} from "./consts";
import "./general-style/index.css";
import useRestoreFiltersFromQuery from "./hooks/useRestoreFiltersFromQuery";
import useSyncFiltersWithQuery from "./hooks/useSyncFiltersWithQuery";
import EmployeesListPage from "./pages/EmployeeListPage/EmployeeListPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { useAppSelector } from "./hooks";
import { useEffect } from "react";

function App() {
  useRestoreFiltersFromQuery();
  useSyncFiltersWithQuery();
  const theme = useAppSelector((state) => state.theme);

  useEffect(() => {
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);
  
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={AppRoute.EmployeesList} replace />}
        />
        <Route path={AppRoute.EmployeesList} element={<EmployeesListPage />} />
        <Route path={AppRoute.Profile} element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
