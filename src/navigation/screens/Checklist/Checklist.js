import React, { useState } from 'react';
import {Text, View,  ImageBackground, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const {icarrow, clean1, search, checklist1, checklist2, checklist3, checklist4, checklist5 } = images;

const Checklist = () =>  {
        const navigation = useNavigation();

        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={icarrow} style={styles.arrow} />
                    <Text style={styles.top1}>Checklist</Text>
                </View>
                <TextInput style={styles.search} placeholder="Search" ></TextInput>
                <Image style={styles.searchimg} source={search} />
            </View>

            <View style={styles.content} >
                <Image style={styles.contentimg} source={checklist1} />
                <Text style={styles.contentimg} >Safety hazard Report</Text>
            </View>
            <View style={styles.content} >
                <Image style={styles.contentimg} source={checklist1} />
                <Text style={styles.contentimg} >Inspection form</Text>
            </View>
            <View style={styles.content} >
                <Image style={styles.contentimg} source={checklist1} />
                <Text style={styles.contentimg} >Site opening checklist</Text>
            </View>
            <View style={styles.content} >
                <Image style={styles.contentimg} source={checklist1} />
                <Text style={styles.contentimg} >Pre-drive checklist</Text>
            </View>
            <View style={styles.content} >
                <Image style={styles.contentimg} source={checklist1} />
                <Text style={styles.contentimg} >Incident Report</Text>
            </View>


            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Checklist 

