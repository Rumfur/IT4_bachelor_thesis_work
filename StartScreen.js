import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { baseStyles, storedValues } from "./App";

import AsyncStorage from "@react-native-async-storage/async-storage";

async function getMainBGColor(){
  let val = await AsyncStorage.getItem("bgColor")
}

const StartScreen = ({ navigation }) => {
  function goToMenu(){
    setTimeout(navigation.navigate("MainMenu"), 1000)
  }
  const [mainBG, setMainBG] = useState(storedValues.bgColor);
  getMainBGColor().
  then(
    () => setMainBG(storedValues.bgColor)
  )
  goToMenu()
  return (
    <LinearGradient
      colors={["black", "lightgray"]}
      style={styles.gradientContainer}
    >
      <View style={baseStyles.container}>
        <Text style={[baseStyles.titleText, styles.textStyle]}
          onPress={() => goToMenu()}>
          PRESS TO CONTINUE
        </Text>
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
  textStyle: {
    borderWidth: 5,
    borderColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
  }
});

export default StartScreen;
