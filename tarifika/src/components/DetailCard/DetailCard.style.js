import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'pink',
        borderColor:'orange',
        borderWidth:2,
        margin: 10,
        flexDirection: 'column',
        borderRadius: 10,
       
    },
    image:{
        width: 100,
        minHeight: 100,

    },
    title:{
        fontWeight:'bold',
        fontSize: 18,
        marginLeft: 10,
    },
    area:{
        fontSize: 12,
        margin: 5,

    },
    instructions:{
        fontSize: 10,
    },
    button:{},
    borderStyle:{
        borderBottomWidth: 10,
        borderBottomColor: 'blue',
        backgroundColor: 'red',
    }
});
