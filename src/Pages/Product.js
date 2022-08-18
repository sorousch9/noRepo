import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Product = (history) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const sendReq = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/products/${id}`
      );
      setProduct(response.data);
    };
    sendReq();
  });
  const addToCartHandler = () => {
    navigate(`/cart/${id}`);
  };

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Zurück
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
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
              <Button
                onClick={addToCartHandler}
                className="btn-block"
                type="button"
              >
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
