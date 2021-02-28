import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button
} from 'react-native';
import { DraggableGrid } from 'react-native-draggable-grid';
import { createAndReturnNote, NoteEditor, NotePreview } from '../notes/Note'
import { addNoteToDb, fetchNotesFromDb, saveNotesToDb } from "../database/pouchdb"

const NoteScreen = (props) => {
    const [data, setData] = useState(new Array(0));

    useEffect(() => {
        fetchNotesFromDb().then(data => setData(data));
        props.navigation.setOptions({
            headerRight: () =>
                <Button
                    onPress={() => {
                        let tempData = [...data];
                        tempData.unshift(createAndReturnNote());
                        setData(tempData);
                        saveNotesToDb(data);
                    }
                    }
                    title={"Add"} />
        })
    }, [])

    const renderItem = (item) => {
        return (
            <View>
                <NotePreview
                    note={item}
                />
            </View>
        );
    }

    const [dragging, setDragging] = useState(false);

    return (
        <ScrollView
            style={styles.container}
            scrollEnabled={!dragging}
        >
            {data.length === 0 ? <View></View> :
                <DraggableGrid
                    numColumns={2}
                    data={data}
                    renderItem={renderItem}
                    onItemPress={item => props.navigation.navigate("NoteEditor", {
                        item: item,
                        notes: data
                    })}
                    onDragWillStart={() => setDragging(true)}
                    onDragRelease={data => {
                        setData(data);
                        setDragging(false);
                    }
                    }
                />}
        </ScrollView>
    )

}

export default NoteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 1
    },
    notePreview: {
        marginTop: 10,
        marginRight: 30,
        marginLeft: 30,
        paddingTop: 15,
        paddingBottom: 15,
    }
});