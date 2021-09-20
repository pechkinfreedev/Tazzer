import React, { useState } from 'react';
import {Text, View,  ScrollView, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../../screens/Bottommenu/Bottommenu';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  

const {icarrow, clean1, polygon1, Paypal, stripe, clean2, clean6, building, blind1, dashboard2, dashboard3, dashboard4, booking, profile6, profile7 } = images;

const AddW = () =>  {
        const navigation = useNavigation();
        const [isSelected, setSelection] = useState(false);
        const [isSelected1, setSelection1] = useState(false);
        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2} />
                    <Image source={icarrow} style={styles.arrow} />
                    <Image source={clean6} style={styles.clean6} />
                    <Image source={polygon1} style={styles.polygon1} />
                    <Text style={styles.top1}>Payment History</Text>
                    <Text style={styles.toptext1}>Abailable Balance</Text>
                    <Text style={styles.toptext2}>$255</Text>
                    <Text style={styles.toptext3}>Total Credit</Text>
                    <Text style={styles.toptext4}>$2659</Text>
                    <View style={styles.toptext8}>
                        <Text style={styles.toptext5}>Total Credit</Text>
                        <Text style={styles.toptext6}>$2659</Text>
                    </View>
                </View>
            </View>

            <View style={styles.content} >
                <Text style={styles.contenttext1}>Payment History</Text>
                <View style={styles.dline} />
                <View style={styles.content1}>
                    <Text  style={styles.service} >Service</Text>
                    <Text  style={styles.service} >Customer</Text>
                    <Text  style={styles.service} >Amount</Text>
                </View>
                <View style={styles.dline1} />
                <View style={styles.content1}>
                    <Text  style={styles.cleaning} >Cleaning </Text>
                    <Text  style={styles.cleaning} >Benjamin</Text>
                    <Text  style={styles.cleaning1} >+  $598</Text>
                </View>
                <Text  style={styles.date} >25 Aug. 2021 </Text>
                <View  style={styles.content1}>
                    <Text  style={styles.state} >status </Text>
                    <Text  style={styles.workdone} >Work done </Text>
                </View>
                <View style={styles.dline1} />

                <View style={styles.content1}>
                    <Text  style={styles.cleaning} >Construction </Text>
                    <Text  style={styles.cleaning} >Noah</Text>
                    <Text  style={styles.cleaning1} >+  $124</Text>
                </View>
                <Text  style={styles.date} >25 Aug. 2021 </Text>
                <View  style={styles.content1}>
                    <Text  style={styles.state} >status </Text>
                    <Text  style={styles.Progress} >Progress </Text>
                </View>
                <View style={styles.dline1} />

                <View style={styles.content1}>
                    <Text  style={styles.cleaning} >Dog walking </Text>
                    <Text  style={styles.cleaning} >Elijah</Text>
                    <Text  style={styles.cleaning1} >+  $89</Text>
                </View>
                <Text  style={styles.date} >25 Aug. 2021 </Text>
                <View  style={styles.content1}>
                    <Text  style={styles.state} >status </Text>
                    <Text  style={styles.workdone} >Work done </Text>
                </View>
                <View style={styles.dline1} />
                
                <View style={styles.content1}>
                    <Text  style={styles.cleaning} >Cleaning </Text>
                    <Text  style={styles.cleaning} >Lucas</Text>
                    <Text  style={styles.cleaning1} >+  $598</Text>
                </View>
                <Text  style={styles.date} >25 Aug. 2021 </Text>
                <View  style={styles.content1}>
                    <Text  style={styles.state} >status </Text>
                    <Text  style={styles.Progress} >Progress </Text>
                </View>
                <View style={styles.dline1} />


                
            </View>




            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default AddW 

