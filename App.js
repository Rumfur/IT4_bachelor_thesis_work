import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainMenuScreen from "./MainMenuScreen";
import SpeedTypingTestScreen from "./SpeedTypingTestScreen";
import NewsArticleScreen from "./NewsArticleScreen";
import ExtraContentScreen from "./ExtraContentScreen";
import ProfileScreen from "./ProfileScreen";
import StartScreen from "./StartScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

export let storedValues = {
  bgColor: "blackIlightgray", 
  boughtDesigns: "blackIlightgray,", 
  newsSite: "text", 
  newsArticle: 0,
  newsData: {},
  selectedText: "",
  showAdds: true,
}

// export async function resetStoredValues() {
//   AsyncStorage.setItem("bgColor", "blackIlightgray")
//   AsyncStorage.setItem("boughtDesigns", "blackIlightgray,")
//   AsyncStorage.setItem("newsSite", "text")
//   AsyncStorage.setItem("newsArticle", "0")
//   AsyncStorage.setItem("selectedText", "")
//   AsyncStorage.setItem("showAdds", "true")
// }

const fetchNewsSiteRss = () => {
  var feed = "http://127.0.0.1/run";
  fetch(feed)
      .then(response => response.text())
      .then(data => {
          try {
            storedValues.newsData = JSON.parse(data)
          } catch (error) {
            console.log("Error during JSON parsing: " + error)
          }
      })
      .catch(error => console.error("Error fetching RSS:", error));
}


export const syncStoredData = async () => {
  try {
    storedValues.bgColor = await AsyncStorage.getItem("bgColor")
    storedValues.boughtDesigns = await AsyncStorage.getItem("boughtDesigns")
    storedValues.newsSite = await AsyncStorage.getItem("newsSite")
    storedValues.newsArticle = parseInt(await AsyncStorage.getItem("newsArticle"))
    storedValues.selectedText = parseInt(await AsyncStorage.getItem("selectedText"))
    storedValues.showAdds = (await AsyncStorage.getItem("showAdds") == "true")
  } catch (error) {
    console.log("Error in async data: " + error)
  } 
  if (storedValues.bgColor == null) {
    AsyncStorage.setItem("bgColor", "blackIlightgray")
    storedValues.bgColor = "blackIlightgray"
  }
  if (storedValues.boughtDesigns == null) {
    AsyncStorage.setItem("boughtDesigns", "blackIlightgray,")
    storedValues.boughtDesigns = "blackIlightgray,"
  }
  if (storedValues.newsSite == null) {
    AsyncStorage.setItem("newsSite", "text")
    storedValues.newsSite = "text"
  }
  if (storedValues.newsArticle == null) {
    AsyncStorage.setItem("newsArticle", "0")
    storedValues.newsArticle = 0
  }
  if (storedValues.selectedText == null) {
    AsyncStorage.setItem("selectedText", "")
    storedValues.newsArticle = ""
  }
  if (storedValues.showAdds == null) {
    AsyncStorage.setItem("showAdds", "true")
    storedValues.showAdds = "true"
  }
  console.log(storedValues)
};

function checkIfDataValid() {
  if (storedValues.bgColor == null) {
    AsyncStorage.setItem("bgColor", "blackIlightgray")
    storedValues.bgColor = "blackIlightgray"
  }
  if (storedValues.boughtDesigns == null) {
    AsyncStorage.setItem("boughtDesigns", "blackIlightgray,")
    storedValues.boughtDesigns = "blackIlightgray,"
  }
  if (storedValues.newsSite == null) {
    AsyncStorage.setItem("newsSite", "text")
    storedValues.newsSite = "text"
  }
  if (storedValues.newsArticle == null) {
    AsyncStorage.setItem("newsArticle", "0")
    storedValues.newsArticle = 0
  }
  if (storedValues.selectedText == null) {
    AsyncStorage.setItem("selectedText", "")
    storedValues.newsArticle = ""
  }
  if (storedValues.showAdds == null) {
    AsyncStorage.setItem("showAdds", "true")
    storedValues.showAdds = true
  }
}

async function validateAsyncStorage() {
  if (await AsyncStorage.getItem("bgColor") == null) {
    AsyncStorage.setItem("bgColor", "blackIlightgray")
  }
  if (await AsyncStorage.getItem("boughtDesigns") == null) {
    AsyncStorage.setItem("boughtDesigns", "blackIlightgray,")
  }
  if (await AsyncStorage.getItem("newsSite") == null) {
    AsyncStorage.setItem("newsSite", "text")
  }
  if (await AsyncStorage.getItem("newsArticle") == null) {
    AsyncStorage.setItem("newsArticle", "0")
  }
  if (await AsyncStorage.getItem("selectedText") == null) {
    AsyncStorage.setItem("selectedText", "")
  }
  if (await AsyncStorage.getItem("showAdds") == null) {
    AsyncStorage.setItem("showAdds", true)
  }
}

export async function setValues(){
  await syncStoredData().then(
    checkIfDataValid()
  )
}

export default function App() {
  setValues()
  fetchNewsSiteRss()
  validateAsyncStorage()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen
          name="StartScreen"  component={StartScreen}
          options={{ title: "Start Screen",  headerShown: false }}
        />
        <Stack.Screen
          name="MainMenu" component={MainMenuScreen}
          options={{ title: "Main Menu",  headerShown: false }}
        />
        <Stack.Screen
          name="SpeedTypingTest" component={SpeedTypingTestScreen}
          options={{ title: "Speed Typing Test",  headerShown: false }}
        />
        <Stack.Screen
          name="NewsArticles" component={NewsArticleScreen}
          options={{ title: "News Article Select",  headerShown: false }}
        />
        <Stack.Screen
          name="ExtraContent" component={ExtraContentScreen}
          options={{ title: "Extra Content",  headerShown: false }}
        />
        <Stack.Screen
          name="Settings" component={ProfileScreen}
          options={{ title: "Settings",  headerShown: false }}
        />
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
  titleTextBig: {
    fontSize: 100,
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  titleTextBig: {
    fontSize: 50,
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
    backgroundColor: "white",
    fontSize: 16,
    fontWeight: "bold",
    padding: 15,
    borderRadius: 10,
    margin: 15,
  },
  buttonTransparent: {
    backgroundColor: "transparent",
    borderWidth: 5,
    borderColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonPopUpClose: {
    borderWidth: 4,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    padding: 5,
    margin: 10
  },
  textB: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  buttonSmall: {
    backgroundColor: "White",
  },
  buttonSemiMid: {
    width: "40%",
    height: "35%",
    padding: 15,
    margin: 15
  },
  buttonMid: {
    backgroundColor: "white",
    width: "50%"
  },
  buttonWide: {
    backgroundColor: "white",
    width: "85%"
  },
  buttonWhite: {
    backgroundColor: "white",
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
  addBanner: {
    backgroundColor: "black",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center',
    textAlignVertical: 'center',
    width: "100%",
    padding: 30
  }
});
