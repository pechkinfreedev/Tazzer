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
    clean7:{
        marginLeft:global.screenwidth - 140,
        marginTop:10,
    },
    woman1:{
        marginTop:-70,
        justifyContent:'center',
        alignItems:'center',
    },
    toprect: {
        width:global.screenwidth,
        height:180,
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
        height:global.screenheight - 200,
        backgroundColor:'white',
        borderRadius:20,
        marginLeft:20,
        marginRight:20,
        marginTop:-50,
    },

    toptxt:{    
        margin:20,
        fontSize:16,
    },

    contenttxt3:{
        width:global.screenwidth - 260,
        height:35,
        borderRadius:30,
        marginLeft:220 / 2,
        // marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        // textAlign:'center',
        backgroundColor:'#562b63',
        flexDirection:'row',
        marginTop:40,
    },
    contenttxt4:{
        marginTop:-2,
        fontSize:20,
        color:'white',
    },
    cancel2:{
        marginLeft:-25,

    },

    buttonStyle: {
        backgroundColor: '#e6ebf1',
        borderWidth: 1,
        // color: '#FFFFFF',
        borderColor: '#e6ebf1',
        height: 120,
        width: 180,
        alignItems: 'center',
        justifyContent:'center',
        textAlign:'center',
        borderRadius: 30,
        marginLeft: (global.screenwidth - 220)/2,
        marginRight: 35,
        marginTop: 15,
      },
      buttonTextStyle: {
        color: '#000',
        // paddingVertical: 10,
        fontSize: 14,
        // width:70,
        height:20,
      },
      scrollview:{
          margin:20,
          height:150,
          justifyContent:'center',
          alignItems:'center',  
      },
      scrollimg:{
        marginLeft:10,
        marginRight:10,
        width:100,
        height:100,
      },

    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})