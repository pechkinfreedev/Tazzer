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
                    <Text style={styles.top2}>Shift details 08/26/2021</Text>
                </View>
            </View>
            <View style={styles.top0}>
                <Text style={styles.toptext}>Shift date </Text>            
                <Text style={styles.toptext1}>Thu, Aug 26 </Text>
            </View>
            <View style={styles.flexrow}>
                <View style={styles.top1}> 
                    <Text style={styles.top1text}>Clock In</Text>
                    <View style={styles.dline1} ></View>
                    <Text style={styles.top1text}>2:55:PM</Text>
                    <View style={styles.dline1} ></View>
                    <View style={styles.flexrow}>
                        <Image source={a} style={styles.aimg}/>
                        <Text style={styles.atext} >Clocked in at:{"\n"} jaka</Text>
                    </View>
                </View>
                <View style={styles.top12}> 
                    <Text style={styles.top1text}>Clock Out</Text>
                    <View style={styles.dline1} ></View>
                    <Text style={styles.top1text}>2:55:PM</Text>
                    <View style={styles.dline1} ></View>
                    <View style={styles.flexrow}>
                        <Image source={a} style={styles.aimg}/>
                        <Text style={styles.atext} >Clocked in at:{"\n"} jaka</Text>
                    </View>
                </View>
            </View>           

            <View style={styles.top0}>
                <Text style={styles.toptext}>Total hours </Text>            
                <Text style={styles.project} >Project A</Text>
                <Text style={styles.toptext2}>00:00 </Text>
            </View>

            <View style={styles.top3}>
                <TextInput style={styles.topbutton} placeholder="Note" />
                <Image source={icborder} style={styles.borderimg} />
                <View style={styles.flexrow}>
                    <Text style={styles.top3text1}>
                        <Image source={dimg1} />&nbsp; Edit
                    </Text>
                    <Text style={styles.top3text2}><Image source={dimg2} />&nbsp;Confirm</Text>
                </View>
            </View>

            

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Request 

