import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import { DraggableGrid } from 'react-native-draggable-grid';
import { createAndReturnNote, NoteEditor, NotePreview } from '../notes/Note'

const HomeScreen = () => {
    const sampleData = new Array(25);
    for (let i = 0; i < sampleData.length; i++) {
        sampleData[i] = JSON.parse(JSON.stringify(createAndReturnNote()));
        sampleData[i].key = sampleData[i].Title + i;
    }

    const [data, setData] = useState(sampleData);
    const renderItem = (item) => {
        return (
            <View style={styles.notePreview}>
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
            <DraggableGrid
                numColumns={2}
                data={data}
                renderItem={renderItem}
                onDragStart={() => setDragging(true)}
                onDragRelease={data => {
                    setData(data);
                    setDragging(false);
                }
                }
            />
        </ScrollView>
    )

}

export default HomeScreen;

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