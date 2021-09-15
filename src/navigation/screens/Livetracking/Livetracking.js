import React, { useState } from 'react';
import {Text, View,  ImageBackground, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Svg, { Polyline } from 'react-native-svg';

const {icarrow, clean1,  sman1, sman3, circlecall, clean2,clean5,uncheck, Ellipse85, booking, Rectangle202, Rectangle285,Rectangle290, Ellipse71, Ellipse712,Ellipse713, schedule, searchimg2, searchimg3, cleaning,Gardeners ,handyman,Rectangle1 ,Rectangle2 ,Rectangle3 , Rectangle4} = images;

const Timeclick = () =>  {
        const navigation = useNavigation();

        return (
        <View style={styles.whiteback}>
            <ImageBackground source={Rectangle202} style={styles.rectangle}>

                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2} />
                    <Image source={icarrow} style={styles.arrow} />
                    <Text style={styles.top2}>Live Tracking</Text>
                    <Image source={clean5} style={styles.clean5} />
                </View>
            </ImageBackground>

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
                <Svg height="400" width="300">

                <Polyline
                    points="140,80 50,150 110,200 70,280 200,320"
                    fill="none"
                    stroke="#562b63"
                    strokeWidth="6"
                />
            </Svg>
            </View>
            
            <View style={styles.circle} >
                    <Image source={sman1} style={styles.circleimg}/>
            </View>
            <View style={styles.circle1} >
                <Image source={sman3} style={styles.circleimg1}/>
            </View>
            <View style={styles.mid}>
                <View style={styles.flexrow} >
                    <View>
                        <Text  style={styles.midtoptext}>Aug 19,2021</Text>
                        <View style={styles.flexrow}>
                            <Image source={sman1} />
                            <View>
                                <Text  style={styles.midtoptech}>TECHNICIAN</Text>
                                <Text style={styles.midtopleif}>Leif Floyd</Text>
                            </View>    
                        </View>
                    </View>
                    <View>
                        <Text style={styles.midtopmin}>1h 20 min</Text>
                    </View>
                    <View >
                        <Image source={circlecall}  style={styles.midtopcallimg}/>
                        <Text style={styles.midtopcalltxt}>356KM</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.midbottomtxt1} >Service Address</Text>
                    <Text style={styles.midbottomtxt2} >2306 Madron way, San Pablo.CA </Text>
                </View>
            </View>

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Timeclick 

