import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import { DraggableGrid } from 'react-native-draggable-grid';
import {createAndReturnTodo, TodoList, TodoPreview} from '../todo/Todo';

const data = [{id: 0, text: 'test 1'}, {id: 1, text: 'test 2'}, {id: 2, text: 'test 3'}]

const HomeScreen = (props) => {
    const sampleData = new Array(3);
    for(let i = 0; i < sampleData.length; i++) {
        sampleData[i] = JSON.parse(JSON.stringify(createAndReturnTodo("", data)));
        sampleData[i].key = sampleData[i].Title + i;
    }

    const [data, setData] = useState(sampleData);

    const renderItem = (item) => {
        return (
            <View key={item.key} style={styles.todoPreview}>
                <TodoPreview todo={item} />
          </View>
        );
    }

    const [dragging, setDragging] = useState(false);

    return (
        <ScrollView style={styles.container} scrollEnabled={!dragging}>
            <DraggableGrid
                numColumns={1}
                data={data}
                renderItem={renderItem}
                onDragWillStart={() => setDragging(true)}
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
        backgroundColor: '#eee',
    },
    todoPreview: {
        flex: 1,
    }
});