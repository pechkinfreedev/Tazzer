import { View , Image ,Text} from  'react-native';
import React from 'react';
import { styles } from './Style';
import {images} from '../../../constants/images';

export const Step1 = () =>  {
    const {suitcase} = images;
    return (
        <View style={styles.step1box}>
            <View style={styles.flexrow}>
                <Text style={styles.step1txt}> Great!</Text>  
                <Text style={styles.step1txt1}>  Let's give your job a name
                </Text>
            </View>                
            <View style={styles.dline} />  

            <View style={styles.step1content} >
                <Image source={suitcase} style={styles.step1img}/>
                <Text style={styles.step1txt2}>e.g. I need Gardening service ets.</Text>
            </View>

        </View>
    )
};