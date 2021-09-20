import React, { useState } from 'react';
import {Text, View,  ScrollView, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../../screens/Bottommenu/Bottommenu';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  

const {icarrow, sman23, edit, icoffice, pen, icaddress, icgovernment, iccountry, icmail1, icbirthday, arrow, dashboard4, booking, profile6, profile7 } = images;

const AddW = () =>  {
        const navigation = useNavigation();
        const [isSelected, setSelection] = useState(false);
        const [isSelected1, setSelection1] = useState(false);
        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={icarrow} style={styles.arrow} />
                    <Text style={styles.top1}>Profile Settings</Text>
                </View>
                <View  style={styles.sman}>
                    <Image source={sman23} />
                    <Image source={edit} style={styles.edit}/>
                </View>
            </View>

            <View style={styles.rect0} >
                <Image source={icaddress} style={styles.person}/>
                <Text style={styles.personname}>Address </Text>
                <Image source={pen} style={styles.pen}/>
            </View>
            <View style={styles.rect0} >
                <Image source={iccountry} style={styles.person1}/>
                <Text style={styles.personname}>Country </Text>
                <Image source={pen} style={styles.pen}/>
            </View>
            <View style={styles.rect1} >
                <Image source={icgovernment} style={styles.person}/>
                <Text style={styles.personname}>State </Text>
                <Image source={pen} style={styles.pen}/>
            </View>
            <View style={styles.rect1} >
                <Image source={icoffice} style={styles.person}/>
                <Text style={styles.personname}>Enter City </Text>
                <Image source={pen} style={styles.pen}/>
            </View>


            <View style={styles.nextbutton} >
                <Text style={styles.nextbuttontxt} >UPDATE</Text>
            </View>

        </View>
        )
}

export default AddW 

