import React, { useState } from 'react';
import {Text, View,  Picker, Image, TextInput, ScrollView} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const {icarrow, clean1, onlinech1, onlinech2, onlinech3, clean2, clean7, polygon1, dashboard1, dashboard2, dashboard3, dashboard4, booking, profile6, profile7 } = images;

const Request = () =>  {
        const navigation = useNavigation();
        const [isSelected1, setSelection1] = useState(false);
        const [isSelected2, setSelection2] = useState(false);
        const [isSelected3, setSelection3] = useState(false);
  
        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2} />
                    <Image source={icarrow} style={styles.arrow} />
                    {/* <Image source={editing} style={styles.editing} /> */}
                    <Image source={polygon1} style={styles.polygon1} />
                    <Text style={styles.top1}>Online Checklist</Text>
                </View>
            </View>

            <View style={styles.content} >
                <Text style={styles.title}>Confirm The Following</Text>
                <View style={styles.dline} ></View>
                <View style={styles.mid1} >
                    <Text style={styles.midtext1}>Morning safety brief</Text>
                    <View style={styles.checkimg}>
                        <CircleCheckBox
                                checked={isSelected1}
                                onToggle={setSelection1}
                                labelPosition={LABEL_POSITION.RIGHT}
                                label=""
                                outerSize={15}
                                innerSize={10}
                                innerColor={"#562b63"}
                                outerColor={"#562b63"} 
                                style={styles.checkimg}
                        />
                    </View>
                </View>
                <View style={styles.mid1} >
                    <Text style={styles.midtext1}>Morning safety brief</Text>
                    <View style={styles.checkimg}>
                        <CircleCheckBox
                                checked={isSelected2}
                                onToggle={setSelection2}
                                labelPosition={LABEL_POSITION.RIGHT}
                                label=""
                                outerSize={15}
                                innerSize={10}
                                innerColor={"#562b63"}
                                outerColor={"#562b63"} 
                                style={styles.checkimg}
                        />
                    </View>
                </View>
                <View style={styles.mid1} >
                    <Text style={styles.midtext1}>Morning safety brief</Text>
                    <View style={styles.checkimg}>
                        <CircleCheckBox
                                checked={isSelected3}
                                onToggle={setSelection3}
                                labelPosition={LABEL_POSITION.RIGHT}
                                label=""
                                outerSize={15}
                                innerSize={10}
                                innerColor={"#562b63"}
                                outerColor={"#562b63"} 
                                style={styles.checkimg}
                        />
                    </View>
                </View>
                <Text style={styles.midtitle} >Take Images</Text>
                <View style={styles.scrollview} >
                    <ScrollView horizontal >
                        <Image source={onlinech1} style={styles.scrollimg} />
                        <Image source={onlinech2} style={styles.scrollimg} />
                        <Image source={onlinech3} style={styles.scrollimg} />
                    </ScrollView>
                </View>
                <View style={styles.dline1} ></View>
                <Text style={styles.title1}>Edit Images Selection</Text>
                <View style={styles.mid2} >
                    <Text style={styles.midtext1}>Where All Veichels Checked</Text>
                </View>
                <View style={styles.mid3} >
                    <Text style={styles.midtext2}>Yes</Text>
                    <View style={styles.interval} ></View>
                    <Text style={styles.midtext2}>No</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.bottomtxt1}>19-Aug. 2021  10:25 A.M</Text>
                    <View style={styles.bottombutton} >
                        <Text style={styles.bottomtxt2} >Done</Text>
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

