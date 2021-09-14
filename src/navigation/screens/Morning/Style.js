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
        height:100,
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
        height:210,
        backgroundColor:'white',
        borderRadius:15,
        marginLeft:20,
        marginTop:15,
        // flexDirection:'row',
    },
    title:{
        textAlign:'center',
        marginTop:10,        
        fontSize:20,
    },
    title1:{
        textAlign:'center',
        marginTop:10,        
        fontSize:16,
    },
    contentimg: {
        margin:10,
        marginTop:10,
        width:global.screenwidth - 60,
        height:100,
        borderRadius:20,
    },  
    viewimg:{
        width:global.screenwidth - 80,
        height:100,
        borderRadius:20,
    },
    content1:{
        width:global.screenwidth - 40,
        height:55,
        backgroundColor:'white',
        borderRadius:15,
        marginLeft:20,
        marginTop:15,       
    },
    name1:{
        marginTop:6,
        marginLeft:20,
    },
    nameinput:{
        marginTop:-10,
        marginLeft:20,   
        width:global.screenwidth - 60,   
    },
  
    content2:{
        width:global.screenwidth - 40,
        height:105,
        backgroundColor:'white',
        borderRadius:15,
        marginLeft:20,
        marginTop:15,       
    },
    content3:{
        width:global.screenwidth - 40,
        height:75,
        backgroundColor:'white',
        borderRadius:15,
        marginLeft:20,
        marginTop:15,       
    },
    circlecheck:{
        marginLeft:20,
        marginTop:10,
    },
    dline: {                    
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        width:global.screenwidth-40,  
        marginTop:10,
    },
    flexrow:{
        flexDirection:'row',
    },
    calendar4img:{
        marginTop:8,
        marginLeft:20,
    },
    calendar4txt:{
        marginLeft:20,
        marginTop:5,
    },

    bottombutton:{
        backgroundColor:'#562b63',
        width:200,
        height:35,
        borderRadius:20,
        color:"white",
        textAlign:'center',
        marginTop:20,
        marginLeft: (global.screenwidth- 200)/2,
        paddingTop:5,
        fontSize:18,  

    },

    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})