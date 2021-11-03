import "./shopList.scss";
import ShopItem from "./ShopItem";
export default function ShopList({ data, selectedShop, onSelected, zoom }) {
  function handleOnSelected(shop) {
    onSelected(shop);
  }
  return (
    <ul className="shop-list">
      {data.map((item, index) => {
        return (
          <ShopItem
            key={index}
            itemData={item}
            selectedShop={selectedShop}
            onSelected={handleOnSelected}
            zoom={zoom}
          />
        );
      })}
    </ul>
  );
}
