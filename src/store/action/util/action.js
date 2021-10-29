import { ACT_GET_ALL_PROVINCE, ACT_GET_ALL_DISTRICT_BY_PROVINCE, ACT_GET_ALL_WARD_BY_DISTRICT } from "./util.type";

export function getAllProvince(provinces) {
  console.log("DATA FROM API: ", provinces)
  return {
    type: ACT_GET_ALL_PROVINCE,
    payload: provinces,
  };
}

export function getAllDistictByProvince(districts) {
  console.log("DATA FROM API: ", districts)
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
