import React from "react";
import onClickOutside from "react-onclickoutside";

function Options({ options, onShow, onSelect }) {
  Options.handleClickOutside = () => {
      console.log("Click outsite opstions")
   onShow(false)
  };
  function handleOnSelect(item) {
    onSelect(item);
  }
  return (
    <ul className="dropdown-option-list">
      {options.map((item, index) => {
        return (
          <li
            className="dropdown-option-list-item"
            onClick={() => {
              handleOnSelect(item);
            }}
            key={index}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Options.handleClickOutside,
};

export default onClickOutside(Options, clickOutsideConfig);
