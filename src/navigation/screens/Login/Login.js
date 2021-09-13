import React, {Component} from 'react';
import {Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';

const {whiterect, person, lock, google,facebook , twitter, arrow, login1, login2, login3, login4} = images;

export default class Welcome extends Component  {
    constructor() {
        super();
        this.state={};

    }
    render() {
        return (
                <View style={styles.container}   >
                    <Text style={styles.top}>Hey!</Text>
                    <Text style={styles.top1}>Login Now</Text>
                    <ImageBackground source={whiterect} style={styles.whiterect} >
                        <Text style={styles.recttop}>Welcome to</Text>
                        <View>
                            <Text style={styles.recttop1}>TAZZERGROUP</Text>
                            <Text style={styles.recttop2}>Please Sign into continue</Text>
                            <Image source={login1} style={styles.login1} />     
                        </View>                  
                        <View>
                            <Image source={person} style={styles.iconimg} />
                            <Text  style={styles.recttop3}>Enter username</Text>
                            <View style={styles.dline}/>
                        </View>
                        <View>
                            <Image source={lock} style={styles.iconimg} />
                            <Text  style={styles.recttop3}>Enter password</Text>
                            <View style={styles.dline}/>
                            <Text  style={styles.recttop4}>Forget password ?</Text>
                        </View>
                        <Text style={styles.rectbottom1}>Login with</Text>
                        <Text style={styles.loginbutton}>LOGIN <Image source={arrow}></Image></Text>  
                        <View>
                            <Image source={google} style={styles.bottomimg1} />    
                            <Image source={facebook} style={styles.bottomimg2} />
                            <Image source={twitter} style={styles.bottomimg3} />                        
                        </View>                        
                        <Image source={login2} style={styles.login2} /> 
                        <Text style={styles.rectbottom2}>Don't have an account</Text>                        
                        <Text style={styles.rectsignup}   onPress={()=>this.props.navigation.navigate('Signup1')} >SIGN UP</Text>  
                        <Image source={login3} style={styles.login3} />  
                        <Image source={login4} style={styles.login4} />                 
                    </ImageBackground>
                                          
                </View>
        )
    }
}



