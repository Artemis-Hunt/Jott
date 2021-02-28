import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { PreviewStyles, NoteEditorStyles} from '../styles/previewStyles'

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
    <View style={PreviewStyles.MainNoteContainer}>
      <View style={PreviewStyles.MainButton} >
        <View style={PreviewStyles.TitleSection}>
          <Text
            numberOfLines={2}
            ellipsizeMode='tail'
            style={PreviewStyles.TitleText}>
            {note.Title}
          </Text>
        </View>
        <View style={PreviewStyles.DateSection}>
          <Text style={PreviewStyles.DateText}>{parseDateTimeAsString(note)}</Text>
        </View>
        <View style={PreviewStyles.BodySection}>
          <Text
            numberOfLines={4}
            ellipsizeMode='tail'
            style={PreviewStyles.BodyText}>
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