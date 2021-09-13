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
        marginTop:15,
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
    }
})