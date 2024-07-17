import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
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

  const [loadingPhoto, setLoadingPhoto] = useState(false);
  const [loadingUpdatePhoto, setLoadingUpdatePhoto] = useState(false);
  const [loadingText, setLoadingText] = useState(false);
  const [loadingUpdateText, setLoadingUpdateText] = useState(false);
  const [loadingLink, setLoadingLink] = useState(false);
  const [loadingUpdateLink, setLoadingUpdateLink] = useState(false);

  const showNotification = (type, message) => {
    Dialog.show({
      type,
      title: 'Notification',
      textBody: message,
      button: 'close',
    });
  };

  const handleAddPhoto = () => {
    if (!photoUrl || !caption) {
      showNotification(ALERT_TYPE.WARNING, 'Please fill all fields');
      return;
    }

    setLoadingPhoto(true);
    fetch('https://fgpc-api.onrender.com/api/photos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: photoUrl, caption })
    })
    .then(response => response.json())
    .then(data => {
      showNotification(ALERT_TYPE.SUCCESS, 'Photo added successfully!');
      setPhotoUrl('');
      setCaption('');
    })
    .catch(error => {
      console.error('Error:', error);
      showNotification(ALERT_TYPE.DANGER, 'Failed to add photo');
    })
    .finally(() => setLoadingPhoto(false));
  };

  const handleUpdatePhoto = () => {
    if (!updatePhotoId || !updatePhotoUrl || !updateCaption) {
      showNotification(ALERT_TYPE.WARNING, 'Please fill all fields');
      return;
    }

    setLoadingUpdatePhoto(true);
    fetch(`https://fgpc-api.onrender.com/api/photos/${updatePhotoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: updatePhotoUrl, caption: updateCaption })
    })
    .then(response => response.json())
    .then(data => {
      showNotification(ALERT_TYPE.SUCCESS, 'Photo updated successfully!');
      setUpdatePhotoId('');
      setUpdatePhotoUrl('');
      setUpdateCaption('');
    })
    .catch(error => {
      console.error('Error:', error);
      showNotification(ALERT_TYPE.DANGER, 'Failed to update photo');
    })
    .finally(() => setLoadingUpdatePhoto(false));
  };

  const handleAddText = () => {
    if (!textContent) {
      showNotification(ALERT_TYPE.WARNING, 'Please fill all fields');
      return;
    }

    setLoadingText(true);
    fetch('https://fgpc-api.onrender.com/api/texts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: textContent })
    })
    .then(response => response.json())
    .then(data => {
      showNotification(ALERT_TYPE.SUCCESS, 'Text added successfully!');
      setTextContent('');
    })
    .catch(error => {
      console.error('Error:', error);
      showNotification(ALERT_TYPE.DANGER, 'Failed to add text');
    })
    .finally(() => setLoadingText(false));
  };

  const handleUpdateText = () => {
    if (!updateTextId || !updateContent) {
      showNotification(ALERT_TYPE.WARNING, 'Please fill all fields');
      return;
    }

    setLoadingUpdateText(true);
    fetch(`https://fgpc-api.onrender.com/api/texts/${updateTextId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: updateContent })
    })
    .then(response => response.json())
    .then(data => {
      showNotification(ALERT_TYPE.SUCCESS, 'Text updated successfully!');
      setUpdateTextId('');
      setUpdateContent('');
    })
    .catch(error => {
      console.error('Error:', error);
      showNotification(ALERT_TYPE.DANGER, 'Failed to update text');
    })
    .finally(() => setLoadingUpdateText(false));
  };

  const handleAddLink = () => {
    if (!linkType || !linkUrl) {
      showNotification(ALERT_TYPE.WARNING, 'Please fill all fields');
      return;
    }

    setLoadingLink(true);
    fetch('https://fgpc-api.onrender.com/api/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: linkType, url: linkUrl })
    })
    .then(response => response.json())
    .then(data => {
      showNotification(ALERT_TYPE.SUCCESS, 'Link added successfully!');
      setLinkType('');
      setLinkUrl('');
    })
    .catch(error => {
      console.error('Error:', error);
      showNotification(ALERT_TYPE.DANGER, 'Failed to add link');
    })
    .finally(() => setLoadingLink(false));
  };

  const handleUpdateLink = () => {
    if (!updateLinkId || !updateLinkType || !updateLinkUrl) {
      showNotification(ALERT_TYPE.WARNING, 'Please fill all fields');
      return;
    }

    setLoadingUpdateLink(true);
    fetch(`https://fgpc-api.onrender.com/api/links/${updateLinkId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: updateLinkType, url: updateLinkUrl })
    })
    .then(response => response.json())
    .then(data => {
      showNotification(ALERT_TYPE.SUCCESS, 'Link updated successfully!');
      setUpdateLinkId('');
      setUpdateLinkType('');
      setUpdateLinkUrl('');
    })
    .catch(error => {
      console.error('Error:', error);
      showNotification(ALERT_TYPE.DANGER, 'Failed to update link');
    })
    .finally(() => setLoadingUpdateLink(false));
  };

  return (
    <AlertNotificationRoot>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Manage All Links</Text>

        <View style={styles.buttonContainer}>
          <Button title="View All" onPress={() => setView('all')} />
          <Button title="View Magzine" onPress={() => setView('photos')} />
          <Button title="View Notice" onPress={() => setView('texts')} />
          <Button title="View Meetings Links" onPress={() => setView('links')} />
        </View>

        {view === 'all' || view === 'photos' ? (
          <>
            <Text style={styles.subtitle}>Add New Magzine</Text>
            <TextInput
              style={styles.input}
              placeholder="Add Link of magzine"
              value={photoUrl}
              onChangeText={setPhotoUrl}
            />
            <TextInput
              style={styles.input}
              placeholder="Add title of magzine"
              value={caption}
              onChangeText={setCaption}
            />
            <View style={styles.buttonWithLoader}>
              <Button title="click to Add magzine" onPress={handleAddPhoto} disabled={loadingPhoto} />
              {loadingPhoto && <ActivityIndicator style={styles.loader} />}
            </View>

            <Text style={styles.subtitle}>Update Magzine</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter id of magzine"
              value={updatePhotoId}
              onChangeText={setUpdatePhotoId}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="New Magzine Link"
              value={updatePhotoUrl}
              onChangeText={setUpdatePhotoUrl}
            />
            <TextInput
              style={styles.input}
              placeholder="New Title of magzine"
              value={updateCaption}
              onChangeText={setUpdateCaption}
            />
            <View style={styles.buttonWithLoader}>
              <Button title="Update magzine" onPress={handleUpdatePhoto} disabled={loadingUpdatePhoto} />
              {loadingUpdatePhoto && <ActivityIndicator style={styles.loader} />}
            </View>
          </>
        ) : null}

        {view === 'all' || view === 'texts' ? (
          <>
            <Text style={styles.subtitle}>Add New Notice</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Write the new notice"
              value={textContent}
              onChangeText={setTextContent}
              multiline
            />
            <View style={styles.buttonWithLoader}>
              <Button title="Upload new Notice" onPress={handleAddText} disabled={loadingText} />
              {loadingText && <ActivityIndicator style={styles.loader} />}
            </View>

            <Text style={styles.subtitle}>Update Existing Notice</Text>
            <TextInput
              style={styles.input}
              placeholder="select ID to Update"
              value={updateTextId}
              onChangeText={setUpdateTextId}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.textArea}
              placeholder="write Notice of the update"
              value={updateContent}
              onChangeText={setUpdateContent}
              multiline
            />
            <View style={styles.buttonWithLoader}>
              <Button title="Update Notice" onPress={handleUpdateText} disabled={loadingUpdateText} />
              {loadingUpdateText && <ActivityIndicator style={styles.loader} />}
            </View>
          </>
        ) : null}

        {view === 'all' || view === 'links' ? (
          <>
            <Text style={styles.subtitle}>Add New Meeting Link</Text>
            <TextInput
              style={styles.input}
              placeholder="Heading of the meeting"
              value={linkType}
              onChangeText={setLinkType}
            />
            <TextInput
              style={styles.input}
              placeholder="Link URL of the meeting"
              value={linkUrl}
              onChangeText={setLinkUrl}
            />
            <View style={styles.buttonWithLoader}>
              <Button title="Upload Link" onPress={handleAddLink} disabled={loadingLink} />
              {loadingLink && <ActivityIndicator style={styles.loader} />}
            </View>

            <Text style={styles.subtitle}>Update meeting Link</Text>
            <TextInput
              style={styles.input}
              placeholder="select ID to Update"
              value={updateLinkId}
              onChangeText={setUpdateLinkId}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Updateheading of the link"
              value={updateLinkType}
              onChangeText={setUpdateLinkType}
            />
            <TextInput
              style={styles.input}
              placeholder="Update url of the link"
              value={updateLinkUrl}
              onChangeText={setUpdateLinkUrl}
            />
            <View style={styles.buttonWithLoader}>
              <Button title="Update Link" onPress={handleUpdateLink} disabled={loadingUpdateLink} />
              {loadingUpdateLink && <ActivityIndicator style={styles.loader} />}
            </View>
          </>
        ) : null}
      </ScrollView>
    </AlertNotificationRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
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
    marginBottom: 10,
  },
  buttonWithLoader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loader: {
    marginLeft: 10,
  },
});

export default ManageDataComponent;
