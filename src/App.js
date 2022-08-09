import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";
import Home from "./Pages/Home";
const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} exact />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
