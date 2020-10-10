import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/containers/NotFound.styl';

const NotFound = () => (
    <>
        <section className="main_container">
            <div className="main__container--title">
                <h1 className="animated pulse">404</h1>
                <p>Pagina no encontrada</p>
                <Link to='/'><button type="button">Regresar al Home</button></Link>
            </div>
        </section>
    </>
);

export default NotFound;