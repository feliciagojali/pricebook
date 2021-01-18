import React, { Component } from 'react';
import {Container,Col, Row} from 'react-bootstrap';
import {RiStarFill} from 'react-icons/ri';
import {AiOutlineStar} from 'react-icons/ai';
import {BiArrowBack} from 'react-icons/bi';
class Rating extends Component {
    render() {
        return (
          <div>
          <a href="/pricebook/#/">
          <BiArrowBack className="back"/> </a>
          <img src="https://www.whats-on-netflix.com/wp-content/uploads/2019/11/le-man-66-netflix-release-1.jpg" width="100%" className="detail-pic"/>
          <div className="rating">
            <Container>
              <Row style={{textAlign:"center"}}>
                <Col>
                  <RiStarFill size={"4vw"}/> <br/>
                  <span style={{fontSize:"3vw",fontWeight:"bold"}}> 8.2 </span> <span  style={{fontSize:"2vw"}}>/10</span>
                  <p style={{fontSize:"2vw",color:"grey"}}>150,212</p>
                </Col>
                <Col>
                  <AiOutlineStar size={"4.5vw"}/> <br/>
                  <p style={{fontSize:"4vw"}}>Rate This </p>
                </Col>
                <Col >
                  <div className="score">
                  86
                  </div> <br/>
                  <b style={{fontSize:"3vw"}}>Metascore</b>
                  <div style={{color:"grey",fontSize:"2vw",}}>62 Critic Reviews</div>
                </Col>
              </Row>
            </Container>
          </div>
          </div>
         );
    }
}


export default Rating;
