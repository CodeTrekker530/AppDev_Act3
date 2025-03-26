import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/card";
import GameOverModal from "../components/GameOverModal";
import styles from "../styles/styles";

const cardImages = [
  { id: 1, image: require("../assets/cards/spades/ace.png") },
  { id: 2, image: require("../assets/cards/spades/sp2.png") },
  { id: 3, image: require("../assets/cards/spades/sp3.png") },
  { id: 4, image: require("../assets/cards/spades/sp4.png") },
  { id: 6, image: require("../assets/cards/spades/sp6.png") },
  { id: 8, image: require("../assets/cards/spades/sp8.png") },
  { id: 10, image: require("../assets/cards/spades/sp10.png") },
  { id: 11, image: require("../assets/cards/spades/spjack.png") },
  { id: 12, image: require("../assets/cards/spades/spqueen.png") },
  { id: 13, image: require("../assets/cards/spades/spking.png") },
];

const initializeDeck = () => {
  let deck = [...cardImages, ...cardImages];
  return deck.sort(() => Math.random() - 0.5);
};

const MultiGame = () => {
  const navigation = useNavigation();
  const [deck, setDeck] = useState(initializeDeck());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [playerScores, setPlayerScores] = useState({ 1: 0, 2: 0 });
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const handleCardPress = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(deck[index].id)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      checkForMatch(newFlippedCards);
    }
  };

  const checkForMatch = ([firstIndex, secondIndex]) => {
    if (deck[firstIndex].id === deck[secondIndex].id) {
      setMatchedCards((prev) => [...prev, deck[firstIndex].id]);

      setPlayerScores((prevScores) => ({
        ...prevScores,
        [currentPlayer]: prevScores[currentPlayer] + 1,
      }));
    } else {
      setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
    }

    setTimeout(() => setFlippedCards([]), 1200);
  };

  useEffect(() => {
    if (matchedCards.length === cardImages.length) {
      setGameOver(true);
    }
  }, [matchedCards]);

  const restartGame = () => {
    setDeck(initializeDeck());
    setFlippedCards([]);
    setMatchedCards([]);
    setPlayerScores({ 1: 0, 2: 0 });
    setCurrentPlayer(1);
    setGameOver(false);
  };

  return (
    <ImageBackground source={require("../assets/images/gamebg.png")} style={styles.background} resizeMode="cover">
      <View style={[styles.turnIndicator, { backgroundColor: currentPlayer === 1 ? "red" : "transparent", left: 0 }]} />

      <View style={styles.gcontainer}>
        <Text style={styles.scoreText}>Player 1: {playerScores[1]} | Player 2: {playerScores[2]}</Text>

        <FlatList
          data={deck}
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Card
              card={item}
              isFlipped={flippedCards.includes(index) || matchedCards.includes(item.id)}
              onPress={() => handleCardPress(index)}
            />
          )}
        />

        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.homeButtonText}>Main Menu</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.turnIndicator, { backgroundColor: currentPlayer === 2 ? "green" : "transparent", right: 0 }]} />

      <GameOverModal
        visible={gameOver}
        winner={playerScores[1] > playerScores[2] ? "Player 1 Wins!" : playerScores[2] > playerScores[1] ? "Player 2 Wins!" : "It's a Tie!"}
        onRestart={restartGame}
        onHome={() => navigation.navigate("Home")}
        gameMode="multi"
      />
    </ImageBackground>
  );
};

export default MultiGame;
