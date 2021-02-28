import React from 'react';
import { CheckBox } from 'react-native-elements'
import CheckboxList from 'rn-checkbox-list';

import {
    TouchableOpacity,
    Text,
    View,
    Keyboard,
    TextInput,
    Touchable
} from 'react-native';

import { PreviewStyles, TodoListStyles } from '../styles/previewStyles'

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
        <View style = {PreviewStyles.MainTodoContainer}>
            <TouchableOpacity disabled={true} style = {PreviewStyles.MainButton}>
                <View style = {PreviewStyles.TitleSection}>
                    <Text
                      numberOfLines = {1}
                      ellipsizeMode = 'tail'
                      style = {PreviewStyles.TitleText}>
                      {todo.Title}
                    </Text>
                </View>
                <View style = {PreviewStyles.DateSection}>
                  <Text style = {PreviewStyles.DateText}>{parseDateTimeAsString(todo)}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export {createAndReturnTodo, TodoList, TodoPreview};