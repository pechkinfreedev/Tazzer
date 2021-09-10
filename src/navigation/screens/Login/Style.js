import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
      backgroundColor: '#562b63'

    },
    top: {
      marginLeft: 40,
      marginTop: 50,
      fontSize: 18,
      color:'#fff'
    },
    top1: {
      marginLeft: 40,
    //   marginTop: 40,
      fontSize: 18,
      color:'#fff'
    },
    whiterect: {
      marginLeft: -global.screenwidth/1.9,  
      marginTop:30,
      width: global.screenwidth / 0.78 ,
      height: global.screenheight/1.5   
    },
    recttop: {
        color:'black',
        fontSize:14,
        marginLeft:70,
        marginTop:80,
        // fontWeight: "bold",
        textAlign: "center",
    },
    recttop1: {
        color:'#562b63',
        fontSize:20,
        marginLeft:70,
        fontWeight: "bold",
        textAlign: "center",
    },
    recttop2: {
        color:'black',
        fontSize:14,
        marginLeft:90,
        marginTop:10,
        // fontWeight: "bold",
        textAlign: "center",        
    },
    iconimg: {
        width:20,
        height:20,
        // backgroundColor:'#ff0000',
        marginLeft: global.screenwidth/1.9 + 20, 
        marginTop: 40,
    },
    recttop3: {
        color:'black',
        fontSize:14,
        marginLeft: global.screenwidth/1.9 + 60, 
        // position: 'absolute',
        marginTop: -20
        // fontWeight: "bold",
        // textAlign: "center",        
    }
  });