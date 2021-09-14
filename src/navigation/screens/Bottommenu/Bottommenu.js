import React, { useState } from 'react';
import {Text, View, ScrollView, ImageBackground, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';

const {ichome, icdia,icformat , icperson, Ellipse852} = images;

export const Bottommenu = () =>  {
    const navigation = useNavigation();
    const [isSelected, setSelection] = useState(false);
    return (
        <View>  
            <View style={styles.container}>
                <View style={styles.imgview}>
                    <Image source={ichome} />
                    <Text style={styles.textf1}>Home</Text>
                </View>
                <View style={styles.imgview}>
                    <Image source={icdia} />
                    <Text style={styles.textf2}>Categories</Text>
                </View>
                <View style={styles.imgview2}>
                    <Image source={icformat} />
                    <Text style={styles.textf3}>Booking</Text>
                </View>
                <View style={styles.imgview}>
                    <Image source={icperson} />
                    <Text style={styles.textf4}>Me</Text>
                </View>
            </View>
            
            <View style={styles.circleview}>
                <Image source={Ellipse852} style={styles.circle}/>
            </View>
        </View>
    )

}

// export default bottommenu 