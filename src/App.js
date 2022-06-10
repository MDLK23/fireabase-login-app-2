 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      
      <AuthContextProvider>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/account" element={<Account/>}/>
        </Routes>

      </AuthContextProvider>
       
       
       
    </div>
  );
}

export default App;
