import { Center } from 'native-base';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    container: {
        marginTop:50,
        flexDirection:'row',  
    },
    whiteback: {
        backgroundColor:'#e6ebf1',
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
        height:240,
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
    content:{
        width:global.screenwidth - 40,
        height:global.screenheight - 220,
        backgroundColor:'white',
        borderRadius:20,
        marginLeft:20,
        marginRight:20,
        marginTop:-100,
    },
    contenttext:{
        flexDirection:'row',
        width: global.screenwidth - 80,
        marginLeft:20,
        marginTop:30,
        marginBottom:0,
        borderRadius:20,
        height:100,
        backgroundColor:'#562b63',
    },
    contenttext1:{
        flexDirection:'row',
        width: global.screenwidth - 80,
        marginLeft:20,
        marginTop:30,
        marginBottom:0,
        borderRadius:20,
        height:100,
        backgroundColor:'#38c5f0',
    },
    contenttext2:{
        flexDirection:'row',
        width: global.screenwidth - 80,
        marginLeft:20,
        marginTop:30,
        marginBottom:0,
        borderRadius:20,
        height:100,
        backgroundColor:'#ed0676',
    },
    contenttext3:{
        flexDirection:'row',
        width: global.screenwidth - 80,
        marginLeft:20,
        marginTop:30,
        marginBottom:0,
        borderRadius:20,
        height:100,
        backgroundColor:'#4bd395',
    },
    path30:{
        marginLeft:10,
        marginTop:50,
        height:50,
    },
    patharrow:{
        marginLeft:-40,
        marginTop:80,
    },
    dashboard:{
        margin:10,
    },
    booking:{
        width:50,
        height:50,
        marginLeft:-40,
        marginTop:5,
    },
    dashtext:{
        color:'white',
        textAlign:'center',
        fontSize:24,
        marginTop:10,
        marginLeft:-200,
        fontWeight:'bold',
    },

    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})