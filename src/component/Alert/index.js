import React from "react";
import useTimeout from "../../utilities/useTimeout";
import classNames from "classnames";
import "./alert.scss";
import { CloseOutlined } from "@ant-design/icons";
import Button from "../Button";
export default function Alert({ children, onClose, isShow }) {
  const classes = classNames({ alert: true, show: isShow===true, hide: isShow===false });
  useTimeout(() => {
    onClose();
  }, 2000);
  return (
    <div className={classes}>
      <p className="message">{children}</p>
      <Button extendClass="close-btn" onClick={onClose}>
        <CloseOutlined />
      </Button>
    </div>
  );
}
