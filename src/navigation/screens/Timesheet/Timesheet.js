import React, { useState } from 'react';
import {Text, View,  ImageBackground, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const {icarrow, clean1,  dimg1, dimg2, icborder, a} = images;

const Request = () =>  {
        const navigation = useNavigation();

        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={icarrow} style={styles.arrow} />
                    <Text style={styles.top1}>Timesheet</Text>
                </View>
                <View style={styles.flexrow}>
                    <Text style={styles.top1button1}>08/12/2021</Text>
                    <Text style={styles.tofont} >To</Text>
                    <Text style={styles.top1button2}>08/12/2021</Text>                    
                </View>
                <View style={styles.flexrow} >
                    <View style={styles.dline1}></View>
                    <Text style={styles.overall} >Overall totals</Text>                    
                    <View style={styles.dline1}></View>
                </View>
                <View style={[styles.flexrow, styles.textcenter ]} >
                    <View>
                        <Text style={styles.top3font1}>Regular</Text>
                        <Text style={styles.top3font2}>&nbsp; 0:55</Text>
                    </View>
                    <View>
                        <Text style={styles.top3font1}>Over</Text>
                        <Text style={styles.top3font2}>&nbsp;&nbsp;- -</Text>
                    </View>
                    <View>
                        <Text style={styles.top3font1}>Total</Text>
                        <Text style={styles.top3font2}>&nbsp; 0:55</Text>
                    </View>
                    <View>
                        <Text style={styles.top3font1}>Absense</Text>
                        <Text style={styles.top3font2}>&nbsp; &nbsp; &nbsp; - -</Text>
                    </View>
                </View>
            </View>

            <View style={styles.midcontent } >
                <Text style={[styles.textcenter, styles.midtop1]} >Overall totals</Text>
                <View style={styles.dline2} ></View>
                <View style={[styles.flexrow, styles.textcenter ]} >
                    <View>
                        <Text style={styles.mid1font1}>Regular</Text>
                        <Text style={styles.mid1font2}>&nbsp; 0:55</Text>
                    </View>
                    <View>
                        <Text style={styles.mid1font1}>Over</Text>
                        <Text style={styles.mid1font2}>&nbsp;&nbsp;- -</Text>
                    </View>
                    <View>
                        <Text style={styles.mid1font1}>Total</Text>
                        <Text style={styles.mid1font2}>&nbsp; 0:55</Text>
                    </View>
                    <View>
                        <Text style={styles.mid1font1}>Absense</Text>
                        <Text style={styles.mid1font2}>&nbsp; &nbsp; &nbsp; - -</Text>
                    </View>
                </View>
            </View>
           
            <View style={[styles.midcontent1, styles.flexrow ]} >
                    <Text style={styles.midfont3}>26 {"\n"}Thu</Text>
                    <View style={styles.midinter}></View>
                    <Text style={styles.midfont4}>Daily Total - -</Text>
                    <Text style={styles.midfont4}>&emsp; &emsp; &emsp; &gt; </Text>
            </View>

            <View style={[styles.midcontent1, styles.flexrow ]} >
                    <Text style={styles.midfont3}>25 {"\n"}Wed</Text>
                    <View style={styles.midinter}></View>
                    <Text style={styles.midfont4}>Daily Total - -</Text>
                    <Text style={styles.midfont4}>&emsp; &emsp; &emsp; &gt; </Text>
            </View>

            <View style={[styles.midcontent1, styles.flexrow ]} >
                    <Text style={styles.midfont3}>23 {"\n"}Mon</Text>
                    <View style={styles.midinter}></View>
                    <Text style={styles.midfont4}>Daily Total - -</Text>
                    <Text style={styles.midfont4}>&emsp; &emsp; &emsp; &gt; </Text>
            </View>

            <View style={[styles.midcontent1, styles.flexrow ]} >
                    <Text style={styles.midfont3}>23 {"\n"}Mon</Text>
                    <View style={styles.midinter}></View>
                    <Text style={styles.midfont4}>Daily Total - -</Text>
                    <Text style={styles.midfont4}>&emsp; &emsp; &emsp; &gt; </Text>
            </View>

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Request 

