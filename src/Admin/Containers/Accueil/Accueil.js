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
            <div className='accueilAdmin text-center'>
                <h1 className='text-center mb-5'>Accueil Admin</h1>
                {data && data.map((item) =>
                    <div key={item.ID} className='annonce rounded w-75 mx-auto'>
                        <div className='image'>
                            <div className="image-container">
                                <img src={`http://localhost:3001/images/${item.IMAGE}`} className='photoProfilP' alt="photo1"></img>
                            </div>
                            <p className='text-center fw-bolder fs-5 fst-italic'>{item.MODELE}</p>
                        </div>
                        <div className='description'>
                            <div className='d-inline-block prix fw-bold'>{item.PRIX} €</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AccueilAdmin;