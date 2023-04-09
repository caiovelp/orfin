import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import AddExpensePage from './components/AddExpensePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/homePage" element={<HomePage/>} />
        <Route path="/addExpenses" element={<AddExpensePage/>} />
      </Routes>

    </Router>
  );
}

export default App;
