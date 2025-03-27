import React, { useContext, useState, useEffect } from "react";
import { View, Text, FlatList, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScoreContext } from "../components/ScoreContext";
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

const GameScreen = () => {
  const navigation = useNavigation();
  const { bestScore, updateBestScore } = useContext(ScoreContext);
  const [deck, setDeck] = useState(initializeDeck());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleCardPress = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(deck[index].id)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setTurns((prevTurns) => prevTurns + 1);
      checkForMatch(newFlippedCards);
    }
  };

  const checkForMatch = ([firstIndex, secondIndex]) => {
    if (deck[firstIndex].id === deck[secondIndex].id) {
      setMatchedCards((prev) => [...prev, deck[firstIndex].id]);
    }
    setTimeout(() => setFlippedCards([]), 1200);
  };

  useEffect(() => {
    if (matchedCards.length === cardImages.length) {
      setGameOver(true);
      if (bestScore === null || turns < bestScore) {
        updateBestScore(turns);
      }
    }
  }, [matchedCards]);

  const restartGame = () => {
    setDeck(initializeDeck());
    setFlippedCards([]);
    setMatchedCards([]);
    setTurns(0);
    setGameOver(false);
  };

  return (
    <ImageBackground source={require("../assets/images/gamebg.png")} style={styles.background} resizeMode="cover">
      <View style={styles.gcontainer}>
        <Text style={styles.turnsText}>Turns: {turns}</Text>

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

        <GameOverModal
          visible={gameOver}
          turns={turns}
          onRestart={restartGame}
          onHome={() => navigation.navigate("Home")}
          gameMode="single"
        />
      </View>
    </ImageBackground>
  );
};

export default GameScreen;


