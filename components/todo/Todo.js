import React from 'react';
import { CheckBox } from 'react-native-elements'
import CheckboxList from 'rn-checkbox-list';

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

const data = [{id: 0, text: 'test 1'}, {id: 1, text: 'test 2'}, {id: 2, text: 'test 3'}]

let TodoList = (props) => {
    return(
        <View style = {TodoListStyles.MainContainer}>
          <CheckboxList
            headerName = 'Test List'
            headerStyle = {TodoListStyles.TitleSection}
            theme = 'dodgerblue'
            listItems = {data}
            listItemStyle = {TodoListStyles.BodySection}
            />
        </View>
    )
}

let TodoPreview = (props) => {
    return(
        <View style = {TodoPreviewStyles.MainContainer}>
            <TouchableOpacity style = {TodoPreviewStyles.MainButton}>
                <View style = {TodoPreviewStyles.TitleSection}>
                    <Text
                      numberOfLines = {1}
                      ellipsizeMode = 'tail'
                      style = {TodoPreviewStyles.TitleText}>
                      {Todo.Title}
                    </Text>
                </View>
                <View style = {TodoPreviewStyles.DateSection}>
                  <Text style = {TodoPreviewStyles.DateText}>13/13/13</Text>
                </View>
            </TouchableOpacity>
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
    DateSection:{
        flex:0.1,
        backgroundColor: 'turquoise',
        justifyContent: 'center',
        paddingLeft:10,
        paddingRight:10,
        marginTop:1,
        marginBottom:1
    },
    DateText:{
      fontSize: 10,
      fontWeight: "normal",
      fontStyle: ''
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

const TodoPreviewStyles = StyleSheet.create({
    MainContainer:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#EEE'
    },
    MainButton:{
        marginTop:10,
        marginRight:30,
        marginLeft:30,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'skyblue',
        borderRadius:10,
        borderWidth:1,
        borderColor: '#fff',
        flexDirection: 'column',
        width: null,  // Defined as a parameter?
        height: null   // Defined as a parameter?
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
    DateSection:{
        flex:0.1,
        backgroundColor: 'turquoise',
        justifyContent: 'center',
        paddingLeft:10,
        paddingRight:10,
        marginTop:1,
        marginBottom:1
    },
    DateText:{
      fontSize: 10,
      fontWeight: "normal",
      fontStyle: ''
    }
});
export default TodoList;