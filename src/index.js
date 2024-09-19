import React from 'react';
import ReactDOM from 'react-dom/client';

// import './vendor/react-bootstrap';//importing react Bootstrap library globally(Conclusion,i have used normal bootstrap,not react-bootstrap)
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/bootstrap/js/bootstrap.bundle.min.js';
import './vendor/bootstrap-icons/bootstrap-icons.css';

import './vendor/aos/aos.css';
import './vendor/aos/aos.js';

import './vendor/glightbox/js/glightbox.min.js';
import './vendor/glightbox/css/glightbox.min.css';

import './vendor/swiper/swiper-bundle.min.css';
import './vendor/typed.js/typed.umd.js';
import './vendor/purecounter/purecounter_vanilla.js';

/*❌These 3 libraries are causing some error.Look into it later 
import './vendor/waypoints/noframework.waypoints.js;'
import './vendor/imagesloaded/imagesloaded.pkgd.min.js';
import './vendor/isotope-layout/isotope.pkgd.min.js';
*/

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

