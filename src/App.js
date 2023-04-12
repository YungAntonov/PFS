import React, { useState } from 'react';
import Button from './components/Navbar/Button';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  const [active, setActive] = useState('home'); // Etat pour stocker l'onglet actif

  const handleClick = (tab) => { // Fonction pour gérer le clic sur un onglet
    setActive(tab);
  };

  return (
    <div className='app'> 
        <Navbar active={active} handleClick={handleClick} />
            <h1>Home page</h1>
            <h1>About page</h1>
            <h1>Contact page</h1>
            <Button/> 
    </div>
     
    
  );
}

export default App;
