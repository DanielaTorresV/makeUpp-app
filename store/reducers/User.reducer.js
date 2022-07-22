import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
const USERS_SUCCESS = "USERS_SUCCESS";
const USER_SUCCESS = "USER_SUCCESS";
const USERS_ERROR = "USERS_ERROR";
const USERS_LOADING = "USERS_LOADING";
import Toast from "react-native-toast-message";

export const registerUser = (name, email, password, navigation) => {
  const toastError = () => {
    Toast.show({
      type: "error",
      text1: "Something was wrong, verify the information!",
    });
  };
  return async function (dispatch) {
    try {
      dispatch({ type: USERS_LOADING, payload: true });
      const res = await axios.post(
        `https://makeupp-app.herokuapp.com/users/register`,
        {
          name: name,
          email: email,
          password: password,
        }
      );
      await AsyncStorage.setItem("token", res.data.data.token);
      dispatch({ type: USERS_SUCCESS, payload: res.data.data });
      dispatch({ type: USERS_LOADING, payload: false });

      if (res.status === 200) {
        navigation.navigate("Products");
      }
    } catch (err) {
      dispatch({ type: USERS_ERROR, payload: err });
      toastError();
      Alert.alert("Something was wrong!");
    }
  };
};

export const loginUser = (email, password, navigation) => {
  const toastError = () => {
    Toast.show({
      type: "error",
      text1: "Something was wrong, verify the information!",
    });
  };
  return async function (dispatch) {
    try {
      dispatch({ type: USERS_LOADING, payload: true });
      const res = await axios.post(
        `https://makeupp-app.herokuapp.com/users/login`,
        {
          email: email,
          password: password,
        }
      );
      await AsyncStorage.setItem("token", res.data.data.token);
      dispatch({ type: USERS_SUCCESS, payload: res.data.data });
      dispatch({ type: USERS_LOADING, payload: false });

      if (res.status === 200) {
        navigation.navigate("Products");
      }
    } catch (err) {
      dispatch({ type: USERS_ERROR, payload: err });
      toastError();
      Alert.alert("Something was wrong!");
    }
  };
};

export const getUser = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: USERS_LOADING, payload: true });
      const token = await AsyncStorage.getItem("token");
      const res = await axios.get(
        `https://makeupp-app.herokuapp.com/users/myuser`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch({ type: USER_SUCCESS, payload: res.data.data });
      dispatch({ type: USERS_LOADING, payload: false });
    } catch (err) {
      dispatch({ type: USERS_ERROR, payload: err });
    }
  };
};

export const updateUser = (data) => {
  const toastSucc = () => {
    Toast.show({
      type: "success",
      text1: "Your profile was updated!",
    });
  };
  const toastError = () => {
    Toast.show({
      type: "error",
      text1: "User could not be updated!",
    });
  };
  return async function (dispatch) {
    try {
      dispatch({ type: USERS_LOADING, payload: true });
      const token = await AsyncStorage.getItem("token");
      const res = await axios.put(
        `https://makeupp-app.herokuapp.com/users`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: USER_SUCCESS, payload: res.data.data });
      dispatch({ type: USERS_LOADING, payload: false });
      toastSucc();
      Alert.alert("Your Profile was updated!");
    } catch (err) {
      dispatch({ type: USERS_ERROR, payload: err });
      toastError;
      Alert.alert("User could not be updated!");
    }
  };
};

export const recoverPassUser = (email) => {
  const toastSucc = () => {
    Toast.show({
      type: "success",
      text1: "Email sent with the link to recover your password!",
    });
  };
  const toastError = () => {
    Toast.show({
      type: "error",
      text1: "Something was wrong, verify the information!",
    });
  };
  return async function (dispatch) {
    try {
      dispatch({ type: USERS_LOADING, payload: true });
      const res = await axios.post(
        `https://makeupp-app.herokuapp.com/users/getemail`,
        {
          email: email,
        }
      );
      dispatch({ type: USERS_LOADING, payload: false });
      if (res.status === 200) {
        Alert.alert(
          "An email was sent with the link to recover your password!"
        );
        toastSucc();
      }
    } catch (err) {
      dispatch({ type: USERS_ERROR, payload: err });
      toastError();
      Alert.alert("Something was wrong!");
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
      dispatch({ type: USERS_LOADING, payload: true });
      const token = await AsyncStorage.getItem("token");
      const res = await axios.post(
        `https://makeupp-app.herokuapp.com/users/confirmation`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: USERS_LOADING, payload: false });
      toastSucc();
    } catch (err) {
      dispatch({ type: USERS_ERROR, payload: err });
      toastError();
    }
  };
};

const initialState = {
  users: [],
  user: {},
  loadingUsers: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LOADING:
      return {
        ...state,
        loadingUsers: action.payload,
      };
    case USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case USERS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
