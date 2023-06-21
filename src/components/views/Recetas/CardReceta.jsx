import React, {} from "react";
import { Col, Card, Button } from "react-bootstrap";

const CardReceta = (() => {
  return (
    <Col md={3} ld={3} className="mb-3">
      <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>EMPANADILLAS DE ATUN AL HORNO</Card.Title>
          <Card.Img
            variant="top"
            src="https://www.cocinacaserayfacil.net/wp-content/uploads/2022/06/Empanadillas-de-atun-al-horno-facil.jpg"
          />
          <Card.Title>
            <h6>Empanadillas de atun al horno. Una receta fácil. Las empanadillas
            son típicas de la gastronomía española. Las vamos a hacer al horno,
            aunque también las puedes hacer en la freidora de aire, con lo que
            eliminaremos el aporte calórico y las grasas de la fritura. Por todo
            ello, las empanadillas de atun al horno son una opción muy
            recomendable. Veamos a continuación como prepararlas de una forma
            fácil y rápida</h6>
          </Card.Title>
          <Button variant="primary">Ver detalle</Button>
        </Card.Body>
      </Card>
    </Col>
  );
});

export default CardReceta;
