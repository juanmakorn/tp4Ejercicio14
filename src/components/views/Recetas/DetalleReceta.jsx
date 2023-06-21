import React, { memo } from "react";
import { Col, Card, Button } from "react-bootstrap";
const DetalleReceta = memo((props) => {
  return (
    <div>
      <tr>
        {/* <td>{props.producto._id}</td> */}
        <td>1</td>
        <td>EMPANADILLAS DE ATUN AL HORNO</td>
        <td>Ingredientes</td>
        <td>
          250g de atun en conserva, 1 cebolla, 1/2 pimiento rojo, 1/2 pimiento
          verde, 4 dientes de ajo, 3 huevos cocidos, 50g de aceitunas negras,
          200g de salsa de tomate, 2 cucharadas de pimentón dulce o picante (al
          gusto) también llamado paprika, sal y pimienta, aceite.
        </td>
        <td>
        https://www.cocinacaserayfacil.net/wp-content/uploads/2022/06/Empanadillas-de-atun-al-horno-facil.jpg
        </td>
        <td>Puede ser al horno o frita</td>
        <td>
          <Button className="btn btn-warning">Editar</Button>
          <Button variant="danger">Borrar</Button>
        </td>
      </tr>
    </div>
  );
});

export default DetalleReceta;
