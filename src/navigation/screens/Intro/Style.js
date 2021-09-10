import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    top2: {
      width: 470,
      height: 430,
      marginLeft:0,
      marginTop:-100
    },
    center2: {
      width: 200,
      height: 220,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:370,
      marginLeft:100
      // position: 'absolute'
    },
    order: {
      textAlign: 'center',  
      color: '#5ed9c6',   
      fontSize:28,
      fontWeight:'bold',
      marginTop:100
    },
    search: {
      textAlign: 'center',  
      color: '#562b63',   
      fontSize:20,
      fontWeight:'bold',
      marginTop:180,     
    },
    publish: {
      textAlign: 'center',  
      color: '#000000',   
      fontSize:12,
      marginTop:5,
      marginLeft:10,
      marginRight:10      
    },
    bottom2: {
      width: 180,
      height: 220,
      marginLeft:-10,
      // marginBottom:-40
    },
    startbutton: {
      backgroundColor: "#831ba9",
      fontSize:18,
      color:'#fff',
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      // marginLeft:10,
      textAlign: 'center',
      marginLeft : 100,
      marginRight:100,
      marginTop:global.screenheight - 120,
      paddingTop:8,
      position:'absolute',      
      width:(global.screenwidth - 200) ,
      height:40,     
    },

  });