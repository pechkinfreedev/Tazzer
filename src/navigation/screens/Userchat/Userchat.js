import React, { useState } from 'react';
import {Text, View,  Picker, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const {icarrow, clean1, clean2, clean8, clean9, circlepluse, sman7,  sman8,sman9,sman10,sman11,sman12, sman13, sman14, sman15, circle1, circle2, circle3,  booking, profile6, profile7 } = images;

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
                    <Image source={clean8} style={styles.clean8} />
                    <Image source={clean9} style={styles.clean9} />
                    <Text style={styles.top1}>All Users Team Chat</Text>
                </View>
            </View>

            <View style={styles.content} >
                <Image source={sman15} style={styles.manimg} />
                <Text style={styles.contenttxt}>All users team chat </Text>
                <Image source={circlepluse} style={styles.circlepluse} />
            </View>
            <View style={styles.content1} >
                <View>
                    <Image source={sman7} style={styles.manimg}   onPress={ ()=>navigation.navigate('Teamchat')} />
                    <Image source={circle1} style={styles.circlebottom} />
                </View>
                <View>
                    <Text style={styles.contenttxt1} onPress={ ()=>navigation.navigate('Teamchat')} >Mollie Austin</Text>
                    <Text style={styles.contenttxt2}>Really That's great...</Text>
                </View>
            </View>
            <View style={styles.content1} >
                <View>
                    <Image source={sman8} style={styles.manimg} />
                    <Image source={circle1} style={styles.circlebottom} />
                </View>
                <View>
                    <Text style={styles.contenttxt1}>Charlie Sharp</Text>
                    <Text style={styles.contenttxt2}>Where do you go</Text>
                </View>
            </View>
            <View style={styles.content1} >
                <View>
                    <Image source={sman9} style={styles.manimg} />
                    <Image source={circle2} style={styles.circlebottom} />
                </View>
                <View>
                    <Text style={styles.contenttxt1}>Maude McKinney</Text>
                    <Text style={styles.contenttxt2}>Amazing Jobl</Text>
                </View>
            </View>
            <View style={styles.content1} >
                <View>
                    <Image source={sman10} style={styles.manimg} />
                    <Image source={circle3} style={styles.circlebottom} />
                </View>
                <View>
                    <Text style={styles.contenttxt1}>Samuel Carlson</Text>
                    <Text style={styles.contenttxt2}>ok bro...!</Text>
                </View>
            </View>
            <View style={styles.content1} >
                <View>
                    <Image source={sman11} style={styles.manimg} />
                    <Image source={circle1} style={styles.circlebottom} />
                </View>
                <View>
                    <Text style={styles.contenttxt1}>Hattie Brewer</Text>
                    <Text style={styles.contenttxt2}>Cjongratulations Dear...</Text>
                </View>
            </View>
            <View style={styles.content1} >
                <View>
                    <Image source={sman12} style={styles.manimg} />
                    <Image source={circle2} style={styles.circlebottom} />
                </View>
                <View>
                    <Text style={styles.contenttxt1}>Asha neetu</Text>
                    <Text style={styles.contenttxt2}>Show me some pics</Text>
                </View>
            </View>
            <View style={styles.content1} >
                <View>
                    <Image source={sman13} style={styles.manimg} />
                    <Image source={circle1} style={styles.circlebottom} />
                </View>
                <View>
                    <Text style={styles.contenttxt1}>Raja Nayak</Text>
                    <Text style={styles.contenttxt2}>I'm fine! What are you...?</Text>
                </View>
            </View>
            <View style={styles.content1} >
                <View>
                    <Image source={sman14} style={styles.manimg} />
                    <Image source={circle1} style={styles.circlebottom} />
                </View>
                <View>
                    <Text style={styles.contenttxt1}>Eunice Diaz</Text>
                    <Text style={styles.contenttxt2}>Hello... Dear Check this...</Text>
                </View>
            </View>


            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Request 

