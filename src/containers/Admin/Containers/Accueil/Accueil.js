import React from 'react';
import './_Accueil.scss';
import Navbar from '../../Components/Navbar/Navbar';

const AccueilAdmin = () => {
    return (
        <div>
            <Navbar />
            <div className='accueilAdmin'>
                <h1>Accueil Admin</h1>
            </div>
        </div>
    );
};

export default AccueilAdmin;