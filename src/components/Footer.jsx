import React from 'react'
import logoBlanco from '../img/logo-artes-marciales-blanco.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div>
                    <div className="footer-container-contenido-img">
                        <figure>
                            <img src={logoBlanco} alt="logo artes marciales web" />
                        </figure>
                    </div>
                </div>
                <div className="footer-container-contenido">
                    <h2>Información de la página:</h2>
                    <p>Esta página fue creada con el fin de informar a las personas interesadas en practicar artes marciales, y fomentar el desarrollo personal de las mismas. Es responsabilidad de cada uno aprender y utilizarlas para defensa personal.</p>
                </div>
                <div className='footer-container-contenido'>
                    <h2>Siguenos:</h2>
                    <div className='contenido-red-social'>
                        <Link href="#" className='fa fa-facebook'></Link>
                        <Link href="#" className='fa fa-instagram'></Link>
                    </div>
                </div>
            </div>
                <div className='copyright'>
                    <small>&copy; 2024 <b>Artes Marciales Olavarria</b> - Todos los derechos reservados.</small>
                </div>
        </footer>
    )
}

export default Footer
