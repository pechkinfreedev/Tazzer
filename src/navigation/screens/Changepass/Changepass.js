import React, { useState } from 'react';
import {Text, View,  Picker, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const {icarrow, clean1, privacy, password, login, clean2, clean7, editing, dashboard1, dashboard2, dashboard3, dashboard4, booking, profile6, profile7 } = images;

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
                    <Image source={clean7} style={styles.clean7} />
                    <Text style={styles.top1}>Change Password</Text>
                </View>
            </View>

            <View style={styles.content} >
                <View style={styles.contenttxt1}>
                    <Image source={privacy} style={styles.privacy}/>
                    <Text style={styles.contenttxt2}>Current Password</Text>
                </View>
                <View style={styles.contenttxt1}>
                    <Image source={password} style={styles.privacy}/>
                    <Text style={styles.contenttxt2}>New Password</Text>
                </View>
                <View style={styles.contenttxt1}>
                    <Image source={login} style={styles.privacy}/>
                    <Text style={styles.contenttxt2}>Confirm Password</Text>
                </View>
                <View style={styles.contenttxt3}>
                    <Text style={styles.contenttxt4}>Save</Text>
                </View>                
            </View>

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Request 

