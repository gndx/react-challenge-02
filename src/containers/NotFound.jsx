import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/NotFound.styl';

const NotFound = () => {
    return(
        <>
            <div className="NotFound">
                <h1>ERROR 404! Hmm</h1>
                    <Link to="/">
                        <h2>No encontramos lo que buscas</h2>
                    </Link>   
            </div>
        </>    
    )
};  

export default NotFound;