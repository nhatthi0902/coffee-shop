import {
  ACT_GET_ALL_PROVINCE,
  ACT_GET_ALL_DISTRICT_BY_PROVINCE,
  ACT_GET_ALL_WARD_BY_DISTRICT,
  ACT_RESET_ALL_DISTRICT,
  ACT_RESET_ALL_WARD,
} from "./util.type";

export function getAllProvince(provinces) {
  return {
    type: ACT_GET_ALL_PROVINCE,
    payload: provinces,
  };
}

export function getAllDistictByProvince(districts) {
  return {
    type: ACT_GET_ALL_DISTRICT_BY_PROVINCE,
    payload: districts,
  };
}

export function getAllWardByDistrict(wards) {
  return {
    type: ACT_GET_ALL_WARD_BY_DISTRICT,
    payload: wards,
  };
}

export function resetAllDistrct() {
  return {
    type: ACT_GET_ALL_WARD_BY_DISTRICT,
    payload: "",
  };
}

export function resetAllWard(wards) {
  return {
    type: ACT_GET_ALL_WARD_BY_DISTRICT,
    payload: "",
  };
}

