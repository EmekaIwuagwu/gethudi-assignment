import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/background.png")}
        style={styles.image}
      >
        <View style={styles.homePageText}>
          <Text style={styles.header}>
          Live the life you’ve always wanted
          </Text>
          <Text style={styles.subHeader}>
            Starting today, lets help you focus better and accomplish your dream
            life.
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("FirstStep")}
          >
            Get started
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  homePageText: {
    marginHorizontal: 24,
    top:90
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    textAlign:"left",
    color: "#242124",
    fontFamily: 'CircularBold',
    fontSize: 40,
    fontWeight: "700",
    paddingHorizontal:24,
    letterSpacing:0.41,
    lineHeight:48
  },
  subHeader: {
    textAlign:"left",
    color: "#242124",
    fontSize: 17,
    marginTop:15,
    fontWeight: "400",
    marginHorizontal:24,
    letterSpacing:0.38,
    lineHeight:24
  },
  button: {
    top: 180,
    width: 380,
    height: 60,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "#000000",
    padding: 10,
    marginTop: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 24,
    textAlign: "center",
  },
});
