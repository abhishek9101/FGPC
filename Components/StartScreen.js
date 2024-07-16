import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Feather';


const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>आत्मिक आराधना गीत</Text>
      <Text style={styles.subtitle}>Aatmik Aaradhna Geet</Text>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.hindiButton]} onPress={() => navigation.navigate('Home')}>
          <Icon name="music-note" size={30} color="#fff" />
          <Text style={styles.buttonText}>हिंदी</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.englishButton]} onPress={() =>navigation.navigate("chorus")}>
          <Icon name="music" size={30} color="#fff" />
          <Text style={styles.buttonText}>Chorus</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.mediaButton]} onPress={() =>navigation.navigate("Media&Magazine")}>
          <Icon name="volume-high" size={30} color="#fff" />
          <Text style={styles.buttonText}>Media & Magazine</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.linkButton]} onPress={() => navigation.navigate("UseFulLink")}>
          <Icon name="link" size={30} color="#fff" />
          <Text style={styles.buttonText}>Useful link</Text>
        </TouchableOpacity>
      </View>
       
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.mediaButton]} onPress={() =>navigation.navigate("Notice")}>
          <Icon2 name="notification" size={30} color="#fff" />
          <Text style={styles.buttonText}>Notice Board</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.linkButton]} onPress={() => navigation.navigate("Donate")}>
          <Icon3 name="coffee" size={30} color="#fff" />
          <Text style={styles.buttonText}>Buy Me a Coffee</Text>
        </TouchableOpacity>
      </View>
       
      <View style={styles.buttonRow}>
        {/* <TouchableOpacity style={[styles.button, styles.mediaButton]} onPress={() => console.log('Media & Magazine Button Pressed')}>
          <Icon name="volume-high" size={30} color="#fff" />
          <Text style={styles.buttonText}>Media & Magazine</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={[styles.button, styles.linkButton]} onPress={() => navigation.navigate("AdminLogin")}>
          <Icon name="account-cog" size={30} color="#fff" />
          <Text style={styles.buttonText}>Admin Login</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.settingsButton]} onPress={() => console.log('Settings Button Pressed')}>
          <Icon name="cog" size={30} color="#fff" />
          <Text style={styles.buttonText}>सेटिंग्स</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.infoButton]} onPress={() =>navigation.navigate("Developers")}>
          <Icon name="information" size={30} color="#fff" />
          <Text style={styles.buttonText}>अधिक जानकारी</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.footerText}>Reach us: media@gemsbihar.org</Text>
      
      <TouchableOpacity onPress={() => Linking.openURL('https://abhishekportfolio9101.netlify.app/')}>
        <Text style={styles.footerText}>Designed by abhishek.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#6200ea', 
  },
  hindiButton: {
    backgroundColor: '#FF9800',
  },
  englishButton: {
    backgroundColor: '#4CAF50',
  },
  mediaButton: {
    backgroundColor: '#2196F3',
  },
  linkButton: {
    backgroundColor: '#009688',
  },
  settingsButton: {
    backgroundColor: '#9E9E9E',
  },
  infoButton: {
    backgroundColor: '#9C27B0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8, 
  },
  footerText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    color: 'gray',
  },
});

export default StartScreen;
