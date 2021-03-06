import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
const BOX_SUCCESS = "BOX_SUCCESS";
const BOX_ERROR = "BOX_ERROR";
const BOX_LOADING = "BOX_LOADING";
const UPDATE_BOX = "UPDATE_BOX";
const DELETE_BOX = "DELETE_BOX";
import Toast from "react-native-toast-message";

export const getBox = (boxId) => {
  return async function (dispatch) {
    try {
      dispatch({ type: BOX_LOADING, payload: true });
      const res = await axios.get(
        `https://makeupp-app.herokuapp.com/boxes/${boxId}`
      );
      console.log(res);
      dispatch({ type: BOX_SUCCESS, payload: res.data.data });
      dispatch({ type: BOX_LOADING, payload: false });
    } catch (err) {
      dispatch({ type: BOX_ERROR, payload: err });
    }
  };
};

export const createBox = (productId, data) => {
  const toastSucc = () => {
    Toast.show({
      type: "success",
      text1: "Box created successfully!",
    });
  };
  const toastError = () => {
    Toast.show({
      type: "error",
      text1: "Box could not be created!",
    });
  };
  return async function (dispatch) {
    try {
      dispatch({ type: BOX_LOADING, payload: true });
      const token = await AsyncStorage.getItem("token");
      const res = await axios.post(
        `https://makeupp-app.herokuapp.com/boxes/${productId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: BOX_SUCCESS, payload: res.data.data });
      dispatch({ type: BOX_LOADING, payload: false });
      toastSucc();
    } catch (err) {
      dispatch({ type: BOX_ERROR, payload: err });
      toastError();
    }
  };
};

export const updateBox = (boxId, data) => {
  const toastSucc = () => {
    Toast.show({
      type: "success",
      text1: "Product added!",
    });
  };
  return async function (dispatch) {
    try {
      const token = await AsyncStorage.getItem("token");
      const res = await axios.put(
        `https://makeupp-app.herokuapp.com/boxes/${boxId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: UPDATE_BOX, payload: res.data.data });
      Alert.alert("Product added!");
      toastSucc();
    } catch (err) {
      dispatch({ type: BOX_ERROR, payload: err });
    }
  };
};

export const deleteBox = (boxId) => {
  const toastSucc = () => {
    Toast.show({
      type: "success",
      text1: "Box deleted!",
    });
  };
  return async function (dispatch) {
    try {
      const token = await AsyncStorage.getItem("token");
      const res = await axios.delete(
        `https://makeupp-app.herokuapp.com/boxes/${boxId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: DELETE_BOX });
      toastSucc();
    } catch (err) {
      dispatch({ type: BOX_ERROR, payload: err });
    }
  };
};

const initialState = {
  box: [],
  loading: false,
  error: null,
};

export const boxReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOX_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case BOX_SUCCESS:
      return {
        ...state,
        box: action.payload,
      };
    case UPDATE_BOX:
      return {
        ...state,
        box: action.payload,
      };
    case DELETE_BOX:
      return {
        ...state,
        box: {},
      };
    case BOX_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
