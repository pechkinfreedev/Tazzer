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
        height:340,
        backgroundColor:'#562b63',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        marginTop:-50,  
    },
    name:{
        color:'white',
        fontSize:18,
        marginTop:-10,
    },
    name1:{
        color:'white',
        fontSize:14,
    },
    name2:{
        color:'#999999',
        fontSize:14,
        marginTop:-70,
        marginLeft:260,
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
        height:global.screenheight - 320,
        backgroundColor:'white',
        borderRadius:20,
        marginLeft:20,
        marginRight:20,
        marginTop:-100,
    },
    contenttext:{
        flexDirection:'row',
        width: global.screenwidth - 80,
        margin:20,
        borderRadius:10,
        backgroundColor:'#fff',
        height:45,  
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 1,
    },
    contenttext1:{
        flexDirection:'row',
        width: global.screenwidth - 80,
        marginLeft:20,
        
        marginBottom:10,
        borderRadius:10,
        backgroundColor:'#fff',
        height:45,  
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 1,
    },
    proimg:{
        margin:10,
        width:30,
        height:30,
    },
    protext:{
        margin:10,
        fontSize:20,
        color:"#888888",
    },
    mask:{
        width:global.screenwidth,
        height:global.screenheight - 140,
        backgroundColor:'black',
        position:'absolute',
        opacity:0.5,
        zIndex:2,
    },

    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})