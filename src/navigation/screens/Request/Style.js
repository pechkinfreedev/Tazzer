import { Center } from 'native-base';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    container: {
        marginTop:50,
        flexDirection:'row',  
    },
    whiteback: {
        backgroundColor:'#e6ebf1',
    },
    arrow: {   
        marginLeft:20,
        marginTop:20,
    },
    clean2:{
        position:'absolute',
        width:50,
        height:50,
        marginLeft:-10,
        marginTop:20,
    },
    clean1:{
        position:'absolute',
        width:50,
        height:50,
        marginLeft:160,
        marginTop:-30,
    },
    clean3:{
        position:'absolute',
        width:80,
        height:80,
        marginLeft:global.screenwidth - 70,
        marginTop:10,
    },
    rectangle: {
        width:global.screenwidth,
        height:200,
        marginTop:-50,       
    },
    top2: {
        flexDirection: 'row',
        marginLeft:10,
        marginTop:15,
        fontSize:16,
        color:'white',
        fontWeight:'bold',
    },
    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },

    topmain: {
        width:global.screenwidth- 40,
        backgroundColor:'#fff',
        marginLeft:20,
        marginTop:-90,
        marginBottom:20,
        height:global.screenheight - 180,
        borderRadius:20,
    },
    thinking: {
        marginTop:global.screenheight/3,
        marginLeft:(global.screenwidth- 140)/2,
    },
    thinktext:{
        textAlign:'center',
        marginTop:20,
        fontSize:18,
    },
    bottombutton:{
        width:200,
        height:40,
        backgroundColor:'#562b63',
        borderRadius:20,
        textAlign:'center',
        color:'white',
        paddingTop:10,
        marginTop:80,
        marginLeft:(global.screenwidth- 240)/2,

    }
})