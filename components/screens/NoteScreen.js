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

const HomeScreen = (props) => {
    const sampleData = new Array(10);
    for(let i = 0; i < sampleData.length; i++) {
        sampleData[i] = JSON.parse(JSON.stringify(createAndReturnNote("", "")));
        sampleData[i].key = Math.floor(Math.random() * 100000);
    }

    const [data, setData] = useState(sampleData);

    const renderItem = (item) => {
        return (
            <View key={item.key}>
                <NotePreview note={item}/>
          </View>
        );
    }

    const [dragging, setDragging] = useState(false);

    return (
        <View style={styles.container}>
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
        </View>
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
        flex: 1 / 2,
        borderWidth: 1
    }
});