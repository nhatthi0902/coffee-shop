import { ACT_NAVIGATE } from "../../action/navigation/navigation.type";
const initialState = {
  currentPage: 1,
  navigationList: [
    {
      id: 1,
      to: "/",
      title: "Home",
      selected: true,
    },
    {
      id: 2,
      to: "/menu",
      title: "Menu",
      selected: false,
    },
    {
      id: 3,
      to: "/booking",
      title: "Booking",
      selected: false,
    },
    {
      id: 4,
      to: "/location",
      title: "Location",
      selected: false,
    },
    {
      id: 5,
      to: "/order",
      title: "Order",
      selected: false,
      cart: true,
    },
  ],
};

export default function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case ACT_NAVIGATE:
      return {
        ...state,
        navigationList: state.navigationList.map((item) => {
          if (item.id === state.currentPage) {
            item.selected = false;
          }

          if (item.id === action.payload) {
            item.selected = true;
          }

          return item;
        }),
        currentPage: action.payload,
      };
    default:
      return state;
  }
}
