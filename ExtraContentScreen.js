import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import { baseStyles } from './App';

const ExtraContentScreen = () => {
  const [showResultsModal, setShowBoughtPopUp] = useState(false);

  function buyContent(color) {
    let boughtDesigns = AsyncStorage.getItem("boughtDesigns").split(",")
    console.log("Bought designs: '" + boughtDesigns + "'")
    console.log(typeof(boughtDesigns))
    AsyncStorage.setItem("boughtDesigns", (AsyncStorage.getItem("boughtDesigns") + color + ","))
    console.log(AsyncStorage.getItem("boughtDesigns"))
    setShowBoughtPopUp(true)
  }

  const clearPurchases = () => {
    AsyncStorage.removeItem("boughtDesigns")
    AsyncStorage.setItem("bgColor", "black")
    location.reload()
  }

  return (
    <View id="extraBG" style={baseStyles.container}>
      <div style={styles.designContainer}>
        {!AsyncStorage.getItem("boughtDesigns").split(",").includes("black") ? (
          <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD0, baseStyles.buttonDesign)}
            onClick={() => buyContent("black")}>
            <Text>Buy design 0 (1€)</Text>
          </button>
        ) : (
          <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD0, baseStyles.buttonDesign)} disabled={true}>
            <p>Bought</p>
            <br></br>
          </button>
        )}
        {!AsyncStorage.getItem("boughtDesigns").split(",").includes("white") ? (
          <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD1, baseStyles.buttonDesign)}
            onClick={() => buyContent("white")}>
            <Text>Buy design 1 (1€)</Text>
          </button>
        ) : (
          <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD1, baseStyles.buttonDesign)} disabled={true}>
            <p>Bought</p>
            <br></br>
          </button>
        )}
        {!AsyncStorage.getItem("boughtDesigns").split(",").includes("blue") ? (
          <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD2, baseStyles.buttonDesign)}
            onClick={() => buyContent("blue")}>
            <Text>Buy design 2 (2€)</Text>
          </button>
        ) : (
          <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD2, baseStyles.buttonDesign)} disabled={true}>
            <p>Bought</p>
            <br></br>
          </button>
        )}
        {!AsyncStorage.getItem("boughtDesigns").split(",").includes("red") ? (
          <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD3, baseStyles.buttonDesign)}
            onClick={() => buyContent("red")}>
            <Text>Buy design 3 (3€)</Text>
          </button>
        ) : (
          <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD3, baseStyles.buttonDesign)} disabled={true}>
            <p>Bought</p>
            <br></br>
          </button>
        )}
        {!AsyncStorage.getItem("boughtDesigns").split(",").includes("green") ? (
          <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD4, baseStyles.buttonDesign)}
            onClick={() => buyContent("green")}>
            <Text>Buy design 4 (3€)</Text>
          </button>
        ) : (
          <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD4, baseStyles.buttonDesign)} disabled={true}>
            <p>Bought</p>
            <br></br>
          </button>
        )}
        {!AsyncStorage.getItem("boughtDesigns").split(",").includes("pink") ? (
          <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD5, baseStyles.buttonDesign)}
            onClick={() => buyContent("pink")}>
            <Text>Buy design 5 (5€)</Text>
          </button>
        ) : (
          <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD5, baseStyles.buttonDesign)} disabled={true}>
            <p>Bought</p>
            <br></br>
          </button>
        )}
        <div>
          <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonWide)}
            onClick={clearPurchases}>
            Clear purchases
          </button>
        </div>
      </div>
      <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonMid)}
        onClick={() => navigation.navigate('MainMenu')}>
        Go back to menu
      </button>
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
            <br></br>
            <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonWide)} onClick={() => setShowBoughtPopUp(false)}>Close</button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export const styles = StyleSheet.create({
  designContainer: {
    justifyContent: 'top',
    flex: 2
  }
});

export default ExtraContentScreen;
