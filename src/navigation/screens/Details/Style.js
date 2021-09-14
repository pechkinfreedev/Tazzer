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
    clean1:{
        position:'absolute',
        width:50,
        height:50,
        marginLeft:160,
        marginTop:-30,
    },
    toprect: {
        width:global.screenwidth,
        height:110,
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
    top0:{
        width:(global.screenwidth - 40),
        height:40,
        backgroundColor:'white',
        marginTop:20,
        marginLeft:20,
        borderRadius:10,
        flexDirection:'row',
    },
    toptext: {
        paddingTop:10,
        paddingLeft:20,
        fontSize:14,
    },
    toptext1: {
        paddingTop:10,
        paddingLeft:20,
        fontSize:14,
        marginLeft:(global.screenwidth - 250),
    },
    flexrow: {
        flexDirection:'row',
    },
    top1: {
        width:150,
        height:110,
        borderRadius:15,
        backgroundColor:'white',
        marginTop:20,
        textAlign: 'center',
        marginLeft:(global.screenwidth - 310)/2,

    },
    top12: {
        width:150,
        height:110,
        borderRadius:15,
        backgroundColor:'white',
        marginTop:20,
        textAlign: 'center',
        marginLeft:15,
    },
    top1text:{
        textAlign:'center',
        marginTop:5,
    },
    dline1: {                    
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        marginTop:7,
        width:150,
    },
    aimg: {
        margin:11,
        width:20,
        height:20,
    },
    atext: {
        fontSize:12,
        marginTop:5,
    },
    project:{
        marginLeft:40,
        marginTop:5,
        height:30,
        borderRadius:15,
        width:100,
        paddingLeft:20,
        paddingTop:5,
        backgroundColor:'#d8cddb',
    },
    toptext2:{
        paddingTop:10,
        paddingLeft:20,
        fontSize:14,
        marginLeft: 40,        
    },

    top3:{
        width:(global.screenwidth - 40),
        height:200,
        backgroundColor:'white',
        marginTop:20,
        marginLeft:20,
        borderRadius:20,
    },
    topbutton: {
        width:(global.screenwidth - 100),
        backgroundColor:'#fbfbfb',
        height:50,
        marginTop:30,
        borderWidth:2,
        borderColor:'#dddddd',
        borderRadius:30,
        marginLeft: 35,
        paddingLeft:50,
    },
    top3text1: {
        width:100,
        height:40,
        borderWidth:2,
        borderColor:'#562b63',
        borderRadius:20,
        marginTop:30,
        marginLeft:55,
        paddingLeft:15,
        paddingTop:7,
        color:"#562b63",
        
    },
    top3text2: {
        width:100,
        height:40,
        borderWidth:2,
        borderColor:'#562b63',
        borderRadius:20,
        marginTop:30,
        marginLeft:55,
        paddingLeft:15,
        paddingTop:7,
        backgroundColor:'#562b63',
        color:'white',
    },
    borderimg:{
        marginTop:-30,
        marginLeft:50,
        marginBottom:30,
    },


    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})