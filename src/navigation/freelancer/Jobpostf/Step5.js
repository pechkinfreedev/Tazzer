import { View , Image ,Text} from  'react-native';
import React , { useState } from 'react';
import { styles } from './Style';
import {images} from '../../../constants/images';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export const Step5 = () =>  {
    const {pay, coin} = images;
    const navigation = useNavigation();

    return (
        <View style={styles.step1box}>
            <View style={styles.flexrow}>
                <Text style={styles.step1txt}> How world</Text>  
                <Text style={styles.step1txt1}> you like to pay?
                </Text>
            </View>                
            <View style={styles.dline} />  

            <View style={styles.price} >
                <Image source={coin} style={styles.priceimg}/>
                <View >
                    <Text style={styles.fixed}>Fixed Price</Text>
                    <Text style={styles.fixedtxt}>
                    Recommended for projects that have finite deliverables
                    </Text>
                </View>
                <Text style={styles.follow}>&gt;</Text>
            </View>
            <View style={styles.orstyle} >
                <Text>--- OR --- </Text>
            </View>

            <View style={styles.price} >
                <Image source={pay} style={styles.priceimg}/>
                <View >
                    <Text style={styles.fixed}>Hourly</Text>
                    <Text style={styles.fixedtxt}>
                    Recommended for projects  that are ongoing
                    </Text>
                </View>
                <Text style={styles.follow}>&gt;</Text>
            </View>



        </View>
    )
};