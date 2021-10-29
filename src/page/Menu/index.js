import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../component/Banner";
import Section from "../../component/Section";
import SearchBox from "../../component/SearchBox";
import Categoty from "../../component/Category";
import Pagination from "../../component/Pagination";
import Popup from "../../component/Popup";
import { actGetAllProductPerPage } from "../../store/action/product/action";
import { actNavigate } from "../../store/action/navigation";
import Alert from "../../component/Alert";
export default function Menu() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetAllProductPerPage(1));
    dispatch(actNavigate(2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const currentMenuData = useSelector(
    (state) => state.productReducer.currentList
  );

  const currentPage = useSelector((state) => state.productReducer.currentPage);

  function changePage(number) {
    dispatch(actGetAllProductPerPage(number));
  }

  function search(keyword) {
    console.log("keyword: ", keyword);
  }

  function selectProduct(product) {
    setSelectedProduct(product);
    setShowPopUp(true);
  }

  function closePopup(isAddToCart = false) {
    setShowPopUp(false);
    if (isAddToCart) {
      setShowAlert(true);
    }
  }

  function getAddedProduct(product) {
    setAlertMessage(product.name);
  }

  function closeAlert() {
    setShowAlert(false);
  }
  return (
    <>
      <Banner type="banner-menu" />
      <Section className="product-showcase">
        <SearchBox onSearch={search} />
        {currentMenuData.map((category, index) => {
          return (
            <Categoty
              title={category.category}
              imgTitle={category.imgTitle}
              extendClass={category.extendClass}
              products={category.products}
              key={index}
              onSelectProduct={selectProduct}
            />
          );
        })}
        <Pagination
          totalPage={5}
          currentPage={currentPage}
          onChangePage={changePage}
        />
      </Section>
      {showPopUp && (
        <Popup
          product={selectedProduct}
          onClosePopup={closePopup}
          onAddToCart={getAddedProduct}
        />
      )}
      {showAlert && (
        <Alert onClose={closeAlert} isShow={showAlert}>
          Đã thêm <strong>{alertMessage}</strong> vào giỏ hàng
        </Alert>
      )}
    </>
  );
}
