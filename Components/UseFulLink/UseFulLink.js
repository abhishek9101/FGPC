import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

const UseFulLink = () => {
  const links = [
    { name: "Meeting Link", url: "https://meeting-link.com" },
    { name: "Church Link", url: "https://church-link.com" },
    { name: "Event Link", url: "https://event-link.com" },
    { name: "Social Link", url: "https://social-link.com" },
    { name: "Other Link", url: "https://other-link.com" },
  ];

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Useful Links</Text>
      {links.map((link, index) => (
        <TouchableOpacity key={index} onPress={() => handleLinkPress(link.url)} style={styles.linkButton}>
          <Text style={styles.linkText}>{link.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  linkButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  linkText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UseFulLink;
