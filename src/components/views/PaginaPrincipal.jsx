import React from 'react';
import Menu from '../common/Menu';
import Footer from '../common/Footer';
import Titulos from '../Titulos';

const PaginaPrincipal = () => {
    return (
        <section>
            <Menu/>
            <Titulos/>
            <Footer/>
        </section>
    );
};

export default PaginaPrincipal;