import {
  ACT_GET_ALL_PROVINCE,
  ACT_GET_ALL_DISTRICT_BY_PROVINCE,
  ACT_GET_ALL_WARD_BY_DISTRICT,
  ACT_RESET_ALL_WARD,
  ACT_RESET_ALL_DISTRICT
} from "../../action/util/util.type";
const initialState = {
  provinces: [],
  districts: [],
  wards: [],
};

export default function uttilReducer(state = initialState, action) {
  switch (action.type) {
    case ACT_GET_ALL_PROVINCE:
      return {
        ...state,
        provinces: action.payload,
      };
    case ACT_GET_ALL_DISTRICT_BY_PROVINCE:
      return {
        ...state,
        districts: action.payload,
      };
    case ACT_GET_ALL_WARD_BY_DISTRICT:
      return {
        ...state,
        wards: action.payload,
      };
      case ACT_RESET_ALL_DISTRICT:
        return {...state, 
          districts:[]
        }
        case ACT_RESET_ALL_WARD:
          return {...state, 
            wards:[]
          }

    default:
      return state;
  }
}
