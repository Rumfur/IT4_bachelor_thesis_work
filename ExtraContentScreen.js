import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseStyles, storedValues, syncStoredData } from "./App";

const ExtraContentScreen = ({ navigation }) => {
  console.log(storedValues)
  const [showResultsModal, setShowBoughtPopUp] = useState(false);

  function buyContent(color) {
    console.log(color)
    AsyncStorage.setItem("boughtDesigns", storedValues.boughtDesigns + color + ",");
    storedValues.bgColor = color
    setShowBoughtPopUp(true);
  }

  const clearPurchases = () => {
    AsyncStorage.removeItem("boughtDesigns");
    AsyncStorage.setItem("bgColor", "blackIlightgray");
    AsyncStorage.setItem("boughtDesigns", "blackIlightgray,")
    syncStoredData();
    navigation.navigate("StartScreen")
  }

  return (
    <LinearGradient
      colors={storedValues.bgColor.split("I")}
      style={styles.gradientContainer}
    >
      <View style={styles.container}>
        <Text style={baseStyles.titleText}>Extra Content</Text>
        <View style={styles.designContainer}>
          {!storedValues.boughtDesigns.split(",").includes("blackIlightgray") ? ( // black
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD0]}
              onPress={() => buyContent("blackIlightgray")}
            >
              <Text style={styles.buttonTextW}>Buy design 0</Text>
              <Text style={styles.buttonTextW}>(1€)</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD0]}
              disabled={true}
            >
              <Text style={styles.buttonTextW}>Owned</Text>
            </TouchableOpacity>
          )}
          {!storedValues.boughtDesigns.split(",").includes("greenI#b3ff87") ? ( // green
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD1]}
              onPress={() => buyContent("greenI#b3ff87")}
            >
              <Text style={styles.buttonTextW}>Buy design 1</Text>
              <Text style={styles.buttonTextW}>(2€)</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD1]}
              disabled={true}
            >
              <Text style={styles.buttonTextW}>Owned</Text>
            </TouchableOpacity>
          )}
          {!storedValues.boughtDesigns.split(",").includes("#025dbfI#00f2fe") ? ( // blue
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD2]}
              onPress={() => buyContent("#025dbfI#00f2fe")}
            >
              <Text style={styles.buttonTextW}>Buy design 2</Text>
              <Text style={styles.buttonTextW}>(1€)</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD2]}
              disabled={true}
            >
              <Text style={styles.buttonTextW}>Owned</Text>
            </TouchableOpacity>
          )}
          {!storedValues.boughtDesigns.split(",").includes("redI#f5898d") ? ( // red
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD3]}
              onPress={() => buyContent("redI#f5898d")}
            >
              <Text style={styles.buttonTextW}>Buy design 3</Text>
              <Text style={styles.buttonTextW}>(3€)</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD3]}
              disabled={true}
            >
              <Text style={styles.buttonTextW}>Owned</Text>
            </TouchableOpacity>
          )}
          {!storedValues.boughtDesigns.split(",").includes("pinkI#ffe6e6") ? ( // pink
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD4]}
              onPress={() => buyContent("pinkI#ffe6e6")}
            >
              <Text style={styles.buttonTextW}>Buy design 4</Text>
              <Text style={styles.buttonTextW}>(5€)</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD4]}
              disabled={true}
            >
              <Text style={styles.buttonTextW}>Owned</Text>
            </TouchableOpacity>
          )}
          {!storedValues.boughtDesigns.split(",").includes("purpleI#e6aded") ? ( // purple
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD5]}
              onPress={() => buyContent("purpleI#e6aded")}
            >
              <Text style={styles.buttonTextW}>Buy design 5</Text>
              <Text style={styles.buttonTextW}>(4€)</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD5]}
              disabled={true}
            >
              <Text style={styles.buttonTextW}>Owned</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={[baseStyles.buttonBase, baseStyles.buttonWide, styles.clearPurchases]}
            onPress={clearPurchases}
          >
            <Text style={baseStyles.textB}>Clear purchases</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={[baseStyles.buttonTransparent]}
        onPress={() => navigation.navigate("MainMenu")}
      >
        <Text style={baseStyles.textB}>Go back to menu</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showResultsModal}
        onRequestClose={() => setShowBoughtPopUp(false)}
      >
        <View style={baseStyles.modalContainer}>
          <View style={baseStyles.modalContent}>
            <Text style={baseStyles.modalTitle}>DESIGN BOUGHT!</Text>
            <Text>You can see it in your profile page.</Text>
            <TouchableOpacity
              style={[baseStyles.buttonPopUpClose]}
              onPress={() => setShowBoughtPopUp(false)}
            >
              <Text style={baseStyles.textB}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
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
    marginBottom: 50
  },
  buttonD: {
    borderWidth: 5,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "42%",
    height: "40%",
    margin: 10
  },
  clearPurchases: {
    marginTop: 100,
    width: "100%"
  },
  buttonTextW: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default ExtraContentScreen;
