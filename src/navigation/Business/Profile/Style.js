import { Center } from 'native-base';
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
        marginLeft:global.screenwidth - 40,
        marginTop:40,
        position:'absolute',
    },
    woman1:{
        marginTop:-70,
        justifyContent:'center',
        alignItems:'center',
    },
    toprect: {
        width:global.screenwidth,
        height:320,
        backgroundColor:'#562b63',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
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
        height:global.screenheight - 330,
        backgroundColor:'white',
        borderRadius:20,
        marginLeft:20,
        marginRight:20,
        marginTop:-60,
    },
    contenttext:{
        flexDirection:'row',
        width: global.screenwidth - 80,
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        borderRadius:20,
        color:"#dddddd",
        backgroundColor:'#fff',
        height:40,  
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 1,
    },
    proimg:{
        marginLeft:10,
        marginTop:5,
        width:40,
        height:40,
    },
    flexrow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    headpicture:{
        justifyContent:'center',
        alignItems:"center",
        marginLeft: (global.screenwidth - 180)/2,
        width:120,
        height:120,
        marginTop:40,
        position:"absolute",
        // backgroundColor:"#ff0000",
    },
    topname:{
        color:"white",
        // position:"absolute",
        textAlign:"center",
        justifyContent:'center',
        alignItems:"center",
        fontSize:20,
        marginTop:150,
        fontWeight:"bold",
        marginLeft:(global.screenwidth - 180)/2,
    },
    topname1:{
        color:"white",
        // position:"absolute",
        textAlign:"center",
        justifyContent:'center',
        alignItems:"center",
        fontSize:14,
        // marginTop:150,
        fontWeight:"bold",
        marginLeft:(global.screenwidth - 180)/2,
    },

    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})