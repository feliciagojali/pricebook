import React, { Component } from 'react';

class Titles extends Component {
    render() {
        return (
          <div>
          <Container>
            <Row>
            <Col sm>In Theater</Col>
            <Col sm>Box Office</Col>
            <Col sm>Coming Soon</Col>
            </Row>
          </Container>
          </div>
         );
    }
}


export default Titles;
