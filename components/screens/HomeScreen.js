import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import { DraggableGrid } from 'react-native-draggable-grid';

const HomeScreen = () => {
    // const [pan, setPan] = useState(new Animated.ValueXY());
    // useEffect(() => {
    //     // Add a listener for the delta value change
    //     pan.addListener(value => _val = value);
    // }, [])

    // var _val = { x: 0, y: 0 };
    // // Initialize PanResponder with move handling
    // var panResponder = PanResponder.create({
    //     onStartShouldSetPanResponder: (e, gesture) => true,
    //     onPanResponderGrant: (e, gesture) => {
    //         pan.setOffset({
    //             x: _val.x,
    //             y: _val.y
    //         })
    //         pan.setValue({ x: 0, y: 0 })
    //     },
    //     onPanResponderMove: Animated.event([
    //         null, { dx: pan.x, dy: pan.y },
    //     ], {useNativeDriver: false}),
    // });

    // const renderDraggable = () => {
    //     const panStyle = {
    //         transform: pan.getTranslateTransform()
    //     }
    //     return (
    //         <View style={{ position: "absolute" }}>
    //             <Animated.View
    //                 {...panResponder.panHandlers}
    //                 style={[panStyle, styles.circle]}
    //             />
    //         </View>
    //     );
    // }

    // return (
    //     <View style={styles.container}>
    //         {renderDraggable()}
    //     </View>
    // )

    const [data, setData] = useState([
        { name: "1", key: "one" },
        { name: "2", key: "two" },
        { name: "3", key: "three" },
        { name: "4", key: "four" },
        { name: "5", key: "five" },
        { name: "6", key: "six" },
        { name: "7", key: "seven" }
    ]);

    const renderItem = (item) => {
        return (
            <View style={styles.notePreview}>
                <Text>{item.name}</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <DraggableGrid
                numColumns={2}
                data={data}
                renderItem={renderItem}
                style={styles.container}
                onDragRelease={data => setData(data)}
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
        flex: 1/2,
        borderWidth: 1
    }
});