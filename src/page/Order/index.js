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
import {
  actResetSipmentInfo,
  actCheckValidSipmentInfo,
} from "../../store/action/order/action";
import { actResetCart } from "../../store/action/cart";
import OrderSummary from "../../component/OrderSummary";
export default function Order() {
  const [selectedPayment, setSelectedPayment] = useState(1);
  const [confirm, setConfirm] = useState(false);
  //const [shipmentInfo, setShipmentInfo] = useState(null)
  const cartInfo = useSelector((state) => state.cartReducer.cart);
  const cartTotal = useSelector((state) => state.cartReducer.total);
  const cartShipping = useSelector((state) => state.cartReducer.shipping);
  const cartDiscount = useSelector((state) => state.cartReducer.discount);
  const validInfo = useSelector((state) => state.orderReducer.isValidInfo);
  const shipmentInfo = useSelector((state) => state.orderReducer.shipmentInfo);
  const [currentCart] = useState(cartInfo)
  console.log("CART: ", cartInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetCart());
    dispatch(actResetSipmentInfo());
    dispatch(actCheckValidSipmentInfo());
    setConfirm(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function selectPayment(payment) {
    setSelectedPayment(payment);
  }

  function confirmOrder() {
    dispatch(actResetCart());
    setConfirm(true);
  }

  function continueBuy() {
    setConfirm(false);
  }

  return (
    <Container>
      {!confirm && (
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
              disabled={validInfo === false || cartInfo.length === 0}
              onClick={confirmOrder}
            >
              Đặt hàng
            </Button>
          </Col>
          <Col xs={12} lg={5}>
            <Cart cart={cartInfo} />
          </Col>
        </Row>
      )}
      {confirm && (
        <OrderSummary
          cart={currentCart}
          shipingInfo={shipmentInfo}
          shippingFee={cartShipping}
          discount={cartDiscount}
          total={cartTotal}
          onContinue={continueBuy}
        />
      )}
    </Container>
  );
}
