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

    content:{
        width:global.screenwidth - 40,
        height:global.screenheight - 200,
        backgroundColor:'white',
        borderRadius:20,
        marginLeft:20,
        marginTop:-55,
        // flexDirection:'row',
    },
    centerimg:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    centerimg1:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        height:120,
        width:200,

    },

    bottombutton:{
        backgroundColor:'#562b63',
        width:200,
        height:35,
        borderRadius:20,
        color:"white",
        textAlign:'center',
        marginTop:22,
        marginLeft: (global.screenwidth- 200)/2,
        paddingTop:7,
        fontSize:14,
        fontWeight:'bold',  
    },
    calendar1:{
        marginLeft:20,
        width:global.screenwidth - 80,
        height:300,
        marginHorizontal: 4,
        padding: -8,
        // borderBottomWidth: 1,
        // borderBottomColor: 'lightgrey'
    },
    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})