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
    
    prefix:{
        width:(global.screenwidth - 60 - 230),
        height:50,
        marginLeft:30,
        marginTop:20,
        backgroundColor:"#f6f9fe",
        borderRadius:20,

    },
    iconflagStyle:{
        width:20,
        height:20,
    },
    phone:{
        width:200,
        height:50,
        marginLeft:20,
        marginTop:20,
        backgroundColor:"#f6f9fe",
        borderRadius:20,
        padding:10,
        flexDirection:"row",
    },
    icphone2:{
        marginTop:8,
        marginLeft:10,
    },
    icphone2txt:{
        width:100,
        height:40,
        marginLeft:10,
    },

    person:{
        margin:13,
    },
    person1:{
        margin:16,
    },
    personname:{
        marginTop:13,
        fontSize:18,
        color:"#555555",
        marginLeft:20,
    },
    pen:{
        margin:20,
        marginLeft: 'auto'
    },
    pen1:{
        marginTop:10,
        marginRight:20,
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
        marginTop:20,
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