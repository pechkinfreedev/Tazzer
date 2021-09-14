import React, { useState } from 'react';
import {Text, View,  ImageBackground, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const {icarrow, clean1,  icborder,  user, timesheet, icalarms, a} = images;

const Request = () =>  {
        const navigation = useNavigation();

        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={icarrow} style={styles.arrow} />
                    <Text style={styles.top2}>Time Clock</Text>
                </View>
            </View>
            <View style={[styles.topmain1, styles.flexrow]}>
                <Text style={styles.totalfont}>Total hours for Thursday,  Aug 26</Text>
                <Text style={styles.totalfont1}>00:01:30</Text>
            </View>
            <View style={styles.topmain0}>
                <View style={styles.flexrow}>
                    <Text style={styles.toptext}>Work time on</Text>
                    <View style={styles.topright}> 
                        <Text>Project A</Text>
                    </View>
                </View>                
                <Text style={styles.timesec}>00:00:60</Text>
                <View style={styles.dline}></View>
                <View style={styles.flexrow} >
                    <Image source={a} style={styles.tracking}/>
                    <Text style={styles.clockname}>Clocked in at Rajkamal</Text>
                </View>
            </View>
            <View style={styles.topmain}>
                <View style={styles.flexrow}>
                    <Text style={styles.attachment}>Attachments</Text>
                    <Text style={styles.attachment1} >Attachments</Text>
                </View>
                <View style={styles.dline1}></View>
                <Text style={styles.midtext}>Shift Attachments</Text>
                <View style={styles.flexrow}>
                    <TextInput style={styles.addnot} placeholder="Add a note"></TextInput>
                    <Image source={icborder} style={styles.imgborder}/>
                </View>
                <Text style={styles.bottombutton} ><Image source={icalarms} />&nbsp;&nbsp; End Shift</Text>
                <View style={styles.flexrow}>
                    <Text style={styles.attachment2}><Image source={user} style={styles.iconsize}/>&nbsp;  My requests</Text>
                    <Text style={styles.attachment2}><Image source={timesheet}  style={styles.iconsize}/>&nbsp;Timesheet</Text>
                </View>
            </View>
            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Request 

