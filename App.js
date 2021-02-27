import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NotePreview, NoteEditor } from './components/notes/Note.js';
// import { TodoList } from './components/todo/Todo.js';    // Put stuff here

import NoteScreen from "./components/screens/NoteScreen.js";

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

let SettingsScreen = (props) => {
  return (
    <View style={styles.settings}>
      <Text>This is the settings page</Text>
      <Button
        title="Profile"
        onPress={() => props.navigation.navigate("Profile")}
        style={styles.button}
      />
    </View>
  )
}

let ProfileScreen = (props) => {
  return (
    <View style={styles.settings}>
      <Text>This is the profile page</Text>
    </View>
  )
}

// NoteStack for the Note Home Page
const NoteStack = createStackNavigator();
let NoteStackComponent = () => {
  return(
    <NoteStack.Navigator initialRouteName="NoteScreen">
      <NoteStack.Screen name="NoteScreen" component={NoteScreen} />
      <NoteStack.Screen name="NoteEditor" component={NoteEditor} />
    </NoteStack.Navigator>
  )
}

// TodoStack for the Todo Home Page
const TodoStack = createStackNavigator();
let TodoStackComponent = () => {
  return(
    <TodoStack.Navigator initialRouteName="NoteScreen">
      <TodoStack.Screen name="NoteScreen" component={NoteScreen} />
      <TodoStack.Screen name="NoteEditor" component={NoteEditor} />
    </TodoStack.Navigator>
  )
}

const SettingsStack = createStackNavigator();
let SettingsStackComponent = () => {
  return (
    <SettingsStack.Navigator initialRouteName="Settings">
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Profile" component={ProfileScreen} />
    </SettingsStack.Navigator>
  )
}


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "Notes": iconName = focused ? "book" : "book-outline";
                break;
              case "Settings": iconName = focused ? "md-settings" : "md-settings-outline";
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}
      >
        <Tab.Screen name="Notes" component={NoteStackComponent} />
        <Tab.Screen name="Todo" component={TodoStackComponent} />
        <Tab.Screen name="Settings" component={SettingsStackComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settings: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
