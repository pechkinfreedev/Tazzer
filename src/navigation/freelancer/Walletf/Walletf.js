import React, { useState } from 'react';
import {Text, View,  ScrollView, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../../screens/Bottommenu/Bottommenu';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const {icarrow, clean1, polygon1, mopm, icphone, clean2, clean6, building, blind1, dashboard2, dashboard3, dashboard4, booking, profile6, profile7 } = images;

const Wallet = () =>  {
        const navigation = useNavigation();
        const [selectedValuedash, setSelectedValuedash] = useState("Dashboard");
        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2} />
                    <Image source={icarrow} style={styles.arrow} />
                    <Image source={clean6} style={styles.clean6} />
                    <Image source={polygon1} style={styles.polygon1} />
                    <Text style={styles.top1}>Wallet</Text>
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
                <View style={styles.flexrow} >
                    <Text style={styles.contenttext1}>
                        All Transactions
                    </Text>
                    <Text style={styles.contenttext2} >Add Money to wallet &gt;</Text>
                </View>
                <View style={styles.dline} ></View>
                <View style={styles.mid2}>
                    <View>
                        <Text style={styles.contenttext3}>All Money in wallet</Text>
                        <Text style={styles.contenttext4}>20 Aug.2021 10:25 am</Text>
                    </View>
                    <View style={styles.contenttext5}>
                        <Text style={styles.contenttext6}>+ $598</Text>
                    </View>
                </View>
                <View style={styles.dline1} ></View>
                <View style={styles.mid2}>
                    <View>
                        <Text style={styles.contenttext3}>Update plan</Text>
                        <Text style={styles.contenttext4}>20 Aug.2021 10:25 am</Text>
                    </View>
                    <View style={styles.contenttext5}>
                        <Text style={styles.contenttext7}>- $96</Text>
                    </View>
                </View>
                <View style={styles.dline1} ></View>
                <View style={styles.mid2}>
                    <View>
                        <Text style={styles.contenttext3}>Amount credited</Text>
                        <Text style={styles.contenttext4}>15 Aug.2021 10:25 am</Text>
                    </View>
                    <View style={styles.contenttext5}>
                        <Text style={styles.contenttext6}>+ $100</Text>
                    </View>
                </View>
                <View style={styles.dline1} ></View>
                <View style={styles.mid2}>
                    <View>
                        <Text style={styles.contenttext3}>Amount credited</Text>
                        <Text style={styles.contenttext4}>13 Aug.2021 10:25 am</Text>
                    </View>
                    <View style={styles.contenttext5}>
                        <Text style={styles.contenttext6}>+ $160</Text>
                    </View>
                </View>
                <View style={styles.dline1} ></View>
                <View style={styles.mid2}>
                    <View>
                        <Text style={styles.contenttext3}>Amount credited</Text>
                        <Text style={styles.contenttext4}>08 Aug.2021 10:25 am</Text>
                    </View>
                    <View style={styles.contenttext5}>
                        <Text style={styles.contenttext6}>+ $120</Text>
                    </View>
                </View>
                <View style={styles.dline1} ></View>
                <View style={styles.mid2}>
                    <View>
                        <Text style={styles.contenttext3}>Amount credited</Text>
                        <Text style={styles.contenttext4}>07 Aug.2021 10:25 am</Text>
                    </View>
                    <View style={styles.contenttext5}>
                        <Text style={styles.contenttext6}>+ $180</Text>
                    </View>
                </View>

            </View>

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Wallet 

