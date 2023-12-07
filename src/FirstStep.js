import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const FirstStep = ({ navigation }) => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header1}>Take a step towards your dream life</Text>
        <View style={styles.quoteParent}>
        <Text style={styles.header2}>
          All our dreams can come true, if we have the courage to pursue them
        </Text>
        <Text style={styles.quote}>- Brainy Quotes</Text>
        </View>
        <View style={styles.groupText}>
        <Text style={styles.header3}>
          This Journey begins with us helping you make behavioural changes one
          day at a time
        </Text>
        <Text style={styles.header4}>
          What habit can you commit to for a start?
        </Text>
        </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate("Habits")}>Let's go</Text>
      </TouchableOpacity>
    </>
  );
};

export default FirstStep;

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
    backgroundColor: "#E0F4FB",
  },
  content:{
    marginHorizontal:24
  },
  quoteParent:{
    borderLeftWidth: 5,
    borderColor: "#000",
    marginVertical:24,
    paddingTop:8,
    padding:16
  },
  groupText:{
    marginVertical:24,
  },
  header1: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 24
    //textAlign: "center",
  },
  header2: {
    fontSize: 20,
    //textAlign: "center",
  },
  quote: {
    //marginVertical:24,
    marginTop:5,
    fontSize: 16,
    fontStyle: "italic",
    //textAlign: "center",
  },
  header3: {
    fontSize: 20,
    //textAlign: "center",
    fontWeight:"400",
  },
  header4: {
    paddingTop:24,
    fontSize: 20,
    //textAlign: "center",
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    width: 380,
    height: 60,
    borderRadius: 30,
    marginHorizontal : 15,
    marginBottom: 13
    //alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    marginTop: 5,
    textAlign: "center",
  },
});
