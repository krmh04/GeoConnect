import React from 'react';
import './Home.css';
import { Container } from 'react-bootstrap';
 
const Home = () => {
  return (
    <Container>
      <div className="row maintitle">
        <div className="col-xl-5 title">
          <h1>
            Welcome to GeoConnect.{' '}
            <h2>Mark your visited places and keep memories.</h2>
          </h1>
        </div>
        <div className="col-xl-6 mappic">
          <img src="assets/geoconnect.jpeg" alt="map" />
        </div>
      </div>
     </Container>
  );
};

export default Home;
