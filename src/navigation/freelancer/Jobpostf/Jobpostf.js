import React, { useState } from 'react';
import {Text, View,  ScrollView, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../../screens/Bottommenu/Bottommenu';
import Stepper from "react-native-stepper-ui";
import {Step1} from "./Step1";
import {Step2} from "./Step2";
import {Step3} from "./Step3";
import {Step4} from "./Step4";
import {Step5} from "./Step5";
import {Step6} from "./Step6";
import {Step7} from "./Step7";


import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const {icarrow, clean1, polygon1, clean10, icphone, clean2, garbage, building, blind1, dashboard2, dashboard3, dashboard4, booking, profile6, profile7 } = images;

  const content = [
    <Step1 />,
    <Step2 />,
    <Step3 />,
    <Step4 />,
    <Step5 />,
    <Step6 />,
    <Step7 />,
  ];
const Jobpostf = () =>  {
        const navigation = useNavigation();
        const [active, setActive] = useState(0);
        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2} />
                    <Image source={icarrow} style={styles.arrow} />
                    {/* <Image source={editing} style={styles.editing} /> */}
                    <Image source={clean10} style={styles.clean4} />
                    <Text style={styles.top1}>job Post</Text>
                </View>
            </View>
            <View style={styles.topinter}>
                <Stepper
                    active={active}
                    content={content}
                    onNext={() => setActive((p) => p + 1)}
                    // onBack={() => setActive((p) => p - 1)}
                    onFinish={() => navigation.navigate('Step8')}

                    wrapperStyle={{height:450}}

                    stepStyle={styles.stepstyle}
                    
                    buttonStyle = {styles.buttonstyle}
                    
                    buttonTextStyle =  {styles.buttontextstyle}

                />
            </View>

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Jobpostf 

