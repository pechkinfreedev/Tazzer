import { Center } from 'native-base';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    container: {
        marginTop:50,
        flexDirection:'row',  
    },
    whiteback: {
        backgroundColor:'#e6ebf1',
        marginBottom:50,
        width:global.screenwidth,
        height:global.screenheight,
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

    clean2:{
        position:'absolute',
        width:50,
        height:50,
        marginLeft:-10,
        marginTop:20,
    },
    clean5:{
        width:90,
        height:90,
        marginLeft:global.screenwidth - 240,
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
        marginTop:global.screenheight - 85,
        position:'absolute'
    },

    topmain: {
        width:global.screenwidth- 40,
        backgroundColor:'#fff',
        marginLeft:20,
        marginTop:-90,
        marginBottom:20,
        height:global.screenheight - 180,
        borderRadius:20,
    },
    mapcontainer: {
        marginLeft:20,
        marginTop:-80,
        marginBottom:20,
        height: 430,
        width: global.screenwidth- 40,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius:20,
    },
    map: {
            // ...StyleSheet.absoluteFillObject,
        height: 430,
        width: global.screenwidth- 40,
        borderRadius:20,
        position:'absolute',
    },
    mid:{
        width:global.screenwidth- 40,
        backgroundColor:'#fff',
        marginLeft:20,
        marginTop:-40,
        height:150,
        borderRadius:20,
    },
    midtoptext:{
        marginLeft:20,        
        marginTop:10,
        marginBottom:10,
        color:'#562b63',
        fontWeight:'bold',
    },
    midtoptech:{
        color:'#999999',
        fontSize:10,
        marginTop:5,
    },
    midtopleif:{
        color:'#562b63',
        fontWeight:'bold',
    },
    midtopmin:{
        color:'#e7821a',
        fontWeight:'bold',
        fontSize:20,
        marginLeft:20,
        marginTop:8,
    },
    midtopcallimg:{
        marginLeft:50,
        marginTop:20,
        width:60,
        height:60,
    },
    midtopcalltxt: {
        marginLeft:40,
        // marginTop:10,
        color:'#562b63',
        fontWeight:'bold',
        fontSize:20,
    },
    midbottomtxt1:{
        marginLeft:20,
        color:'#999999',
        fontSize:12,
    },
    midbottomtxt2:{
        marginLeft:20,
        color:'#562b63',
        fontSize:14,
    },
    circle:{
        width:40,
        height:40,
        borderRadius:20,
        borderWidth:3,
        borderColor:'#562b63',
        position:'absolute',
        marginTop:150,
        marginLeft:180,
        justifyContent:'center',
        alignItems:'center',
    },
    circleimg:{
        marginTop:6,
        width:50,
        height:50,
    },
    circle1:{
        width:40,
        height:40,
        borderRadius:20,
        borderWidth:3,
        borderColor:'#562b63',
        position:'absolute',
        marginTop:400,
        marginLeft:240,
        justifyContent:'center',
        alignItems:'center',
    },
    circleimg1:{
        marginTop:6,
        width:50,
        height:50,
    },
    flexrow:{
        flexDirection:'row',
    },
})