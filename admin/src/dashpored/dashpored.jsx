import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Button, Input, Label } from 'reactstrap';
import { FaBox, FaUser, FaTruck,FaMoneyBill } from 'react-icons/fa';
import Stock from './Stock';

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [clients, setClients] = useState([]);
  const [fournisseurs, setFournisseurs] = useState([]);
  const [factureClients, setfactureClients] = useState([]);

  useEffect(() => {
        // Fetch data from API or database
        fetch('http://127.0.0.1:8000/api/products')
          .then(res => res.json())
          .then(data => setArticles(data));
    
        fetch('http://127.0.0.1:8000/api/clients')
          .then(res => res.json())
          .then(data => setClients(data));
    
        fetch('http://127.0.0.1:8000/api/products')
          .then(res => res.json())
          .then(data => setFournisseurs(data));

          fetch('http://127.0.0.1:8000/api/orders')
          .then(res => res.json())
          .then(data => setfactureClients(data));
      }, []);
  return (
    <div style={{width:'900px'}}>
      <h1 className="text-center mb-4">Dashboard</h1>

      <Row>
        <Col md={3}>
          <Card color="primary" inverse>
            <CardBody>
              <CardTitle tag="h5">
                <FaBox size={24} color="#fff" /> Articles
              </CardTitle>
              <p className="card-text">{articles.length} articles</p>
            </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card color="success" inverse>
            <CardBody>
              <CardTitle tag="h5">
                <FaUser size={24} color="#fff" /> Clients
              </CardTitle>
              <p className="card-text">{clients.length} clients</p>
            </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card color="info" inverse>
            <CardBody>
              <CardTitle tag="h5">
                <FaMoneyBill size={26} color="#fff" /> Payment
              </CardTitle>
              <p className="card-text">
                Total: {factureClients.reduce((total, it) => total + it.total, 0).toLocaleString()} $
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card color="warning" inverse>
            <CardBody>
              <CardTitle tag="h5">
                <FaTruck size={24} color="#fff" /> Commande
              </CardTitle>
              <p className="card-text">{fournisseurs.length} Commande</p>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Stock/>
      </Row>
    </div>
  );
};

export default Dashboard;