import CategoryTitle from "./CategoryTitle";
import Row from "../Grid/Row";
import Col from "../Grid/Col";
import Product from "../Product";
import classNames from "classnames";
import "./category.scss";
export default function Categoty({ title, imgTitle, extendClass, products, onSelectProduct }) {
  const classese = classNames("category", extendClass);

  function handleOnSelectProduct(product){
    onSelectProduct(product)
  }

  return (
    <div className={classese}>
      <Row>
          <Col xs={3}>
            <CategoryTitle imgTitle={imgTitle} title={title} />
          </Col>
          <Col xs={9}>
            <Row>
              {products.map((item, index) => {
                return (
                  <Col xs={4} key={index}>
                    <Product product={item} onSelectProduct= {handleOnSelectProduct}/>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
    </div>
  );
}
