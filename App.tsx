/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import SongListScreen from '../FGPC/Components/SongListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SongDetailScreen from '../FGPC/Components/SongDetailsScreen';
import StartScreen from '../FGPC/Components/StartScreen';
import Creator from './Creator/Creator';
import CourseSong from './CourseSong/CourseSong';
import CourseSongDetails from './CourseSong/CourseSongDetails';
import UseFulLink from './Components/UseFulLink/UseFulLink';
import AdminLogin from './Admin_Login/AdminLogin';
import AdminPageContent from './Admin_Login/AdminPageContent';
import MediaMagazine from './Components/MediaMagazine/MediaMagzine';
import Notice from './Components/Notice/Notice';
import Donate from './Components/Donate/Donate';
const Stack=createNativeStackNavigator()


function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
      <Stack.Screen name="Start" component={StartScreen} options={{ title: 'Praise The Lord' }} />
        <Stack.Screen name='Home' component={SongListScreen}  options={{ title: 'List of Song' }} />
        <Stack.Screen name='SongDetails' component={SongDetailScreen}/>
        <Stack.Screen name="Developers" component={Creator}/>
        <Stack.Screen name='chorus' component={CourseSong}/>
        <Stack.Screen name='CourseDetails' component={CourseSongDetails}/>
        <Stack.Screen name="UseFulLink" component={UseFulLink}/>
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="AdminPageContent" component={AdminPageContent}/>
        <Stack.Screen name='Media&Magazine' component={MediaMagazine}/>
        <Stack.Screen name="Notice" component={Notice}/>
        <Stack.Screen name='Donate' component={Donate}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
