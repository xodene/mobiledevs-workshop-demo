import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class TodoTask extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff8469",
    margin: 5,
    padding: 5,
    borderRadius: 15,
    justifyContent: "center",
    color: "white"
  },

  description: {
    color: "white"
  }
});
