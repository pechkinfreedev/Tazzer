import React, { useState } from 'react';
import {Text, View,  Picker, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../../screens/Bottommenu/Bottommenu';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const {icarrow, clean1, invitation, linkc, arrowback, clean2, sman1, sman20, sman21, sman22, dashboard3, dashboard4, booking, profile6, profile7 } = images;

const Request = () =>  {
        const navigation = useNavigation();
        const [selectedValuedash, setSelectedValuedash] = useState("Dashboard");
        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2} />
                    <Image source={icarrow} style={styles.arrow} />
                    {/* <Image source={editing} style={styles.editing} /> */}
                    {/* <Image source={polygon1} style={styles.polygon1} /> */}
                    <Text style={styles.top1}>Invitation To A Project</Text>
                </View>
            </View>
            <Image source={invitation} />
            <Text style={styles.title}>Invitation to a project</Text>
            <View style={styles.linkview} >
                <Text style={styles.linktxt} >
                    EPS_2152-participant-activity
                </Text>
                <View style={styles.rectbutton} >
                    <Image source={linkc} style={styles.linkc}/>
                    <Text style={styles.clinktxt} >Copy link</Text>
                </View>
            </View>
            <Text style={styles.title2}>Invitation with</Text>
            <View style={styles.bottom} >
                <Image source={sman1} style={styles.sman1}/>
                <Image source={sman20} style={styles.sman2}/>
                <Image source={sman21} style={styles.sman3}/>
                <Image source={sman22} style={styles.sman4}/>
                <Text style={styles.bottomtxt} >+451</Text>
            </View>


            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Request 

