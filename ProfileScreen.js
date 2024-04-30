import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseStyles, storedValues, syncStoredData } from "./App";
import { LinearGradient } from "expo-linear-gradient";

const ProfileScreen = ({ navigation }) => {
  async function selectDesign(color) {
    AsyncStorage.setItem("bgColor", color)
    .then(storedValues.bgColor = color)
    .then(navigation.navigate("StartScreen"));
  }

  return (
    <LinearGradient
      colors={storedValues.bgColor.split("I")}
      style={styles.gradientContainer}
    >
      <View style={baseStyles.container}>
        {storedValues.showAdds && <Text style={baseStyles.addBanner}>ADVERTISEMENT</Text>}
        <Text style={baseStyles.titleText}>Profile Settings</Text>
        <View style={styles.designContainer}>
          {storedValues.boughtDesigns.split(",").includes("blackIlightgray") ? (
            storedValues.bgColor === "blackIlightgray" ? (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD0]}
                disabled={true}
              >
                <Text style={styles.buttonTextW}>Selected</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD0]}
                onPress={() => selectDesign("blackIlightgray")}
              >
                <Text style={styles.buttonTextW}>Select design 0</Text>
              </TouchableOpacity>
            )
          ) : null}
          {storedValues.boughtDesigns.split(",").includes("greenI#b3ff87") ? (
            storedValues.bgColor === "greenI#b3ff87" ? (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD1]}
                disabled={true}
              >
                <Text style={styles.buttonTextW}>Selected</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD1]}
                onPress={() => selectDesign("greenI#b3ff87")}
              >
                <Text style={styles.buttonTextW}>Select design 1</Text>
              </TouchableOpacity>
            )
          ) : null}
          {storedValues.boughtDesigns.split(",").includes("#025dbfI#00f2fe") ? (
            storedValues.bgColor === "#025dbfI#00f2fe" ? (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD2]}
                disabled={true}
              >
                <Text style={styles.buttonTextW}>Selected</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD2]}
                onPress={() => selectDesign("#025dbfI#00f2fe")}
              >
                <Text style={styles.buttonTextW}>Select design 2</Text>
              </TouchableOpacity>
            )
          ) : null}
          {storedValues.boughtDesigns.split(",").includes("redI#f5898d") ? (
            storedValues.bgColor === "redI#f5898d" ? (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD3]}
                disabled={true}
              >
                <Text style={styles.buttonTextW}>Selected</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD3]}
                onPress={() => selectDesign("redI#f5898d")}
              >
                <Text style={styles.buttonTextW}>Select design 3</Text>
              </TouchableOpacity>
            )
          ) : null}
          {storedValues.boughtDesigns.split(",").includes("pinkI#ffe6e6") ? (
            storedValues.bgColor === "pinkI#ffe6e6" ? (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD4]}
                disabled={true}
              >
                <Text style={styles.buttonTextW}>Selected</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD4]}
                onPress={() => selectDesign("pinkI#ffe6e6")}
              >
                <Text style={styles.buttonTextW}>Select design 4</Text>
              </TouchableOpacity>
            )
          ) : null}
          {storedValues.boughtDesigns.split(",").includes("purpleI#e6aded") ? (
            storedValues.bgColor === "purpleI#e6aded" ? (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD5]}
                disabled={true}
              >
                <Text style={styles.buttonTextW}>Selected</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.buttonD, baseStyles.buttonD5]}
                onPress={() => selectDesign("purpleI#e6aded")}
              >
                <Text style={styles.buttonTextW}>Select design 5</Text>
              </TouchableOpacity>
            )
          ) : null}
        </View>
        <TouchableOpacity
          style={[[baseStyles.buttonTransparent]]}
          onPress={() => navigation.navigate("MainMenu")}
        >
          <Text style={styles.buttonTextB}>Go back to menu</Text>
        </TouchableOpacity>
        {storedValues.showAdds && <Text style={baseStyles.addBanner}>ADVERTISEMENT</Text>}
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
