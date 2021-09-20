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
        backgroundColor:'#fff',
        paddingBottom:global.screenheight,
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
        height:120,
        backgroundColor:'#562b63',
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
    step1txt:{
        marginTop:20,
        marginLeft:20,
        
        fontSize:22,
    },
    step1txt1:{
        marginTop:20,
        fontSize:20,
    },
    dline: {                    
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        marginTop:3,
        width:50,
        marginLeft:25,
        marginBottom:20,
    },
    dline1: {                    
        borderBottomColor: '#bbbbbb',
        borderBottomWidth: 1,
        marginTop:3,
        width:global.screenwidth - 40,
        marginLeft:25,
    },

    contenttext:{
        width: global.screenwidth - 80,
        marginLeft:20,
        marginRight:20,
        marginTop:13,
        borderRadius:20,
        color:"#dddddd",
        backgroundColor:'#ff0000',
        // height:40,  
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // shadowOffset: {
        //   height: 1,
        //   width: 0
        // },
        // elevation: 2,
    },    
    step1content:{

        width: global.screenwidth - 40,
        height:40,
        // position:"absolute",
        marginTop:20,
        // backgroundColor:"#ff0000",
        marginLeft:20,
        borderRadius:2,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 3,
        flexDirection:'row',
    },
    step1box:{
        height:global.screenheight,
    },
    step1img:{
        marginTop:7,
        marginLeft:20,
    },
    step1txt2:{
        fontSize:18,
        color:"#777777",
        marginTop:8,
        marginLeft:10,
    },
    buttonstyle:{
        padding: 10, 
        borderRadius: 20, 
        // alignSelf: 'flex-start', 
        marginRight: 10, 
        backgroundColor: '#562b63',
        width:100,
        marginLeft: (global.screenwidth - 100 ) /2,
        
        // marginTop:global.screenheight - 400,
        position:"absolute",
    },
    buttontextstyle:{
        textAlign:'center',
    },
    stepstyle:{
        backgroundColor: '#562b63', 
        width: 20, 
        height: 20, 
        borderRadius: 30, 
        justifyContent: 'center', 
        alignItems: 'center', 
        opacity: 1
    },
    topinter:{
        marginTop:10,  
    },
    contenttext:{
        marginLeft:20,
    },
    price:{
        width:global.screenwidth - 80,
        height:100,
        marginTop:20,
        borderRadius:20,
        borderColor:"#562b63",
        borderWidth:1,
        marginLeft:40,
        flexDirection:'row',
    },
    priceimg:{
        margin:20,
    },
    fixed:{
        fontSize:20,
        color:"#562b63",
        marginTop:10,
        fontWeight:'bold',
    },
    fixedtxt:{
        width:global.screenwidth - 220,
        color:"#666666",
    },
    follow:{
        fontSize:24,
        marginTop:30,
        marginLeft:15,
    },
    orstyle:{
        alignItems:'center',
        marginTop:20,
    },
    attach:{

        width:global.screenwidth - 80,
        height:120,
        marginTop:20,
        borderRadius:20,
        borderColor:"#f9f9f9",
        backgroundColor:"#f9f9f9",
        borderWidth:1,
        marginLeft:40, 
    },
    attachtxt:{
        textAlign:'center',
        marginTop:40,
        fontSize:26,
        color:"#aaaaaa",
    },
    plus:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:-30,
    },
    midimg:{
        flexDirection:'row',
        // width:300,
        // height:150,
        // backgroundColor:"#ff0000",
        margin:20,
    },
    aimg1:{
        width:80,
        height:80,
        marginLeft:(global.screenwidth - 2 * 100 - 2 * 20) /3 ,
    },
    aimgcancel:{
        marginLeft:-10,
    },
    toptitle:{
        marginTop:20,
        marginLeft:20,
        fontSize:12,
        color:'#444444',
    },
    toptitle1:{
        marginTop:10,
        marginLeft:20,
        fontSize:12,
        color:'#444444',
    },
    toptitle2:{
        marginTop:10,
        marginLeft:20,
        fontSize:16,
        color:'#777777',
    },
    topcealn:{
        marginLeft:20,
        marginRight:20,
        marginTop:2,
        marginBottom:10,
        fontSize:14,
        fontWeight:'bold',
    },
    switch:{
        justifyContent:'center',
        // alignItems:'center',
        marginTop:10,        
        width:global.screenwidth - 100,
        height:30,
        marginLeft:50,
        marginRight:50,
        borderRadius:25,
        borderWidth:1,
        borderColor:"#562b63",
        flexDirection:"row",
    },
    pricesel:{
        width:(global.screenwidth - 100)/2,
        height:30,
        borderWidth:1,
        borderColor:"#562b63",
        borderRadius:25,
        marginLeft:0,
        textAlign:"center",
        paddingTop:4,
        fontSize:16,
        fontWeight:"bold",
        backgroundColor:"#562b63",
        color:"white",
    },
    hourly:{
        width:(global.screenwidth - 100)/2,
        height:40,
        borderRadius:25,
        marginLeft:0,
        textAlign:"center",
        paddingTop:4,
        fontSize:16,
        fontWeight:"bold",
    },
    midsel:{
        flexDirection:'row',
        marginLeft:10,
        width:(global.screenwidth - 40),
        height:60,
        // backgroundColor:"#ff0000",
    },
    midsel1:{
        width:(global.screenwidth - 40)/2,
        height:60,
        // marginLeft:20,
        marginRight:40,
        // backgroundColor:'#ff0000',
    },
    protxt:{
        fontSize:10,
        color:"#562b63",
        width:150,
    },
    budgetimg:{
        flexDirection:'row',
    },
    budgetplus:{
        marginTop:30,
        marginLeft:20,
    },
    addmore:{
        color:"#562b63",
        marginTop:40,
        marginLeft:10,
        fontSize:16,
        fontWeight:"bold",
    },
    postprojcet:{
        width:150,
        height:40,
        marginTop:30,
        backgroundColor:"#562b63",
        borderRadius:20,
        justifyContent:"center",
        marginLeft:(global.screenwidth - 150)/2,
        // alignItems:"center",
    },
    postprojcettxt:{
        color:"white",
        textAlign:"center",
    },





    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})