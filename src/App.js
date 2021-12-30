import './App.css';
import Navbar from './components/Navbar'
import Profile from './components/Profile';
import {useState} from 'react'
function App() {
  const [authPerson, setauthPerson] = useState(false)
  return (
    <>
    {authPerson ? <Navbar /> : <Profile />}
    </>
    
  );
}

export default App;
