import React, { useState, useRef } from "react";
import { View, StyleSheet, TextInput, Modal, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { baseStyles, storedValues } from "./App";
import AsyncStorage from "@react-native-async-storage/async-storage";


function setlectTestText() {
  let requestedText = ""
  try {
    if (storedValues.newsSite == "text") {
      if (storedValues.selectedText.trim() == "") {
        requestedText = "This is temporary text for the speed typing test that is used in case no text is supplied from the user."
      } else {
        requestedText = storedValues.selectedText
      }
    } else {
        requestedText = storedValues.newsData[storedValues.newsSite][0][storedValues.newsArticle]
    }
  } catch (error) {
    return "Fetching article from news data failed. Write this text instead!"
  }
  if (requestedText == "[object Undefined]") {
    requestedText = "Fetching article from news data failed. Write this text instead!"
  }
  return requestedText
}

export default function SpeedTypingTestScreen({ navigation }) {
  const [textBoxText, setTextBoxText] = useState("");
  const [started, setStarted] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [typingSpeed, setTypingSpeed] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [totalTypedWords, setTotalTypedWords] = useState(0);
  const [totalTypedChars, setTotalTypedChars] = useState(0);
  const [wrongWords, setWrongWords] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [modificationMade, setModificationMade] = useState(0);
  const [currentInputLength, setCurrentInputLength] = useState(0);

  const inputRef = useRef(null);

  const testTextOriginal = setlectTestText()
  const originalTextWordCount = testTextOriginal.split(" ").length
  const originalWords = testTextOriginal.split(" ")

  const [textCurrentWord, setTextCurrentWord] = useState(testTextOriginal.split(" ")[0]);
  const [textWordsLeft, setTextWordsLeft] = useState(testTextOriginal.split(" ").slice(1));
  const [textWordsWritten, setTextWordsWritten] = useState("");
  const [textLeftIndex, setTextLeftIndex] = useState(0);


  const textInput = (text) => {
    if (!started) { // start timer only when test is started
      setStarted(true);
      setStartTime(Date.now());
    }
    if (text.length < currentInputLength) {
      setModificationMade(modificationMade + 1); // times backspace pressed
    }
    setElapsedTime((Date.now() - startTime) / 1000); // seconds
    if (text.length > textCurrentWord.length && text[text.length-1] == " ") {
      setTextWordsWritten(textWordsWritten + text)
      if (originalWords[textWordsWritten.split(" ").length - 1] != text.trim()) { // check if written word matches current word
        setWrongWords(wrongWords + 1)
      }
      setTextCurrentWord(textWordsLeft[textLeftIndex]) // set next word
      textWordsLeft[textLeftIndex] = ""
      setTextLeftIndex(textLeftIndex + 1)
      text = ""
      const typedWordCount = textWordsWritten.trim().split(" ").length;
      const wordsPerMin = Math.round((typedWordCount / elapsedTime) * 60);
      setTypingSpeed(wordsPerMin);
      setTotalTypedWords(typedWordCount);
      setTotalTypedChars(textWordsWritten.trim().length);

      if (textWordsWritten.split(" ").length == originalTextWordCount) {
        setFinished(true);
        inputRef.current.blur();
        setShowResultsModal(true);
      }
    }
    setCurrentInputLength(text.length)
    setTextBoxText(text);
  };

  const resetTestValues = () => {
    setTextBoxText("");
    setStarted(false);
    setStartTime(null);
    setTypingSpeed(0);
    setElapsedTime(0);
    setTotalTypedWords(0);
    setTotalTypedChars(0);
    setWrongWords(0);
    setFinished(false);
    setShowResultsModal(false);
    setTextCurrentWord(testTextOriginal.split(" ")[0]);
    setTextWordsLeft(testTextOriginal.split(" ").slice(1));
    setTextWordsWritten("");
    setTextLeftIndex(0);
    setModificationMade(0);
    setCurrentInputLength(0);
  };

  return (
    <LinearGradient
      colors={storedValues.bgColor.split("I")}
      style={styles.gradientContainer}
    >
      {storedValues.showAdds && <Text style={baseStyles.addBanner}>ADVERTISEMENT</Text>}
      <View style={baseStyles.container}>
        {finished ? (
          <View>
            <Text style={styles.originalText}>{testTextOriginal}</Text>
            <Text style={[styles.originalText, styles.writtenText]}>{textWordsWritten}</Text>
          </View>
        ) : (
          <View style={baseStyles.container}>
            {started ? (
              <Text style={styles.typingSpeed}>{typingSpeed} wpm</Text>
            ) : (
              null
            )}
            <View style={styles.rowContainer}>
              <Text style={styles.textLG}>{textWordsWritten.split(" ").slice(textWordsWritten.split(" ").length-4).join(" ")}</Text>
              <Text style={styles.textW}>{textCurrentWord}</Text>
              <Text style={styles.textLG}>{textWordsLeft.slice(textWordsWritten.split(" ").length-1, textWordsWritten.split(" ").length + 3).join(" ")}</Text>
            </View>
            <TextInput
              ref={inputRef}
              style={baseStyles.inputBox}
              onChangeText={textInput}
              value={textBoxText}
              placeholder="Start typing here..."
              multiline={true}
              autoFocus={true}
              editable={!finished}
              autoCapitalize="none"
            />
          </View>
        )}
        <TouchableOpacity
          style={[baseStyles.buttonBase, baseStyles.buttonWide]}
          disabled={!started}
          onPress={resetTestValues}
        >
          <Text style={baseStyles.textB}>Restart test</Text>
        </TouchableOpacity>
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
          onRequestClose={() => setShowResultsModal(false)}
        >
          <View style={baseStyles.modalContainer}>
            <View style={baseStyles.modalContent}>
              <Text style={baseStyles.modalTitle}>Test Results</Text>   

              <Text>Words per minute: {typingSpeed}</Text>
              <Text>Characters per minute: {Math.round((totalTypedChars / totalTypedWords) * typingSpeed)}</Text>
              <Text>Total written words: {totalTypedWords}</Text>
              <Text>Words written wrong: {wrongWords}</Text>
              <Text>Total written characters: {totalTypedChars}</Text>
              <Text>Error rate: {Math.round(wrongWords / totalTypedWords * (100 / totalTypedWords))} per 100 words</Text>
              <Text>Accuracy: {Math.round((totalTypedWords - wrongWords) / totalTypedWords * 100)}%</Text>
              <Text>Modifications made: {modificationMade}</Text>
              <TouchableOpacity
                style={[baseStyles.buttonPopUpClose]}
                onPress={() => setShowResultsModal(false)}
              >
                <Text style={baseStyles.textB}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      {storedValues.showAdds && <Text style={baseStyles.addBanner}>ADVERTISEMENT</Text>}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 5,
    borderRadius: 25,
    marginBottom: 5
  },
  originalText: {
    fontSize: 24,
    marginBottom: 20,
    borderWidth: 5,
    padding: 5,
    borderRadius: 25,
    textAlign: "center",
    fontFamily: "Roboto",
    backgroundColor: "white"
  },
  writtenText: {
    backgroundColor: "black",
    color: "white",
    borderBlockColor: "white"
  },
  typingSpeed: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    color: "white"
  },
  maxWidth: {
    width: "100%"
  },
  textW: {
    color: "white",
    fontStyle: "bold",
    fontSize: 24
  },
  textLG: {
    color: "lightgray",
    margin: 5,
    fontSize: 16
  }
});
