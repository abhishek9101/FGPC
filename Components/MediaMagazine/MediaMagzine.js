import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Linking, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MediaMagazine = () => {
  const [magazines, setMagazines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fgpc-api.onrender.com/api/photos')
      .then(response => response.json())
      .then(data => {
        setMagazines(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {magazines.map((magazine, index) => (
        <View key={magazine.id} style={styles.magazine}>
          <Icon
            name={index % 2 === 0 ? "book" : "book"}
            size={100}
            color="blue"
            onPress={() => Linking.openURL(magazine.url)}
            style={styles.icon}
          />
          <Text style={styles.title}>{magazine.caption}</Text>
          <Button title="Read Now" onPress={() => Linking.openURL(magazine.url)} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  magazine: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    maxWidth: 150,
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MediaMagazine;
