import { Center } from 'native-base';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    flexrow:{
        flexDirection:'row',
    },
    container: {
        marginTop:50,
        flexDirection:'row',  
    },
    whiteback: {
        backgroundColor:'#fff',
        paddingBottom:800,
    },
    arrow: {   
        marginLeft:20,
        marginTop:20,
    },
    toprect: {
        width:global.screenwidth,
        height:250,
        backgroundColor:'#562b63',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        marginTop:-50,  
    },
    top1: {
        flexDirection: 'row',
        marginLeft:50,
        marginTop:15,
        fontSize:16,
        color:'white',
        fontWeight:'bold',
        position:'absolute',
    },
    sman:{
        // justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
    edit:{
        marginTop:-20,
        marginLeft:50,
    },
    rect0:{
        width:global.screenwidth - 60,
        marginLeft:30,
        height:50,
        backgroundColor:"#f6f9fe",
        borderRadius:20,
        marginTop:30,
        flexDirection:'row',
    },
    rect1:{
        width:global.screenwidth - 60,
        marginLeft:30,
        height:50,
        backgroundColor:"#f6f9fe",
        borderRadius:20,
        marginTop:20,
        flexDirection:'row',
    },
    person:{
        marginLeft:15,
        marginTop:8,
    },
    person1:{
        marginLeft:15,
        marginTop:8,
    },
    personname:{
        marginTop:13,
        marginLeft:20,
        fontSize:18,
        color:"#555555",
    },
    pen:{
        margin:20,
        marginLeft: 'auto'
    },
    nextbutton:{
        width:120,
        marginLeft:(global.screenwidth - 120)/2,
        height:40,
        backgroundColor:"#562b63",
        borderRadius:20,
        justifyContent:'center',
        alignItems:"center",
        marginTop:80,
        flexDirection:'row',
        fontWeight:"bold",
    },
    nextbuttontxt:{
        color:"white",
        fontSize:16,
    },





    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})