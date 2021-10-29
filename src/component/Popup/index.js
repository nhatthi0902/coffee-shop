import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import Container from "../Grid/Container";
import Col from "../Grid/Col";
import Row from "../Grid/Row";
import "./popup.scss";
import { CloseOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Button from "../Button";
import Options from "../Options";
import Quantity from "../Quantity";
import ProductGallery from "../ProductGallery";
import { actAddCart } from "../../store/action/cart";
import NumberFormat from "react-number-format";

export default function Popup({ product, onClosePopup, onAddToCart }) {
  const options = ["M", "L"];
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("M");
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(product.price);

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      onClosePopup(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  function selectOption(option) {
    setSelectedOption(option);
    let newPrice = option === "M" ? product.price : product.price * 1.5;
    setCurrentPrice(Math.ceil(newPrice));
  }

  function selectPreviewImage(imageIndex) {
    setSelectedImage(imageIndex);
  }

  function changeQuantity(quantity) {
    setCurrentQuantity(quantity);
  }

  function addToCart() {
    dispatch(actAddCart({}));
    onAddToCart(product)
    onClosePopup(true);
  }

  return (
    <>
      <div className="popup-back-drop"></div>
      <div className="popup">
        <div className="content">
          <div className="popup-header">
            <Button extendClass="btn-close" onClick={()=>{onClosePopup(false)}}>
              <CloseOutlined />
            </Button>
          </div>
          <Container>
            <Row>
              <Col xs={6}>
                <div className="image-wrapper">
                  <div className="product-image">
                    <img src={product.gallery[selectedImage]} alt="" />
                  </div>
                  <ProductGallery
                    gallery={product.gallery}
                    onSelectPreviewImage={selectPreviewImage}
                    selectedPreviewImage={selectedImage}
                  />
                </div>
              </Col>
              <Col xs={6}>
                <div className="product-info">
                  <h3 className="name">{product.name}</h3>
                  <h4 className="price">
                    <NumberFormat
                      value={currentPrice}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"đ"}
                    />
                  </h4>
                  <p className="description">This is Vietnamese coffee</p>
                </div>
                <Options
                  options={options}
                  selectedOption={selectedOption}
                  onSelectOption={selectOption}
                />
                <Quantity
                  onChangeQuantity={changeQuantity}
                  currentQuantity={currentQuantity}
                />
                <Button onClick={addToCart} extendClass="btn-add-cart">
                  <ShoppingCartOutlined />| Add to Cart
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
