import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput, Divider, Text, HelperText, useTheme, ActivityIndicator, MD2Colors } from 'react-native-paper';
import songsData from "../assets/song.json";

function SongListScreen({ navigation }) {
  const { colors } = useTheme();
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearchTextChange = (text) => {
    if (/^\d*$/.test(text)) { 
      setSearchText(text);
      setError('');
    } else {
      setError('Please enter a valid song number');
    }
  };

  const filteredSongs = songsData.songs.filter(song => 
    song.songNumber.toString().includes(searchText)
  );

  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{color:"red",marginBottom:20,fontSize:25, fontWeight:"bold"}}>Loading...</Text>
        <ActivityIndicator animating={true} color={MD2Colors.lightBlue500} size="large" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Search Song by Number</Text>
      <TextInput
        style={styles.input}
        label="Enter Song Number"
        value={searchText}
        onChangeText={handleSearchTextChange}
        keyboardType="numeric"
        mode="outlined"
        theme={{ colors: { primary: colors.primary } }}
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>

      <ScrollView>
        {filteredSongs.map((song, index) => (
          <View key={song.songNumber}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('SongDetails', { songNumber: song.songNumber })}
            >
              <View style={[styles.songItem, { borderColor: colors.border }]}>
                <Text style={[styles.songNumber, { color: colors.text }]}>Song Number: {song.songNumber}</Text>
                <Text style={[styles.songChorus, { color: colors.text }]}>
                  {song.chorus.split('\n').slice(0, 2).join(' ')}
                </Text>
              </View>
            </TouchableOpacity>
            {index < filteredSongs.length - 1 && <Divider />}
          </View>
        ))}

        {filteredSongs.length === 0 && (
          <Text style={styles.noSong }>Please Enter Valid Song Number (कृपया वैध गीत संख्या दर्ज करें)</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
  },
  songItem: {
    paddingVertical: 16,
  },
  songNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  songChorus: {
    fontSize: 14,
  },
  noSong: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 16,
    color: "red",
    fontWeight: "bold"
  },
});

export default SongListScreen;
