import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View,
    PanResponder,
    Animated,
} from 'react-native';
import { DraggableGrid } from 'react-native-draggable-grid';

const Item = ({item}) => {
    return(
        <View>
            <Text>will be replaced</Text>
        </View>
    )
}

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
        {name: "1", key:"one"},
        {name: "2", key:"two"},
        {name: "3", key:"three"},
        {name: "4", key:"four"},
        {name: "5", key:"five"},
        {name: "6", key:"six"},
        {name: "7", key:"seven"}
        ]);
    return(
        <View>
            <DraggableGrid
                numColumns={2}
                renderItem={Item}
                data={data}
                onDragRelease={data => setData(data)}
            />
        </View>
    )
    
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        backgroundColor: "skyblue",
        width: 20 * 2,
        height: 20 * 2,
        borderRadius: 20
    }
});