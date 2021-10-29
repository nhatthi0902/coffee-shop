import API from "..";
const baseUrl = "https://provinces.open-api.vn/api/"

export const utilServices = {
  getProvnceService: async () => {
    const result = await API.get(`${baseUrl}p/`);
   
    return result.data;
  },
  getAllDistrictByProvince: async(provinceCode)=>{
    const result = await API.get(`${baseUrl}p/${provinceCode}?depth=3`);
    return result.data.districts;
  },
  getAllWardByDistrict: async(districtCode)=>{
    const result = await API.get(`${baseUrl}d/${districtCode}?depth=2`);
    return result.data.wards;
  }
};
