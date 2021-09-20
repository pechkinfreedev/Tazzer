import { Center } from 'native-base';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    container: {
        marginTop:50,
        flexDirection:'row',  
    },
    whiteback: {
        backgroundColor:'#fbfcff',
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
    clean8:{
        marginLeft:global.screenwidth - 60,
        width:60,
        height:60,
        // marginTop:10,
        position:'absolute',
    },
    clean9:{
        marginLeft:global.screenwidth - 70,
        marginTop:60,
        position:'absolute',
    },
    woman1:{
        marginTop:-70,
        justifyContent:'center',
        alignItems:'center',
    },
    toprect: {
        width:global.screenwidth,
        height:140,
        backgroundColor:'#562b63',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
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
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        flexDirection:'row',
        width:global.screenwidth,
        height:global.screenheight - 85,
    },
    contenttxt:{
        margin:12,
        fontSize:18,
    },
    circlepluse:{
        marginLeft:'auto',
        marginTop:10,
    },
    contenttxt1:{
        marginTop:8,
        marginLeft:20,
        fontSize:16,
    },
    contenttxt2:{
        // marginTop:5,
        marginLeft:20,
        fontSize:14,
        color:'#999999',
    },
    content1:{
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        flexDirection:'row',

        // height:600,
    },
    circlepluse1:{
        marginLeft:'auto',
        marginTop:10,
    },
    circlebottom:{
        marginLeft:28,
        marginTop:-10,
    },
    manimg:{
        width: 35,
        height:35,
    },




    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})