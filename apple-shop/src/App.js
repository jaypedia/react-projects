/*eslint-disable*/

import './App.css';
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Carousel, Container } from 'react-bootstrap';
import data from './data.js';
import { Route, Link, Switch } from 'react-router-dom';
import Detail from './Detail.js';

function App() {
  const [fruit, setFruit] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Fruits shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Route exact path="/">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1247930626-500px.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Stay Healthy with fruits</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Super food</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="container">
          <div className="row">
            {fruit.map((v, i) => {
              return <FruitComponent fruitData={v} key={i} />;
            })}
          </div>
        </div>
      </Route>

      <Route path="/detail/:id">
        <Detail fruitData={fruit}></Detail>
      </Route>
    </div>
  );
}

function FruitComponent(props) {
  return (
    <div className="col-md-4">
      <img src={props.fruitData.src} width="100%" />
      <h4>{props.fruitData.title}</h4>
      <p>{props.fruitData.content}</p>
    </div>
  );
}

export default App;
