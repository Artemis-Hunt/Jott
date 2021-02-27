import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
} from 'react-native';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

// Note Object
const createAndReturnNote = (title, text) => {
  let dateCreated = new Date();
  let dateEdited = new Date();
  let Note = {
    Title: (title.trim()=="") ? "Default Title" : title,
    Text: (text.trim()=="") ? "Default Text" : text,
    DateCreated: dateCreated.toLocaleDateString("en-SG"),  // Will be edited once in the constructor
    TimeCreated: dateCreated.toLocaleTimeString("en-SG"),
    DateEdited: dateEdited.toLocaleDateString("en-SG"),  // Will be edited once in the constructor
    TimeEdited: dateEdited.toLocaleTimeString("en-SG")
  }
  return Note;
}

const NotePreview = ({ note, props }) => {

  const parseDateTimeAsString = (note) => {
    let tmp_created = "Created " + note.DateCreated + " " + note.TimeCreated;
    let tmp_edited = "Edited " + note.DateEdited + " " + note.TimeEdited;
    return tmp_created + '\n' + tmp_edited;
  }

  return (
    <View style={NotePreviewStyles.MainContainer}>
      <TouchableOpacity style={NotePreviewStyles.MainButton}
        onPress = {() => props.navigation.navigate("NoteEditor")}
        disabled={false}
        >
        <View style={NotePreviewStyles.TitleSection}>
          <Text
            numberOfLines={2}
            ellipsizeMode='tail'
            style={NotePreviewStyles.TitleText}>
            {note.Title}
          </Text>
        </View>
        <View style={NotePreviewStyles.DateSection}>
          <Text style={NotePreviewStyles.DateText}>{parseDateTimeAsString(note)}</Text>
        </View>
        <View style={NotePreviewStyles.BodySection}>
          <Text
            numberOfLines={4}
            ellipsizeMode='tail'
            style={NotePreviewStyles.BodyText}>
            {note.Text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const NoteEditor = (props) => {
  return (
    <View>
        <Button
            title="Profile"
            onPress={() => props.navigation.navigate("NoteScreen")}
        >
            <Text>This is the note editor</Text>
        </Button>
    </View>
  )
}


export { createAndReturnNote, NoteEditor, NotePreview };

const NotePreviewStyles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'skyblue',
    height: responsiveHeight(42.5), // 50% of window height
    width: responsiveWidth(42.5), // 50% of window width
    borderRadius: 10,
    flexDirection: 'column',
  },
  MainButton: {
    flex: 1
  },
  TitleSection: {
    flex: 0.2,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 3
  },
  TitleText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "bold",
    fontFamily: 'Roboto'
  },
  DateSection: {
    flex: 0.15,
    backgroundColor: 'turquoise',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 1,
    marginBottom: 1
  },
  DateText: {
    fontSize: responsiveFontSize(1),
    fontWeight: "normal",
    fontStyle: 'italic'
  },
  BodySection: {
    flex: 0.8,
    backgroundColor: 'deepskyblue',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 3
  },
  BodyText: {
    fontSize: responsiveFontSize(1.4),
    fontWeight: "normal",
    fontFamily: "Roboto"
  }
});

const NoteEditorStyles = StyleSheet.create({

});