import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import RNUpiPayment from 'react-native-upi-payment';
import { AlertNotificationRoot, ALERT_TYPE, Dialog } from 'react-native-alert-notification';

const DonationPage = () => {
  const showNotification = (type, message) => {
    Dialog.show({
      type,
      title: 'Notification',
      textBody: message,
      button: 'Close',
    });
  };

  const handlePayment = () => {
    RNUpiPayment.initializePayment(
      {
        vpa: 'abhishekraj9101-1@okaxis',
        payeeName: 'Abhishek',
        amount: '20',
        transactionRef: 'aasf-332-aoei-fn',
      },
      (data) => {
        // Success callback
        console.log('Payment success: ', data);
        showNotification(ALERT_TYPE.SUCCESS, 'You have successfully donated ₹20');
      },
      (error) => {
        // Failure callback
        console.log('Payment failure: ', error);
        showNotification(ALERT_TYPE.DANGER, 'Your donation payment was cancelled or failed.');
      }
    );
  };

  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        <Text style={styles.header}>Get me a cup of coffee. ☕</Text>
        <TouchableOpacity onPress={handlePayment}>
          <Image
            source={{ uri: 'https://miro.medium.com/v2/resize:fit:400/1*MgGIm08OdUTUvgNyaUl0hw.jpeg' }}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </AlertNotificationRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default DonationPage;
