import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoute } from './consts';
import './general-style/index.css'
import EmployeesListPage from './pages/EmployeesListPage/EmployeesListPage';
import useRestoreFiltersFromQuery from './hooks/useRestoreFiltersFromQuery';
import useSyncFiltersWithQuery from './hooks/useSyncFiltersWithQuery';

function App() {
  useRestoreFiltersFromQuery();
  useSyncFiltersWithQuery();
  return (
    <Router>
      <Routes>
        <Route path={AppRoute.EmployeesList} element={<EmployeesListPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
