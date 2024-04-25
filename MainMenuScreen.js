import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { baseStyles, getBGColor } from "./App";

const MainMenuScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#4facfe", "#00f2fe"]} // Set gradient colors
      style={styles.gradientContainer} // Apply gradient to the container
    >
      <View id="mainMenuBG" style={baseStyles.container}>
        <Text style={styles.titleText}>Speed Typing Prototype</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[baseStyles.buttonBase, styles.buttonMenu]}
            onPress={() => { navigation.navigate("SpeedTypingTest") }}>
            <Text style={styles.buttonText}>TEST</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyles.buttonBase, styles.buttonMenu]}
            onPress={() => { navigation.navigate("NewsArticles") }}>
            <Text style={styles.buttonText}>📰</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyles.buttonBase, styles.buttonMenu]}
            onPress={() => { navigation.navigate("ExtraContent") }}>
            <Text style={styles.buttonText}>🛒</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyles.buttonBase, styles.buttonMenu]}
            onPress={() => { navigation.navigate("Settings") }}>
            <Text style={styles.buttonText}>⚙</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  buttonMenu: {
    backgroundColor: "transparent",
    borderWidth: 5,
    borderColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    width: "42%",
    height: "35%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 48,
    fontWeight: "bold",
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  titleText: {
    fontSize: 56,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

export default MainMenuScreen;
