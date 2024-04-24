import React from 'react';
import { View, StyleSheet } from 'react-native';
import { baseStyles } from './App';

const MainMenuScreen = ({ navigation }) => {
  return (
    <View id="mainMenuBG" style={baseStyles.container}>
      <button
        style={Object.assign({}, baseStyles.buttonBase, styles.buttonMenu)}
        onClick={ () => {navigation.navigate('SpeedTypingTest')}}>
        Start Typing Test
      </button>
      <button
        style={Object.assign({}, baseStyles.buttonBase, styles.buttonMenu)}
        onClick={() => {navigation.navigate('NewsArticles')}}>
        News Article Select
      </button>
      <button
        style={Object.assign({}, baseStyles.buttonBase, styles.buttonMenu)}
        onClick={() => {navigation.navigate('ExtraContent')}}>
        Extra Content
      </button>
      <button 
        style={Object.assign({}, baseStyles.buttonBase, styles.buttonMenu)}
        onClick={() => {navigation.navigate('Settings')}}>
        Profile settings
      </button>
      {/* <button 
        style={Object.assign({}, baseStyles.buttonBase, styles.buttonMenu)}
        onClick={() => {navigation.navigate('Rss')}}>
        Rss test
      </button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonMenu: {
    fontSize: 24,
    backgroundColor: "white",
    width: "80%"
  }
});

export default MainMenuScreen;
