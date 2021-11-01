import Button from "../Button";
import Col from "../Grid/Col";
import Row from "../Grid/Row";
import Title from "../Title";
import "./orderSummary.scss";

export default function OrderSummary({ cart, shipingInfo, onContinue, shippingFee, discount, total }) {
    console.log("CART: ",cart)
    function handleOnContinue(){
        onContinue()
    }
  return (
    <div className="order-summary">
      <Title title="Đặt hàng thành công" />
      <h3>Thông tin đơn hàng:</h3>
      <div className="shipment-infomation">
        <Row>
          <Col xs={3}>
            <label>Họ tên:</label>
          </Col>
          <Col xs={9}>
            <span>{shipingInfo.fullName}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <label>Số điện thoại:</label>
          </Col>
          <Col xs={9}>
            <span>{shipingInfo.phoneNumber}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <label>Email:</label>
          </Col>
          <Col xs={9}>
            <span>{shipingInfo.email}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <label>Địa chỉ giao hàng:</label>
          </Col>
          <Col xs={9}>
            {`${shipingInfo.address}, ${shipingInfo.ward}, ${shipingInfo.district}, ${shipingInfo.city}`}
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <label>Phương thức thanh toán:</label>
          </Col>
          <Col xs={9}>
            <span>Thanh toán khi nhận hàng</span>
          </Col>
        </Row>
      </div>
      <div className="order-detail">
        <table className="table">
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Size</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
              {cart.map((item, index)=>{
                  return<tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.size}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
              })}
            <tr>
              <td colSpan="3" className="fw-bold">
                Phí giao hàng:
              </td>
              <td className="fw-bold">{shippingFee}</td>
            </tr>
            <tr>
              <td colSpan="3" className="fw-bold">
                Giảm giá:
              </td>
              <td className="fw-bold">{discount}</td>
            </tr>
            <tr>
              <td colSpan="3" className="fw-bold">
                Tổng cộng:
              </td>
              <td className="fw-bold">{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="back-to-menu">
        <Button onClick={handleOnContinue} extendClass="btn-continue" isLink={true} to="./menu">Tiếp tục mua</Button>
      </div>
    </div>
  );
}
