import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoute } from './consts';
import './general-style/index.css'
import EmployeeListPage from './pages/EmployeeListPage/EmployeeListPage';
import useRestoreFiltersFromQuery from './hooks/useRestoreFiltersFromQuery';
import useSyncFiltersWithQuery from './hooks/useSyncFiltersWithQuery';

function App() {
  useRestoreFiltersFromQuery();
  useSyncFiltersWithQuery();
  return (
    <Router>
      <Routes>
        <Route path={AppRoute.EmployeesList} element={<EmployeeListPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
