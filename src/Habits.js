import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import HabitCard from "./components/HabitCard";
import Heading from "./ui/Heading";

const Habits = () => {
  //const {width, height} = useWindowDimensions();
  //console.log(width,height);

  return (
    
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.habitText}>Habits</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.MainTextContainer}>
          <Text style={styles.mainText}>Choose a Habit</Text>
        </View>

        <View style={styles.cardContainer}>
          <HabitCard
            bWidth={16}
            bColor="rgba(127, 17, 224, 0.1)"
            bRadius={12}
            img={require("./assets/sunrise.png")}
            bgColor="rgba(127, 17, 224, 0.1)"
            title="Wake up early"
            description="Wake up early by shifting your sleep and wake-up times gradually, getting light first thing, and avoiding light, caffeine, and meals too ..."
          />
          <HabitCard
            bWidth={16}
            bColor="rgba(0, 255, 127, 0.1)"
            bRadius={12}
            img={require("./assets/book.png")}
            bgColor="rgba(0, 255, 127, 0.1)"
            title="Journal about your hopes and dreams"
            textWidth={250}
            description="Simply writing down your thoughts and feelings to understand them more clearly. And if you struggle with stress, depression, or ..."
          />
          <HabitCard
            bWidth={16}
            bColor="rgba(240, 56, 145, 0.1)"
            bRadius={12}
            img={require("./assets/heart.png")}
            bgColor="rgba(240, 56, 145, 0.1)"
            title="Give gratitide"
            description="Gratitude is a way for you to appreciate what you have, instead of always reaching for something new in the hope it will make you ..."
          />
        </View>
      </View>
      </ScrollView>
    </View>
    
  );
};

export default Habits;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    marginVertical: 40,
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
  },
  habitText: {
    paddingVertical: 24,
    fontSize: 28,
    fontFamily: "Circular-Std-Bold",
    //fontWeight: "500",
    lineHeight: 34,
    letterSpacing: 0.338,
  },
  mainText: {
    fontSize: 20,
    fontFamily: "Circular-Std-Book",
    //fontWeight: "500",
    lineHeight: 25,
    letterSpacing: 0.38,
  },
  MainTextContainer: {
    marginHorizontal: 24,
  },
  cardContainer: {
    marginHorizontal: 24,
    marginTop: 24,
    
  },
});
