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
        marginTop:40,
    },
    woman1:{
        marginTop:-70,
        justifyContent:'center',
        alignItems:'center',
    },
    toprect: {
        width:global.screenwidth,
        height:230,
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
    content:{
        width:global.screenwidth - 40,
        height:global.screenheight - 210,
        backgroundColor:'white',
        borderRadius:20,
        marginLeft:20,
        marginRight:20,
        marginTop:-100,
    },
    title:{
        textAlign:'center',
        fontSize:20,
        margin:10,
        color:'#562b63',
        fontWeight:'bold',

    },   
    title1:{
        textAlign:'center',
        fontSize:16,
        margin:10,
        color:'#562b63',
        fontWeight:'bold',

    },   
    dline: {                    
        borderBottomColor: '#562b63',
        borderBottomWidth: 1,
        // borderWidth:1,
        // marginTop:45,
        width:global.screenwidth-40,
        zIndex:4,
        // marginLeft: 30,
        // position:'absolute',        
    },   
    dline1: {                    
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        // borderWidth:1,
        // marginTop:160,
        width:global.screenwidth-40,
        zIndex:4,
        // marginLeft: 30,
        // position:'absolute',        
    },
    mid1:{
        width:global.screenwidth-80,
        marginLeft:20,
        height:30,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 2,
        borderRadius:8,
        // backgroundColor:'#ff0000',
        marginTop:20,
        flexDirection:'row',
    },
    mid2:{
        width:global.screenwidth-80,
        marginLeft:20,
        height:30,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 2,
        borderRadius:8,
        // backgroundColor:'#ff0000',
        marginTop:10,
    },
    midtext1:{
        marginLeft:20,
        marginTop:3,
        color:'#562b63',
        fontSize:16,
        textAlign:'center',
    },
    checkimg:{
        marginTop:7,
        marginLeft:'auto',
        marginRight:50,
    },
    midtitle:{
        fontSize:18,
        color:'#562b63',
        marginLeft:20,
        marginTop:20,
        marginBottom:10,
        fontWeight:'bold',
    },
    scrollimg:{
        width:100,
        height:100,
    },
    scrollview:{
        marginLeft:20,
    },
    mid3:{
        width:global.screenwidth-200,
        marginLeft:80,
        height:30,
        borderRadius:8,
        borderColor:'#562b63',
        borderWidth:1,
        marginTop:20,
        flexDirection:'row',
        textAlign:'center',
        justifyContent:'center',
        // alignItems:'center',
    },
    midtext2:{
        marginLeft:30,
        marginRight:30,
        marginTop:3,
        color:'#562b63',
        fontSize:16,
    },
    interval:{
        borderRightWidth:1,
        borderRightColor:"#555555",
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
    },
    bottom:{
        width:global.screenwidth-120,
        marginLeft:40,
        height:30,
        borderRadius:8,
        marginTop:30,
        flexDirection:'row',
        // textAlign:'center',
        // justifyContent:'center',        
    },
    bottomtxt1:{
        color:'#888888',
    },
    bottombutton:{
        width:80,
        backgroundColor:'#b4ecad',
        borderRadius:10,
        marginLeft:'auto',
        height:25,
    },
    bottomtxt2:{
        textAlign:'center',
    },



    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})