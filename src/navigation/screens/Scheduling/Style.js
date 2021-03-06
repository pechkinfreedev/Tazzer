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
    topmain: {
        width:global.screenwidth- 40,
        backgroundColor:'#fff',
        marginLeft:20,
        marginTop:-50,
        height:global.screenheight - 200,
        borderRadius:20,
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
    calendar:{
        flexDirection:'row',
        marginLeft:20,
        marginTop:10,
        height:30,
        
    },
    weekl: {
        marginLeft:18,
        marginRight:18,
        marginTop:8,
        fontSize:12,
    },
    horiz:{
        marginLeft:18,
        marginRight:18,
    },  
    calheight: {
        // marginTop:10,
        height:125,
        width:global.screenwidth- 70,
        marginLeft:14,
    },
    bottommenu0: {
        marginTop:70,
    },
    dline: {                    
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        marginTop:-40,
        width:250,    
        width:global.screenwidth - 40,
    },
    centerimage: {        
        justifyContent:'center',
        alignItems:'center',
    },
    viewflex:{
        flexDirection:'row',
        marginTop:15,
    },
    mid1: {
        fontSize:14,
        color:'#562b63',
        marginLeft:20,
        fontWeight:'bold',
    },
    mid2: {
        fontSize:14,
        color:'#999999',
        marginLeft:20,
        fontWeight:'bold',
    },
    topdep:{
        width:global.screenwidth- 140,
        backgroundColor:'#dbf1dc',
        position:'absolute',
        marginLeft:70,
        marginRight:20,
        // marginTop:30,
        height:40,
        borderRadius:8,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 3,
        flexDirection:'row',
    },
    topdep1:{
        width:global.screenwidth- 140,
        backgroundColor:'#f4fbf4',
        position:'absolute',
        marginLeft:70,
        marginRight:20,
        marginTop:40,
        height:17,
        // borderBottomLeftRadius:8,
        // borderBottomRightRadius:8,
        flexDirection:'row',
    },
    topdep2:{
        width:global.screenwidth- 140,
        backgroundColor:'#dbf1dc',
        position:'absolute',
        marginLeft:70,
        marginRight:20,
        // marginTop:30,
        height:40,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        flexDirection:'row',
    },
    topdep3:{
        width:global.screenwidth- 140,
        backgroundColor:'#cceaf5',
        position:'absolute',
        marginLeft:70,
        marginRight:20,
        // marginTop:30,
        height:40,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        flexDirection:'row',
    },
    topdep4:{
        width:global.screenwidth- 140,
        backgroundColor:'#f9d4cc',
        position:'absolute',
        marginLeft:70,
        marginRight:20,
        // marginTop:30,
        height:40,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        flexDirection:'row',
    },
    topdep41:{
        width:global.screenwidth- 140,
        backgroundColor:'#f5eae8',
        position:'absolute',
        marginLeft:70,
        marginRight:20,
        marginTop:40,
        height:17,
        // borderBottomLeftRadius:8,
        // borderBottomRightRadius:8,
        flexDirection:'row',
    },
    topdep5:{
        width:global.screenwidth- 140,
        // backgroundColor:'#dbf1dc',
        position:'absolute',
        marginLeft:70,
        marginRight:20,
        // marginTop:30,
        height:50,
        borderWidth:1,
        borderStyle:'solid',
        borderRadius:8,
        borderColor:'#f3d6d2',
        flexDirection:'row',
    },
    imgch1:{
        marginTop:10,
        marginLeft:-10,
    },
    deptext1:{
        marginLeft:10,
        marginTop:-15,
        fontSize:15,
        color:'#562b63'
    },
    deptext2:{
        marginLeft:10,
        // marginTop:-15,
        fontSize:12,
        color:'#562b63'
    },
    icgroup:{
        marginTop:-12,
        marginLeft:120,
        position:'absolute',
    },
    sman1: {
        marginLeft:50,
        width: 45,
        height: 45,
    },
    sman3: {
        marginLeft:-15,
        width: 45,
        height: 45,
        marginTop:3,
    },
    sman4: {
        marginLeft:10,
        marginTop:8,
        width: 30,
        height: 30,
    },
    undertext:{
        marginLeft:25,
        // marginTop:10,
        color:'#666666',
        fontSize:12,
    },
    react285: {
        marginTop: 7,
        marginLeft:10,
        width:10,
    },
    intertop:{
        marginBottom:15,
    },
    ell1:{
        marginTop:10,
        marginLeft:10,
    },
    elltext: {
        fontSize:12,
        color:'#666666',
        marginLeft:8,
        marginTop:5,
    },
    Ellipse713:{
        width:25,
        height:25,
        marginTop:10,
        marginLeft:-10,
    },
    text4:{
        marginTop:12,
        fontSize:13,
        marginLeft:20,
    },
    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    subbutton: {
      marginTop: 65,
      marginLeft: (global.screenwidth - 330)/2 , 
      fontSize:14,
      fontWeight: "bold",
    //   backgroundColor: "#562b63",
      color:'#562b63',
      borderRadius: 40,
      height:40,        
      width:200, 
    //   paddingTop:10,
      // paddingLeft:50, 
    //   borderWidth:3,
    //   borderColor:'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',   
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 0
      },
      elevation: 2,   
  },
  zindex: {
      zIndex:3,
      backgroundColor:'white',
  }

})