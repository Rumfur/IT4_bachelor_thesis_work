import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Rss = () => {
    const [loading, setLoading] = useState(true); // Declare loading state variable
    // const [data, setData] = useState(""); // Declare data state variable

    const fetchRss = () => 
        // { // https://cors-anywhere.herokuapp.com/
        // const RSS_URL = `https://cors-anywhere.herokuapp.com/https://www.lsm.lv/rss`; // https://www.lsm.lv/rss/ // https://www.delfi.lv/rss/index.xml
        {
            var feed = "https://feeds.feedburner.com/raymondcamdensblog?format=xml";

            fetch(feed)
                .then(response => response.text())
                .then(data => {
                    // Parse the XML response
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(data, "text/xml");
                    const items = xmlDoc.querySelectorAll("item");
        
                    items.forEach(item => {
                        console.log("------------------------");
                        console.log("title      : " + item.querySelector("title").textContent);
                        console.log("link       : " + item.querySelector("link").textContent);
                        console.log("description: " + item.querySelector("description").textContent);
                    });
                })
                .catch(error => console.error("Error fetching RSS:", error));
        }
    
    return(
        <View style={styles.container}>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <br></br>
                // <Text>{data}</Text>
                // data.map((post) => {
                // return (
                //     <View>
                //         <Text style={styles.title}>RSS</Text>
                //         <Text style={styles.title}>"{post.title}"</Text>
                //         <Text>"{post.body}"</Text>
                //     </View>
                // );
                // })
            )}
            <button
                style={styles.buttonf}
                onClick={fetchRss}
            >Fetch rss</button>
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
