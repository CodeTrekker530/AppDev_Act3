import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GameProvider } from "./components/ScoreContext";
import HomeScreen from "./components/HomeScreen";
import GameScreen from "./components/GameScreen";
import MultiGame from "./components/MultiGame";

const Stack = createStackNavigator();

export default function App() {
  return (
  <GameProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="MGame" component={MultiGame} />
      </Stack.Navigator>
    </NavigationContainer>
  </GameProvider>
  );
}
