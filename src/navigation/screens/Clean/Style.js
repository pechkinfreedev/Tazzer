import { Center } from 'native-base';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    container: {
        backgroundColor:'#562b63', 
        flexDirection:'row', 
        height:50,
    },
    whiteback: {
        backgroundColor:'#eeeeee',
    },
    top1: {   
        marginLeft:20,
        marginTop:20,
    },
    top2: {
        flexDirection: 'row',
        marginLeft:10,
        marginTop:15,
        fontSize:16,
        color:'white',
        fontWeight:'bold',
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
        width:100,
        height:100,
        marginLeft:global.screenwidth - 100,
        marginTop:10,
    },
    centerimage: {        
        justifyContent:'center',
        alignItems:'center',
    },
    topimg1:{
        marginTop:50,
    },
    topt1:{
        fontSize:20,
        color:'#562b63',
        marginTop:4,
        fontWeight:'bold',
    },
    dline: {                    
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        marginTop:20,
        width:250,        
    },
    midtitle:{
        fontSize:14,
        marginTop:10,
        marginLeft:50,
        marginRight:50,

    },
    checkbox: {
    //   alignSelf: "flex-start",
        marginLeft:50,
        marginTop:5,
    },
    checkbox1: {
    //   alignSelf: "flex-start",
        marginLeft:50,
        marginTop:-8,
    },
    mid1: {
        flexDirection:'row',
    },
    midt: {
        marginLeft:5,
        marginTop:13,
        fontSize:12,
    },
    midt1: {
        marginLeft:5,
        fontSize:12,
        // marginTop:8,
    },
    dcleaning:{
        marginTop:-100,
        marginLeft: global.screenwidth/2,
    },
    mid2: {
        marginTop:10,
    },
    subbutton: {
      marginTop: 50,
      marginRight:10,
      marginLeft:10,
    //   marginLeft: (global.screenwidth - 150)/2 , 
      fontSize:16,
      fontWeight: "bold",
      backgroundColor: "#562b63",
      color:'#fff',
      borderRadius: 40,
      height:55,        
      width:150, 
      paddingTop:15,
      // paddingLeft:50, 
      borderWidth:3,
      borderColor:'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',      
  },
  midbutton:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginTop:-10,
  },
  bottommenu:{
      marginTop:global.screenheight - 85,
      position:'absolute'
  }
})