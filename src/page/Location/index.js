import React, { useState, useEffect } from "react";
import Col from "../../component/Grid/Col";
import Container from "../../component/Grid/Container";
import Row from "../../component/Grid/Row";
import Input from "../../component/Input";
import Map from "../../component/Map";
import Title from "../../component/Title";
import { htmlType } from "../../utilities/constant";
import { shop } from "../../dumy-data/shop";
import Banner from "../../component/Banner";
import ShopList from "../../component/ShopList";

export default function Location() {
  const [selectedShop, setSelectedShop] = useState({id:0});
  const [isZoom, setIsZoom] = useState(false)
  useEffect(() => {
    document.getElementsByTagName('title')[0].value = "Mộc Coffee - Location"
  }, [])
  function selecteShop(shopItem) {
    if(shopItem.id===0){
      setIsZoom(false)
    }else{
      setIsZoom(true)
    }
    setSelectedShop(shopItem);
  }

  function closeInfoWindown(){
    setSelectedShop({id: 0});
  }

  return (
    <>
      <Banner type="banner-location" />
      <Container>
        <Title title="Tìm cửa hàng" />
        <Row>
          <Col xs={12} md={6} lg={3}>
            <Input
              controlType={htmlType.DROPDOWN}
              placeholder="Chọn Tỉnh/Thành Phố..."
              label="Tỉnh/Thành phố:"
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Input
              controlType={htmlType.DROPDOWN}
              placeholder="Chọn Huyện/Quận..."
              label="Huyện/Quận:"
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Input
              controlType={htmlType.DROPDOWN}
              placeholder="Chọn/Xã Phường..."
              label="Xã/Phường:"
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Input label="Tên cửa hàng:" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={5}>
            <ShopList
              data={shop}
              selectedShop={selectedShop}
              onSelected={selecteShop}
              zoom={isZoom}
            />
          </Col>
          <Col xs={12} lg={7}>
            <Map
              positions={shop}
              center={selectedShop}
              selectedPosition={selectedShop}
              onSelected={selecteShop}
              onCloseInfo = {closeInfoWindown}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
