import React, { useState, useRef } from "react";
import { View, StyleSheet, TextInput, Modal, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { baseStyles } from "./App";
import AsyncStorage from "@react-native-async-storage/async-storage";

const originalText = "The quick brown fox jumps over the lazy dog";

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
  const inputRef = useRef(null);

  const textInput = (text) => {
    if (!started) {
      setStarted(true);
      setStartTime(Date.now());
    }
    setElapsedTime((Date.now() - startTime) / 1000); // seconds

    if (text[text.length-1] === " ") {
      const typedWordCount = text.trim().split(" ").length;
      const wordsPerMin = Math.round((typedWordCount / elapsedTime) * 60);
      setTypingSpeed(wordsPerMin);
      setTotalTypedWords(typedWordCount);
      setTotalTypedChars(text.trim().length);

      // if text length == required text length, end test
      if (typedWordCount === originalText.split(" ").length && text[text.length-1] === " ") {
        setFinished(true);
        inputRef.current.blur();
        setShowResultsModal(true);
      }
    }

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
  };

  return (
    <LinearGradient
      colors={["#4facfe", "#00f2fe"]}
      style={styles.gradientContainer}
    >
      <View style={baseStyles.container}>
        {started && (
          <Text style={styles.typingSpeed}>{typingSpeed} wpm</Text>
        )}
        <Text style={styles.originalText}>{originalText}</Text>
        {finished ? (
          <TouchableOpacity
            style={[baseStyles.buttonBase, baseStyles.buttonMid]}
            onPress={resetTestValues}
          >
            <Text style={styles.buttonText}>Restart test</Text>
          </TouchableOpacity>
        ) : (
          <View>
            <TextInput
              ref={inputRef}
              style={styles.inputBox}
              onChangeText={textInput}
              value={textBoxText}
              placeholder="Start typing here..."
              multiline={true}
              autoFocus={true}
              editable={!finished}
            />
            <TouchableOpacity
              style={[baseStyles.buttonBase, baseStyles.buttonMid]}
              disabled={!started}
              onPress={resetTestValues}
            >
              <Text style={styles.buttonText}>Restart test</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          style={[baseStyles.buttonBase, baseStyles.buttonMid]}
          onPress={() => navigation.navigate("MainMenu")}
        >
          <Text style={styles.buttonText}>Go back to menu</Text>
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
              <Text>Total written characters: {totalTypedChars}</Text>
              <Text>Total written words: {totalTypedWords}</Text>
              <Text>Words written wrong: {wrongWords}</Text>
              <Text>Accuracy: {(totalTypedWords - wrongWords) / totalTypedWords * 100}%</Text>
              <TouchableOpacity
                style={[baseStyles.buttonBase, baseStyles.buttonMid]}
                onPress={() => setShowResultsModal(false)}
              >
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  originalText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Roboto",
    backgroundColor: "purple"
  },
  inputBox: {
    fontSize: 16,
    height: 150,
    width: "100%",
    color: "white",
    backgroundColor: "gray",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlignVertical: "top",
  },
  typingSpeed: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
});
