import "./productGallery.scss";
import classNames from "classnames";
export default function ProductGallery({ gallery, selectedPreviewImage, onSelectPreviewImage }) {
  
function handleOnSelectePreviewImage(imgIndex){
  onSelectPreviewImage(imgIndex)
}

  return (
    <ul className="product-gallery">
      {
        gallery.map((item, index)=>{
          const classes = classNames("gallery-item",{selected: index === selectedPreviewImage})
          return <li className={classes} key = {index} onClick={()=>{handleOnSelectePreviewImage(index)}}>
          <img src={item} alt="" />
        </li>
        })
      }
    </ul>
  );
}
