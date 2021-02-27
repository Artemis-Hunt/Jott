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

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const data = [{id: 0, text: 'test 1'}, {id: 1, text: 'test 2'}, {id: 2, text: 'test 3'}]

// Todo Object
const createAndReturnTodo = (title, data) => {
    let dateCreated = new Date();
    let dateEdited = new Date();
    let Todo = {
      Title: (title.trim()=="") ? "Default Title" : title,
      ListItems: data,
      DateCreated: dateCreated.toLocaleDateString("en-SG"),  // Will be edited once in the constructor
      TimeCreated: dateCreated.toLocaleTimeString("en-SG"),
      DateEdited: dateEdited.toLocaleDateString("en-SG"),  // Will be edited once in the constructor
      TimeEdited: dateEdited.toLocaleTimeString("en-SG")
    }
    return Todo;
}
  
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

let TodoPreview = ({todo}) => {
    const parseDateTimeAsString = (todo) => {
        let tmp_created = "Created " + todo.DateCreated + " " + todo.TimeCreated;
        let tmp_edited = "Edited " + todo.DateEdited + " " + todo.TimeEdited;
        return tmp_created + '\n' + tmp_edited;
    }

    return(
        <View style = {TodoPreviewStyles.MainContainer}>
            <TouchableOpacity disabled={true} style = {TodoPreviewStyles.MainButton}>
                <View style = {TodoPreviewStyles.TitleSection}>
                    <Text
                      numberOfLines = {1}
                      ellipsizeMode = 'tail'
                      style = {TodoPreviewStyles.TitleText}>
                      {todo.Title}
                    </Text>
                </View>
                <View style = {TodoPreviewStyles.DateSection}>
                  <Text style = {TodoPreviewStyles.DateText}>{parseDateTimeAsString(todo)}</Text>
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
      fontSize: responsiveFontSize(2.5),
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
        fontSize: responsiveFontSize(1),
        fontWeight: "normal",
        fontStyle: 'italic'
    },
    BodySection:{
      flex:0.8,
      backgroundColor: 'deepskyblue',
      alignContent: 'center',
      paddingLeft:10,
      paddingRight:10,
      marginTop:5
    },
    BodyText:{
      fontSize: responsiveFontSize(1.4),
      fontWeight: "normal",
      fontFamily: "Roboto"
    }
});

const TodoPreviewStyles = StyleSheet.create({
    MainContainer:{
        flex:1,
        justifyContent: 'center',
        marginTop:10,
        marginRight:30,
        marginLeft:30,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'skyblue',
        borderRadius:10,
        flexDirection: 'column',
        height: responsiveHeight(5), // 50% of window height
        width: responsiveWidth(80), // 50% of window width
    },
    MainButton:{
        flex: 1,
    },
    TitleSection:{
        flex:3,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        paddingLeft:10,
        paddingRight:10,
        marginBottom:5
    },
    TitleText:{
      fontSize: responsiveFontSize(2.5),
      fontWeight: "bold",
      fontFamily: 'Roboto'
    },
    DateSection:{
        flex:2,
        backgroundColor: 'turquoise',
        justifyContent: 'center',
        paddingLeft:10,
        paddingRight:10,
        marginTop:1,
        marginBottom:1
    },
    DateText:{
        fontSize: responsiveFontSize(1),
        fontWeight: "normal",
        fontStyle: 'italic'
    }
});
export {createAndReturnTodo, TodoList, TodoPreview};