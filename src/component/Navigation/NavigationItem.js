import React from "react";
import { Link } from "react-router-dom";
import Badge from "../Badge";
import { ShoppingCartOutlined } from "@ant-design/icons";

export default function NavigationItem({ data, onSelected, cart }) {
  const classNames = require("classnames");
  const menuItemClass = classNames("menu-item", { selected: data.selected });
  function handleOnClick() {
    onSelected(data.id);
  }
  if (data.cart)
    if(cart.totalItem>0){
    return (
      <li className="menu-item cart-btn">
        <Link onClick={handleOnClick} to={data.to}>
          <ShoppingCartOutlined />
          <Badge number={cart.totalItem} />
        </Link>
      </li>
    );}
    else{
      return (
        <li className="menu-item cart-btn">
          <Link onClick={handleOnClick} to={data.to}>
            <ShoppingCartOutlined />
          </Link>
        </li>
      );
    }
  return (
    <li className={menuItemClass}>
      <Link onClick={handleOnClick} to={data.to}>
        {data.title}
      </Link>
    </li>
  );
}
