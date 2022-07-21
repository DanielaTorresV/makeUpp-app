import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const PURCHASE_SUCCESS = "PURCHASE_SUCCESS";
const PURCHASE_ERROR = "PURCHASE_ERROR";
const PURCHASE_LOADING = "PURCHASE_LOADING";
const UPDATE_PURCHASE = "UPDATE_PURCHASE";
const DELETE_PURCHASE = "DELETE_PURCHASE";

export const getPurchase = (purchaseId) => {
  return async function (dispatch) {
    try {
      dispatch({ type: PURCHASE_LOADING, payload: true });
      const res = await axios.get(
        `http://192.168.1.11:8080/purchases/${purchaseId}`
      );
      dispatch({ type: PURCHASE_SUCCESS, payload: res.data.data });
      dispatch({ type: PURCHASE_LOADING, payload: false });
    } catch (err) {
      dispatch({ type: PURCHASE_ERROR, payload: err });
    }
  };
};

export const createPurchase = (boxId, data) => {
  return async function (dispatch) {
    try {
      dispatch({ type: PURCHASE_LOADING, payload: true });
      const token = await AsyncStorage.getItem("token");
      const res = await axios.post(
        `http://192.168.1.11:8080/purchases/${boxId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: PURCHASE_SUCCESS, payload: res.data.data });
      dispatch({ type: PURCHASE_LOADING, payload: false });
    } catch (err) {
      dispatch({ type: PURCHASE_ERROR, payload: err });
    }
  };
};

export const updatePurchase = (purchaseId, data) => {
  return async function (dispatch) {
    try {
      const token = await AsyncStorage.getItem("token");
      const res = await axios.put(
        `http://192.168.1.11:8080/purchases/${purchaseId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: UPDATE_PURCHASE, payload: data });
    } catch (err) {
      dispatch({ type: PURCHASE_ERROR, payload: err });
    }
  };
};

export const deletePurchase = (purchaseId, navigation) => {
  return async function (dispatch) {
    try {
      const token = await AsyncStorage.getItem("token");
      const res = await axios.delete(
        `http://192.168.1.11:8080/purchases/${purchaseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: DELETE_PURCHASE, payload: purchaseId });
      if (res.status === 200) {
        navigation.navigate("Products");
      }
    } catch (err) {
      dispatch({ type: PURCHASE_ERROR, payload: err });
    }
  };
};

const initialState = {
  purchases: [],
  loading: false,
  error: null,
};

export const purchaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PURCHASE_SUCCESS:
      return {
        ...state,
        purchases: action.payload,
      };
    case UPDATE_PURCHASE:
      return {
        ...state,
        purchases: state.purchases.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    case DELETE_PURCHASE:
      return {
        ...state,
        purchases: state.purchases.filter(
          (item) => item._id !== action.payload
        ),
      };
    case PURCHASE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
