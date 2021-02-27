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

let NotePreview = (props, Note) => {
    return(
        <View style={NotePreviewStyles.MainContainer}>
            <TouchableOpacity style={NotePreviewStyles.MainButton}>
                <View style={NotePreviewStyles.TitleSection}>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode='tail'
                      style={NotePreviewStyles.TitleText}>
                      {Note.Title}
                    </Text>
                </View>
                <View style={NotePreviewStyles.DateSection}>
                  <Text style={NotePreviewStyles.DateText}>{Note.Date_String()}</Text>
                </View>
                <View style={NotePreviewStyles.BodySection}>
                    <Text
                      numberOfLines={4}
                      ellipsizeMode='tail'
                      style={NotePreviewStyles.BodyText}>
                      {Note.Text}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

let NoteEditor = (props) => {
return(
    <View></View>
)}


export default Note;

const NotePreviewStyles = StyleSheet.create({
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

const NoteEditorStyles = StyleSheet.create({

});