import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoute } from './consts';
import './general-style/index.css'
import useRestoreFiltersFromQuery from './hooks/useRestoreFiltersFromQuery';
import useSyncFiltersWithQuery from './hooks/useSyncFiltersWithQuery';
import EmployeesListPage from './pages/EmployeeListPage/EmployeeListPage';

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
