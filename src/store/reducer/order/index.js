import {
  ACT_UPDATE_SHIPMENT_INFO,
  ACT_RESET_SHIPMENT_INFO,
  ACT_CHECK_VALID_INFO,
  ACT_UPDATE_AMOUNT
} from "../../action/order/action.type";
const emptyInfo = {
  fullName: "",
  phoneNumber: "",
  email: "",
  address: "",
  city: "",
  district: "",
  ward: "",
  note: "",
};
const initialState = {
  shipmentInfo: {
    fullName: "thikute",
    phoneNumber: "",
    email: "",
    address: "",
    city: "",
    district: "",
    ward: "",
    note: "",
  },
  isValidInfo: false,
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case ACT_UPDATE_SHIPMENT_INFO:
      return {
        ...state,
        shipmentInfo: {
          ...state.shipmentInfo,
          [action.payload.key]: action.payload.value,
        },
      };
    case ACT_RESET_SHIPMENT_INFO: {
      return {
        ...state,
        shipmentInfo: emptyInfo,
      };
    }
    case ACT_CHECK_VALID_INFO:
      let valid =
        state.shipmentInfo.fullName !== "" &&
        state.shipmentInfo.phoneNumber !== "" &&
        state.shipmentInfo.email !== "" &&
        state.shipmentInfo.address !== "" &&
        state.shipmentInfo.city !== "" &&
        state.shipmentInfo.district !== "" &&
        state.shipmentInfo.ward !== ""
          ? true
          : false;
      return {
        ...state,
        isValidInfo: valid,
      };
    default:
      return state;
  }
}
