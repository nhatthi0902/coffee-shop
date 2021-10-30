import { useRef, useEffect, useState } from "react";
import "./input.scss";
import classNames from "classnames";
import { htmlType } from "../../utilities/constant";
import Button from "../Button";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import Options from "./Options";
 export default function Input({
  onChange,
  value,
  type,
  placeholder,
  extendClass,
  label,
  getInputHeight,
  autocomplete,
  focus,
  onFocus,
  controlType,
  dropdownData,
  id
}){
  const classes = classNames("input", extendClass);
  const inputEl = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  useEffect(() => {
    if (getInputHeight) getInputHeight(inputEl.current.offsetHeight);
    if (focus) inputEl.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnChange = (e) => {
    onChange(e.target.value);
  };

  function handleOnSelectOption(option) {
    onChange(option);
    setShowOptions(false);
    console.log(option);
  }

  function handleShowOptions(status) {
    setShowOptions(status);
  }

  function handleOnFocus(id) {
    setShowOptions(true);
    onFocus(id);
  }

  switch (controlType) {
    case htmlType.INPUT:
      return (
        <div className="form-control">
          {label && <label htmlFor="input-field">{label}</label>}
          <input
            className={classes}
            value={value}
            type={type}
            placeholder={placeholder}
            id="input-field"
            autocomplete={autocomplete}
            onChange={handleOnChange}
            ref={inputEl}
          />
        </div>
      );
    case htmlType.TEXTAREA:
      return (
        <div className="form-control">
          {label && <label htmlFor="input-field">{label}</label>}
          <textarea
            className={classes}
            value={value}
            type={type}
            placeholder={placeholder}
            id="input-field"
            autocomplete={autocomplete}
            onChange={handleOnChange}
            ref={inputEl}
          ></textarea>
        </div>
      );
    case htmlType.DROPDOWN:
      return (
        <div className="form-control dropdown" id={id}>
          {label && <label htmlFor="input-field">{label}</label>}
          <div className="dropdown-value" onClick={()=>{handleOnFocus(id)}}>
            <span>{value}</span>
            {value === "" && (
              <span className="dropdown-placeholder">{placeholder}</span>
            )}
          </div>
          <Button extendClass="toggle-btn" onClick={(e)=>{e.preventDefault();
          }}>
            {(!showOptions||dropdownData.length===0) && <DownOutlined />}
            {(showOptions&& dropdownData.length>0) && <UpOutlined />}
          </Button>
          {(showOptions&&dropdownData.length>0) && (
            <Options options = {dropdownData} onSelect = {handleOnSelectOption} onShow = {handleShowOptions}/>
          )}
        </div>
      );
    default:
      return (
        <div className="form-control">
          {label && <label htmlFor="input-field">{label}</label>}
          <input
            className={classes}
            value={value}
            type={type}
            placeholder={placeholder}
            id="input-field"
            autocomplete={autocomplete}
            onChange={handleOnChange}
            ref={inputEl}
          />
        </div>
      );
  }
}
