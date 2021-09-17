import React, { useState } from 'react';
import {Text, View,  ImageBackground, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../../screens/Bottommenu/Bottommenu';

const {icarrow, clean1, clean2, calendar, tracking, mopm, delete1, aircleaning, booking, Rectangle202, gardening,blind, plants, dog,mechanic, searchimg1, searchimg2, searchimg3, cleaning,Gardeners ,handyman,Rectangle1 ,Rectangle2 ,Rectangle3 , Rectangle4} = images;

const Booking = () =>  {
        const navigation = useNavigation();

        return (
        <View style={styles.whiteback}>
            <ImageBackground source={Rectangle202} style={styles.rectangle}>

                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2}  />
                    <Image source={booking} style={styles.clean3}  />
                    <Image source={icarrow} style={styles.arrow} />
                    <Text style={styles.top2}>Post Job List</Text>
                </View>
            </ImageBackground>
            <View style={styles.topmain}>
                <View style={styles.topdep}>
                    <View style={styles.topch}>
                        <Image source={mopm} style={styles.mopm} />
                    </View>
                    <View style={styles.contentbox1}>
                        <Text style={styles.child1}>Cleaning Service</Text>
                        <Text style={styles.child2}>03-july-2021 4:30pm</Text>
                        <Text style={styles.child2}>Booking <Text style={styles.child3}>Under Review</Text></Text>
                    </View>
                    <View style={styles.childbutton}>
                        <View style={styles.flexrow} >
                            <Text style={styles.bookbutton}   onPress={ ()=>navigation.navigate('editing')} ><Image source={calendar} /> </Text>   
                            <Text style={styles.childtxt}>Edit</Text>
                        </View>  
                        <View style={styles.flexrow} >          
                            <Text style={styles.bookbutton1}   onPress={ ()=>navigation.navigate('Clean')} ><Image source={delete1} /></Text>                 
                            <Text style={styles.childtxt}>Delete</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.topdep}>
                    <View style={styles.topch}>
                        <Image source={gardening} style={styles.mopm} />
                    </View>
                    <View style={styles.contentbox1}>
                        <Text style={styles.child1}>Gardening</Text>
                        <Text style={styles.child2}>03-july-2021 4:30pm</Text>
                        <Text style={styles.child2}>Booking <Text style={styles.child4}>Success</Text></Text>
                    </View>
                    <View style={styles.childbutton}>
                        <View style={styles.flexrow} >
                            <Text style={styles.bookbutton}   onPress={ ()=>navigation.navigate('editing')} ><Image source={calendar} /> </Text>   
                            <Text style={styles.childtxt}>Edit</Text>
                        </View>  
                        <View style={styles.flexrow} >          
                            <Text style={styles.bookbutton1}   onPress={ ()=>navigation.navigate('Clean')} ><Image source={delete1} /></Text>                 
                            <Text style={styles.childtxt}>Delete</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.topdep}>
                    <View style={styles.topch}>
                        <Image source={blind} style={styles.mopm} />
                    </View>
                    <View style={styles.contentbox1}>
                        <Text style={styles.child1}>Dog Walking</Text>
                        <Text style={styles.child2}>03-july-2021 4:30pm</Text>
                        <Text style={styles.child2}>Booking <Text style={styles.child4}>Success</Text></Text>
                    </View>
                    <View style={styles.childbutton}>
                        <View style={styles.flexrow} >
                            <Text style={styles.bookbutton}   onPress={ ()=>navigation.navigate('editing')} ><Image source={calendar} /> </Text>   
                            <Text style={styles.childtxt}>Edit</Text>
                        </View>  
                        <View style={styles.flexrow} >          
                            <Text style={styles.bookbutton1}   onPress={ ()=>navigation.navigate('Clean')} ><Image source={delete1} /></Text>                 
                            <Text style={styles.childtxt}>Delete</Text>
                        </View>
                    </View>
                </View>   
                
                <View style={styles.topdep}>
                    <View style={styles.topch}>
                        <Image source={gardening} style={styles.mopm} />
                    </View>
                    <View style={styles.contentbox1}>
                        <Text style={styles.child1}>Gardening</Text>
                        <Text style={styles.child2}>03-july-2021 4:30pm</Text>
                        <Text style={styles.child2}>Booking <Text style={styles.child4}>Success</Text></Text>
                    </View>
                    <View style={styles.childbutton}>
                        <View style={styles.flexrow} >
                            <Text style={styles.bookbutton}   onPress={ ()=>navigation.navigate('editing')} ><Image source={calendar} /> </Text>   
                            <Text style={styles.childtxt}>Edit</Text>
                        </View>  
                        <View style={styles.flexrow} >          
                            <Text style={styles.bookbutton1}   onPress={ ()=>navigation.navigate('Clean')} ><Image source={delete1} /></Text>                 
                            <Text style={styles.childtxt}>Delete</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.topdep}>
                    <View style={styles.topch}>
                        <Image source={blind} style={styles.mopm} />
                    </View>
                    <View style={styles.contentbox1}>
                        <Text style={styles.child1}>Dog Walking</Text>
                        <Text style={styles.child2}>03-july-2021 4:30pm</Text>
                        <Text style={styles.child2}>Booking <Text style={styles.child4}>Success</Text></Text>
                    </View>
                    <View style={styles.childbutton}>
                        <View style={styles.flexrow} >
                            <Text style={styles.bookbutton}   onPress={ ()=>navigation.navigate('editing')} ><Image source={calendar} /> </Text>   
                            <Text style={styles.childtxt}>Edit</Text>
                        </View>  
                        <View style={styles.flexrow} >          
                            <Text style={styles.bookbutton1}   onPress={ ()=>navigation.navigate('Clean')} ><Image source={delete1} /></Text>                 
                            <Text style={styles.childtxt}>Delete</Text>
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

export default Booking 

