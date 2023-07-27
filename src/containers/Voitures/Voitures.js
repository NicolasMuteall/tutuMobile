import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';
import './_Voitures.scss';

const Voitures = () => {
    const [activeLink, setActiveLink] = useState('location'); // État pour garder trace du lien actif

    const [modal, setModal] = useState(false);
    const [nomModal, setNomModal] = useState('Nom par défaut');
    const [image, setImage] = useState('');
    const [km, setKm] = useState('');
    const [couleur, setCouleur] = useState('');
    const [boite, setBoite] = useState('');
    const [moteur, setMoteur] = useState('');
    const [annee, setAnnee] = useState('');
    const [chevaux, setChevaux] = useState('');
    const [porte, setPorte] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
        // Ici, vous pouvez également ajouter une logique supplémentaire en fonction du lien cliqué.
    };

    const [voitures, setVoitures] = useState([]);
    const [voituresAchat, setVoituresAchat] = useState([]);

    useEffect(() => {
        axios.get('../../Json/voituresLocation.json')
            .then((response) => setVoitures(response.data))
            .catch((error) => console.error('Erreur lors du chargement des voitures :', error));
    }, []);

    useEffect(() => {
        axios.get('../../Json/voituresAchat.json')
            .then((response) => setVoituresAchat(response.data))
            .catch((error) => console.error('Erreur lors du chargement des voitures :', error));
    }, []);

    const handleClickInfo = (name, image, km, couleur, carburant, annee, boite, cv, porte) => {
        setModal(true);
        setNomModal(name);
        setImage(image);
        setKm(km);
        setCouleur(couleur);
        setMoteur(carburant);
        setAnnee(annee);
        setBoite(boite);
        setChevaux(cv);
        setPorte(porte)
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <div className='voiture'>
            <h1>Selection de voitures:</h1>
            <div className="container text-center mt-5 mb-5">
                <ul className="navigation">
                    <li className={activeLink === 'location' ? 'active' : ''} onClick={() => handleLinkClick('location')}>location</li>
                    <li className={activeLink === 'achat' ? 'active' : ''} onClick={() => handleLinkClick('achat')}>Achat</li>
                </ul>
            </div>
            <section className='container d-flex flex-wrap '>
                {activeLink === 'location' ?
                    (voitures.map((voiture) => (
                        <div key={voiture.id}>
                            <Card nom={voiture.nom} année={voiture.année} couleur={voiture.couleur} moteur={voiture.carburant} location={voiture.location} image={voiture.image} handleClickInfo={() => handleClickInfo(voiture.nom, voiture.image, voiture.km, voiture.couleur, voiture.carburant, voiture.année, voiture.boiteVitesse, voiture.cvFiscaux, voiture.nbPortes)} />
                        </div>
                    )))
                    : (voituresAchat.map((voiture) => (
                        <div key={voiture.id}>
                            <Card nom={voiture.nom} année={voiture.année} couleur={voiture.couleur} moteur={voiture.carburant} location="Disponible" image={voiture.image} handleClickInfo={() => handleClickInfo(voiture.nom, voiture.image, voiture.km, voiture.couleur, voiture.carburant, voiture.année, voiture.boiteVitesse, voiture.cvFiscaux, voiture.nbPortes)} />
                        </div>
                    )))}
            </section>
            {modal ? (
                <div>
                    <div className="modal-overlay"></div>
                    <div className='modal-infos border rounded'>
                        <span onClick={closeModal} className="material-symbols-outlined icone">
                            close
                        </span>
                        <h3 className='text-center mt-2'>{nomModal}</h3>
                        <img src={`assets/${image}`} alt="" />
                        <div className='desc-voiture text-center'>
                            <span>{km}</span>
                            <span>{couleur}</span>
                            <span>{moteur}</span>
                            <span>{annee}</span>
                            <span>{boite}</span>
                            <span>{chevaux}</span>
                            <span>{porte}</span>
                        </div>
                    </div>
                </div>

            ) : ''}

        </div>
    );
};

export default Voitures;