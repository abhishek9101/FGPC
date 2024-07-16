import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { AlertNotificationRoot, ALERT_TYPE, Dialog } from 'react-native-alert-notification';

const ManageDataComponent = () => {
  const [photoUrl, setPhotoUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [updatePhotoId, setUpdatePhotoId] = useState('');
  const [updatePhotoUrl, setUpdatePhotoUrl] = useState('');
  const [updateCaption, setUpdateCaption] = useState('');
  const [textContent, setTextContent] = useState('');
  const [updateTextId, setUpdateTextId] = useState('');
  const [updateContent, setUpdateContent] = useState('');
  const [linkType, setLinkType] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [updateLinkId, setUpdateLinkId] = useState('');
  const [updateLinkType, setUpdateLinkType] = useState('');
  const [updateLinkUrl, setUpdateLinkUrl] = useState('');
  const [view, setView] = useState('all');

  const showNotification = (type, message) => {
    Dialog.show({
      type,
      title: 'Notification',
      textBody: message,
      button: 'close',
    });
  };

  const handleAddPhoto = () => {
    fetch('https://fgpc-api.onrender.com/api/photos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: photoUrl, caption })
    })
    .then(response => response.json())
    .then(data => {
      // console.log('Photo added successfully!', data);
      showNotification(ALERT_TYPE.SUCCESS, 'Photo added successfully!');
      setPhotoUrl('');
      setCaption('');
    })
    .catch(error => {
      console.error('Error:', error);
      showNotification(ALERT_TYPE.DANGER, 'Failed to add photo');
    });
  };

  const handleUpdatePhoto = () => {
    fetch(`https://fgpc-api.onrender.com/api/photos/${updatePhotoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: updatePhotoUrl, caption: updateCaption })
    })
    .then(response => response.json())
    .then(data => {
      // console.log('Photo updated successfully!', data);
      showNotification(ALERT_TYPE.SUCCESS, 'Photo updated successfully!');
      setUpdatePhotoId('');
      setUpdatePhotoUrl('');
      setUpdateCaption('');
    })
    .catch(error => {
      console.error('Error:', error);
      showNotification(ALERT_TYPE.DANGER, 'Failed to update photo');
    });
  };

  const handleAddText = () => {
    fetch('https://fgpc-api.onrender.com/api/texts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: textContent })
    })
    .then(response => response.json())
    .then(data => {
      // console.log('Text added successfully!', data);
      showNotification(ALERT_TYPE.SUCCESS, 'Text added successfully!');
      setTextContent('');
    })
    .catch(error => {
      console.error('Error:', error);
      showNotification(ALERT_TYPE.DANGER, 'Failed to add text');
    });
  };

  const handleUpdateText = () => {
    fetch(`https://fgpc-api.onrender.com/api/texts/${updateTextId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: updateContent })
    })
    .then(response => response.json())
    .then(data => {
      // console.log('Text updated successfully!', data);
      showNotification(ALERT_TYPE.SUCCESS, 'Text updated successfully!');
      setUpdateTextId('');
      setUpdateContent('');
    })
    .catch(error => {
      console.error('Error:', error);
      showNotification(ALERT_TYPE.DANGER, 'Failed to update text');
    });
  };

  const handleAddLink = () => {
    fetch('https://fgpc-api.onrender.com/api/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: linkType, url: linkUrl })
    })
    .then(response => response.json())
    .then(data => {
      // console.log('Link added successfully!', data);
      showNotification(ALERT_TYPE.SUCCESS, 'Link added successfully!');
      setLinkType('');
      setLinkUrl('');
    })
    .catch(error => {
      console.error('Error:', error);
      showNotification(ALERT_TYPE.DANGER, 'Failed to add link');
    });
  };

  const handleUpdateLink = () => {
    fetch(`https://fgpc-api.onrender.com/api/links/${updateLinkId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: updateLinkType, url: updateLinkUrl })
    })
    .then(response => response.json())
    .then(data => {
      // console.log('Link updated successfully!', data);
      showNotification(ALERT_TYPE.SUCCESS, 'Link updated successfully!');
      setUpdateLinkId('');
      setUpdateLinkType('');
      setUpdateLinkUrl('');
    })
    .catch(error => {
      console.error('Error:', error);
      showNotification(ALERT_TYPE.DANGER, 'Failed to update link');
    });
  };

  return (
    <AlertNotificationRoot>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Manage All Links</Text>

        <View style={styles.buttonContainer}>
          <Button title="View All" onPress={() => setView('all')} />
          <Button title="View Photos" onPress={() => setView('photos')} />
          <Button title="View Texts" onPress={() => setView('texts')} />
          <Button title="View Links" onPress={() => setView('links')} />
        </View>

        {view === 'all' || view === 'photos' ? (
          <>
            <Text style={styles.subtitle}>Add New Photo</Text>
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
            <Button title="Add Photo" onPress={handleAddPhoto} />

            <Text style={styles.subtitle}>Update Photo</Text>
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
            <Button title="Update Photo" onPress={handleUpdatePhoto} />
          </>
        ) : null}

        {view === 'all' || view === 'texts' ? (
          <>
            <Text style={styles.subtitle}>Add New Text</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Text Content"
              value={textContent}
              onChangeText={setTextContent}
              multiline
            />
            <Button title="Add Text" onPress={handleAddText} />

            <Text style={styles.subtitle}>Update Text</Text>
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
            />
            <Button title="Update Text" onPress={handleUpdateText} />
          </>
        ) : null}

        {view === 'all' || view === 'links' ? (
          <>
            <Text style={styles.subtitle}>Add New Link</Text>
            <TextInput
              style={styles.input}
              placeholder="Link Type"
              value={linkType}
              onChangeText={setLinkType}
            />
            <TextInput
              style={styles.input}
              placeholder="Link URL"
              value={linkUrl}
              onChangeText={setLinkUrl}
            />
            <Button title="Add Link" onPress={handleAddLink} />

            <Text style={styles.subtitle}>Update Link</Text>
            <TextInput
              style={styles.input}
              placeholder="Link ID to Update"
              value={updateLinkId}
              onChangeText={setUpdateLinkId}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="New Link Type"
              value={updateLinkType}
              onChangeText={setUpdateLinkType}
            />
            <TextInput
              style={styles.input}
              placeholder="New Link URL"
              value={updateLinkUrl}
              onChangeText={setUpdateLinkUrl}
            />
            <Button title="Update Link" onPress={handleUpdateLink} />
          </>
        ) : null}
      </ScrollView>
    </AlertNotificationRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    height: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default ManageDataComponent;
