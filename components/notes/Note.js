import React, { useEffect } from 'react';
import {
  View,
  Text,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';
import { saveNotesToDb } from '../database/pouchdb';

import { PreviewStyles, NoteEditorStyles } from '../styles/previewStyles'

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

const parseDateTimeAsString = (note) => {
  let tmp_created = "Created " + note.DateCreated + " " + note.TimeCreated;
  let tmp_edited = "Edited " + note.DateEdited + " " + note.TimeEdited;
  return tmp_created + '\n' + tmp_edited;
}

const NotePreview = ({ note, navigation }) => {

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

const NoteEditor = ({ route, navigation }) => {

  let { item, notes } = route.params
  const [value_title, onChangeText_title] = React.useState(item.Title);
  const [value_body, onChangeText_body] = React.useState(item.Text);

  const saveText = (text, isTitle) => {
    // alert("Keyboard Hidden");
    let lastEdit = new Date();
    if (isTitle)
      item.Title = text;
    else
      item.Text = text;
    item.DateEdited = lastEdit.toLocaleDateString("en-SG")
    item.TimeEdited = lastEdit.toLocaleTimeString("en-SG")
    saveNotesToDb(notes);
    //alert(item.Title);
  };

  return (
    <View>
      <TextInput
        placeholder="Title..."
        multiline
        numberOfLines={2}
        onSubmitEditing={Keyboard.dismiss}
        onChangeText={text => { onChangeText_title(text); saveText(text, true) }}
        value={value_title}
      ></TextInput>
      <Text>
        {parseDateTimeAsString(item)}
      </Text>
      <TextInput
        placeholder="Body"
        multiline
        numberOfLines={2}
        onSubmitEditing={Keyboard.dismiss}
        onChangeText={text => { onChangeText_body(text); saveText(text, false) }}
        value={value_body}
      />
    </View>
  )
}


export { createAndReturnNote, NoteEditor, NotePreview };