import NumberFormat from "react-number-format";
import "./product.scss";

export default function Product({ product, onSelectProduct }) {
  function handleOnSelectProduct() {
    onSelectProduct(product);
  }
  return (
    <div className="product">
      <div onClick={handleOnSelectProduct}>
        <img src={product.image} alt="" />
        <h3 className="name">{product.name}</h3>
        <h4 className="price">
          <NumberFormat
            value={product.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"đ"}
          />
        </h4>
      </div>
    </div>
  );
}
