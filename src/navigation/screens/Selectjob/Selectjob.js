import React, { useState } from 'react';
import {Text, View,  ImageBackground, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const {icarrow, clean1,  clock, request, timesheet, icbrightness,sman4,uncheck, Ellipse85, booking, Rectangle202, Rectangle285,Rectangle290, Ellipse71, Ellipse712,Ellipse713, schedule, searchimg2, searchimg3, cleaning,Gardeners ,handyman,Rectangle1 ,Rectangle2 ,Rectangle3 , Rectangle4} = images;

const Timeclick = () =>  {
        const navigation = useNavigation();

        return (
        <View style={styles.whiteback}>
            <ImageBackground source={Rectangle202} style={styles.rectangle}>

                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={icarrow} style={styles.arrow} />
                    <Text style={styles.top2}>Time Click</Text>
                    <Image source={icbrightness} style={styles.brightness} />
                </View>
            </ImageBackground>
            <View style={styles.topmain}>

                <View style={styles.mapcontainer}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                        showUserLocation={true} >
                        <Marker coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                        }}  />
                    </MapView>
                </View> 
                <TextInput style={styles.search} placeholder="Work hours so far"/>

                <Text style={styles.subbutton}   onPress={ ()=>navigation.navigate('Clean')} > 
                    <View>
                        <Image source={clock} style={styles.clock} />
                        <Text style={styles.shift }> Start Shift</Text>                 
                    </View>
                </Text>
                <View style={styles.flexrow}>
                    <View style={styles.topch}>
                        <Image source={request} style={styles.request} />
                        <Text>{"\n"}My Requests</Text>
                    </View>
                    <View style={styles.topch}>
                        <Image source={timesheet} style={styles.mopm} />
                        <Text>{"\n"}My Timesheet</Text>
                    </View>
                </View>
            </View>

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>

            <View style={styles.operateopt}> 
            </View>
            <View style={styles.modalw}>
                <Text style={styles.select}>Select Job</Text>  
                <View style={styles.dline}/>
                <View style={styles.content}>
                    <Text style={styles.alljob}>All Job </Text>
                </View>  
                 
            </View>
         
        </View>
        )
}

export default Timeclick 

