import './App.css'
import RegistrationModule from './Register/Register'
import LoginModule from './Login/Login'  
import UserDashboard from './UserDashboard/UserDashboard'
import TestInterface from './TestInterface/TestInterface'
import PostExamReport from  './PostExamReport/PostExamReport'
function App() {
  return (
    <>
      <RegistrationModule />
      <LoginModule />
      <UserDashboard profilePic="https://via.placeholder.com/150" />
      <TestInterface />
      <PostExamReport/>
    </>
  )
}

export default App
