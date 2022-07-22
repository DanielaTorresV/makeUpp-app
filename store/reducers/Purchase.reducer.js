import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
const PURCHASE_SUCCESS = "PURCHASE_SUCCESS";
const PURCHASE_ERROR = "PURCHASE_ERROR";
const PURCHASE_LOADING = "PURCHASE_LOADING";
const UPDATE_PURCHASE = "UPDATE_PURCHASE";
const DELETE_PURCHASE = "DELETE_PURCHASE";
import Toast from "react-native-toast-message";

export const getPurchase = (purchaseId) => {
  return async function (dispatch) {
    try {
      dispatch({ type: PURCHASE_LOADING, payload: true });
      const res = await axios.get(
        `http://192.168.1.12:8080/purchases/${purchaseId}`
      );
      dispatch({ type: PURCHASE_SUCCESS, payload: res.data.data });
      dispatch({ type: PURCHASE_LOADING, payload: false });
    } catch (err) {
      dispatch({ type: PURCHASE_ERROR, payload: err });
    }
  };
};

export const createPurchase = (boxId, data) => {
  const toastSucc = () => {
    Toast.show({
      type: "success",
      text1: "Purchase created successfully!",
    });
  };
  const toastError = () => {
    Toast.show({
      type: "error",
      text1: "Purchase could not be created!",
    });
  };
  return async function (dispatch) {
    try {
      dispatch({ type: PURCHASE_LOADING, payload: true });
      const token = await AsyncStorage.getItem("token");
      const res = await axios.post(
        `http://192.168.1.12:8080/purchases/${boxId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: PURCHASE_SUCCESS, payload: res.data.data });
      dispatch({ type: PURCHASE_LOADING, payload: false });
      toastSucc();
      Alert.alert("Purchase created");
    } catch (err) {
      dispatch({ type: PURCHASE_ERROR, payload: err });
      toastError();
      Alert.alert("Purchase does not created");
    }
  };
};

export const updatePurchase = (purchaseId, data) => {
  const toastSucc = () => {
    Toast.show({
      type: "success",
      text1: "Purchase updated successfully!",
    });
  };
  const toastError = () => {
    Toast.show({
      type: "error",
      text1: "Purchase could not be updated!",
    });
  };
  return async function (dispatch) {
    try {
      const token = await AsyncStorage.getItem("token");
      const res = await axios.put(
        `http://192.168.1.12:8080/purchases/${purchaseId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: UPDATE_PURCHASE, payload: res.data.data });
      toastSucc();
      Alert.alert("Purchase updated!");
    } catch (err) {
      dispatch({ type: PURCHASE_ERROR, payload: err });
      toastError();
      Alert.alert("Purchase does not updated!");
    }
  };
};

export const confirmPurchase = (data) => {
  const toastSucc = () => {
    Toast.show({
      type: "success",
      text1: "Email sent with purchase confirmation!",
    });
  };
  const toastError = () => {
    Toast.show({
      type: "error",
      text1: "Purchase could not be confirmed!",
    });
  };
  return async function (dispatch) {
    try {
      dispatch({ type: PURCHASE_LOADING, payload: true });
      const token = await AsyncStorage.getItem("token");
      const res = await axios.post(
        `http://192.168.1.12:8080/purchases/confirmation`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: PURCHASE_LOADING, payload: false });
      toastSucc();
    } catch (err) {
      dispatch({ type: PURCHASE_ERROR, payload: err });
      toastError();
    }
  };
};

export const deletePurchase = (purchaseId, navigation) => {
  return async function (dispatch) {
    try {
      const token = await AsyncStorage.getItem("token");
      const res = await axios.delete(
        `http://192.168.1.12:8080/purchases/${purchaseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: DELETE_PURCHASE });
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
        purchases: action.payload,
      };
    case DELETE_PURCHASE:
      return {
        ...state,
        purchases: {},
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
