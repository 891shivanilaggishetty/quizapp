import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import RegistrationModule from './Register/Register';
import LoginModule from './Login/Login';  
import UserDashboard from './UserDashboard/UserDashboard';
import TestInterface from './TestInterface/TestInterface';
import PostExamReport from './PostExamReport/PostExamReport';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationModule />} />
        <Route path="/login" element={<LoginModule />} />
        <Route path="/dashboard" element={<UserDashboard profilePic="https://via.placeholder.com/150" />} />
        <Route path="/test" element={<TestInterface />} />
        <Route path="/report" element={<PostExamReport />} />
      </Routes>
    </Router>
  );
}
export default App;
