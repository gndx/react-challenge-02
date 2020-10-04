import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/NotFound.styl';

const NotFound = () => {
   return(
      <>
	     <div className="NotFound">
            <h1>ERROR 404! El sitio al cual desea acceder no fue encontrado.</h1>
		    <Link to="/">
		       <h2>Por favor, regrese al inicio.</h2>
		    </Link>
		 </div>
      </>
   )
};

export default NotFound;