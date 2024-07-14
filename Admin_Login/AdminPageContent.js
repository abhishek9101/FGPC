import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ManageDummyData = () => {
  const [photoUrl, setPhotoUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [updatePhotoId, setUpdatePhotoId] = useState('');
  const [updatePhotoUrl, setUpdatePhotoUrl] = useState('');
  const [updateCaption, setUpdateCaption] = useState('');
  const [textContent, setTextContent] = useState('');
  const [updateTextId, setUpdateTextId] = useState('');
  const [updateContent, setUpdateContent] = useState('');

  const handleAddPhoto = () => {
    fetch('http://localhost:3000/api/photos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: photoUrl, caption }),
    })
      .then(response => response.json())
      .then(data => {
        alert('New photo added successfully');
        console.log('New photo:', data);
      })
      .catch(error => console.error('Error adding photo:', error));
  };

  const handleUpdatePhoto = () => {
    fetch(`http://localhost:3000/api/photos/${updatePhotoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: updatePhotoUrl, caption: updateCaption }),
    })
      .then(response => response.json())
      .then(data => {
        alert('Photo updated successfully');
        console.log('Updated photo:', data);
      })
      .catch(error => console.error('Error updating photo:', error));
  };

  const handleAddText = () => {
    fetch('http://localhost:3000/api/texts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: textContent }),
    })
      .then(response => response.json())
      .then(data => {
        alert('New text added successfully');
        console.log('New text:', data);
      })
      .catch(error => console.error('Error adding text:', error));
  };

  const handleUpdateText = () => {
    fetch(`http://localhost:3000/api/texts/${updateTextId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: updateContent }),
    })
      .then(response => response.json())
      .then(data => {
        alert('Text updated successfully');
        console.log('Updated text:', data);
      })
      .catch(error => console.error('Error updating text:', error));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Admin Pannel</Text>

      <Text style={styles.sectionTitle}>Add New Photo</Text>
      <TextInput
        style={styles.input}
        placeholder="Photo URL"
        value={photoUrl}
        onChangeText={setPhotoUrl}
      />
      <TextInput
        style={styles.input}
        placeholder="Caption"
        value={caption}
        onChangeText={setCaption}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddPhoto}>
        <Text style={styles.buttonText}>Add Photo</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Update Photo</Text>
      <TextInput
        style={styles.input}
        placeholder="Photo ID to Update"
        value={updatePhotoId}
        onChangeText={setUpdatePhotoId}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="New Photo URL"
        value={updatePhotoUrl}
        onChangeText={setUpdatePhotoUrl}
      />
      <TextInput
        style={styles.input}
        placeholder="New Caption"
        value={updateCaption}
        onChangeText={setUpdateCaption}
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdatePhoto}>
        <Text style={styles.buttonText}>Update Photo</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Add New Text</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Text Content"
        value={textContent}
        onChangeText={setTextContent}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddText}>
        <Text style={styles.buttonText}>Add Text</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Update Text</Text>
      <TextInput
        style={styles.input}
        placeholder="Text ID to Update"
        value={updateTextId}
        onChangeText={setUpdateTextId}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textArea}
        placeholder="New Text Content"
        value={updateContent}
        onChangeText={setUpdateContent}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdateText}>
        <Text style={styles.buttonText}>Update Text</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  textArea: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ManageDummyData;
