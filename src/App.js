import './App.css';
import Navbar from './components/Navbar'
import Profile from './page/Profile';
import {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import Contact from './page/Contact';
import Home from './page/Home';
import About from './page/About';
import Services from './page/Services';
import ERROR404 from './page/ERROR404';

function App() {
  const [authPerson, setauthPerson] = useState(false)
  return (
    <>
    <Routes>
        <Route exact path="/" element={<Profile />  } />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*"  element={<ERROR404 />}/>
        
    </Routes>
    {/* {authPerson ? <SignIn /> : <Profile />} */}
    </>
    
  );
}

export default App;
