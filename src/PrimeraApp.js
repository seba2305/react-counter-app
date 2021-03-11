// import React, { Fragment } from 'react';//No se si es necesario
import React from 'react';
import PropTypes from 'prop-types';
//FC (Functional Components)
const PrimeraApp = ({ saludo, subtitulo }) => {

    //<> React lo toma como si fuese un Fragment
    return (
        <>
            <h1>{ saludo }</h1>
           <p>{ subtitulo }</p>
        </>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;