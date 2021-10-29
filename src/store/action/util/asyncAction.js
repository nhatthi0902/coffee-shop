import { getAllProvince, getAllDistictByProvince, getAllWardByDistrict } from "./action";
import { utilServices } from "../../../services/ultil";

export function getAllProvinceAsync(){
    return async (dispatch) => {
        const result  = await utilServices.getProvnceService() 
        dispatch(getAllProvince(result));
      };
}

export function getAllDistictByProvinceAsync(provinceCode){
    return async (dispatch) => {
        const result  = await utilServices.getAllDistrictByProvince(provinceCode) 
        console.log("RESULT FROM ACT ASYNC: ",result)
        dispatch(getAllDistictByProvince(result));
      };
}

export function getAllWardByDistrictAsync(districtCode){
    return async (dispatch) => {
        const result  = await utilServices.getAllWardByDistrict(districtCode) 
        dispatch(getAllWardByDistrict(result));
      };
}