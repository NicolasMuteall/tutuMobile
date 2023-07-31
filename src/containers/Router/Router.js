import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Accueil from '../Accueil/Accueil';
import Contact from '../Contact/Contact';
import Navbar from '../../components/Navbar/Navbar';
import Voitures from '../Voitures/Voitures';
import AccueilAdmin from '../Admin/Containers/Accueil/Accueil';
import UpdateAnnonce from '../Admin/Containers/Modification/UpdateAnnonce';

const Router = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Accueil />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/voitures' element={<Voitures />} />
                <Route path='/admin/home' element={<AccueilAdmin />} />
                <Route path='/admin/update' element={<UpdateAnnonce />} />
            </Routes>
        </div>
    );
};

export default Router;