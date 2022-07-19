import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const USERS_SUCCESS = "USERS_SUCCESS";
const USER_SUCCESS = "USER_SUCCESS";
const USERS_ERROR = "USERS_ERROR";
const USERS_LOADING = "USERS_LOADING";
const UPDATE_USER = "UPDATE_USER";

export const registerUser = (name, email, password, navigation) => {
  return async function (dispatch) {
    try {
      dispatch({ type: USERS_LOADING, payload: true });
      const res = await axios.post(`http://localhost:8080/users/register`, {
        name: name,
        email: email,
        password: password,
      });
      await AsyncStorage.setItem("token", res.data.data.token);
      dispatch({ type: USERS_SUCCESS, payload: res.data.data });
      dispatch({ type: USERS_LOADING, payload: false });

      if (res.status === 200) {
        navigation.navigate("Products");
      }
    } catch (err) {
      dispatch({ type: USERS_ERROR, payload: err });
    }
  };
};

export const loginUser = (email, password, navigation) => {
  return async function (dispatch) {
    try {
      dispatch({ type: USERS_LOADING, payload: true });
      const res = await axios.post(`http://localhost:8080/users/login`, {
        email: email,
        password: password,
      });
      await AsyncStorage.setItem("token", res.data.data.token);
      dispatch({ type: USERS_SUCCESS, payload: res.data.data });
      dispatch({ type: USERS_LOADING, payload: false });

      if (res.status === 200) {
        navigation.navigate("Products");
      }
    } catch (err) {
      dispatch({ type: USERS_ERROR, payload: err });
    }
  };
};

export const getUser = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: USERS_LOADING, payload: true });
      const token = await AsyncStorage.getItem("token");
      const res = await axios.get(`http://localhost:8080/users/myuser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({ type: USER_SUCCESS, payload: res.data.data });
      dispatch({ type: USERS_LOADING, payload: false });
    } catch (err) {
      dispatch({ type: USERS_ERROR, payload: err });
    }
  };
};

export const updateUser = (data) => {
  return async function (dispatch) {
    try {
      dispatch({ type: USERS_LOADING, payload: true });
      const token = await AsyncStorage.getItem("token");
      const res = await axios.put(`http://localhost:8080/users`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data.data);

      dispatch({ type: USER_SUCCESS, payload: res.data.data });
      dispatch({ type: USERS_LOADING, payload: false });
    } catch (err) {
      dispatch({ type: USERS_ERROR, payload: err });
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
        loading: action.payload,
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
    case UPDATE_USER:
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
