import PouchDB from 'pouchdb-react-native'
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const notesDb = new PouchDB("Notes");

export const fetchNotesFromDb = async () => {
    try {
        let notesFromDb = await notesDb.get('notes');
        return notesFromDb.notesArray;
    } catch (err) {
        if (err.name === "not_found")
            notesDb.put({
                _id: 'notes',
                notesArray: []
            });
    }
}

export const saveNotesToDb = (currentNotesArray) => {
    notesDb.get('notes').then(notes => {
        notes.notesArray = currentNotesArray;
        return notesDb.put(notes);
    })
}

