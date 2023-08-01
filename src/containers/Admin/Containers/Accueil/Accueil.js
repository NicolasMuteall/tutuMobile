import React, { useEffect, useState } from 'react';
import './_Accueil.scss';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';

const AccueilAdmin = () => {

    const [data, setData] = useState('')

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/annonces'); // Remplacez l'URL par l'endpoint de votre API
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <Navbar />
            <div className='accueilAdmin'>
                <h1 className='text-center mb-5'>Accueil Admin</h1>
                <div className='annonce border rounded w-75 mb-3'>
                    <div className='image'>
                        <img src={`http://localhost:3001/images/${data ? data[0].IMAGE : 'r8.jpg'}`} className='photoProfilP' alt="photo1"></img>
                        <p className='text-center'>{data ? data[0].MODELE : ''}</p>
                    </div>
                    <div className='description'>
                        <p className='text-center'>description annonce</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AccueilAdmin;