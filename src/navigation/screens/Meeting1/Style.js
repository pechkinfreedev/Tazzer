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
        marginLeft:10,
        marginTop:15,
        fontSize:16,
        color:'white',
        fontWeight:'bold',
    },

    content:{
        width:global.screenwidth - 40,
        height:global.screenheight - 200,
        backgroundColor:'white',
        borderRadius:20,
        marginLeft:20,
        marginRight:20,
        marginTop:-55,
        // flexDirection:'row',
    },
    centerimg:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    centerimg1:{
        justifyContent:'center',
        alignItems:'center',
        // marginTop:10,
        height:150,
        width:300,

    },

    bottombutton:{
        backgroundColor:'#562b63',
        width:160,
        height:40,
        borderRadius:20,
        color:"white",
        textAlign:'center',
        marginTop:20,
        marginLeft: (global.screenwidth- 240)/2,
        paddingTop:9,
        fontSize:16,  
    },
    calendar1:{
        marginLeft:20,
        width:global.screenwidth - 80,
        height:300,
    },
    toptext:{
        margin:20,
        fontSize:17,
        color:'#562b63',
    },
    toptext0:{
        marginTop:-10,    
        width:global.screenwidth - 90,
        height:60,
        fontSize:13,
        color:'#298c49',        
        borderRadius:20,
        backgroundColor:'#f9fafc',
    },
    toptext1:{
        marginTop:-10,        
        paddingLeft:20,
        paddingTop:20,
        fontSize:13,
        color:'#298c49',   
    },
    toptext2:{
        paddingLeft:20,
        paddingTop:5,
        color:'black',
    },    
    toptext4:{
        marginTop:20,    
        width:global.screenwidth - 90,
        height:60,
        fontSize:13,       
        borderRadius:20,
        backgroundColor:'#f9fafc',
        flexDirection:'row',
    },
    toptext5:{
        marginTop:20,    
        width:global.screenwidth - 90,
        height:40,
        fontSize:13,       
        borderRadius:20,
        backgroundColor:'#f9fafc',
        flexDirection:'row',
    },
    midtext1:{
        paddingLeft:15,
        paddingRight:15,
        color:'#888888',
        marginTop:10,
    },
    midimg:{
        marginTop:15,
        marginLeft:10,
    },
    midimg1:{
        marginTop:8,
        marginLeft:10,
    },
    leftline:{
        borderLeftWidth:3,
        borderLeftColor:'#572a63',
        height:40,
        marginLeft:20,
        marginTop:10,  

    },

    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})