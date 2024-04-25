import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainMenuScreen from "./MainMenuScreen";
import SpeedTypingTestScreen from "./SpeedTypingTestScreen";
import NewsArticleScreen from "./NewsArticleScreen";
import ExtraContentScreen from "./ExtraContentScreen";
import ProfileScreen from "./ProfileScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

export let storedValues = {
  bgColor: "black", 
  boughtDesigns: "black,", 
  newsSite: "text", 
  newsArticle: "This is a temporary text that is used in the speed typing test"
}

export const syncStoredData = async () => {
  try {
    const values = {
      bgColor: await AsyncStorage.getItem("bgColor"), 
      boughtDesigns: await AsyncStorage.getItem("boughtDesigns"),
      newsSite: await AsyncStorage.getItem("newsSite"),
      newsArticle: await AsyncStorage.getItem("newsArticle")
    };
    storedValues = values
    if (storedValues.bgColor === null) {
      console.log("Reset")
      AsyncStorage.setItem("bgColor", "black")
    }
    if (storedValues.boughtDesigns === null) {
      AsyncStorage.setItem("boughtDesigns", "black,")
      console.log("ResetDesigns")
    }
    if (storedValues.newsSite === null) {
      AsyncStorage.setItem("newsSite", "text")
    }
    if (storedValues.newsArticle === null) {
      AsyncStorage.setItem("newsArticle", "This is a temporary text that is used in the speed typing test")
    }
    console.log(values) 
  } catch (error) {
    console.log("Error in async data: " + error)
  }
};

export const getBGColor = async () => {
  const bgColor = await AsyncStorage.getItem("bgColor")
  console.log(bgColor)
  return bgColor
}

export default function App() {
  syncStoredData()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen name="MainMenu" component={MainMenuScreen} options={{ title: "Main Menu",  headerShown: false }} />
        <Stack.Screen name="SpeedTypingTest" component={SpeedTypingTestScreen} options={{ title: "Speed Typing Test",  headerShown: false }} />
        <Stack.Screen name="NewsArticles" component={NewsArticleScreen} options={{ title: "News Article Select",  headerShown: false }} />
        <Stack.Screen name="ExtraContent" component={ExtraContentScreen} options={{ title: "Extra Content",  headerShown: false }} />
        <Stack.Screen name="Settings" component={ProfileScreen} options={{ title: "Settings",  headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "left",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
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
    backgroundColor: "black"
  },
  buttonD1: {
    backgroundColor: "green"
  },
  buttonD2: {
    backgroundColor: "blue"
  },
  buttonD3: {
    backgroundColor: "red"
  },
  buttonD4: {
    backgroundColor: "pink"
  },
  buttonD5: {
    backgroundColor: "purple"
  },
});
