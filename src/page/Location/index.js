import React from "react";
import Col from "../../component/Grid/Col";
import Container from "../../component/Grid/Container";
import Row from "../../component/Grid/Row";

import Map from "../../component/Map";

export default function Location(){
    return (
      <Container>
        <Row>
          <Col xs={4}></Col>
          <Col xs={8}> <Map/></Col>
        </Row>
      </Container>
    )
  }