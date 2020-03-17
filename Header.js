import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>B-PROJECT ALBUMS</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2
  },
  textStyle: {
    fontSize: 20,
    color:"white"
  },
});

export default Header;
