import { Center } from 'native-base';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    container: {
        backgroundColor:'#ffffff',  
        flexDirection:'row',
        // marginTop:-20,
    },
    imgview:{
        marginLeft:20,
        marginRight:30,
        marginTop:10,
    },
    imgview2:{
        marginLeft: global.screenwidth/5 ,
        marginRight:10,
        marginTop:10,
    },
    textf1:{
        fontSize:14,
        color:'#562b63',        
    },
    textf2:{
        fontSize:14,
        color:'#888888',
        marginLeft:-20,        
    },
    textf3:{
        fontSize:14,
        color:'#888888',
        marginLeft:-10,        
    },
    textf4:{
        fontSize:14,
        color:'#888888',
        marginLeft:4,        
    },
    circleview:{
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
    },
    circle: {
        fontSize:40,
        // fontWeight:'bold',
        backgroundColor:'#562b63',
        width:50,
        height:50,
        color:'white',
        borderRadius:25,
        marginTop:-120,
        paddingLeft:15,
    },
});