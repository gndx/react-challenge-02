import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <h1>Página no encontrada</h1> 
    {' '}
    <Link to="/">vuelve al inicio</Link>
  </>
);
export default NotFound;