import React,{useState} from "react";
import {
  HomeOutlined,
  PhoneOutlined,
  FieldTimeOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import Row from "../Grid/Row";
import Col from "../Grid/Col";
import classNames from "classnames";

export default function ShopItem({ itemData, selectedShop, onSelected, zoom }) {
  const classese = classNames({
    "shop-item": true,
    selected: itemData.id === selectedShop.id,
  });
  function handleOnSelected(shop) {
    if (shop.id === selectedShop.id) {
      onSelected({ id: 0 });
    } else {
      onSelected(shop);
    }
  }
  return (
    <li
      className={classese}
      onClick={() => {
        handleOnSelected(itemData);
      }}
    >
      <Row>
        <Col xs={4}>
          <div className="direction">
            <div className="map-image">
              <img src={itemData.avatar} alt="" />
            </div>
          </div>
        </Col>
        <Col xs={8}>
          <div className="content">
            <p className="shop-name">{itemData.name}</p>
            <p className="shop-address">
              <HomeOutlined />
              {`${itemData.address.street}, ${itemData.address.ward}, ${itemData.address.district}, ${itemData.address.city}`}
            </p>
          </div>
        </Col>
      </Row>
    </li>
  );
}
