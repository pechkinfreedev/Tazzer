import { Center } from 'native-base';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    flexrow:{
        flexDirection:'row',
    },
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
    polygon1:{
        marginLeft:global.screenwidth - 60,
        marginTop:60,
    },
    woman1:{
        marginTop:-70,
        justifyContent:'center',
        alignItems:'center',
    },
    toprect: {
        width:global.screenwidth,
        height:240,
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
        height:global.screenheight - 210,
        backgroundColor:'white',
        borderRadius:20,
        marginLeft:20,
        marginRight:20,
        marginTop:-110,
    },
    title:{
        textAlign:'center',
        fontSize:18,
        marginTop:10,
        color:'#562b63',
        fontWeight:'bold',
    },
    dline: {                    
        borderBottomColor: '#562b63',
        borderBottomWidth: 1,
        marginTop:7,
        width:global.screenwidth - 40,
        // marginLeft:20,
    },
    contenttext:{
        flexDirection:'row',
        width: global.screenwidth - 80,
        marginLeft:20,
        marginTop:30,
        marginBottom:0,
        borderRadius:20,
        height:100,
        backgroundColor:'#562b63',
    },
    scrollview:{
        height:55,
        marginLeft:20,
        marginRight:20,
        // marginTop:3,
    },
    button1:{
        width:80,
        height:30,
        borderRadius:20,
        backgroundColor:'#562b63',
        marginTop:10,
        marginLeft:20,
    },
    buttontxt1:{
        color:'white',
        fontSize:18,
        margin:4,
        textAlign:'center',
    },
    button2:{
        width:120,
        height:30,
        borderRadius:20,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 2,

        marginTop:10,
        marginLeft:20,
    },
    button3:{
        width:140,
        height:30,
        borderRadius:20,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 2,

        marginTop:10,
        marginLeft:20,
    },
    button4:{
        width:240,
        height:30,
        borderRadius:20,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 2,

        marginTop:10,
        marginLeft:20,
    },
    buttontxt2:{
        color:'#777777',
        fontSize:18,
        fontWeight:'bold',
        margin:3,
        textAlign:'center',
    },
    mid1:{
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        width:global.screenwidth - 80,
        height:45,
        borderRadius:10,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 2,
        flexDirection:'row',
    },
    midimg:{
        width:30,
        height:30,
        marginTop:5,
        marginLeft:15,
    },
    midtext:{
        marginTop:5,
        marginLeft:10,
        color:'#562b63',
        fontWeight:'bold',
    },
    midtext1:{
        // marginTop:5,
        marginLeft:10,
        fontSize:10,
        color:'#999999',
    },
    midinter:{
        borderRightWidth:2,
        borderColor:"#dddddd",
        height:30,
        marginTop:5,
        marginLeft:10,
    },
    phone:{
        marginTop:8,
        marginLeft:8,
    },
    midtext2:{
        marginTop:5,
        fontSize:12,
        // marginLeft:10,
        color:'#666666',
        fontWeight:'bold',
    },
    midtext3:{
        marginTop:5,
        marginLeft:6,
        fontSize:12,
        color:'#562b63',
        fontWeight:'bold',
    },
    midtext4:{
        width:60,
        height:18,
        fontSize:12,
        textAlign:'center',
        alignSelf: 'flex-end',
        backgroundColor:'#fbe7b5',
        borderRadius:5,
    },
    midtext5:{
        width:60,
        height:18,
        fontSize:12,
        textAlign:'center',
        alignSelf: 'flex-end',
        backgroundColor:'#aef1aa',
        borderRadius:5,
    },
    midtext6:{
        width:60,
        height:18,
        fontSize:12,
        textAlign:'center',
        alignSelf: 'flex-end',
        backgroundColor:'#f1abab',
        borderRadius:5,
    },
    midtext7:{
        width:60,
        height:18,
        fontSize:12,
        textAlign:'center',
        alignSelf: 'flex-end',
        backgroundColor:'#accdee',
        borderRadius:5,
    },
    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})