import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "../styles/styles";


const Card = ({ card, isFlipped, onPress }) => {
  return (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    <Image
      source={
      isFlipped ? card.image : require("../assets/cards/back.jpg")
      }
      style={styles.image}
    />
  </TouchableOpacity>
  );
};
export default Card;
