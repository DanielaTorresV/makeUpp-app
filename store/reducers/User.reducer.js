import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const USERS_SUCCESS = "USERS_SUCCESS";
const USERS_ERROR = "USERS_ERROR";
const USERS_LOADING = "USERS_LOADING";

export const registerUser = (name, email, password) => {
  return async function (dispatch) {
    try {
      dispatch({ type: USERS_LOADING, payload: true });
      const res = await axios.post(`http://localhost:8080/users/register`, {
        name: name,
        email: email,
        password: password,
      });
      console.log(res.data.data);
      await AsyncStorage.setItem("token", res.data.data.token);
      await AsyncStorage.setItem("name", res.data.data.name);
      await AsyncStorage.setItem("email", res.data.data.email);

      dispatch({ type: USERS_SUCCESS, payload: res.data.data });
      dispatch({ type: USERS_LOADING, payload: false });
      /*const token = await localStorage.getItem("token");
      if (token) {
        nav("/dashboard");
      }*/
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
