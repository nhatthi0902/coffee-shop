import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NumberFormat from "react-number-format";
import { actUpdateCartAmount } from "../../store/action/cart";
export default function CartSummary({
  cart,
  shiping,
  discount,
  onChangeShiping,
}) {
  const [subToltal, setSubToltal] = useState(0);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let subTotal = 0;
    cart.forEach((item) => {
      subTotal += item.price;
    });
    let total = subToltal + shiping - discount;
    if (total < 0) total = 0;
    setSubToltal(subTotal);
    setTotal(total);
    dispatch(actUpdateCartAmount({
      total: total,
      shipping:shiping,
      discount:discount
    }))
  });

  return (
    <div className="cart-summary">
      <div className="redem"></div>
      <div className="summary-info">
        <div className="summary-info-row">
          <label>Tạm tính</label>
          <span className="checkout-subtotal">
            <NumberFormat
              value={subToltal}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"đ"}
            />
          </span>
        </div>
        <div className="summary-info-row">
          <label>Giảm giá</label>
          <span className="checkout-shiping-text">
            <NumberFormat
              value={discount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"đ"}
            />
          </span>
        </div>
        <div className="summary-info-row">
          <label>Phí giao hàng</label>
          <span className="checkout-shiping-text">
            <NumberFormat
              value={shiping}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"đ"}
            />
          </span>
        </div>
        {total < 100000 && (
          <div className="summary-info-row">
            <i>
              Miễn phí với đơn hàng trên {" "}
              <NumberFormat
                value={100000}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"đ"}
              />
            </i>
          </div>
        )}

        <div className="summary-info-row total">
          <label>Tổng cộng</label>
          <span className="checkout-total">
            <NumberFormat
              value={total}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"đ"}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
