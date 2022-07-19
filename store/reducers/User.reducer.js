import axios from "axios";
import { Alert } from "react-native";
const USERS_SUCCESS = "USERS_SUCCESS";
const USERS_ERROR = "USERS_ERROR";
const USERS_LOADING = "USERS_LOADING";

export const registerUser = (name, email, password, navigation) => {
  return async function (dispatch) {
    try {
      dispatch({ type: USERS_LOADING, payload: true });
      const res = await axios.post(`http://localhost:8080/users/register`, {
        name: name,
        email: email,
        password: password,
      });
      console.log(res.data.data);

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
      console.log(res.data.data);

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

const initialState = {
  users: [],
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
    case USERS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
