import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import products from "../products";

const Product = () => {
  const { id } = useParams();
  const product = products.find((item) => item._id === id);

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Zurück
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} fliud="true" />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Button className="btn-block" type="button">
                In den Warenkorb
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
