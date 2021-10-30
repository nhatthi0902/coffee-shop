import { useEffect } from "react";
import Container from "../../component/Grid/Container";
import Row from "../../component/Grid/Row";
import Col from "../../component/Grid/Col";
import Cart from "../../component/Cart";
import ShipmentInfo from "../../component/ShipmentInfo";
import { useSelector, useDispatch } from "react-redux";
import { actGetCart } from "../../store/action/cart";
export default function Order() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetCart());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} lg={7}>
          <ShipmentInfo />
        </Col>
        <Col xs={12} lg={5}>
          <Cart cart={cart} />
        </Col>
      </Row>
    </Container>
  );
}
