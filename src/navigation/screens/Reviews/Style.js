import { Center } from 'native-base';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    flexrow:{
        flexDirection:'row',
    },
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
    clean6:{
        marginTop:50,
        marginLeft:global.screenwidth - 100,
        width:120,
        height:120,
        position:'absolute',
    },
    polygon1:{
        marginLeft:global.screenwidth - 90,
        marginTop:-20,
    },
    woman1:{
        marginTop:-70,
        justifyContent:'center',
        alignItems:'center',
    },
    toprect: {
        width:global.screenwidth,
        height:350,
        backgroundColor:'#562b63',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
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
    top2:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
    toptext1:{
        // flexDirection: 'row',
        textAlign:'center',
        // marginLeft:50,
        marginTop:30,
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        position:'absolute',
    },
    topimg:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
    },
    content:{
        width:global.screenwidth - 40,
        height:global.screenheight - 310,
        backgroundColor:'white',
        borderRadius:20,
        marginLeft:20,
        marginRight:20,
        marginTop:-110,
    },
    average:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        // marginTop:-10,
        position:'absolute',
    },
    star:{
        flexDirection:'row',
        position:'absolute',
        paddingTop:30,
    },
    contenttxt:{
        margin:20,
        fontSize:18,
    },
    dline: {                    
        borderBottomColor: '#888888',
        borderBottomWidth: 2,
        marginTop:-5,
        marginBottom:5,
        width:global.screenwidth - 40,     
    },
    dline1: {                    
        borderBottomColor: '#dddddd',
        borderBottomWidth: 2,
        marginTop:-10,
        width:global.screenwidth - 40,     
    },
    sman:{
        marginTop:10,
        marginLeft:20,
        width:40,
        height:40,
    },
    contenttxt:{
        margin:10,
    },
    contenttxt1:{
        marginLeft:10,
        flexDirection:'row',
    },
    contenttxt2:{
        marginLeft: 'auto',
        marginRight:30,
        marginTop:20,
    },
    contenttxt3:{
        marginLeft:20,
        marginTop:5,
        marginBottom:20,
        fontSize:12,

    },
    mark:{
        marginTop:-5,
        marginLeft:5,
    },
    
    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})