import React, { useState } from 'react';
import {Text, View,  ImageBackground, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const {icarrow, clean1, calendar2, wefsf, info, clean2, clean4, checklist5 } = images;

const Request = () =>  {
        const navigation = useNavigation();
        const [isSelected1, setSelection1] = useState(false);
        const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
        const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
        const workout = {key: 'workout', color: 'green'};

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
                    <Image source={wefsf} style={styles.centerimg1}/>
                </View>
                <Text style={styles.toptext}>Invitation: Rose Whittaker and Robert Kotov  @Thu Aug 19, 2021 3pm - 3:40pm (EEST) (info@tazzergroup.com)</Text>
                <View style={styles.leftline}>
                    <View style={styles.toptext0}>
                        <Text  style={styles.toptext1}>You have been invited to the following event.</Text>
                        <Text style={styles.toptext2}> Rose Whittaker and Robert Kotov</Text>
                    </View>

                    <View style={styles.toptext4}>
                        <Image source={calendar2} style={styles.midimg}/>
                        <Text style={styles.midtext1} >Thu aug 19, 2021 3pm - 3:40pm Eastern European Time - Vilnius  </Text>
                    </View>

                    <View style={styles.toptext5}>
                        <Image source={info} style={styles.midimg1}/>
                        <Text style={styles.midtext1} >https://meet.google.com/jsc-bttb-owi</Text>
                    </View>
                    <Text style={styles.bottombutton} >JONE NOW</Text>
                    
                </View>

            </View>

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Request 

