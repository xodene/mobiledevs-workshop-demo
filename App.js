import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import TodoTask from "./TodoTask";
export default class App extends Component {
  state = { tasks: [] };

  onAddTask(event) {
    const taskDescription = event.nativeEvent.text;
    this.setState({
      tasks: [...this.state.tasks, { description: taskDescription }]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Todo List</Text>
        <TextInput
          style={styles.textBox}
          placeholder="Add task"
          clearButtonMode={"always"}
          onSubmitEditing={event => this.onAddTask(event)}
        ></TextInput>
        {this.state.tasks.map((task, index) => (
          <TodoTask key={index} description={task.description} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: "10%",
    flex: 1,
    margin: 5,
    backgroundColor: "#fff"
  },

  heading: {
    fontSize: 34,
    justifyContent: "flex-start"
  },

  textBox: {
    borderColor: "#69e4ff",
    borderWidth: 1.5,
    margin: 5,
    padding: 5,
    width: "95%",
    borderRadius: 15,
    justifyContent: "center"
  },

  textBoxText: {
    padding: 5,
    color: "#69e4ff"
  }
});
