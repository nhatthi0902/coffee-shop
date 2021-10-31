import {
  ACT_GET_ALL_PRODUCT_PER_PAGE,
  ACT_GET_CURRENT_PAGE,
  ACT_GET_PRODUCT_NAME,
  ACT_GET_PRODUCT_BY_NAME,
} from "../../action/product/productAction.type";
const initialState = {
  currentPage: 1,
  currentList: [
    {
      id:1,
      category: "hot",
      imgTitle: true,
      extendClass: "hot",
      products: [
        {
          id:1,
          name: "Cà phê sữa",
          image: "./images/coffee1.jpg",
          price: 15000,
          gallery: [
            "./images/coffee1.jpg",
            "./images/coffee2.jpg",
            "./images/coffee3.jpg",
          ],
        },
        {
          id:2,
          name: "Cà phê sữa",
          image: "./images/coffee2.jpg",
          price: 15000,
          gallery: [
            "./images/coffee2.jpg",
            "./images/coffee3.jpg",
            "./images/coffee4.jpg",
          ],
        },
        {
          id:3,
          name: "Cà phê sữa",
          image: "./images/coffee3.jpg",
          price: 15000,
          gallery: [
            "./images/coffee3.jpg",
            "./images/coffee2.jpg",
            "./images/coffee1.jpg",
          ],
        },
      ],
    },
    {
      id:2,
      category: "Coffee",
      imgTitle: false,
      extendClass: "",
      products: [
        {
          id:4,
          name: "Cà phê sữa",
          image: "./images/coffee4.jpg",
          price: 15000,
          gallery: [
            "./images/coffee4.jpg",
            "./images/coffee3.jpg",
            "./images/coffee2.jpg",
          ],
        },
        {
          id:5,
          name: "Cà phê sữa",
          image: "./images/coffee4.jpg",
          price: 15000,
          gallery: [
            "./images/coffee4.jpg",
            "./images/coffee3.jpg",
            "./images/coffee2.jpg",
          ],
        },
        {
          id:6,
          name: "Cà phê sữa",
          image: "./images/coffee4.jpg",
          price: 15000,
          gallery: [
            "./images/coffee4.jpg",
            "./images/coffee3.jpg",
            "./images/coffee2.jpg",
          ],
        },
      ],
    },
    {
      id:3,
      category: "Tea",
      imgTitle: false,
      extendClass: "",
      products: [
        {
          id:7,
          name: "Cà phê sữa",
          image: "./images/coffee4.jpg",
          price: 15000,
          gallery: [
            "./images/coffee4.jpg",
            "./images/coffee3.jpg",
            "./images/coffee2.jpg",
          ],
        },
        {
          id:8,
          name: "Cà phê sữa",
          image: "./images/coffee4.jpg",
          price: 15000,
          gallery: [
            "./images/coffee4.jpg",
            "./images/coffee3.jpg",
            "./images/coffee2.jpg",
          ],
        },
        {
          id:9,
          name: "Cà phê sữa",
          image: "./images/coffee4.jpg",
          price: 15000,
          gallery: [
            "./images/coffee4.jpg",
            "./images/coffee3.jpg",
            "./images/coffee2.jpg",
          ],
        },
      ],
    },
  ],
  productNames: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case ACT_GET_ALL_PRODUCT_PER_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case ACT_GET_CURRENT_PAGE:
      return state.currentPage;
    case ACT_GET_PRODUCT_NAME:
      return {
        ...state,
        productNames: action.payload,
      };
    default:
      return state;
  }
}
