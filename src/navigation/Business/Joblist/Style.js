import { Center } from 'native-base';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    container: {
        marginTop:50,
        flexDirection:'row',  
    },
    whiteback: {
        backgroundColor:'#e6ebf1',
        height:global.screenheight,
    },
    flexrow:{
        flexDirection:'row',
    },
    topmain: {
        width:global.screenwidth- 40,
        backgroundColor:'#fff',
        marginLeft:20,
        marginTop:-50,
        height:520,
        borderRadius:20,
        textAlign:'center',
    },
    topdep:{
        width:global.screenwidth- 80,
        backgroundColor:'#fff',
        marginLeft:20,
        marginRight:20,
        marginTop:30,
        height:70,
        borderRadius:10,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 3,
        flexDirection:'row',
    },
    topch:{
        width:50,        
        height:50,
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
    },
    mopm:{
        width:38,
        height:38,
        margin:8,
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
    bookbutton: {
    //   marginTop: 10,
      marginRight:10,
      marginLeft:30,
    //   marginLeft: (global.screenwidth - 150)/2 , 
      fontSize:12,
      fontWeight: "bold",
      backgroundColor: "#562b63",
      color:'#fff',
      borderRadius: 40,
      height:30,        
      width:30, 
      paddingTop:5,
      // paddingLeft:50, 
      borderWidth:3,
      borderColor:'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',      
  },
  bookbutton1: {
  //   marginTop: 10,
    marginRight:10,
    marginLeft:30,
  //   marginLeft: (global.screenwidth - 150)/2 , 
    fontSize:12,
    fontWeight: "bold",
    backgroundColor: "#ea2117",
    color:'#fff',
    borderRadius: 40,
    height:30,        
    width:30, 
    paddingTop:5,
    // paddingLeft:50, 
    borderWidth:3,
    borderColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',      
},
  childbutton:{
      marginTop:5,
  },
  contentbox1:{
    width:120,
  },
  childtxt:{
      color:"#777777",
      fontSize:14,
      marginTop:3,
      marginLeft:-5
  },
  midbutton:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginTop:-10,
  },
  bottommenu:{
      marginTop:30,
  },
  child1:{
      marginTop:8,
      color:"#562b63",
      fontSize:14,
  },
  child2:{
    //   marginTop:8,
      color:"#555555",
      fontSize:12,
  },
  child3:{
    //   marginTop:8,
      color:"#f5921d",
      fontSize:12,
  },
  child4:{
    //   marginTop:8,
      color:"#6cc992",
      fontSize:12,
  },
  bottommenu0: {
    marginTop:global.screenheight - 85,
    position:'absolute'
  },
})