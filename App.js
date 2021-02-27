import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "./components/screens/HomeScreen";

import { Ionicons } from '@expo/vector-icons';

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

const HomeStack = createStackNavigator();
let HomeStackComponent = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
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
              case "Home": iconName = focused ? "md-home" : "md-home-outline";
                break;
              case "Settings": iconName = focused ? "md-settings" : "md-settings-outline";
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeStackComponent} />
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
