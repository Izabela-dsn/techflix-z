import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './styles.css';
import Button from '../Button';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Techflix Logo" />        
            </Link>

            <Button as={Link} to="/cadastro/Video">
                Novo Vídeo
            </Button>
        </nav>
    ); 
}

export default Menu;