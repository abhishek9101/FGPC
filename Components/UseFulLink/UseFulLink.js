import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ActivityIndicator } from 'react-native';

const UsefulLink = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fgpc-api.onrender.com/api/links')
      .then(response => response.json())
      .then(data => {
        setLinks(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching links:', error);
        setLoading(false);
      });
  }, []);

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  // Function to group links by type
  const groupLinksByType = () => {
    const groupedLinks = {};
    links.forEach(link => {
      if (!groupedLinks[link.type]) {
        groupedLinks[link.type] = [];
      }
      groupedLinks[link.type].push(link);
    });
    return groupedLinks;
  };

  // Rendering function to display links grouped by type
  const renderLinks = () => {
    const groupedLinks = groupLinksByType();
    return Object.keys(groupedLinks).map((type, index) => (
      <View key={index} style={styles.linkContainer}>
        <Text style={styles.linkHeader}>{type}</Text>
        {groupedLinks[type].map((link, index) => (
          <TouchableOpacity key={index} onPress={() => handleLinkPress(link.url)} style={styles.linkButton}>
            <Text style={styles.linkText}>{link.url}</Text>
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Useful Links</Text>
      {renderLinks()}
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
  linkContainer: {
    marginBottom: 15,
  },
  linkHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4a90e2',
  },
  linkButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  linkText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UsefulLink;
