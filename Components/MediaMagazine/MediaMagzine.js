import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Linking, ActivityIndicator, ImageBackground } from 'react-native';
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

  const icons = ['book', 'newspaper-o', 'file-text-o', 'picture-o']; 

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ImageBackground source={{ uri: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2pvYjE4MDgtcmVtaXgtMDZiLWMuanBn.jpg' }} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Magazines</Text>
        <View style={styles.magazineContainer}>
          {magazines.map((magazine, index) => (
            <View key={magazine.id} style={styles.magazine}>
              <Icon
                name={icons[index % icons.length]}
                size={100}
                color="#007bff"
                onPress={() => Linking.openURL(magazine.url)}
                style={styles.icon}
              />
              <Text style={styles.title}>{magazine.caption}</Text>
              <Button
                title="Read Now"
                onPress={() => Linking.openURL(magazine.url)}
                color="#007bff"
                accessibilityLabel={`Read ${magazine.caption}`}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  container: {
    padding: 20,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background to overlay on the wallpaper
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFF222', 
  },
  magazineContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  magazine: {
    width: 150,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    alignItems: 'center',
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MediaMagazine;
