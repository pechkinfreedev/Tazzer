import { Center } from 'native-base';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    container: {
        // marginTop:50,
        flexDirection:'row',  
    },
    whiteback: {
        // backgroundColor:'#e6ebf1',
        // paddingBottom:800,
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
    clean7:{
        marginLeft:global.screenwidth - 140,
        marginTop:10,
    },
    woman1:{
        marginTop:-70,
        justifyContent:'center',
        alignItems:'center',
    },
    toprect: {
        width:global.screenwidth,
        // height:240,
        // backgroundColor:'#562b63',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        // marginTop:-50,  
        backgroundColor:'#fff',
    },
    top1: {
        flexDirection: 'row',
        marginLeft:50,
        marginTop:15,
        fontSize:16,
        // color:'white',
        // fontWeight:'bold',
        position:'absolute',
    },
    content:{
        width:global.screenwidth - 40,
        height:global.screenheight - 370,
        backgroundColor:'#fbfbfb',
        borderRadius:20,
        marginLeft:20,
        marginRight:20,
        marginTop:-80,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 1,
    },
    quote:{
        marginTop:-80,
        width:global.screenwidth,
        height:260,
    },
    contenttxt1:{
        width:global.screenwidth - 120,
        height:50,
        borderRadius:30,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 2,
        marginLeft:40,
        marginTop:40,
        flexDirection:'row',
    },
    privacy:{
        marginTop:15,
        marginLeft:20,
        marginRight:15,
    },
    privacy1:{
        marginTop:18,
        marginLeft:20,
        marginRight:15,
    },
    contenttxt2:{
        marginTop:12,
        marginLeft:16,
        fontSize:16,
        color:'#888888',
    },
    contenttxt3:{
        width:global.screenwidth - 220,
        height:50,
        borderRadius:30,
        marginLeft:180 / 2,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        // textAlign:'center',
        backgroundColor:'#562b63',
    },
    contenttxt4:{
        marginTop:0,
        fontSize:18,
        fontWeight:'bold',
        color:'white',
    },
    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})