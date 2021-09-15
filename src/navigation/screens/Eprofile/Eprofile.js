import React, { useState } from 'react';
import {Text, View,  ImageBackground, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const {icarrow, clean1, polygon1, wefsf, info, clean2, woman, editing, profile1, profile2, profile3, profile4, profile5, profile6, profile7 } = images;

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
                    <Image source={icarrow} style={styles.arrow} />
                    <Image source={editing} style={styles.editing} />
                    <Image source={polygon1} style={styles.polygon1} />
                    <Text style={styles.top1}>Edit Profile</Text>
                </View>
                <View  style={styles.woman1}>
                    <Image source={woman}/>
                    <Text style={styles.name}>Sophla Jon</Text>
                    <Text style={styles.name1}>Cleaning</Text>
                    <Text style={styles.name2} >Edit Profile</Text>
                </View>
            </View>

            <View style={styles.content} >
                <View style={styles.contenttext}>
                    <Image source={profile1} style={styles.proimg}/>
                    <Text  style={styles.protext}>Dashboard &emsp; &emsp; &emsp; &emsp;&emsp; &gt;</Text>
                </View>
                <View style={styles.contenttext1}>
                    <Image source={profile2} style={styles.proimg}/>
                    <Text  style={styles.protext}>Booked Order &emsp; &emsp;  &emsp;&emsp; &gt;</Text>
                </View>
                <View style={styles.contenttext1}>
                    <Image source={profile3} style={styles.proimg}/>
                    <Text  style={styles.protext}>Wallet &emsp; &emsp;  &emsp;&emsp; &gt;</Text>
                </View>
                <View style={styles.contenttext1}>
                    <Image source={profile4} style={styles.proimg}/>
                    <Text  style={styles.protext}>Payment Verify &emsp; &emsp;  &emsp;&emsp; &gt;</Text>
                </View>
                <View style={styles.contenttext1}>
                    <Image source={profile5} style={styles.proimg}/>
                    <Text  style={styles.protext}>Reviews &emsp; &emsp;  &emsp;&emsp; &gt;</Text>
                </View>
                <View style={styles.contenttext1}>
                    <Image source={profile6} style={styles.proimg}/>
                    <Text  style={styles.protext}>Payment &emsp; &emsp;  &emsp;&emsp; &gt;</Text>
                </View>
                <View style={styles.contenttext1}>
                    <Image source={profile7} style={styles.proimg}/>
                    <Text  style={styles.protext}>Change Password &emsp; &emsp;  &emsp;&emsp; &gt;</Text>
                </View>


            </View>

            <View style={styles.mask}></View>
            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Request 

