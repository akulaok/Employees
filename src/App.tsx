import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoute } from './consts';
import './general-style/index.css'
import EmployeesListPage from './pages/EmployeesListPage/EmployeesListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoute.EmployeesList} element={<EmployeesListPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
