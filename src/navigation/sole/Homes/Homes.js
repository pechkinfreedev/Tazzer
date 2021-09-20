import React, { useState } from 'react';
import {Text, View, ScrollView, ImageBackground, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../../screens/Bottommenu/Bottommenu';

const {sman17,postjob, search, Path14, Path3, postjob1, postjob2,postjob3, postjob4, sman18 ,postjob5, postjob6, searchimg2, searchimg3, cleaning,Gardeners ,handyman,Rectangle1 ,Rectangle2 ,Rectangle3 , Rectangle4} = images;

const Home = () =>  {
        const navigation = useNavigation();
          
        return (
        <View style={styles.whiteback}>
            <View style={styles.container}>
                <View style={styles.flexrow}>   
                    <View>
                        <Text style={styles.top1}>Welcome to TazzerGroup</Text>
                        <Text style={styles.top2}>How can we </Text>
                        <Text style={styles.top2}>Help you Todays?</Text>
                    </View>
                    <Image source={sman18} style={styles.topimg} />
                </View>

                <View  style={styles.centerimage}>
                    <TextInput style={styles.search} placeholder="Search your needs" />
                    <Image source={search} style={styles.searchimg}/>    

                </View>
                <View style={styles.flexrow}>
                    <Image source={Path3} style={styles.path3} />
                    <Image source={Path14} style={styles.path14}/>
                </View>

                <View  style={styles.midview}>
                    <View style={styles.midview1}>
                        <Image source={postjob1} style={styles.midimg1}/>
                        <View style={styles.midviewtxt1} >
                            <Text style={styles.midviewtxt11}>Services</Text>
                        </View>
                    </View>
                    <View style={styles.midview2}>
                        <Image source={postjob2} style={styles.midimg1}/>
                        <View style={styles.midviewtxt2} >
                            <Text style={styles.midviewtxt21}>Construction</Text>
                            <Text style={styles.midviewtxt22}>And Builders Services</Text>
                        </View>
                    </View>
                </View>
                <View  style={styles.midview}>
                    <View style={styles.midview3}>
                        <Image source={postjob3} style={styles.midimg1}/>
                        <View style={styles.midviewtxt3} >
                            <Text style={styles.midviewtxt31}>Dog Walking</Text>
                            <Text style={styles.midviewtxt32}>And Peter Services</Text>
                        </View>
                        
                    </View>
                    <View style={styles.midview4}>
                        
                    <Image source={postjob4} style={styles.midimg1}/>
                        <View style={styles.midviewtxt4} >
                            <Text style={styles.midviewtxt41}>gardening</Text>
                            <Text style={styles.midviewtxt42}>And LandScaping</Text>
                        </View>
                    </View>
                </View>
                <View  style={styles.midview}>
                    <View style={styles.midview5}>
                        <Image source={postjob5} style={styles.midimg1}/>
                        <View style={styles.midviewtxt3} >
                            <Text style={styles.midviewtxt31}>Dog Walking</Text>
                            <Text style={styles.midviewtxt32}>And Peter Services</Text>
                        </View>
                        
                    </View>
                    <View style={styles.midview6}>
                        
                    <Image source={postjob6} style={styles.midimg1}/>
                        <View style={styles.midviewtxt4} >
                            <Text style={styles.midviewtxt41}>gardening</Text>
                            <Text style={styles.midviewtxt42}>And LandScaping</Text>
                        </View>
                    </View>
                </View>
            </View>


            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>

        </View>
        )
}

export default Home 

