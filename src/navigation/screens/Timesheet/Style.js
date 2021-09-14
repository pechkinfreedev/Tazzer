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
        height:250,
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
    top1button1:{
        width: 140,
        height:40,
        color:'white',
        backgroundColor:'#421a4f',
        borderRadius:20,
        marginLeft:30,
        marginTop:20,
        paddingTop:8,
        paddingLeft:30,
        fontSize:16,
    },  
    top1button2:{
        width: 140,
        height:40,
        color:'white',
        backgroundColor:'#421a4f',
        borderRadius:20,
        marginLeft:10,
        marginTop:20,
        paddingTop:8,
        paddingLeft:30,
        fontSize:16,
    }, 
    tofont: {
        color:'white',
        fontSize:16,
        marginTop:25,
        marginLeft:15,
    },
    flexrow: {
        flexDirection:'row',
    },
    dline1: {                    
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        marginTop:-20,
        marginLeft:25,
        width:100,
    },
    dline2: {                    
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        marginTop:  10,
        // marginLeft:25,
        width:global.screenwidth - 60,
    },
    overall:{
        color:'white',
        marginLeft:20,
        marginTop:10,
    },
    top3font1: {
        color:'white',
        marginTop:20,
        marginLeft:20,
        marginRight:20,
    },
    top3font2: {
        color:'white',
        marginTop:5,
        marginLeft:20,
        marginRight:20,
    },
    textcenter:{
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',

    },
    midtop1: {
        marginTop:10,
    },
    midcontent: {
        width: (global.screenwidth - 60),
        marginLeft:30,
        borderRadius:20,
        marginTop:20,
        marginBottom:10,
        backgroundColor:'white',
        height:100,
    },
    midcontent1: {
        width: (global.screenwidth - 60),
        marginLeft:30,
        borderRadius:20,
        marginTop:10,
        backgroundColor:'white',
        height:50,
    },
    mid1font1: {
        // color:'white',
        marginTop:10,
        fontSize:12,
        marginLeft:20,
        marginRight:20,
    },
    mid1font2: {
        // color:'white',
        marginTop:5,
        fontSize:12,
        marginLeft:20,
        marginRight:20,
    },
    midfont3:{
        marginTop:10,
        marginLeft:20,
    },
    midfont4:{
        marginTop:10,
        fontSize:16,
        marginLeft:20,
        marginRight:20,        
    },
    midinter: {
        // borderWidth:2,
        borderRightWidth:1,
        height:30,
        margin:10,
    },

    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})