import { Center } from 'native-base';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    container: {
      flex:1,
        backgroundColor:'#562b63',     

    },
    centerimage: {
      justifyContent:'center',
      alignItems:'center',
    },
    middlet:{
      textAlign:'center',
      color:'white',
      fontSize:20,
      marginTop:60,
    },
    middlet1: {
      textAlign:'center',
      color:'white',
      fontSize:16,
    },
    fpassword: {
      marginTop:100,
      width:global.screenwidth/2.3,
      height:global.screenwidth/2.3, 
      // marginleft: global.screenwidth/3,
    },    
    message: {
      marginLeft:30,
      marginTop:10,
    },
    login1: {
      width:50,
      height:50,
      marginTop: -90,
    },
    login2: {
      width:50,
      height:50,
      marginLeft: global.screenwidth/2,
      marginTop: 10,
    },
    login3: {
      width:50,
      height:50,
      // marginTop: -90,
    },
    login4: {
      width:50,
      height:50,
      marginTop: -60,
      marginLeft: global.screenwidth - 50,
    },
    inputval: {
      width:70,
      height:60,
      fontSize:24,
      color:'white',
      backgroundColor:'#a483b0',
      borderRadius:15,
      marginTop:40,
      textAlign:'center',
      marginLeft:8,
      marginRight:8,
    },
    inputb: {
      flexDirection: "row",
      alignContent: "space-between",      
      textAlign:'center',
      justifyContent: 'center',
      alignItems: 'center',      
    },
    timeleft:{ 
      marginTop:30, 
      flexDirection: "row",
    },
    timetext: {
      color:'white',
      fontSize:20,
      marginLeft:20,
      fontWeight:'bold',
    },
    bottom1: {
      marginTop:30,
      textAlign:'center',
      color:'white',
      fontSize:16,
    },
    bottom2: {
      marginTop:30,
      textAlign:'center',
      color:'white',
      fontSize:18,
      fontWeight:'bold',
    },
    subbutton: {
      marginTop: 50,
      marginLeft: (global.screenwidth - 150)/2 , 
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
  });