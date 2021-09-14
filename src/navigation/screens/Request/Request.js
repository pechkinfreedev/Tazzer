import React, { useState } from 'react';
import {Text, View,  ImageBackground, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const {icarrow, clean1,  thinking,  Rectangle202} = images;

const Request = () =>  {
        const navigation = useNavigation();

        return (
        <View style={styles.whiteback}>
            <ImageBackground source={Rectangle202} style={styles.rectangle}>

                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={icarrow} style={styles.arrow} />
                    <Text style={styles.top2}>My Requests</Text>
                </View>
            </ImageBackground>
            <View style={styles.topmain}>
                <Image source={thinking} style={styles.thinking}/>
                <Text style={styles.thinktext}>No requests to display</Text>
                <Text style={styles.bottombutton} >+ Add a new request</Text>
            </View>

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Request 

