import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { baseStyles, storedValues } from "./App";


const MainMenuScreen = ({ navigation }) => {

  
  return (
    <LinearGradient
      colors={storedValues.bgColor.split("I")}
      style={styles.gradientContainer}
    >
      <View style={baseStyles.container}>
        <Text style={[baseStyles.titleText, baseStyles.titleTextBig]}>Speed Typing Prototype</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[baseStyles.buttonSemiMid, baseStyles.buttonTransparent]}
            onPress={() => { navigation.navigate("SpeedTypingTest") }}>
            <Text style={[baseStyles.textB, styles.textBig]}>TEST</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyles.buttonSemiMid, baseStyles.buttonTransparent]}
            onPress={() => { navigation.navigate("NewsArticles") }}>
            <Text style={[baseStyles.textB, styles.textBig]}>📰</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyles.buttonSemiMid, baseStyles.buttonTransparent]}
            onPress={() => { navigation.navigate("ExtraContent") }}>
            <Text style={[baseStyles.textB, styles.textBig]}>🛒</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyles.buttonSemiMid, baseStyles.buttonTransparent]}
            onPress={() => { navigation.navigate("Settings") }}>
            <Text style={[baseStyles.textB, styles.textBig]}>⚙</Text>
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
  textBig: {
    fontSize: 48
  }
});

export default MainMenuScreen;
