import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    outline: 0,
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#000',
    color: '#fff',
    fontWeight: 'bold',
    padding: 10,
    margin: 10,
    textAlign: 'center',
    cursor: 'pointer',
  },
});

class JournalPage extends Component {
  state = {
    text: '',
  };

  handleInputChange = (event) => {
    this.setState({
      text: event,
    });
  };

  handleSubmit = () => {
    console.log('Submitted:', this.state.text);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Journal</Text>
        <TextInput
          style={styles.input}
          value={this.state.text}
          onChangeText={this.handleInputChange}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSubmit}
          title="Submit"
        />
      </View>
    );
  }
}

export default JournalPage;