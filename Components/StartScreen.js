import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Feather';
import fgpcLogo from '../assets/fgpcLogo.png'

const StartScreen = ({ navigation }) => {
  const handlePress = () => {
    Linking.openURL('https://fgpc.in/');
  };

  return (
    <ScrollView>   
       <View style={styles.container}>
      <Image
      source={fgpcLogo} 
      style={styles.logo}
      resizeMode="contain"
    />

      <Text style={styles.title}>आत्मिक आराधना गीत</Text>
      <Text style={styles.subtitle}>Aatmik Aaradhna Geet</Text>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.hindiButton]} onPress={() => navigation.navigate('Home')}>
          <Icon name="music-note" size={30} color="#fff" />
          <Text style={styles.buttonText}>हिंदी</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.englishButton]} onPress={() => navigation.navigate("chorus")}>
          <Icon name="music" size={30} color="#fff" />
          <Text style={styles.buttonText}>Chorus</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.mediaButton]} onPress={() => navigation.navigate("Media&Magazine")}>
          <Icon name="volume-high" size={30} color="#fff" />
          <Text style={styles.buttonText}>Media & Magazine</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.linkButton]} onPress={() => navigation.navigate("UseFulLink")}>
          <Icon name="link" size={30} color="#fff" />
          <Text style={styles.buttonText}>Useful link</Text>
        </TouchableOpacity>
      </View>
       
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.mediaButton]} onPress={() => navigation.navigate("Notice")}>
          <Icon2 name="notification" size={30} color="#fff" />
          <Text style={styles.buttonText}>Notice Board</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.linkButton]} onPress={() => navigation.navigate("Donate")}>
          <Icon3 name="coffee" size={30} color="#fff" />
          <Text style={styles.buttonText}>Buy Me a Coffee</Text>
        </TouchableOpacity>
      </View>
       
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.AdminButton]} onPress={() => navigation.navigate("AdminLogin")}>
          <Icon name="account-cog" size={30} color="#fff" />
          <Text style={styles.buttonText}>Admin Login</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.footerText}>Reach us: https://fgpc.in/</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate("Developers")}>
        <Text style={styles.footerText}>Designed by abhishek</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: '80%',  // Adjust width as needed
    height: 100,   // Adjust height as needed
    marginTop: 20,
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
  AdminButton: {
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
