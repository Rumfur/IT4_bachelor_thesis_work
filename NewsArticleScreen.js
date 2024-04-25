import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { baseStyles } from "./App";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NewsArticleScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showNewsSiteSelected, setNewsSiteSelected] = useState(false);

  const selectNewsSite = (newsSite) => {
    AsyncStorage.setItem("newsSite", newsSite);
    setModalVisible(true);
    setNewsSiteSelected(true);
  };

  const selectArticle = (newsArticle) => {
    AsyncStorage.setItem("newsArticle", newsArticle);
    setModalVisible(true);
    setNewsSiteSelected(false);
  };

  return (
    <LinearGradient
      colors={["#4facfe", "#00f2fe"]}
      style={styles.gradientContainer}
    >
      <View style={baseStyles.container}>
        <Text style={styles.titleText}>Speed Typing Prototype</Text>
        <View style={styles.designContainer}>
          {!AsyncStorage.getItem("newsSite") === "https://www.lsm.lv/rss/" ? (
            <TouchableOpacity
              style={[baseStyles.buttonBase, styles.buttonSelect]}
              onPress={() => { selectNewsSite("https://www.lsm.lv/rss/") }}
            >
              <Text style={styles.buttonText}>lsm.lv</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[baseStyles.buttonBase, styles.buttonSelect]}
              disabled={true}
            >
              <Text style={styles.buttonText}>lsm.lv (selected)</Text>
            </TouchableOpacity>
          )}
          {!AsyncStorage.getItem("newsSite") === "https://www.delfi.lv/rss/index.xml" ? (
            <TouchableOpacity
              style={[baseStyles.buttonBase, styles.buttonSelect]}
              onPress={() => { selectNewsSite("https://www.delfi.lv/rss/index.xml") }}
            >
              <Text style={styles.buttonText}>delfi.lv</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[baseStyles.buttonBase, styles.buttonSelect]}
              disabled={true}
            >
              <Text style={styles.buttonText}>delfi.lv (selected)</Text>
            </TouchableOpacity>
          )}
          {!AsyncStorage.getItem("newsSite") === "https://feeds.feedburner.com/Apollolv-AllArticles" ? (
            <TouchableOpacity
              style={[baseStyles.buttonBase, styles.buttonSelect]}
              onPress={() => { selectNewsSite("https://feeds.feedburner.com/Apollolv-AllArticles") }}
            >
              <Text style={styles.buttonText}>apollo.lv</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[baseStyles.buttonBase, styles.buttonSelect]}
              disabled={true}
            >
              <Text style={styles.buttonText}>apollo.lv (selected)</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.buttonContainer}>
          {!AsyncStorage.getItem("newsArticle") === "article" ? (
            <TouchableOpacity
              style={[baseStyles.buttonBase, styles.buttonSelect]}
              onPress={() => { selectArticle("article") }}
            >
              <Text style={styles.buttonText}>article</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[baseStyles.buttonBase, styles.buttonSelect]}
              disabled={true}
            >
              <Text style={styles.buttonText}>article (selected)</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={[baseStyles.buttonBase, baseStyles.buttonMid]}
          onPress={() => navigation.navigate("MainMenu")}
        >
          <Text style={styles.buttonText}>Go back to menu</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          {/* Modal content */}
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
  designContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "top",
    flex: 2,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  buttonSelect: {
    fontSize: 24,
    backgroundColor: "white",
    width: "40%",
    height: "30%",
    marginVertical: 5,
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default NewsArticleScreen;
