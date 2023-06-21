import React from 'react';
import ListaRecetas from '../ListaRecetas';
import MenuAdmin from '../common/MenuAdmin';

const PaginaAdministrador = () => {
    return (
        <div>
            <MenuAdmin/>
            <ListaRecetas/>
        </div>
    );
};

export default PaginaAdministrador;