import "./shipmentInfo.scss";
import Input from "../Input";
import ShipmentTitle from "./ShipmentTitle";
import Row from "../Grid/Row";
import Col from "../Grid/Col";
import { htmlType } from "../../utilities/constant";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProvinceAsync,
  getAllDistictByProvinceAsync,
  getAllWardByDistrictAsync,
} from "../../store/action/util/asyncAction";
import { actUpdateSipmentInfo, actCheckValidSipmentInfo } from "../../store/action/order/action";
import { resetAllDistrct, resetAllWard } from "../../store/action/util/action";
export default function ShipmentInfo() {
  const [city, setCity] = useState({ name: "", code: 0 });
  const [district, setDistrict] = useState({ name: "", code: 0 });
  const [ward, setWard] = useState({ name: "", code: 0 });
  const dispatch = useDispatch();
  const provinces = useSelector((state) => state.utilReducer.provinces);
  const districts = useSelector((state) => state.utilReducer.districts);
  const wards = useSelector((state) => state.utilReducer.wards);

  function getFullName(fullName) {
    dispatch(actUpdateSipmentInfo({ key: "fullName", value: fullName }));
    dispatch(actCheckValidSipmentInfo());
  }

  function getPhoneNumber(phoneNumber) {
    dispatch(actUpdateSipmentInfo({ key: "phoneNumber", value: phoneNumber }));
    dispatch(actCheckValidSipmentInfo());
  }

  function getEmail(email) {
    dispatch(actUpdateSipmentInfo({ key: "email", value: email }));
    dispatch(actCheckValidSipmentInfo());
  }

  function getAddress(address) {
    dispatch(actUpdateSipmentInfo({ key: "address", value: address }));
    dispatch(actCheckValidSipmentInfo());
  }

  function getCity(city) {
    let newCity = { name: city.name, code: city.code };
    setDistrict({ name: "", code: 0 });
    setWard({ name: "", code: 0 });
    setCity(newCity);
    dispatch(actUpdateSipmentInfo({ key: "city", value: city.name }));
    dispatch(actCheckValidSipmentInfo());
  }

  function getDistrict(district) {
    let newDistrict = { name: district.name, code: district.code };
    setWard({ name: "", code: 0 });
    setDistrict(newDistrict);
    dispatch(actUpdateSipmentInfo({ key: "district", value: district.name }));
    dispatch(actCheckValidSipmentInfo());
  }

  function getWard(ward) {
    let newWard = { name: ward.name, code: ward.code };
    setWard(newWard);
    dispatch(actUpdateSipmentInfo({ key: "ward", value: ward.name }));
    dispatch(actCheckValidSipmentInfo());
  }

  function getNote(note) {
    dispatch(actUpdateSipmentInfo({ key: "note", value: note }));
  }

  function focus(id) {
    switch (id) {
      case "province":
        dispatch(getAllProvinceAsync());
        dispatch(resetAllDistrct());
        dispatch(resetAllWard());
        dispatch(actUpdateSipmentInfo({ key: "district", value: "" }));
        dispatch(actUpdateSipmentInfo({ key: "ward", value: "" }));
        break;
      case "district":
        if (city.code !== 0) {
          dispatch(getAllDistictByProvinceAsync(city.code));
          dispatch(resetAllWard());
          dispatch(actUpdateSipmentInfo({ key: "ward", value: "" }));
        }
        break;
      case "ward":
        if (district.code !== 0) {
          dispatch(getAllWardByDistrictAsync(district.code));
        }
        break;
      default:
    }
  }

  return (
    <div className="shipment-info">
      <ShipmentTitle title="Thông tin nhận hàng" />
      <form className="shipment-info-form">
        <Row>
          <Col xs={12} lg={6}>
            <Input
              label="Họ tên:"
              type="text"
              controlType={htmlType.INPUT}
              onChange={getFullName}
            />
          </Col>
          <Col xs={12} lg={6}>
            <Input
              label="Số điện thoại:"
              type="text"
              controlType={htmlType.INPUT}
              onChange={getPhoneNumber}
            />
          </Col>
        </Row>
        <Input
          label="Email:"
          type="email"
          controlType={htmlType.INPUT}
          onChange={getEmail}
        />
        <Row>
        <Col xs={12}>
            <Input
              label="Tỉnh/Thành Phố:"
              extendClass="dropdown-value"
              controlType={htmlType.DROPDOWN}
              onChange={getCity}
              placeholder="Chọn thành phố..."
              value={city.name}
              onFocus={focus}
              dropdownData={provinces}
              id="province"
            />
          </Col>
        <Col xs={12}>
            <Input
              label="Quận/Huyện:"
              placeholder="Chọn quận/huyện..."
              controlType={htmlType.DROPDOWN}
              onChange={getDistrict}
              value={district.name}
              dropdownData={districts}
              onFocus={focus}
              id="district"
            />
          </Col>
        <Col xs={12}>
            <Input
              label="Xã/Phường:"
              placeholder="Chọn Xã/phường..."
              controlType={htmlType.DROPDOWN}
              onChange={getWard}
              value={ward.name}
              dropdownData={wards}
              onFocus={focus}
              id="ward"
            />
          </Col>
        </Row>
        <Input
          label="Địa chỉ:"
          type="text"
          controlType={htmlType.INPUT}
          onChange={getAddress}
        />
        <Input
          label="Ghi chú:"
          type="text"
          controlType={htmlType.TEXTAREA}
          onChange={getNote}
        />
      </form>
    </div>
  );
}
