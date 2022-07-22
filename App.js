import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Products from "./screens/Products";
import Box from "./screens/Box";
import Purchase from "./screens/Purchase";
import { Provider } from "react-redux";
import { store } from "./store";
import Toast from "react-native-toast-message";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="Box" component={Box} />
          <Stack.Screen name="Purchase" component={Purchase} />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </Provider>
  );
}
