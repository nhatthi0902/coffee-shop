import "./map.scss";
import React, { useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
  InfoBox,
} from "@react-google-maps/api";
import { containerStyle, options, center } from "../../utilities/setting";
import { Link } from "react-router-dom";
import {
  ArrowRightOutlined,
  HomeOutlined,
  PhoneOutlined,
  FieldTimeOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import Row from "../Grid/Row";
import Col from "../Grid/Col";

export default function Map() {
  const key = "AIzaSyDAuror29mwJaWSFQN-vESH9o9CohpCy_Y";
  const markerPosition = {
    lat: 10.83543883123354,
    lng: 106.80755513950464,
  };
  const [closeInfoBox, setCloseInfoBox] = useState(false);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: key,
  });

  const mapRef = useRef(null);

  const onLoad = (map) => {
    mapRef.current = map;
  };

  const unMount = () => {
    mapRef.current = null;
  };
  if (!isLoaded) return <div>Map is loading....</div>;

  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={options}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={unMount}
      >
        <Marker
          position={markerPosition}
          onClick={() => {
            setCloseInfoBox(true);
          }}
        />
        {closeInfoBox && (
          <InfoWindow
            position={markerPosition}
            onCloseClick={() => {
              setCloseInfoBox(false);
            }}
          >
            <div className="window-info">
              <Row>
                <Col xs={4}>
                  <div className="direction">
                    <div className="map-image">
                      <img src="./images/coffee1.jpg" alt="" />
                    </div>
                    <Link to="./menu">
                     Xem
                    </Link>
                  </div>
                </Col>
                <Col xs={8}>
                  <div className="content">
                    <p className="shop-name">Mộc Coffee Lê Văn Việt Thủ Đức</p>
                    <p className="shop-address">
                      <HomeOutlined />
                      20 Lê Văn Việt, Tăng Nhơn Phú A, Thành Phố Thủ Đức, Thành
                      Phố Hồ Chí Minh
                    </p>
                    <p className="shop-address">
                      <PhoneOutlined />
                      0326340743
                    </p>
                    <p className="shop-address">
                      <FieldTimeOutlined />
                      Mở của từ 7h đến 23h
                    </p>
                    <p className="shop-address">
                      <WifiOutlined />
                      Wifi miễn phí
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}
