import React, { useContext } from "react";
import { ScoreContext } from "../components/ScoreContext";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/styles";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { bestScore } = useContext(ScoreContext);

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <Text style={styles.bestScoreText}>Best Score: {bestScore ?? "N/A"}</Text>

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Game")}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MGame")}>
          <Text style={styles.buttonText}>Multiplayer</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
