import React, { useState } from 'react';
import {Text, View, ImageBackground, Image, Switch, TouchableOpacity} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';

const {signup1top,logo, arrow,  signup1bottom, login2, login4} = images;

const Signup2 = () =>  {
        const navigation = useNavigation();
        const [isSelected, setSelection] = useState(false);
        return (
                <View style={styles.container}>
                    <ImageBackground source={signup1top} style={styles.signup1top} >
                       <Image source={logo} style={styles.logo} />                 
                    </ImageBackground>
                    <Text style={styles.top1} >Maing Address</Text>
                    <Text style={styles.startbutton}> Enter Street Address</Text>  
                    <Text style={styles.startbutton}> House or Flat Number</Text> 
                    <Text style={styles.startbutton}> Enter Street Address</Text>  
                    <Text style={styles.startbutton}> Enter City</Text>  
                    <Text style={styles.startbutton}> Enter Province </Text> 

                    <Switch  
                    value={isSelected}  
                    onValueChange ={setSelection}
                    style={styles.checkbox}  />
                    <Text style={styles.switchtext}>I agree to tazzer Group Privacy Policy & Terms.
                    </Text>

                    <ImageBackground source={signup1bottom} style={styles.signup2bottom} >
                    </ImageBackground>
                    <Image source={login2} style={styles.login2} />                 
                    <Image source={login4} style={styles.login4} />    
                    {/* <TouchableOpacity    onPress={ ()=>navigation.navigate('Fpassword')}> */}
                        <Text style={styles.nextbutton}  onPress={ ()=>navigation.navigate('Fpassword')}>START <Image source={arrow}></Image></Text> 
                    {/* </TouchableOpacity> */}
                </View>
        )

}

export default Signup2 

