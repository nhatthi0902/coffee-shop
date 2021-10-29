export default function CategoryTitle({title, imgTitle}){
    if(imgTitle){
        return(<div className="title">
        <img src="./images/whats-hot.jpg" />
      </div>)
    }

    return(<h2 className="category-title">{title}</h2>)
}