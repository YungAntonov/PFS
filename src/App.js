import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { routes } from './routes';
import Button from './components/Navbar/Button';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
const [active, setActive] = useState('home'); // Etat pour stocker l'onglet actif

const handleClick = (tab) => { // Fonction pour gérer le clic sur un onglet
setActive(tab);
};

return (
<BrowserRouter>
<div className='app'>
<Navbar active={active} handleClick={handleClick} />
<Routes>
{routes.map((route, index) => (
<Route
key={index}
path={route.path}
element={<route.component />}
/>
))}
</Routes>
<Button/>
</div>
</BrowserRouter>
);
}

export default App;