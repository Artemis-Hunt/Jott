import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import { PreviewStyles, NoteEditorStyles} from '../styles/previewStyles'

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

const NotePreview = ({ note, navigation }) => {

  const parseDateTimeAsString = (note) => {
    let tmp_created = "Created " + note.DateCreated + " " + note.TimeCreated;
    let tmp_edited = "Edited " + note.DateEdited + " " + note.TimeEdited;
    return tmp_created + '\n' + tmp_edited;
  }

  return (
    <View style={PreviewStyles.MainNoteContainer}>
      <TouchableOpacity style={PreviewStyles.MainButton} disabled={true}>
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