import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Button = ({
  children,
  backgroundColor = "#f0e990",
  width = 70,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={[styles.container, { backgroundColor, width }]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "gold",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    fontWeight: "300",
  },
});
export default Button;
