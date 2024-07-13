import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import songsData from '../assets/song.json';


function SongDetailScreen({ route }) {
  const { songNumber } = route.params;
  const song = songsData.songs.find(s => s.songNumber === songNumber);

  if (!song) {
    return (
      <View style={styles.container}>
        <Text style={styles.noSong}>Song not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Chorus:</Text>
      <Text style={styles.chorus}>{song.chorus}</Text>
      {song.stanzas.map((stanza, index) => (
        <View key={index} style={styles.stanzaContainer}>
          <Text style={styles.label}>Stanza {index + 1}:</Text>
          <Text style={styles.stanzaText}>{stanza}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  chorus: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  stanzaContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  stanzaText: {
    fontSize: 16,
    textAlign: 'center',
  },
  noSong: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 16,
    color: 'red',
  },
});

export default SongDetailScreen;
