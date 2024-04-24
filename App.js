import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenuScreen from './MainMenuScreen';
import SpeedTypingTestScreen from './SpeedTypingTestScreen';
import RssScreen from './RssScreen';
import NewsArticleScreen from './NewsArticleScreen';
import ExtraContentScreen from './ExtraContentScreen';
import ProfileScreen from './ProfileScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StyleSheet } from 'react-native';


const Stack = createStackNavigator();

export default function App() {
  if (AsyncStorage.getItem("bgColor") === null) {
    AsyncStorage.setItem("bgColor", "black")
  }
  if (AsyncStorage.getItem("boughtDesigns") === null) {
    AsyncStorage.setItem("boughtDesigns", "black,")
  }
  if (AsyncStorage.getItem("newsSite") === null) {
    AsyncStorage.setItem("newsSite", "text")
  }
  if (AsyncStorage.getItem("newsArticle") === null) {
    AsyncStorage.setItem("newsArticle", "none")
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen name="MainMenu" component={MainMenuScreen} options={{ title: 'Main Menu' }} />
        <Stack.Screen name="SpeedTypingTest" component={SpeedTypingTestScreen} options={{ title: 'Speed Typing Test' }} />
        <Stack.Screen name="NewsArticles" component={NewsArticleScreen} options={{ title: 'News Article Select' }} />
        <Stack.Screen name="Rss" component={RssScreen} options={{ title: 'Rss Test' }} />
        <Stack.Screen name="ExtraContent" component={ExtraContentScreen} options={{ title: 'Extra Content' }} />
        <Stack.Screen name="Settings" component={ProfileScreen} options={{ title: 'Settings' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AsyncStorage.getItem("bgColor"),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'left',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonBase: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 15,
    borderRadius: 5,
    margin: 15,
  },
  buttonDesign: {
    width: "40%",
    height: "25%"
  },
  buttonMid: {
    backgroundColor: "white",
    width: "50%"
  },
  buttonWide: {
    backgroundColor: "white",
    width: "85%"
  },
  buttonD0: {
    backgroundColor: "black",
    color: "white"
  },
  buttonD1: {
    backgroundColor: "white"
  },
  buttonD2: {
    backgroundColor: "blue",
    color: "white"
  },
  buttonD3: {
    backgroundColor: "red",
    color: "white"
  },
  buttonD4: {
    backgroundColor: "green",
    color: "white"
  },
  buttonD5: {
    backgroundColor: "pink",
    color: "white"
  },
});
