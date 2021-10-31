import { useEffect, useState } from "react";
import Container from "../../component/Grid/Container";
import Row from "../../component/Grid/Row";
import Col from "../../component/Grid/Col";
import Cart from "../../component/Cart";
import ShipmentInfo from "../../component/ShipmentInfo";
import { useSelector, useDispatch } from "react-redux";
import { actGetCart } from "../../store/action/cart";
import Title from "../../component/Title";
import Payment from "../../component/Payment";
import { PAYMENTS } from "../../utilities/constant";
import "./order.scss";
import Button from "../../component/Button";
import { actResetSipmentInfo, actCheckValidSipmentInfo } from "../../store/action/order/action";
export default function Order() {
  const [selectedPayment, setSelectedPayment] = useState(1);
  //const [shipmentInfo, setShipmentInfo] = useState(null)
  const cart = useSelector((state) => state.cartReducer.cart);
  const validInfo = useSelector((state) => state.orderReducer.isValidInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetCart());
    dispatch(actResetSipmentInfo());
    dispatch(actCheckValidSipmentInfo())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function selectPayment(payment) {
    setSelectedPayment(payment);
  }

  return (
    <Container>
      <Row>
        <Col xs={12} lg={7}>
          <ShipmentInfo />
          <Title title="Chọn phương thức thanh toán" />
          <Payment
            selectedPayment={selectedPayment}
            payments={PAYMENTS}
            onSelectPayment={selectPayment}
          />
          <Button
            extendClass="btn-submit-order"
            disabled={(validInfo===false || cart.length === 0)}
          >
            Đặt hàng
          </Button>
        </Col>
        <Col xs={12} lg={5}>
          <Cart cart={cart} />
        </Col>
      </Row>
    </Container>
  );
}
