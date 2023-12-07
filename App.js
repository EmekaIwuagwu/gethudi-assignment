import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./src/Welcome";
import FirstStep from "./src/FirstStep";
import Habits from "./src/Habits";
import { Text, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';


const Stack = createStackNavigator();

const App = () => {

  const [fontsLoaded] = useFonts({
    CircularBold: require('./assets/fonts/Circular-Std-Bold.otf'),
    CircularMedium: require('./assets/fonts/CircularStd-Medium.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FirstStep"
          component={FirstStep}
          options={({ navigation }) => ({
            title: "",
            headerStyle: { backgroundColor: "#E0F4FB" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: "black", fontSize: 20, marginLeft: 10 }}>
                  {"< Back"}
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Habits" component={Habits} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
