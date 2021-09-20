import { Center } from 'native-base';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

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
    clean1:{
        position:'absolute',
        width:50,
        height:50,
        marginLeft:160,
        marginTop:-30,
    },
    clean2:{
        position:'absolute',
        width:50,
        height:50,
        marginLeft:-20,
        marginTop:20,
    },
    clean4:{
        position:'absolute',
        width:70,
        height:70,
        marginLeft:global.screenwidth - 60,
        marginTop:10,
    },
    editing:{
        marginTop:30,
        marginLeft:global.screenwidth - 40,
        width:20,
        height:20,
        position:'absolute',
    },
    polygon1:{
        marginLeft:global.screenwidth - 60,
        marginTop:60,
    },
    woman1:{
        marginTop:-70,
        justifyContent:'center',
        alignItems:'center',
    },
    toprect: {
        width:global.screenwidth,
        height:120,
        backgroundColor:'#562b63',
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
    title:{
        textAlign:"center",
        fontSize:24,
        color:"#562b63",
        marginTop:10,
        fontWeight:"bold",
    },
    linkview:{
        width:global.screenwidth - 40,
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        marginLeft:20,
        marginTop:20,
    },
    linktxt:{        
        width:global.screenwidth - 120,
        height:50,
        backgroundColor:"#fcf8f7",
        color:"#562b63",
        fontSize:18,
        fontWeight:"bold",
        borderRadius:10,
        paddingTop:10,
        paddingLeft:15,
    },
    rectbutton:{
        width:60,
        height:50,
        backgroundColor:"#562b63",
        borderRadius:10,
    },
    linkc:{
        marginTop:12,
        marginLeft:17,
    },
    clinktxt:{
        marginTop:20,
        color:"#666666",
        fontSize:14,
        fontStyle: 'italic'
    },
    title2:{
        textAlign:"center",
        fontSize:20,
        color:"#666666",
        marginTop:50,
        fontWeight:"bold",        
    },
    bottom:{
        flexDirection:'row',
        marginTop:10,
        width:global.screenwidth - 100,
        height:60,
        // backgroundColor:"#ff0000",
        marginLeft:50,
    },
    sman1:{
        width:60,
        height:60,
    },
    sman2:{
        width:55,
        height:55,
        marginLeft:-20,
    },
    sman3:{
        width:50,
        height:50,
        marginLeft:-20,
        marginTop:3,
    },
    sman4:{
        width:45,
        height:45,
        marginLeft:-20,
        marginTop:6,
    },
    bottomtxt:{
        fontSize:18,
        color:'#888888',
        margin:15,
        fontWeight:"bold",
    },




    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})