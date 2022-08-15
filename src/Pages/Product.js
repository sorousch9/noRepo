import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import products from "../products";

const Product = () => {
  const { id } = useParams();
  const product = products.find((item) => item._id === (id));

  return <div>{product.name}</div>;
};

export default Product;
