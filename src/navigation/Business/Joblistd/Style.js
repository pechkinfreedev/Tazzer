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
    contenttext:{
        flexDirection:'row',
        width: global.screenwidth - 80,
        margin:20,
        borderRadius:20,
        color:"#dddddd",
        backgroundColor:'#fff',
        height:45,  
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 1,
    },
    proimg:{
        margin:10,
        width:30,
        height:30,
    },
    contenttext1:{
        flexDirection:'row',
        width: global.screenwidth - 80,
        margin:20,
        borderRadius:20,
        color:"#dddddd",
        backgroundColor:'#fff',
        height:70,  
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 1,
    },
    privacy:{
        marginTop:5,
        marginLeft:20,
        marginRight:15,
    },
    contenttxt2:{
        marginTop:10,
        fontSize:16,
        // color:'#888888',
    },
    request:{
        marginLeft:20,
        fontSize:16,
    },
    flexrow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    bottombox1:{
        width:100,
        height:70,
        backgroundColor:'#562b63',
        borderRadius:10,
        textAlign:'center',
        margin:20,
        marginTop:15,
        alignItems:'center',
    },
    bottombox2:{
        width:100,
        height:70,
        backgroundColor:'#e6ebf1',
        borderRadius:10,
        alignItems:'center',
        margin:20,
        marginTop:15,
    },
    bottomboxtxt1:{
        textAlign:'center',
        color:"white",
        marginTop:-8,
    },
    bottomboxtxt2:{
        textAlign:'center',
        // color:"white",
        marginTop:-8,
    },
    bottomboximg:{
        margin:10,
    },
    checkbox:{
        // marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:-10,
    },
    checkboxbottom:{
        marginLeft:60,
        marginRight:60,
    },
    contenttxt3:{
        width:global.screenwidth - 260,
        height:35,
        borderRadius:30,
        marginLeft:220 / 2,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        // textAlign:'center',
        backgroundColor:'#562b63',
        flexDirection:'row',
    },
    contenttxt4:{
        marginTop:-2,
        fontSize:20,
        color:'white',
    },
    arrow1:{
        marginLeft:10,
        
    },
   operateopt:{
        width:global.screenwidth,
        height:global.screenheight,
        backgroundColor:'black',
        position:'absolute',
        zIndex:1,
        opacity:0.6,
    },
    modal:{
        width:global.screenwidth - 80,
        height:200,
        backgroundColor:'white',
        zIndex:1,
        marginTop:-500,
        marginLeft:40,
        borderRadius:30,
    },
    modaltxt:{
        textAlign:'center',
        color:'#562b63',
        fontSize:20,
        margin:30,
        fontWeight:"bold",
    },
    mbutton:{
        width:80,
        height:40,
        marginLeft:20,
        marginRight:20,
        borderRadius:20,
        color:"white",
        textAlign:"center",
        paddingTop:8,
        fontSize:16,
        fontWeight:"bold",
        backgroundColor:"#562b63",
    },

    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})