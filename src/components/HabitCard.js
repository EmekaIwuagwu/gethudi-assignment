import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";

const HabitCard = ({
  title,
  description,
  bRadius,
  bWidth,
  bColor,
  img,
  bgColor,
  textWidth
}) => {
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={[
        { borderRadius: bRadius, borderWidth: bWidth, borderColor: bColor },
        { width: width - 50, height: height / 4, marginVertical:16 },
      ]}
    >
      <View style={styles.parent}>
        <View style={styles.cardTextContainer}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "500",
              color: "#333",
              lineHeight: 22,
              letterSpacing: -0.41,
              width : textWidth
            }}
          >
            {title}
          </Text>
          <Text style={styles.cardTextSub}>{description}</Text>
        </View>
        <View style={[{ backgroundColor: bgColor }, styles.cardImage]}>
          <Image style={styles.img} resizeMode="cover" source={img} />
        </View>
      </View>
    </View>
  );
};

export default HabitCard;

const styles = StyleSheet.create({
  root: {
    width: 327,
    height: 166,
  },

  parent: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-around",
    paddingVertical: 24,
  },
  cardText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#333",
    lineHeight: 22,
    letterSpacing: -0.41,
  },
  cardTextSub: {
    fontSize: 13,
    fontWeight: "400",
    color: "#787878",
    letterSpacing: -0.08,
    lineHeight: 18,
    paddingTop: 8,
  },
  cardImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginRight: 24,
  },
  cardTextContainer: {
    paddingHorizontal: 25,
  },
  img: {
    alignSelf: "center",
    marginTop: 5,
  },
});
