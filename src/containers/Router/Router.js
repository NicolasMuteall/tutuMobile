import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Accueil from '../Accueil/Accueil';
import Contact from '../Contact/Contact';
import Navbar from '../../components/Navbar/Navbar';
import Voitures from '../Voitures/Voitures';

const Router = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Accueil />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/voitures' element={<Voitures />} />
            </Routes>
        </div>
    );
};

export default Router;