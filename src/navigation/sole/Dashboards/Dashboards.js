import React, { useState } from 'react';
import {Text, View,  Picker, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../../screens/Bottommenu/Bottommenu';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const {icarrow, clean1, polygon1, path30, arrowback, clean2, woman, editing, dashboard1, dashboard2, dashboard3, dashboard4, booking, dashboard5, profile7 } = images;

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
                    <Image source={polygon1} style={styles.polygon1} />
                    <Text style={styles.top1}>Dashboard</Text>
                </View>
            </View>

            <View style={styles.content} >
                <View style={styles.contenttext}>
                    <Image source={dashboard5} style={styles.dashboard}/>
                    <Image source={path30} style={styles.path30}/>
                    <Image source={arrowback} style={styles.patharrow} />
                    <Image source={booking} style={styles.booking}/>
                    <Text style={styles.dashtext}> 185 {"\n"} Order</Text>
                </View>
                <View style={styles.contenttext1}>
                    <Image source={dashboard2} style={styles.dashboard}/>
                    <Image source={path30} style={styles.path30}/>
                    <Image source={arrowback} style={styles.patharrow} />
                    <Image source={booking} style={styles.booking}/>
                    <Text style={styles.dashtext}>15 {"\n"} Reviews</Text>
                </View>
                <View style={styles.contenttext2}>
                    <Image source={dashboard3} style={styles.dashboard}/>
                    <Image source={path30} style={styles.path30}/>
                    <Image source={arrowback} style={styles.patharrow} />
                    <Image source={booking} style={styles.booking}/>
                    <Text style={styles.dashtext}>02 {"\n"} Notification</Text>
                </View>

            </View>

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Request 

