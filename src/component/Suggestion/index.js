import "./suggestion.scss";
export default function Suggestion({ data, position, onSelected, show }) {
function handleOnSelected(value){
    onSelected(value)
}
  if (data.length > 0 && show)
    return (
      <>
        <ul
          className="list suggestion"
          style={{
            top: position,
          }}
        >
          {data.map((item, index) => {
            return <li onClick={()=>{
                handleOnSelected(item)
            }} className="suggestion-item" key={index}>{item}</li>;
          })}
        </ul>
      </>
    );
  return <></>;
}
