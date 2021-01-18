import React, { Component } from 'react';
import {Container,Row, Col, Badge} from 'react-bootstrap';

class Titles extends Component {
    render() {
        return (
          <div>
          <Container>
            <Row>
            <Col className="active" style={{fontSize:"3vw"}}>In Theater</Col>
            <Col style={{fontSize:"3vw"}}>Box Office</Col>
            <Col style={{fontSize:"3vw"}}> Coming Soon</Col>
            </Row>
          </Container>

          <div style={{padding:"3% 0 0 3%"}}>
          <Badge pill className="pill" style={{padding:"0.5% 1%"}}> Action  </Badge>{' '}
          <Badge pill className="pill" style={{padding:"0.5% 1%"}}> Crime </Badge>{' '}
          <Badge pill className="pill" style={{padding:"0.5% 1%"}}> Comedy </Badge>{' '}
          <Badge pill className="pill" style={{padding:"0.5% 1%"}}> Drama </Badge>{' '}
          </div>
          </div>
         );
    }
}


export default Titles;
