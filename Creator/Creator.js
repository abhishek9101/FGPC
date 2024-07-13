import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Animated, Easing, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Creator = () => {
  const [isHindi, setIsHindi] = useState(false);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  const handleCallPress = () => {
    Linking.openURL('tel:+917979893747');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:abhishekraj9101@gmail.com');
  };

  const toggleLanguage = () => {
    setIsHindi(!isHindi);
  };

  useEffect(() => {
    const flipCoin = () => {
      Animated.sequence([
        Animated.timing(flipAnimation, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(flipAnimation, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setCurrentProfileIndex((prevIndex) => (prevIndex + 1) % profiles.length);
      });
    };

    const interval = setInterval(flipCoin, 1000);

    return () => clearInterval(interval);
  }, []);

  const profiles = [
    {
      name: 'Abhishek Kumar',
      location: 'Lucknow',
      description: 'Mobile Developer and Web Developer',
      MobileNo: "797989347",
      Email:"abhishekraj9101@gmail.com",
      image: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
      posts: 109,
      followers: '1.5M',
      following: 71,
    },
    {
      name: 'Livingstone Jeeva',
      location: 'Lucknow',
      description: 'Web Developer',
      MobileNo: "XXXXXXXXXX",
      Email:"XXXXXXXXXXXX@gmail.com",
      image: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
      posts: 200,
      followers: '2.3M',
      following: 150,
    },
  ];

  const englishText = "If you have any requirements or questions, we would be truly honored to assist you. Please don't hesitate to contact us by phone or email. We specialize in app and web development and are dedicated to serving you with the utmost care and attention.";
  const hindiText = "यदि आपके पास कोई आवश्यकताएँ या प्रश्न हैं, तो हमें आपकी सहायता करने में वास्तव में सम्मानित महसूस होगा। कृपया हमें फ़ोन या ईमेल द्वारा संपर्क करने में संकोच न करें। हम ऐप और वेब विकास में विशेषज्ञता रखते हैं और आपको अत्यधिक देखभाल और ध्यान के साथ सेवा देने के लिए समर्पित हैं।";

  const rotateY = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
         {profiles.map((profile, index) => (
        <View key={index} style={styles.profileCard}>
          <View style={styles.header}>
          <Animated.Image
            source={{ uri: profiles[currentProfileIndex].image }}
            style={[styles.profileImage, { transform: [{ rotateY }] }]}
          />
            <View style={styles.info}>
              <Text style={styles.name}>{profile.name}</Text>
              <Text style={styles.location}>Location: {profile.location}</Text>
              <Text style={styles.description}>Role: {profile.description}</Text>
              <Text style={styles.location}>Mobile No: {profile.MobileNo}</Text>
              <Text style={styles.location}>Email id: {profile.Email}</Text>
            </View>
            {/* <Icon name="more-vert" size={24} color="black" /> */}
          </View>
          <TouchableOpacity style={styles.editButton} onPress={() => Linking.openURL('https://abhishekportfolio9101.netlify.app/')}>
            <Text style={styles.editButtonText}>Know More</Text>
          </TouchableOpacity>
          <View style={styles.stats}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>{profile.posts}</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>{profile.followers}</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>{profile.following}</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>
      ))}
      <View style={styles.contactCard}>
        <Text style={styles.contactText}>
          {isHindi ? hindiText : englishText}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.contactButton} onPress={handleCallPress}>
            <Icon name="phone" size={20} color="white" />
            <Text style={styles.contactButtonText}>Call Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactButton} onPress={handleEmailPress}>
            <Icon name="email" size={20} color="white" />
            <Text style={styles.contactButtonText}>Email Us</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.languageButton} onPress={toggleLanguage}>
          <Text style={styles.languageButtonText}>{isHindi ? 'Read in English' : 'हिंदी में पढ़ें'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backfaceVisibility: 'hidden',
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "black",
  },
  location: {
    color: 'black',
  },
  description: {
    color: 'black',
  },
  editButton: {
    backgroundColor: '#00aced',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignSelf: 'center',
    marginVertical: 15,
  },
  editButtonText: {
    color: 'white',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    paddingTop: 10,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontWeight: 'bold',
  },
  statLabel: {
    color: 'gray',
  },
  contactCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  contactText: {
    color: 'blue',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight:"bold"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00aced',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  contactButtonText: {
    color: 'white',
    marginLeft: 10,
  },
    languageButton: {
        backgroundColor: '#00aced',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 15,
      },
      languageButtonText: {
        color: 'white',
        fontSize: 16,
      },
    });
    
    export default Creator;