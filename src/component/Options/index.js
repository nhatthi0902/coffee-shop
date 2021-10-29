import './options.scss'
import Button from "../Button";
import classNames from "classnames";
export default function Options({ options, onSelectOption, selectedOption }) {
    function handleSelectOption(option){
        onSelectOption(option)
    }
  return (
    <ul className="options">
      {options.map((item, index) => {
        const classes = classNames("option", {
          selected: item === selectedOption,
        });
        return (
          <li key={index}>
            <Button onClick={()=>{handleSelectOption(item)}} extendClass={classes}>{item}</Button>
          </li>
        );
      })}
    </ul>
  );
}
