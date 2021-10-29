import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./searchBox.scss";
import Suggestion from "../Suggestion";
import Input from "../Input";
import { htmlType } from "../../utilities/constant";
import { actGetProductNameAsync } from "../../store/action/product/asyncAction";

export default function SearchBox({ onSearch }) {
  const [searchValue, setsearchValue] = useState("");
  const [inputHeight, setInputHeight] = useState(0);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const productNames = useSelector(
    (state) => state.productReducer.productNames
  );
  const dispatch = useDispatch();

  function getInputHeight(height) {
    setInputHeight(height);
  }

  function handleOnSearch(e) {
    e.preventDefault();
    onSearch(searchValue);
    setShowSuggestion(false);
  }

  function onSearchChange(value) {
    setsearchValue(value);
    setShowSuggestion(true);
    dispatch(actGetProductNameAsync(value));
  }

  function onSuggestionSelected(selection) {
    console.log("selection: ", selection);
    setsearchValue(selection);
    setShowSuggestion(false);
    document.getElementById("input-field").focus();
  }
  return (
    <form className="search-box" onSubmit={handleOnSearch}>
      <Input
        type="search"
        placeholder="Tìm sản phẩm..."
        value={searchValue}
        onChange={onSearchChange}
        getInputHeight={getInputHeight}
        autocomplete="off"
        controlType={htmlType.INPUT}
      />
      <Suggestion
        position={inputHeight}
        data={productNames}
        onSelected={onSuggestionSelected}
        show={showSuggestion}
      />
    </form>
  );
}
