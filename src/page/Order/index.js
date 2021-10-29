import Container from "../../component/Grid/Container";
import Row from "../../component/Grid/Row";
import Col from "../../component/Grid/Col";
import Cart from '../../component/Cart'
import ShipmentInfo from "../../component/ShipmentInfo";

export default function Order() {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={7}>
            <ShipmentInfo/>
        </Col>
        <Col xs={12} lg={5}>
          <Cart/>
        </Col>
      </Row>
    </Container>
  );
}