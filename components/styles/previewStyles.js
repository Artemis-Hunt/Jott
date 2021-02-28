import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

import { StyleSheet } from 'react-native';

const PreviewStyles = StyleSheet.create({
    MainTodoContainer:{
        flex:1,
        justifyContent: 'center',
        marginTop:10,
        marginRight:30,
        marginLeft:30,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'skyblue',
        borderRadius:10,
        flexDirection: 'column',
        height: responsiveHeight(5), // 50% of window height
        width: responsiveWidth(80), // 50% of window width
    },
    MainNoteContainer:{
        flex:1,
        justifyContent: 'center',
        marginTop:10,
        marginRight:30,
        marginLeft:30,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'skyblue',
        borderRadius:10,
        flexDirection: 'column',
        height: responsiveHeight(43), // 50% of window height
        width: responsiveWidth(43), // 50% of window width
    },
    MainButton:{
        flex: 1,
    },
    TitleSection:{
        flex:0.4,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        paddingLeft:10,
        paddingRight:10,
        marginBottom:5
    },
    TitleText:{
      fontSize: responsiveFontSize(2.5),
      fontWeight: "bold",
      fontFamily: 'Roboto'
    },
    DateSection:{
        flex:0.1,
        backgroundColor: 'turquoise',
        justifyContent: 'center',
        paddingLeft:10,
        paddingRight:10,
        marginTop:1,
        marginBottom:1
    },
    DateText:{
        fontSize: responsiveFontSize(1),
        fontWeight: "normal",
        fontStyle: 'italic'
    },
    BodySection:{
        flex:0.8,
        backgroundColor: 'deepskyblue',
        alignContent: 'center',
        paddingLeft:10,
        paddingRight:10,
        marginTop:5
      },
    BodyText:{
        fontSize: responsiveFontSize(1.5),
        fontWeight: "normal",
        fontFamily: "Roboto"
      }
});

const TodoListStyles = StyleSheet.create({
    MainContainer:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#EEE'
    },
    TitleSection:{
        flex:0.2,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        paddingLeft:10,
        paddingRight:10,
        marginBottom:5
    },
    TitleText:{
      fontSize: responsiveFontSize(2.5),
      fontWeight: "bold",
      fontFamily: 'Roboto'
    },
    DateSection:{
        flex:0.1,
        backgroundColor: 'turquoise',
        justifyContent: 'center',
        paddingLeft:10,
        paddingRight:10,
        marginTop:1,
        marginBottom:1
    },
    DateText:{
        fontSize: responsiveFontSize(1),
        fontWeight: "normal",
        fontStyle: 'italic'
    },
    BodySection:{
      flex:0.8,
      backgroundColor: 'deepskyblue',
      alignContent: 'center',
      paddingLeft:10,
      paddingRight:10,
      marginTop:5
    },
    BodyText:{
      fontSize: responsiveFontSize(1.2),
      fontWeight: "normal",
      fontFamily: "Roboto"
    }
});

const NoteEditorStyles = StyleSheet.create({

});

export {PreviewStyles, TodoListStyles, NoteEditorStyles};