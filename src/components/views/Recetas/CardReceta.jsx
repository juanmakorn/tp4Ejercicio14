import React, { memo } from 'react';
import { Col, Card, Button } from "react-bootstrap";

const CardReceta = memo(() => {
    return (
          <Col md={3} ld={3} className="mb-3">
        <Card>
          <Card.Img
            variant="top"
            src=""
          />
          <Card.Body>
            <Card.Title>Nuds con salsa blanca</Card.Title>
            <Card.Text>$1.740,00 costo total de la receta</Card.Text>
            <Button variant="primary">Ver detalle</Button>
          </Card.Body>
        </Card>
      </Col>
    );
});

export default CardReceta;