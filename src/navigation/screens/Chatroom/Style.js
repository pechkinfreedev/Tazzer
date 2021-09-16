import { Center } from 'native-base';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    titletxt:{
        color:"white",
        fontSize:18,
        fontWeight:"bold",
        marginLeft:10,
        marginTop:-5,
    },
    flexrow:{
        flexDirection:"row",
    },

    clean1:{
        position:'absolute',
        width:50,
        height:50,
        marginLeft:160,
        marginTop:-70,
    },
    clean2:{
        position:'absolute',
        width:50,
        height:50,
        marginLeft:-20,
        marginTop:0,
    },

    clean8:{
        marginLeft:global.screenwidth - 60,
        width:60,
        height:60,
        marginTop:-40,
        position:'absolute',
    },
    clean9:{
        marginLeft:global.screenwidth - 70,
        marginTop:20,
        position:'absolute',
    },    
    mainbox:{
        textAlign:'center',
        margin: 0,
        flex: 5,
        justifyContent: 'space-between',
      },
      header:{
        backgroundColor:'#562b63',
        height:100,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
      },

    bottommenu0:{
        marginTop:global.screenheight - 85,
        position:'absolute'
    },
    
})