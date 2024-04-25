import React from "react";
import { View, StyleSheet, Button, TouchableOpacity, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseStyles, storedValues, syncStoredData } from "./App";
import { LinearGradient } from "expo-linear-gradient";

const ProfileScreen = ({ navigation }) => {
  function selectDesign(color) {
    AsyncStorage.setItem("bgColor", color);
    navigation.navigate("MainMenu")
  }

  return (
    <LinearGradient
      colors={["#4facfe", "#00f2fe"]} // Set gradient colors
      style={styles.gradientContainer} // Apply gradient to the container
    >
      <View id="profileBG" style={baseStyles.container}>
        <View style={styles.designContainer}>
          {storedValues.boughtDesigns.split(",").includes("black") ? (
            storedValues.bgColor === "black" ? (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD0]}
                disabled={true}
              >
                <Text style={styles.buttonTextW}>Selected</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD0]}
                onPress={() => selectDesign("black")}
              >
                <Text style={styles.buttonTextW}>Select design 0</Text>
              </TouchableOpacity>
            )
          ) : null}
          {storedValues.boughtDesigns.split(",").includes("green") ? (
            storedValues.bgColor === "green" ? (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD1]}
                disabled={true}
              >
                <Text style={styles.buttonTextW}>Selected</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD1]}
                onPress={() => selectDesign("green")}
              >
                <Text style={styles.buttonTextW}>Select design 1</Text>
              </TouchableOpacity>
            )
          ) : null}
          {storedValues.boughtDesigns.split(",").includes("blue") ? (
            storedValues.bgColor === "blue" ? (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD2]}
                disabled={true}
              >
                <Text style={styles.buttonTextW}>Selected</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD2]}
                onPress={() => selectDesign("blue")}
              >
                <Text style={styles.buttonTextW}>Select design 2</Text>
              </TouchableOpacity>
            )
          ) : null}
          {storedValues.boughtDesigns.split(",").includes("red") ? (
            storedValues.bgColor === "red" ? (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD3]}
                disabled={true}
              >
                <Text style={styles.buttonTextW}>Selected</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD3]}
                onPress={() => selectDesign("red")}
              >
                <Text style={styles.buttonTextW}>Select design 3</Text>
              </TouchableOpacity>
            )
          ) : null}
          {storedValues.boughtDesigns.split(",").includes("pink") ? (
            storedValues.bgColor === "pink" ? (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD4]}
                disabled={true}
              >
                <Text style={styles.buttonTextW}>Selected</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD4]}
                onPress={() => selectDesign("pink")}
              >
                <Text style={styles.buttonTextW}>Select design 4</Text>
              </TouchableOpacity>
            )
          ) : null}
          {storedValues.boughtDesigns.split(",").includes("purple") ? (
            storedValues.bgColor === "purple" ? (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD5]}
                disabled={true}
              >
                <Text style={styles.buttonTextW}>Selected</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD5]}
                onPress={() => selectDesign("purple")}
              >
                <Text style={styles.buttonTextW}>Select design 5</Text>
              </TouchableOpacity>
            )
          ) : null}
        </View>
        <TouchableOpacity
          style={[baseStyles.buttonBase, baseStyles.buttonMid]}
          onPress={() => navigation.navigate("MainMenu")}
        >
          <Text style={styles.buttonTextB}>Go back to menu</Text>
        </TouchableOpacity>
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
  designContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "top",
    flex: 2,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  buttonD: {
    borderWidth: 5,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "42%",
    height: "30%",
    marginHorizontal: 10,
  },
  buttonTextW: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },
  buttonTextB: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default ProfileScreen;
