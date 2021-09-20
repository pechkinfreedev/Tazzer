import { View , Image ,Text} from  'react-native';
import React , { useState } from 'react';
import { styles } from './Style';
import {images} from '../../../constants/images';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export const Step7 = () =>  {
    const {plus, attach1, attach2, cancel2} = images;
    const navigation = useNavigation();

    return (
        <View style={styles.step1box}>
            <View style={styles.flexrow}>
                <Text style={styles.step1txt}> Any attachments that help explain what you need done?
                </Text>
            </View>                
            <View style={styles.dline} />  

            <View style={styles.attach} >
                <Text style={styles.attachtxt}>Add Attachment</Text>
            </View>
            <View style={styles.plus}>
                <Image source={plus} />
            </View>
            <View style={styles.midimg} >
                <Image source={attach1} style={styles.aimg1 }/>
                <Image source={cancel2} style={styles.aimgcancel }/>

                <Image source={attach2}  style={styles.aimg1 }/>
                <Image source={cancel2} style={styles.aimgcancel }/>
            </View>




        </View>
    )
};