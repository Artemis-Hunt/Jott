import 'react-native-gesture-handler';
import React from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View,
    PanResponder,
    Animated,
    useState,
    useEffect
} from 'react-native';

let HomeScreen = () => {
    const [pan, setPan] = useState(new Animated.ValueXY());
    useEffect(() => {
        // Add a listener for the delta value change
        var _val = { x: 0, y: 0 };
        pan.addListener(value => _val = value);

        // Initialize PanResponder with move handling
        var panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onPanResponderGrant: (e, gesture) => {
                pan.setOffset({
                  x: _val.x,
                  y:_val.y
                })
                pan.setValue({ x:0, y:0 })
              },
            onPanResponderMove: Animated.event([
              null, { dx: pan.x, dy: pan.y }
            ]),
          });
        
        return () => {

        }
    }, [])

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
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
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
    }
});