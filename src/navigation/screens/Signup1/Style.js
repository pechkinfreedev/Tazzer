import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
      backgroundColor: '#dfe7f0'
    },
    logo: {
      width: 100,
      height: 100 * 61 / 79,
      marginTop:200,
      marginLeft: global.screenwidth/2.5,
    },
    signup1top: {
        width: 470,
        height: 250,
        marginLeft:-10,
        marginTop:-130        
    },
    top1: {
        marginLeft: 40,
        marginTop: 50,
        color: '#562b63',
        fontSize:18,
        fontWeight:'bold',
    },
    top2: {
        marginLeft: 40,
        marginTop: 5,
        // color: '#562b63',
        fontSize:16,
        // fontWeight:'bold',
    },
    startbutton: {
      backgroundColor: "white",
      fontSize:16,
      color:'#888',
      borderRadius: 30,
      textAlign: 'center',
      marginLeft : 40,
      marginRight: 40,
      marginTop: 20,
      paddingTop:10,
    //   position:'absolute',      
      width:(global.screenwidth - 80) ,
      height:45,     
    },
    startbutton1: {
      backgroundColor: "white",
      fontSize:16,
      color:'#888',
      borderRadius: 30,
      textAlign: 'center',
      marginLeft : 40,
      marginRight: 40,
      marginTop: 20,
      paddingTop:10,
    //   position:'absolute',      
      width:100 ,
      height:45,     
    },
    startbutton2: {
      backgroundColor: "white",
      fontSize:16,
      color:'#888',
      borderRadius: 30,
      textAlign: 'center',
      marginLeft : 40 + 120,
      marginRight: 40,
      marginTop: -45,
      paddingTop:10,
    //   position:'absolute',      
      width:(global.screenwidth - 200) ,
      height:45,     
    },
    nextbutton: {
        marginTop:  -100,
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
    signup1bottom: {
        width: 330,
        height: 190,
        marginLeft:-100,
        marginTop:30         
    },
    login4: {
        width:50,
        height:50,
        // backgroundColor:'#ff0000',
        marginLeft: global.screenwidth/1.9 + 140, 
        marginTop: -140,
    },
  });