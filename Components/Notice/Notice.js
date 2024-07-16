// components/AnnouncementPage.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, ImageBackground } from 'react-native';

const Notice = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fgpc-api.onrender.com/api/texts');
        const data = await response.json();
        setAnnouncements(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  return (
    <ImageBackground source={{ uri: 'https://media.istockphoto.com/id/1136831206/vector/vector-paper-mockup-of-yellow-note-attached-by-metallic-paper-clip-placed-on-transparent.jpg?s=612x612&w=0&k=20&c=4dQwJMt_1NZQz1_VqJ9VIZZxQJXe_z3ukGhF3066psI=' }} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.header}>Notice Board</Text>
        <FlatList
          data={announcements}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <Text style={styles.serialText}>Notice {index + 1}:</Text>
              <Text style={styles.text}>{item.content}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textDecorationLine: 'underline',
  },
  container: {
    flex: 1,
    width: '100%',
  },
  item: {
    backgroundColor: '#f1f1f1',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  serialText: {
    fontWeight: 'bold',
    marginRight: 10,
    color: '#555',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Notice;
