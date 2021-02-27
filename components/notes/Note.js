import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

// Note Object
const createAndReturnNote = (title, text) => {
  let dateCreated = new Date();
  let dateEdited = new Date();
  let Note = {
    Title: "This is also a placeholder Title which is very very very very long.",
    Text: "Dynamic Stuff Should Go Here\nnewline\nasdflajdsfadsjflwer 12345678\nlolol\nlolol",
    DateCreated: dateCreated.toLocaleDateString("en-SG"),  // Will be edited once in the constructor
    TimeCreated: dateCreated.toLocaleDateString("en-SG"),
    DateEdited: dateEdited.toLocaleDateString("en-SG"),  // Will be edited once in the constructor
    TimeEdited: dateEdited.toLocaleDateString("en-SG")
  }
  return Note;
}

const NotePreview = ({ note }) => {

  const parseDateTimeAsString = (note) => {
    let tmp_created = "Created " + note.DateCreated + " " + note.TimeCreated;
    let tmp_edited = "Edited " + note.DateEdited + " " + note.TimeEdited;
    return tmp_created + '\n' + tmp_edited;
  }

  return (
    <View style={NotePreviewStyles.MainContainer}>
      <TouchableOpacity style={NotePreviewStyles.MainButton} disabled={true}>
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
    <View></View>
  )
}


export { createAndReturnNote, NoteEditor, NotePreview };

const NotePreviewStyles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EEE'
  },
  MainButton: {
    flex: 1,
    marginTop: 10,
    marginRight: 30,
    marginLeft: 30,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'skyblue',
    borderRadius: 10,
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