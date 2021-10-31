import "./payment.scss";
import { CheckOutlined } from "@ant-design/icons";
export default function Payment({
  selectedPayment,
  onSelectPayment,
  payments,
}) {
  function handleOnSelectPayment(payment) {
    onSelectPayment(payment);
  }
  return (
    <ul className="payment">
      {payments.map((item, index) => {
        if (item.id === selectedPayment) {
          return (
            <li
              className="payment-item selected"
              key={index}
              onClick={() => {
                handleOnSelectPayment(item.id);
              }}
            >
              <span>{item.description}</span>
              <CheckOutlined />
            </li>
          );
        }
        return (
          <li
            className="payment-item"
            key={index}
            onClick={() => {
              handleOnSelectPayment(item.id);
            }}
          >
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
}
