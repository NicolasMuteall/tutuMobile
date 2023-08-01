import React from 'react';
import './_Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='Nav-Admin'>
            <Link to='/admin/create'><div className='link'>Créer une annonce</div></Link>
        </div>
    );
};

export default Navbar;