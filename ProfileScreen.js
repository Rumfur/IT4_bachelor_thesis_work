import React from 'react';
import { View, StyleSheet } from 'react-native';
import { baseStyles } from './App';


const ProfileScreen = () => {

  function selectDesign(color) {
    AsyncStorage.setItem("bgColor", color)
    location.reload()
  }

  return (
    <View id="profileBG" style={baseStyles.container}>
      <div>
        {AsyncStorage.getItem("boughtDesigns").split(",").includes("black") ? (
          AsyncStorage.getItem("bgColor") == "black" ? (
            <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD0)} disabled={true}>Selected</button>
          ) : (
            <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD0)}
              onClick={() => selectDesign("black")}>
              Select design 0
            </button>
          )
        ) : (
          <br></br>
        )}
        {AsyncStorage.getItem("boughtDesigns").split(",").includes("white") ? (
          AsyncStorage.getItem("bgColor") == "white" ? (
            <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD1)} disabled={true}>Selected</button>
          ) : (
            <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD1)}
              onClick={() => selectDesign("white")}>
              Select design 1
            </button>
          )
        ) : (
          <br></br>
        )}
        {AsyncStorage.getItem("boughtDesigns").split(",").includes("blue") ? (
          AsyncStorage.getItem("bgColor") == "blue" ? (
            <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD2)} disabled={true}>Selected</button>
          ) : (
            <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD2)}
              onClick={() => selectDesign("blue")}>
              Select design 2
            </button>
          )
        ) : (
          <br></br>
        )}
        {AsyncStorage.getItem("boughtDesigns").split(",").includes("red") ? (
          AsyncStorage.getItem("bgColor") == "red" ? (
            <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD3)} disabled={true}>Selected</button>
          ) : (
            <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD3)}
              onClick={() => selectDesign("red")}>
              Select design 3
            </button>
          )
        ) : (
          <br></br>
        )}
        {AsyncStorage.getItem("boughtDesigns").split(",").includes("green") ? (
          AsyncStorage.getItem("bgColor") == "green" ? (
            <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD4)} disabled={true}>Selected</button>
          ) : (
            <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD4)}
              onClick={() => selectDesign("green")}>
              Select design 4
            </button>
          )
        ) : (
          <br></br>
        )}
        {AsyncStorage.getItem("boughtDesigns").split(",").includes("pink") ? (
          AsyncStorage.getItem("bgColor") == "pink" ? (
            <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD5)} disabled={true}>Selected</button>
          ) : (
            <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonD5)}
              onClick={() => selectDesign("pink")}>
              Select design 4
            </button>
          )
        ) : (
          <br></br>
        )}
      </div>
      <br></br>
      <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonMid)}
        onClick={() => navigation.navigate('MainMenu')}>
        Go back to menu
      </button>
    </View>
  );
};

export default ProfileScreen;
