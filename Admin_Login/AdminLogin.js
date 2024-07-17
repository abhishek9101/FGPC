import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AlertNotificationRoot, ALERT_TYPE, Dialog } from 'react-native-alert-notification';

const AdminLogin = ({ navigation }) => {

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password too short')
      .required('Password is required'),
  });

  const handleLogin = (values) => {
    const { email, password } = values;
    if (email === 'abhi@gmail.com' && password === 'abhi@123') {
      navigation.navigate('AdminPageContent');
    } else {
      showNotification(ALERT_TYPE.DANGER, 'Only Admin Can Login');
    }
  };

  const showNotification = (type, message) => {
    Dialog.show({
      type,
      title: 'Notification',
      textBody: message,
      button: 'close',
    });
  };
  return (
    < AlertNotificationRoot>
    <View style={styles.container}>
      <Text style={styles.title}>Only Admin can Login</Text>
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2206/2206368.png' }} 
        style={styles.logo}
      />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput 
              mode="outlined"
              value={values.email} 
              onChangeText={handleChange('email')} 
              onBlur={handleBlur('email')}
              label="Email" 
              style={styles.input}
              keyboardType="email-address"
              placeholder="Enter email"
              error={touched.email && errors.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <TextInput  
              mode="outlined"
              value={values.password} 
              onChangeText={handleChange('password')} 
              onBlur={handleBlur('password')}
              label="Password" 
              style={styles.input}
              secureTextEntry 
              placeholder="Enter password"
              error={touched.password && errors.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
    </AlertNotificationRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF1493',
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 32,
  },
  input: {
    width: '80%',
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  loginButton: {
    width: '80%',
    backgroundColor: '#FF1493',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
    width: '80%',
    textAlign: 'left',
  },
});

export default AdminLogin;
