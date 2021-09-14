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
    toprect: {
        width:global.screenwidth,
        height:180,
        backgroundColor:'#562b63',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        marginTop:-50,  
    },
    top1: {
        flexDirection: 'row',
        marginLeft:10,
        marginTop:15,
        fontSize:16,
        color:'white',
        fontWeight:'bold',
    },
    search:{
        width:global.screenwidth - 80,
        height:50,
        backgroundColor:'white',
        borderRadius:10,
        marginLeft:40,
        marginTop:20,
        paddingLeft:30,
    },
    searchimg:{
        marginTop:-40,
        marginLeft:global.screenwidth - 100,

    },
    content:{
        width:global.screenwidth - 40,
        height:50,
        backgroundColor:'white',
        borderRadius:15,
        marginLeft:20,
        marginTop:20,
        flexDirection:'row',
    },
    contentimg: {
        margin:10,
    },  

    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})