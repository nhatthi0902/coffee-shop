export default function CartSummary() {
  return (
    <div className="cart-summary">
      <div className="redem"></div>
      <div className="summary-info">
        <div className="summary-info-row">
          <label>Tạm tính</label>
          <span className="checkout-subtotal">15,000</span>
        </div>
        <div className="summary-info-row">
          <label>Mã giảm giá</label>
          <span className="checkout-shiping-text">15,000</span>
        </div>
        <div className="summary-info-row">
          <label>Phí giao hàng</label>
          <span className="checkout-shiping-text">15,000</span>
        </div>
        <div className="summary-info-row total">
          <label>Tổng cộng</label>
          <span className="checkout-total">15,000</span>
        </div>
      </div>
    </div>
  );
}
