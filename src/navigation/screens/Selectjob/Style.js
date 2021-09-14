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
    brightness: {
        width:20,
        height:20,
        marginLeft:global.screenwidth - 160,
        marginTop:20,
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
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    mapcontainer: {
        height: 330,
        width: 355,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
            ...StyleSheet.absoluteFillObject,
    },
    search: {
        width:global.screenwidth-100,
        height:40,
        marginLeft:30,
        borderRadius:10,
        marginTop: 30,
        position:'absolute',
        backgroundColor:'#fff',
        paddingLeft:30,
    },
    
    subbutton: {
        marginTop: -30,
        marginRight:10,
        marginLeft:(global.screenwidth - 150)/2 ,
      //   marginLeft: (global.screenwidth - 150)/2 , 
        fontSize:16,
        fontWeight: "bold",
        backgroundColor: "#562b63",
        color:'#fff',
        borderRadius: 60,
        height:120,        
        width:120, 
        paddingTop:15,
        // paddingLeft:50, 
        borderWidth:10,
        borderColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',      
    },
    clock:{
        marginTop:20,
        marginLeft:10,
    },
    shift:{
        color:'white',
        marginTop:10,
    },
    
    topch:{
        width:120,        
        height:120,
        backgroundColor:'#fff',
        marginLeft:10,
        marginRight:20,
        marginTop:10,
        borderRadius:10,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 3,
        justifyContent:'center',
        alignItems:'center',
    },

    flexrow: {
        flexDirection:'row',
        marginLeft:35,
        marginRight:35,
    },
    request: {
        justifyContent:'center',
        alignItems:'center',
    },
    operateopt:{
        width:global.screenwidth,
        height:global.screenheight,
        backgroundColor:'black',
        position:'absolute',
        zIndex:1,
        opacity:0.6,
    },
    modalw:{
        width:global.screenwidth-60,
        height:global.screenwidth-60,
        backgroundColor:'white',
        position:'absolute',
        borderRadius:30,
        marginTop:200,
        marginLeft:30,
        zIndex:2,
    },
    select:{
        textAlign:'center',
        marginTop:20,
        fontSize:20,
    },
    dline: {                    
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        // borderWidth:1,
        marginTop:50,
        width:global.screenwidth-60,
        zIndex:4,
        // marginLeft: 30,
        position:'absolute',        
    },
    dline1: {                    
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        marginTop:27,
        width:global.screenwidth-100,
        zIndex:4,
        marginLeft: -22,
        position:'absolute',        
    },
    content: {
        width:global.screenwidth-100,
        height:global.screenwidth-160,
        marginLeft:20,
        marginTop:18,
        borderColor:"#dddddd",
        borderWidth:2,
        borderRadius:15,
        // backgroundColor:"#ff0000",
        // marginTop:100,
        zIndex:5,
    },
    alljob:{
        marginTop:10,
        marginLeft:20,
        fontSize:18,
    },    
    selectjob:{
        marginTop:10,
        marginBottom:5,
        marginLeft:20,
        fontSize:18,
    },
    cancelbutton:{
        textAlign:'center',
        borderWidth:2,
        borderColor:'#562b63',
        borderRadius:20,
        width:200,
        height:30,
        marginTop:10,
        paddingTop:4,
        marginLeft: (global.screenwidth-300)/2,
    },
    cancelbottom: {
        width:40,
        height:40,
        marginLeft: (global.screenwidth-100)/2,
        marginTop:15,
    
    }

})