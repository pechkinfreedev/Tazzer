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
    toprect: {
        width:global.screenwidth,
        height:320,
        backgroundColor:'#562b63',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
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
    toptext:{
        margin:20,
    },
    timesec:{
        fontSize:64,
        textAlign:'center',
        marginTop:-10,
    },
    topright:{
        marginLeft: (global.screenwidth- 140)/2,
        marginTop:20,
        width:90,
        height:30,
        fontSize:14,
        paddingTop:5,
        paddingLeft:15,
        backgroundColor:"#cccccc",
        borderRadius:30,
    },
    flexrow:{
        flexDirection:'row',
    },
    topmain0: {
        width:global.screenwidth- 40,
        backgroundColor:'#fff',
        marginLeft:20,
        marginTop:50,
        position:'absolute',
        marginBottom:20,
        height:170,
        borderRadius:20,
    },
    topmain1: {
        width:global.screenwidth- 40,
        backgroundColor:'#6b4a75',
        marginLeft:20,
        marginTop:180,
        position:'absolute',
        marginBottom:20,
        height:70,
        borderRadius:20,
    },
    topmain: {
        width:global.screenwidth- 40,
        backgroundColor:'#fff',
        marginLeft:20,
        marginTop:20,
        marginBottom:20,
        height: 325,
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
        marginTop:35,
        marginLeft:(global.screenwidth- 240)/2,
    },
    dline: {                    
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        width:global.screenwidth-40,  
    },
    dline1: {                    
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        width:global.screenwidth-40,
        marginTop:20,  
    },
    tracking:{
        marginLeft:50,
        marginTop:10,
        width:15,
        height:15,
    },
    clockname:{
        fontSize:14,
        marginTop:7,
        marginLeft:10,
    },
    totalfont:{
        color:'white',
        fontSize:12,
        marginTop:44,
        marginLeft:30,
    },
    totalfont1:{
        color:'white',
        fontSize:12,
        marginTop:44,
        marginLeft:80,
    },
    attachment:{
        width:120,
        backgroundColor:'#562b63',
        borderRadius:20,
        color:'white',
        textAlign:'center',
        paddingTop:5,
        marginTop:30,
        height:30,
        marginLeft:(global.screenwidth - 300)/3,
    },
    attachment1:{
        width:120,
        backgroundColor:'#fff',
        borderRadius:20,
        color:'black',
        borderWidth:2,
        paddingTop:5,
        borderColor:'#562b63',
        textAlign:'center',
        marginTop:30,
        marginLeft:50,
        height:30,
    },
    attachment2:{
        width:120,
        backgroundColor:'#fff',
        borderRadius:20,
        color:'black',
        borderWidth:2,
        paddingTop:5,
        borderColor:'#562b63',
        textAlign:'center',
        marginTop:30,
        marginLeft:(global.screenwidth - 310)/2,
        height:30,
    },
    midtext:{
        marginLeft:40,
        marginTop:10,
    },
    addnot:{
        width:300,
        height:40,
        backgroundColor:'#fbfbfb',
        borderRadius:30,
        // textAlign:'center',
        borderWidth:2,
        borderColor:'#eeeeee',
        marginTop:25,
        paddingLeft:30,
        paddingTop:10,
        marginLeft:(global.screenwidth - 340)/2,
    },
    imginter:{
        marginRight:20,
    },
    imgborder:{
        marginTop:43,
        marginLeft:-290,
    },
    iconsize: {
        width:17,
        height:17,
    }
    
})