import React, { useState } from 'react';
import {Text, View,  ScrollView, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../../screens/Bottommenu/Bottommenu';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const {icarrow, clean1, polygon1, mopm, icphone, clean2, garbage, building, blind1, dashboard2, dashboard3, dashboard4, booking, profile6, profile7 } = images;

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
                    <Image source={polygon1} style={styles.polygon1} />
                    <Text style={styles.top1}>Booked Order</Text>
                </View>
            </View>

            <View style={styles.content} >
                <Text style={styles.title}>My Bookings</Text>
                <View style={styles.dline}></View>
                <View>
                    <ScrollView horizontal style={styles.scrollview}>
                        <View style={styles.button1}>
                            <Text style={styles.buttontxt1}>All</Text>
                        </View>
                        <View style={styles.button2}>
                            <Text style={styles.buttontxt2}>Pending</Text>
                        </View>
                        <View style={styles.button3}>
                            <Text style={styles.buttontxt2}>Inprogress</Text>
                        </View>
                        <View style={styles.button4}>
                            <Text style={styles.buttontxt2}>Complete Request</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.mid1}>
                    <Image source={mopm} style={styles.midimg}/>
                    <View>
                        <Text style={styles.midtext}>Cleaning Service</Text>
                        <Text style={styles.midtext1}>19-Aug.2021 10:25 AM</Text>
                    </View>
                    <View style={styles.midinter}></View>
                    <View>
                        <View style={styles.flexrow}>
                            <Image source={icphone} style={styles.phone}/>
                            <View style={styles.flexrow} >
                            <Text style={styles.midtext3}>410</Text>
                            <Text style={styles.midtext2}>07961242587</Text>
                            </View>
                        </View>
                        <Text style={styles.midtext4}>Pending</Text>
                    </View>
                </View>  
                <View style={styles.mid1}>
                    <Image source={garbage} style={styles.midimg}/>
                    <View>
                        <Text style={styles.midtext}>Rubbish Removal</Text>
                        <Text style={styles.midtext1}>19-Aug.2021 10:25 AM</Text>
                    </View>
                    <View style={styles.midinter}></View>
                    <View>
                        <View style={styles.flexrow}>
                            <Image source={icphone} style={styles.phone}/>
                            <View style={styles.flexrow} >
                            <Text style={styles.midtext3}>410</Text>
                            <Text style={styles.midtext2}>07961242587</Text>
                            </View>
                        </View>
                        <Text style={styles.midtext5}>Done</Text>
                    </View>
                </View> 
                <View style={styles.mid1}>
                    <Image source={building} style={styles.midimg}/>
                    <View>
                        <Text style={styles.midtext}>Construction</Text>
                        <Text style={styles.midtext1}>19-Aug.2021 10:25 AM</Text>
                    </View>
                    <View style={styles.midinter}></View>
                    <View>
                        <View style={styles.flexrow}>
                            <Image source={icphone} style={styles.phone}/>
                            <View style={styles.flexrow} >
                            <Text style={styles.midtext3}>410</Text>
                            <Text style={styles.midtext2}>07961242587</Text>
                            </View>
                        </View>
                        <Text style={styles.midtext6}>Rejected</Text>
                    </View>
                </View> 
                <View style={styles.mid1}>
                    <Image source={blind1} style={styles.midimg}/>
                    <View>
                        <Text style={styles.midtext}>Dog Walking</Text>
                        <Text style={styles.midtext1}>19-Aug.2021 10:25 AM</Text>
                    </View>
                    <View style={styles.midinter}></View>
                    <View>
                        <View style={styles.flexrow}>
                            <Image source={icphone} style={styles.phone}/>
                            <View style={styles.flexrow} >
                            <Text style={styles.midtext3}>410</Text>
                            <Text style={styles.midtext2}>07961242587</Text>
                            </View>
                        </View>
                        <Text style={styles.midtext7}>Pending</Text>
                    </View>
                </View> 
                <View style={styles.mid1}>
                    <Image source={mopm} style={styles.midimg}/>
                    <View>
                        <Text style={styles.midtext}>Cleaning Service</Text>
                        <Text style={styles.midtext1}>19-Aug.2021 10:25 AM</Text>
                    </View>
                    <View style={styles.midinter}></View>
                    <View>
                        <View style={styles.flexrow}>
                            <Image source={icphone} style={styles.phone}/>
                            <View style={styles.flexrow} >
                            <Text style={styles.midtext3}>410</Text>
                            <Text style={styles.midtext2}>07961242587</Text>
                            </View>
                        </View>
                        <Text style={styles.midtext4}>Pending</Text>
                    </View>
                </View>  
                <View style={styles.mid1}>
                    <Image source={garbage} style={styles.midimg}/>
                    <View>
                        <Text style={styles.midtext}>Rubbish Removal</Text>
                        <Text style={styles.midtext1}>19-Aug.2021 10:25 AM</Text>
                    </View>
                    <View style={styles.midinter}></View>
                    <View>
                        <View style={styles.flexrow}>
                            <Image source={icphone} style={styles.phone}/>
                            <View style={styles.flexrow} >
                            <Text style={styles.midtext3}>410</Text>
                            <Text style={styles.midtext2}>07961242587</Text>
                            </View>
                        </View>
                        <Text style={styles.midtext5}>Done</Text>
                    </View>
                </View> 
                <View style={styles.mid1}>
                    <Image source={building} style={styles.midimg}/>
                    <View>
                        <Text style={styles.midtext}>Construction</Text>
                        <Text style={styles.midtext1}>19-Aug.2021 10:25 AM</Text>
                    </View>
                    <View style={styles.midinter}></View>
                    <View>
                        <View style={styles.flexrow}>
                            <Image source={icphone} style={styles.phone}/>
                            <View style={styles.flexrow} >
                            <Text style={styles.midtext3}>410</Text>
                            <Text style={styles.midtext2}>07961242587</Text>
                            </View>
                        </View>
                        <Text style={styles.midtext6}>Rejected</Text>
                    </View>
                </View> 
                <View style={styles.mid1}>
                    <Image source={blind1} style={styles.midimg}/>
                    <View>
                        <Text style={styles.midtext}>Dog Walking</Text>
                        <Text style={styles.midtext1}>19-Aug.2021 10:25 AM</Text>
                    </View>
                    <View style={styles.midinter}></View>
                    <View>
                        <View style={styles.flexrow}>
                            <Image source={icphone} style={styles.phone}/>
                            <View style={styles.flexrow} >
                            <Text style={styles.midtext3}>410</Text>
                            <Text style={styles.midtext2}>07961242587</Text>
                            </View>
                        </View>
                        <Text style={styles.midtext7}>Pending</Text>
                    </View>
                </View> 

              
            </View>

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Request 

