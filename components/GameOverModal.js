import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const GameOverModal = ({ visible, winner, turns, onRestart, onHome, gameMode }) => {
  return (
  <Modal transparent={true} visible={visible} animationType="slide">
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>

        <Text style={styles.modalText}>
        {gameMode === "single" ? `Game Over!\nYou completed it in ${turns} turns.` : winner}
        </Text>

        <TouchableOpacity style={styles.modalButton} onPress={onRestart}>
        <Text style={styles.modalButtonText}>Restart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.modalButton} onPress={onHome}>
        <Text style={styles.modalButtonText}>Main Menu</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  </Modal>
  );
};

export default GameOverModal;
