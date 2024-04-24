import React, { useState, useRef } from 'react';
import { View, StyleSheet, TextInput, Modal } from 'react-native';
import { baseStyles } from './App';


const originalText = 'The quick brown fox jumps over the lazy dog';

export default function SpeedTypingTestScreen() {
  const [textBoxText, setTextBoxText] = useState('');
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

    if (text[text.length-1] == " ") {
      const typedWordCount = text.trim().split(" ").length;
      const wordsPerMin = Math.round((typedWordCount / elapsedTime) * 60);
      setTypingSpeed(wordsPerMin);
      setTotalTypedWords(typedWordCount);
      setTotalTypedChars(text.trim().length);

      // if text length == required text lenght, end test
      if (typedWordCount === originalText.split(" ").length && text[text.length-1] == " ") {
        setFinished(true);
        inputRef.current.blur();
        setShowResultsModal(true);
      }
    }

    setTextBoxText(text);
  };

  function resetTestValues() {
    setTextBoxText('');
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

  // const calculateAccuracy = () => {
  //   const originalWords = originalText.split(/\s+/);
  //   const typedWords = textInputValue.trim().split(/\s+/);
  //   let correctWords = 0;
  //   for (let i = 0; i < typedWords.length; i++) {
  //     if (typedWords[i] === originalWords[i]) {
  //       correctWords++;
  //     }
  //   }
  //   const acc = Math.round((correctWords / originalWords.length) * 100);
  //   setAccuracy(acc);
  //   setWrongWords(originalWords.length - correctWords);
  // };

  return (
    <View style={baseStyles.container}>
      {started ? (
        <p style={Object.assign({}, )}>{typingSpeed} wpm</p>
      ) : (
        <p></p>
      )}
      <p style={styles.originalText}>{originalText}</p>
      {finished ? (
          <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonMid)} 
            onClick={() => {resetTestValues}}>
            Restart test
          </button>
      ) : (
        <div>
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
          <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonMid)}
            disabled={!started}>
            Restart test
          </button>
        </div>
      )}
      <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonMid)}
        onClick={() => navigation.navigate('MainMenu')}>
        Go back to menu
      </button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showResultsModal}
        onRequestClose={() => setShowResultsModal(false)}
      >
        <View style={baseStyles.modalContainer}>
          <View style={baseStyles.modalContent}>
            <p style={baseStyles.modalTitle}>Test Results</p>
            <p>Words per minute: {typingSpeed}</p>
            <p>Characters per minute: {Math.round((totalTypedChars / totalTypedWords) * typingSpeed)}</p>
            <p>Total written characters: {totalTypedChars}</p>
            <p>Total written words: {totalTypedWords}</p>
            <p>Words written wrong: {wrongWords}</p>
            <p>Accuracy: {(totalTypedWords - wrongWords) / totalTypedWords * 100}%</p>
            <br></br>
            <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonMid)} onClick={() => setShowResultsModal(false)}>Close</button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  originalText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    position: 'absolute',
    fontFamily: ''
  },
  inputBox: {
    fontSize: 16,
    height: 150,
    width: '100%',
    color: 'white',
    backgroundColor: 'gray',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
});
