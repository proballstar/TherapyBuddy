import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MoodTracker from './MoodTracker.jsx'
import Journal from './Journal.jsx'

class MentalHealthApp extends Component {

  state = {
    mood: '',
    journalEntry: ''
  };

  onLogMood = () => {
    this.setState(prevState => ({
      mood: prevState.mood + ', ' + Date.now()
    }));
  };

  onWriteJournalEntry = () => {
    this.setState(prevState => ({
      journalEntry: prevState.journalEntry + '\n' + Date.now()
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mental Health App</Text>
        <Text style={styles.subtitle}>Track your mood and journal your thoughts</Text>
        <MoodTracker
          mood={this.state.mood}
          onLogMood={this.onLogMood}
        />
        <Journal
          entry={this.state.journalEntry}
          onWriteJournalEntry={this.onWriteJournalEntry}
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
  }
});

export default MentalHealthApp;