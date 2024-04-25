import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseStyles, storedValues, syncStoredData } from "./App";

const ExtraContentScreen = ({ navigation }) => {
  const [showResultsModal, setShowBoughtPopUp] = useState(false);

  function buyContent(color) {
    AsyncStorage.setItem("boughtDesigns", storedValues.boughtDesigns + color + ",");
    syncStoredData();
    setShowBoughtPopUp(true);
  }

  const clearPurchases = () => {
    AsyncStorage.removeItem("boughtDesigns");
    AsyncStorage.setItem("bgColor", "black");
    syncStoredData();
    navigation.navigate("MainMenu")
  }

  return (
    <LinearGradient
      colors={["#4facfe", "#00f2fe"]}
      style={styles.gradientContainer}
    >
      <View style={styles.container}>
        <Text style={baseStyles.modalTitle}>Extra Content</Text>
        <View style={styles.designContainer}>
          {!storedValues.boughtDesigns.split(",").includes("black") ? (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD0]}
              onPress={() => buyContent("black")}
            >
              <Text style={styles.buttonTextW}>Buy design 0</Text>
              <Text style={styles.buttonTextW}>(1€)</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD0]}
              disabled={true}
            >
              <Text style={styles.buttonTextW}>Bought</Text>
            </TouchableOpacity>
          )}
          {!storedValues.boughtDesigns.split(",").includes("green") ? (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD1]}
              onPress={() => buyContent("green")}
            >
              <Text style={styles.buttonTextW}>Buy design 1</Text>
              <Text style={styles.buttonTextW}>(2€)</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD1]}
              disabled={true}
            >
              <Text style={styles.buttonTextW}>Bought</Text>
            </TouchableOpacity>
          )}
          {!storedValues.boughtDesigns.split(",").includes("blue") ? (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD2]}
              onPress={() => buyContent("blue")}
            >
              <Text style={styles.buttonTextW}>Buy design 2</Text>
              <Text style={styles.buttonTextW}>(1€)</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD2]}
              disabled={true}
            >
              <Text style={styles.buttonTextW}>Bought</Text>
            </TouchableOpacity>
          )}
          {!storedValues.boughtDesigns.split(",").includes("red") ? (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD3]}
              onPress={() => buyContent("red")}
            >
              <Text style={styles.buttonTextW}>Buy design 3</Text>
              <Text style={styles.buttonTextW}>(3€)</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD3]}
              disabled={true}
            >
              <Text style={styles.buttonTextW}>Bought</Text>
            </TouchableOpacity>
          )}
          {!storedValues.boughtDesigns.split(",").includes("pink") ? (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD4]}
              onPress={() => buyContent("pink")}
            >
              <Text style={styles.buttonTextW}>Buy design 4</Text>
              <Text style={styles.buttonTextW}>(5€)</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD4]}
              disabled={true}
            >
              <Text style={styles.buttonTextW}>Bought</Text>
            </TouchableOpacity>
          )}
          {!storedValues.boughtDesigns.split(",").includes("purple") ? (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD5]}
              onPress={() => buyContent("purple")}
            >
              <Text style={styles.buttonTextW}>Buy design 5</Text>
              <Text style={styles.buttonTextW}>(4€)</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.buttonD, baseStyles.buttonD5]}
              disabled={true}
            >
              <Text style={styles.buttonTextW}>Bought</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.buttonWide]}
            onPress={clearPurchases}
          >
            <Text style={styles.buttonTextB}>Clear purchases</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={[baseStyles.buttonBase, baseStyles.buttonMid]}
        onPress={() => navigation.navigate("MainMenu")}
      >
        <Text style={styles.buttonTextB}>Go back to menu</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showResultsModal}
        onRequestClose={() => setShowBoughtPopUp(false)}
      >
        <View style={baseStyles.modalContainer}>
          <View style={baseStyles.modalContent}>
            <Text style={baseStyles.modalTitle}>Design bought!</Text>
            <Text>You can see it in your profile page.</Text>
            <Button
              title="Close"
              style={[baseStyles.buttonBase, styles.buttonWide]}
              onPress={() => setShowBoughtPopUp(false)}
            />
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
  },
  buttonD: {
    borderWidth: 5,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "42%",
    height: "30%",
    marginHorizontal: 10
  },
  buttonTextW: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  buttonTextB: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  buttonWide: {
    backgroundColor: "transparent",
    borderWidth: 5,
    borderColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});

export default ExtraContentScreen;
