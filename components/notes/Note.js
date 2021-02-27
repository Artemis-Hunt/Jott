import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

// Note Object
const createAndReturnNote = (title, text) => {
  let dateCreated = new Date();
  let dateEdited = new Date();
  let Note = {
    key: dateCreated.toLocaleString("en-SG"),
    Title: "This is also a placeholder Title which is very very very very long.",
    Text: "Dynamic Stuff Should Go Here\nnewline\nasdflajdsfadsjflwer 12345678\nlolol\nlolol",
    DateCreated: dateCreated.toLocaleDateString("en-SG"),  // Will be edited once in the constructor
    TimeCreated: dateCreated.toLocaleTimeString("en-SG"),
    DateEdited: dateEdited.toLocaleDateString("en-SG"),  // Will be edited once in the constructor
    TimeEdited: dateEdited.toLocaleTimeString("en-SG")
  }
  return Note;
}

const NotePreview = ({ note, navigation }) => {

  const parseDateTimeAsString = (note) => {
    let tmp_created = "Created " + note.DateCreated + " " + note.TimeCreated;
    let tmp_edited = "Edited " + note.DateEdited + " " + note.TimeEdited;
    return tmp_created + '\n' + tmp_edited;
  }

  return (
    <View style={NotePreviewStyles.MainContainer}>
      <View style={NotePreviewStyles.MainButton}>
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
      </View>
    </View>
  )
}

const NoteEditor = ({route, navigation}) => {
  let { item } = route.params
  return (
    <View>
      <Text>{item.Title}</Text>
    </View>
  )
}


export { createAndReturnNote, NoteEditor, NotePreview };

const NotePreviewStyles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  MainButton: {
    flex: 1,
    backgroundColor: 'skyblue',
    flexDirection: 'column',
    width: null,  // Defined as a parameter?
    height: null   // Defined as a parameter?
  },
  TitleSection: {
    flex: 0.2,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 5
  },
  TitleText: {
    fontSize: 10,
    fontWeight: "bold",
    fontFamily: 'Roboto'
  },
  DateSection: {
    flex: 0.1,
    backgroundColor: 'turquoise',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 1,
    marginBottom: 1
  },
  DateText: {
    fontSize: 10,
    fontWeight: "normal",
  },
  BodySection: {
    flex: 0.8,
    backgroundColor: 'deepskyblue',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5
  },
  BodyText: {
    fontSize: 14,
    fontWeight: "normal",
    fontFamily: "Roboto"
  }
});

const NoteEditorStyles = StyleSheet.create({

});