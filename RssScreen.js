import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Rss = () => {
    const [loading, setLoading] = useState(true); // Declare loading state variable
    // const [data, setData] = useState(""); // Declare data state variable

    const fetchRss = () => {
        var feed = "http://127.0.0.1/run";
        fetch(feed)
            .then(response => response.text())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.error("Error fetching RSS:", error));
    }
    
    return(
        <View style={styles.container}>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <br></br>
            )}
            <Button title="Fetch rss"
                style={styles.buttonf}
                onPress={fetchRss}>
            </Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ecf0f1",
        padding: 8,
        backgroundColor: "red"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    buttonf: {
        fontSize: 24,
        fontWeight: "bold",
        backgroundColor: "white",
        padding: 15,
        margin: 15,
        borderRadius: 5,
        width: "70%"
    },
});

export default Rss;
