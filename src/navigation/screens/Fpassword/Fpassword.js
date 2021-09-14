import React, { useState } from 'react';
import {Text, View, ImageBackground, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';


const {fpassword,message, timeleft,  signup1bottom, login1,login2, login3, login4} = images;

const Fpasswrod = () =>  {
        const navigation = useNavigation();
        const [isSelected, setSelection] = useState(false);
        return (
            <View style={styles.container}>
                <View style={styles.centerimage}>
                    <ImageBackground style={styles.fpassword} source={fpassword}>
                        <Image style={styles.message} source={message} />
                    </ImageBackground>
                </View>
                <Image style={styles.login1} source={login1}></Image>
                <View  >
                    <Text style={styles.middlet}>Forgot Password</Text>
                    <Text style={styles.middlet1}>OTP has been sent on your Email.</Text>
                </View>
                <View style={styles.inputb} >
                    <TextInput style={styles.inputval}></TextInput>
                    <TextInput style={styles.inputval}></TextInput>
                    <TextInput style={styles.inputval}></TextInput>
                    <TextInput style={styles.inputval}></TextInput>
                </View>
                <View style={[styles.centerimage,styles.timeleft]}>
                    <Image source={timeleft} ></Image>
                    <Text style={styles.timetext}>0.35</Text>
                </View>
                <Text style={styles.bottom1}>If you don't receive a code! <Text style={styles.bottom2}>Resend OPT</Text></Text>
                <Text style={styles.subbutton}   onPress={ ()=>navigation.navigate('Details')} >SUBMIT </Text>                 
                <Image source={login2} style={styles.login2}/>           
                <Image source={login3} style={styles.login3} />           
                <Image source={login4}  style={styles.login4}/>
            </View>
        )
}

export default Fpasswrod 

