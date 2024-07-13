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
const Stack=createNativeStackNavigator()


function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
      <Stack.Screen name="Start" component={StartScreen} options={{ title: 'Start' }} />
        <Stack.Screen name='Home' component={SongListScreen}/>
        <Stack.Screen name='SongDetails' component={SongDetailScreen}/>
        <Stack.Screen name="Developers" component={Creator}/>
        <Stack.Screen name='chorus' component={CourseSong}/>
        <Stack.Screen name='CourseDetails' component={CourseSongDetails}/>
        <Stack.Screen name="UseFulLink" component={UseFulLink}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
