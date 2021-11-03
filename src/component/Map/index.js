import "./map.scss";
import React, { useRef, useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { containerStyle, options, center } from "../../utilities/setting";
import {
  HomeOutlined,
  PhoneOutlined,
  FieldTimeOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import Row from "../Grid/Row";
import Col from "../Grid/Col";

export default function Map({ positions, onSelected, selectedPosition, onCloseInfo }) {
  const key = "AIzaSyDAuror29mwJaWSFQN-vESH9o9CohpCy_Y";
  const markerPosition = {
    lat: 10.844748403366491,
    lng: 106.78945623384644,
  };
  const [closeInfoBox, setCloseInfoBox] = useState(false);
  const [currentCenter, setCurrentCenter] = useState(center)
  const [zoom, setZoom] = useState(15)
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

  function handleSelected(position) {
    onSelected(position)
  }

  useEffect(() => {
    if(selectedPosition.id===0){
    }else{
      setCurrentCenter(selectedPosition.coordinate)
    }
    setZoom(15)
  }, [selectedPosition])

  if (!isLoaded) return <div>Map is loading....</div>;

  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={options}
        center={currentCenter}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={unMount}
      >
        {positions.map((item, index) => {
          return (
            <Marker
              key={index}
              position={item.coordinate}
              onClick={() => {
                handleSelected(item)
              }}
            />
          );
        })}
        {positions.map((item, index) => {
          if (item.id === selectedPosition.id) {
            return (
              <InfoWindow key={index} position={item.coordinate} onCloseClick={()=>{
                onCloseInfo()
              }}>
                <div className="window-info">
                  <Row>
                    <Col xs={4}>
                      <div className="direction">
                        <div className="map-image">
                          <img src={item.avatar} alt="" />
                        </div>
                      </div>
                    </Col>
                    <Col xs={8}>
                      <div className="content">
                        <p className="shop-name">{item.name}</p>
                        <p className="shop-address">
                          <HomeOutlined />
                          {`${item.address.street}, ${item.address.ward}, ${item.address.district}, ${item.address.city}`}
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
            );
          }
          return <></>;
        })}
      </GoogleMap>
    </div>
  );
}
