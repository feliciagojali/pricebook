import React, { Component } from 'react';

import {Container,Row,Col, Badge} from 'react-bootstrap';
class About extends Component {
    render() {
        return (
          <div style={{marginTop:"40vw"}}>
          <Container style={{padding:"10%"}}>
            <Row >
              <Col >
              <h1 style={{fontSize:"5.5vw"}}><b>Ford v Ferrari </b></h1>
              <Row style={{fontSize:"2vw"}}>
                <Col style={{paddingRight:"0"}}>2019</Col>
                <Col style={{padding:"0"}}>PG-13</Col>
                <Col style={{paddingLeft:"0"}}>2h 32 min</Col>
              </Row>
              <div style={{paddingTop:"5%"}}>
              <Badge pill className="pill2" style={{padding:"2% 3%",fontSize:"2vw"}}> Action  </Badge>{' '}
              <Badge pill className="pill2" style={{padding:"2% 3%",fontSize:"2vw"}}> Biography </Badge>{' '}
              <Badge pill className="pill2" style={{padding:"2% 3%",fontSize:"2vw"}}> Drama </Badge>{' '}
              </div>
              </Col>
              <Col style={{textAlign:"right"}}>
              <div className="add">
               +
              </div>
              </Col>
            </Row>
            <div style={{paddingTop:"8vw"}}>
            <h1 style={{fontSize:"4.5vw"}}>Plot Summary</h1>
            <p style={{fontSize:"3vw",color:"grey"}}>American car designer Carroll Shelby and driver Kn Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order.</p>
            </div>
            <div style={{paddingTop:"6vw"}}>
            <h1 style={{fontSize:"4.5vw"}}>Cast & Crew</h1>
            <Row style={{textAlign:"center"}}>
              <Col>
              <img src="https://marriedbiography.com/wp-content/uploads/2018/09/james_mangold.jpg" width="100%" className="cast"/>
              <div style={{paddingTop:"1vw"}} className="crew">
              <b>James Mangold</b>
              <br/> Director
              </div>
              </Col>
              <Col>
              <img src="https://i.guim.co.uk/img/media/b542cba18a68ca5d9d22049d93565297b7424f50/217_132_2247_1348/master/2247.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8683a9249b261c3ea3401d7d6a521163" width="100%"  className="cast" />
              <div style={{paddingTop:"1vw"}}  className="crew">
              <b>Matt Damon</b>
              <br/> Carroll
              </div>
              </Col>
              <Col><img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/christian-bale-440-24-03-2017-12-31-22.jpg" width="100%"  className="cast" />
              <div style={{paddingTop:"1vw"}} className="crew">
              <b>Christian Bale </b>
              <br/> Ken Miles
              </div>
              </Col>
              <Col><img src="https://i.pinimg.com/originals/fd/af/ee/fdafeed235e132d8f1d97b03e8216264.jpg" width="100%"  className="cast" />
              <div style={{paddingTop:"1vw"}} className="crew">
              <b>Caitriona Balfe</b>
              <br/> Mollie
              </div>
              </Col>
            </Row>

            </div>
          </Container>
          </div>
         );
    }
}


export default About;
