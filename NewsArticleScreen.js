import React, { useState } from "react";
import { View, StyleSheet, Modal, TextInput, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { baseStyles, storedValues } from "./App";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NewsArticleScreen = ({ navigation }) => {
  const [currentArticleNo, setSelectedArticleNo] = useState(parseInt(storedValues.newsArticle))
  const [modalVisible, setModalVisible] = useState(false);
  const [textBoxText, setTextBoxText] = useState("");
  const [textModalVisible, setTextModalVisible] = useState(false);

  const selectNewsSite = (newsSite) => {
    AsyncStorage.setItem("newsSite", newsSite)
    .then(
      storedValues.newsSite = newsSite
    )
    .then(
      setModalVisible(true)
    )
  };

  const textInput = (text) => {
    setTextBoxText(text);
  }

  const selectArticleNo = (articleNo) => {
    console.log("article no: " + articleNo)
    console.log("cur no: "+ currentArticleNo)
    let number = currentArticleNo + articleNo
    console.log(number)
    if (number < 0) {
      number = 0
    }
    AsyncStorage.setItem("newsArticle", toString(number))
    .then(
      storedValues.newsArticle = toString(number)
    ).then(
      setSelectedArticleNo(number)
    )
  };

  function setTestText() {
    AsyncStorage.setItem("selectedText", textBoxText)
    storedValues.selectedText = textBoxText
    setTextModalVisible(true)
  }

  return (
    <LinearGradient
      colors={storedValues.bgColor.split("I")}
      style={styles.gradientContainer}
    >
      <View style={baseStyles.container}>
        {storedValues.showAdds && <Text style={baseStyles.addBanner}>ADVERTISEMENT</Text>}
        <Text style={baseStyles.titleText}>News And Articles</Text>
        {/* news site buttons*/}
        <View style={styles.buttonContainer}>
          {storedValues.newsSite == "https://www.lsm.lv/rss/" ? (

            <TouchableOpacity
              style={[baseStyles.buttonBase, styles.buttonSmallHeight]}
              disabled={true}
            >
              <Text style={baseStyles.textB}>lsm.lv (selected)</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[baseStyles.buttonBase, styles.buttonSmallHeight]}
              onPress={() => { selectNewsSite("https://www.lsm.lv/rss/") }}
            >
              <Text style={baseStyles.textB}>lsm.lv</Text>
            </TouchableOpacity>
          )}
          {storedValues.newsSite == "https://www.delfi.lv/rss/index.xml" ? (
            <TouchableOpacity
              style={[baseStyles.buttonBase, styles.buttonSmallHeight]}
              disabled={true}
            >
              <Text style={baseStyles.textB}>delfi.lv (selected)</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[baseStyles.buttonBase, styles.buttonSmallHeight]}
              onPress={() => { selectNewsSite("https://www.delfi.lv/rss/index.xml") }}
            >
              <Text style={baseStyles.textB}>delfi.lv</Text>
            </TouchableOpacity>
          )}
          {storedValues.newsSite == "https://feeds.feedburner.com/Apollolv-AllArticles" ? (
            <TouchableOpacity
              style={[baseStyles.buttonBase, styles.buttonSmallHeight]}
              disabled={true}
            >
              <Text style={baseStyles.textB}>apollo.lv (selected)</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
            style={[baseStyles.buttonBase, styles.buttonSmallHeight]}
            onPress={() => { selectNewsSite("https://feeds.feedburner.com/Apollolv-AllArticles") }}
            >
              <Text style={baseStyles.textB}>apollo.lv</Text>
            </TouchableOpacity>
          )}
          {storedValues.newsSite == "https://www.la.lv/feed" ? (
            <TouchableOpacity
              style={[baseStyles.buttonBase, styles.buttonSmallHeight]}
              disabled={true}
            >
              <Text style={baseStyles.textB}>la.lv (selected)</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
            style={[baseStyles.buttonBase, styles.buttonSmallHeight]}
            onPress={() => { selectNewsSite("https://www.la.lv/feed") }}
            >
              <Text style={baseStyles.textB}>la.lv</Text>
            </TouchableOpacity>
          )}
          {storedValues.newsSite == "text" ? (
            <TouchableOpacity
              style={[baseStyles.buttonBase, styles.buttonSmallHeight]}
              disabled={true}
            >
              <Text style={baseStyles.textB}>Text input (selected)</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
            style={[baseStyles.buttonBase, styles.buttonSmallHeight]}
            onPress={() => { selectNewsSite("text") }}
            >
              <Text style={baseStyles.textB}>Text input</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.buttonContainer}>
          {storedValues.newsSite != "text" ? (
            // news article number select
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[baseStyles.buttonBase, styles.buttonSmallHeight]}
                onPress={() => { selectArticleNo(-1) }}
                >
                <Text style={baseStyles.textB}>←</Text>
              </TouchableOpacity>
              <Text style={[baseStyles.textB, styles.paddingTop]}>{currentArticleNo}</Text>
              <TouchableOpacity
                style={[baseStyles.buttonBase, styles.buttonSmallHeight]}
                onPress={() => { selectArticleNo(-1) }}
                >
                <Text style={baseStyles.textB}>→</Text>
              </TouchableOpacity>
            </View>
          ) : (
            // news article number select
            <View style={styles.buttonContainer}>
              <View>
              <TextInput
                style={styles.inputBox}
                value={textBoxText}
                onChangeText={textInput}
                placeholder="Enter text you wish to speed type..."
                multiline={true}
                autoFocus={true}
                editable={true}
              />
              </View>
              <View>
              <TouchableOpacity
                style={[baseStyles.buttonPopUpClose]}
                onPress={() => setTestText()}
              >
                <Text style={baseStyles.textB}>Accept text</Text>
              </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        {/* back to menu button*/}
        <TouchableOpacity
          style={[baseStyles.buttonTransparent]}
          onPress={() => navigation.navigate("MainMenu")}
          >
          <Text style={baseStyles.textB}>Go back to menu</Text>
        </TouchableOpacity>
        {storedValues.showAdds && <Text style={baseStyles.addBanner}>ADVERTISEMENT</Text>}
        {/* pop up screen for selection confirmation*/}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={baseStyles.modalContainer}>
            <View style={baseStyles.modalContent}>
              {storedValues.newsSite != "text" ? (
                <Text style={baseStyles.modalTitle}>
                  News site selected!
                  You selected {storedValues.newsSite}.
                </Text> 
              ) : (
                <Text style={baseStyles.modalTitle}>
                  Text input selected!
                  Input your desired text in the textbox!
                </Text> 
              )}
              <TouchableOpacity
                style={[baseStyles.buttonPopUpClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={baseStyles.textB}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={textModalVisible}
          onRequestClose={() => setTextModalVisible(false)}
        >
          <View style={baseStyles.modalContainer}>
            <View style={baseStyles.modalContent}>
              {textBoxText.trim() == "" ? (
                <Text style={baseStyles.modalTitle}>
                  Please input something into the text!
                </Text> 
              ) : (
                <Text style={baseStyles.modalTitle}>
                  Text accepted!
                </Text> 
              )}
              <TouchableOpacity
                style={[baseStyles.buttonPopUpClose]}
                onPress={() => setTextModalVisible(false)}
              >
                <Text style={baseStyles.textB}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  column: {
    flexDirection: "column",
    alignItems: "center",
  },
  buttonSmallHeight: {
    height: "20%",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "top",
    flex: 2,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  paddingTop: {
    paddingTop: 30
  },
  inputBox: {
    fontSize: 16,
    height: 150,
    width: "100%",
    color: "white",
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlignVertical: "top",
  },
});

export default NewsArticleScreen;
