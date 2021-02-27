import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Keyboard,
    TextInput,
    Touchable
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

let TodoList = () => {

    return(
        <View style = {TodoListStyles.MainContainer}>
          <View style = {TodoListStyles.TitleSection}> 
            <Text style = {TodoListStyles.TitleText}>{TodoList.Title}</Text>
          </View>
          <View style={TodoListStyles.BodySection}>
            <Text style={TodoListStyles.BodyText}>{TodoList.Text}</Text>
          </View>   
        </View>
    )
}

const TodoListStyles = StyleSheet.create({
    MainContainer:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#EEE'
    },
    TitleSection:{
        flex:0.2,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        paddingLeft:10,
        paddingRight:10,
        marginBottom:5
    },
    TitleText:{
      fontSize: 20,
      fontWeight: "bold",
      fontFamily: 'Roboto'
    },
    BodySection:{
      flex:0.8,
      backgroundColor: 'deepskyblue',
      alignContent: '',
      paddingLeft:10,
      paddingRight:10,
      marginTop:5
    },
    BodyText:{
      fontSize: 14,
      fontWeight: "normal",
      fontFamily: "Roboto"
    }
});
export default TodoList;