import React, {Component} from 'react';
import {Text, View, ImageBackground,TextInput , TouchableOpacity, Image} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';

const {signup1top,logo, arrow,  signup1bottom, login4} = images;

export default class Signup1 extends Component  {
    constructor() {
        super();
        this.state={};

    }
    render() {
        return (
                <View style={styles.container}>
                    <ImageBackground source={signup1top} style={styles.signup1top} >
                       <Image source={logo} style={styles.logo} />                 
                    </ImageBackground>
                    <Text style={styles.top1} >Sign Up</Text>
                    <Text style={styles.top2} >Please Sign up to Continue</Text>
                    <TextInput style={styles.startbutton} placeholder="Enter your name..." />  
                    <TextInput style={styles.startbutton} placeholder="Enter email id..." /> 
                    <View>
                        <TextInput style={styles.startbutton1} placeholder="+44"/>                      
                        <TextInput style={styles.startbutton2}  placeholder="Mobile no." /> 
                    </View>  
                    <TextInput style={styles.startbutton}  placeholder="Enter postal code" />  
                    <TextInput style={styles.startbutton} placeholder="Enter password" />  
                    <TextInput style={styles.startbutton} placeholder="You applying as" /> 
                    <ImageBackground source={signup1bottom} style={styles.signup1bottom} >
                    </ImageBackground>
                    <Image source={login4} style={styles.login4} /> 
                    {/* <TouchableOpacity > */}
                    <Text style={styles.nextbutton}   onPress={ ()=>this.props.navigation.navigate('Signup2')} >NEXT <Image source={arrow}></Image></Text>  
                    {/* </TouchableOpacity > */}
   

                </View>
        )
    }
}



