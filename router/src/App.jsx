import React from 'react';
import { Route,Routes } from 'react-router-dom'; 
import Home from './Components/Home';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Notfound from './Components/Notfound';
import Navlink from './Components/Navlink';
import './App.css';

function App() {
  return (
    <div>
      <Navlink />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='contacts' element={<Contacts/>}/>
        <Route path='*' element={<Notfound/>}/>
    </Routes>
    </div>

  )
}

export default App
