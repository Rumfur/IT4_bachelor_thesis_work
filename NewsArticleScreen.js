import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import { baseStyles } from './App';

const NewsArticleScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [showNewsSiteSelected, setNewsSiteSelected] = useState(false);

  const selectNewsSite = (newsSite) => {
    AsyncStorage.setItem("newsSite", newsSite)
    setModalVisible(true)
    setNewsSiteSelected(true)
  };

  const selectArticle = (newsArticle) => {
    AsyncStorage.setItem("newsArticle", newsArticle)
    setModalVisible(true)
    setNewsSiteSelected(false)
  };

  return (
    <View style={baseStyles.container}>
      <div id="Collumn 1">
        {!AsyncStorage.getItem("newsSite") == "https://www.lsm.lv/rss/" ? (
          <button style={Object.assign({}, baseStyles.buttonBase, styles.buttonSelect)}
            onClick={() => {selectNewsSite("https://www.lsm.lv/rss/")}}>
            lsm.lv
          </button>
        ) : (
          <button style={Object.assign({}, baseStyles.buttonBase, styles.buttonSelect)}>
            lsm.lv (selected)
          </button>
        )}
        {!AsyncStorage.getItem("newsSite") == "https://www.delfi.lv/rss/index.xml" ? (
          <button style={Object.assign({}, baseStyles.buttonBase, styles.buttonSelect)}
            onClick={() => {selectNewsSite("https://www.delfi.lv/rss/index.xml")}}>
            delfi.lv
          </button>
        ) : (
          <button style={Object.assign({}, baseStyles.buttonBase, styles.buttonSelect)}>
            delfi.lv (selected)
          </button>
        )}
        {!AsyncStorage.getItem("newsSite") == "https://feeds.feedburner.com/Apollolv-AllArticles" ? (
          <button style={Object.assign({}, baseStyles.buttonBase, styles.buttonSelect)}
            onClick={() => {selectNewsSite("https://feeds.feedburner.com/Apollolv-AllArticles")}}>
            apollo.lv
          </button>
        ) : (
          <button style={Object.assign({}, baseStyles.buttonBase, styles.buttonSelect)}>
            apollo.lv (selected)
          </button>
        )}
      </div>
      <div id="Collumn 2">
        <button style={Object.assign({}, baseStyles.buttonBase, styles.buttonSelect)}
          onClick={() => {selectArticle("none")}}>
          Select article 1
        </button>
        <button style={Object.assign({}, baseStyles.buttonBase, styles.buttonSelect)}
          onClick={() => {selectArticle("none")}}>
          Select article 2
        </button>
        <button style={Object.assign({}, baseStyles.buttonBase, styles.buttonSelect)}
          onClick={() => {selectArticle("none")}}>
          Select article 3
        </button>
      </div>
      <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonMid)}
        onClick={() => navigation.navigate('MainMenu')}>
        Go back to menu
      </button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={baseStyles.modalContainer}>
          <View style={baseStyles.modalContent}>
            {showNewsSiteSelected ? (
              <div>
                <Text style={baseStyles.modalTitle}>News site "{AsyncStorage.getItem("newsSite")}" selected</Text>
                <br></br>
                <Text>Remember to select the article you want!</Text>
              </div>
            ) : (
              <div>
                <Text style={baseStyles.modalTitle}>News article selecteed</Text>
                <br></br>
                <Text>Article "{AsyncStorage.getItem("newsArticle")}" is now selected!</Text>
              </div>
            )}
            <br></br>
            <button style={Object.assign({}, baseStyles.buttonBase, baseStyles.buttonMid)} onClick={() => setModalVisible(false)}>Close</button>
          </View>
        </View>
      </Modal>
    </View>
    
  );
};

const styles = StyleSheet.create({
  buttonSelect: {
    fontSize: 24,
    backgroundColor: "white",
    width: "80%"
  }
});

export default NewsArticleScreen;
