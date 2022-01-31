import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "native-base";

import Home from "../screens/Home";
import Edit from "../screens/Edit";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.orange[300],
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Upcoming Bank Holidays" }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={({ route }) => ({
            title: route.params.bankHoliday.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
