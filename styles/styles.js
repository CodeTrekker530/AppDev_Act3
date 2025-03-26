import { StyleSheet } from "react-native";

export default StyleSheet.create({
background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    marginTop:400,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#fff",
    marginTop:10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    width: 200,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  card: {
    width: 80,
    height: 120,
    margin: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  gcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  turnsText: {
    fontSize: 20,
    color: "white",
    marginTop: 55,
    marginBottom: 10,
  },
  homeButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "rgb(241, 241, 241)", 
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  
  homeButtonText: {
    color: "#",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  modalButton: {
    backgroundColor: "#0000BB",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  turnIndicator: {
    position: "absolute",
    width: 5,
    height: "100%",
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    marginTop: 60,
  },
  bestScoreText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 60,
  },
});