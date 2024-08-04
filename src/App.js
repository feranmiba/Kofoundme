import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Fotter from './component/Fotter';
import Signup from './component/Auth/Signup';
import SignIn from './component/Auth/SignIn';
import ForgetPassword from './component/Auth/ForgetPassword';
import Verify from './component/Auth/Verify';
import Dashboard from './component/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>
    <Routes>
    <Route path='/' element={ <Home /> } />
    <Route path='/signIn' element={ <SignIn /> } />
    <Route path='/signUp' element={ <Signup /> } />
    <Route path='/forget' element={ <ForgetPassword /> } />
    <Route path='/dashboard' element={ <Dashboard /> } />
    </Routes>
     <Fotter />

    </div>
  );
}

export default App;


// <Navbar />


