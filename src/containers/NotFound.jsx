import React from 'react';

import image from '../static/image-404.jpg';
import '../styles/containers/NotFound.styl';

const NotFound = () => (
  <div className="container">
    <img className="container-image" src={image} alt="error-404" />
  </div>
);

export default NotFound;
