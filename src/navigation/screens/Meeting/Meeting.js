import React, { useState } from 'react';
import {Text, View,  ImageBackground, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  

const {icarrow, clean1, a4393, calendar4, icalarm, clean2, clean4, checklist5 } = images;

const Request = () =>  {
        const navigation = useNavigation();
        const [isSelected1, setSelection1] = useState(false);
        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2} />
                    <Image source={clean4} style={styles.clean4} />
                    <Image source={icarrow} style={styles.arrow} />
                    <Text style={styles.top1}>Schedule Meeting</Text>
                </View>
            </View>

            <View style={styles.content} >
                <View style={styles.centerimg}>
                    <Image source={a4393} style={styles.centerimg}/>
                </View>
                <Text style={styles.bottombutton} >Send</Text>
            </View>


            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Request 

