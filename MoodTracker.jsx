import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';

class MoodTracker extends Component {

  state = {
    mood: '',
    cur: ''
  }

  onLogMood = (mood) => {
    this.setState(prevState => ({
      mood: prevState.mood + ', ' + `${Date.now()}:${mood}`
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mood Tracker</Text>
        <Text style={styles.subtitle}>Track your mood throughout the day</Text>
        <Picker
          selectedValue={this.mood}
          onValueChange={(itemValue, itemIndex) =>
              this.setState({
                cur: itemValue
              })
          }>
          <Picker.Item label="Happy" value="happy" />
          <Picker.Item label="Sad" value="sad" />
          <Picker.Item label="Neutral" value="neutral" />
        </Picker>
        <TouchableOpacity
          title="Log Mood"
          onPress={this.onLogMood}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'normal'
  },
  picker: {
    height: 40,
    width: 200,
    borderRadius: 4,
    backgroundColor: '#eee',
    padding: 10
  },
  button: {
    height: 40,
    width: 100,
    borderRadius: 4,
    backgroundColor: '#fff',
    color: '#000',
    fontWeight: 'bold'
  }
});

export default MoodTracker;