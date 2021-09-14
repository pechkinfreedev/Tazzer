import React, { useState } from 'react';
import {Text, View,  ImageBackground, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  

const {icarrow, clean1, morning, calendar4, icalarm, checklist3, checklist4, checklist5 } = images;

const Request = () =>  {
        const navigation = useNavigation();
        const [isSelected1, setSelection1] = useState(false);
        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={icarrow} style={styles.arrow} />
                    <Text style={styles.top1}>Morning shift checklist</Text>
                </View>
            </View>

            <View style={styles.content} >
                <Text style={styles.title} >Morning shift checklist</Text>
                <Text style={styles.title1} >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                <View style={styles.viewimg}>
                    <Image style={styles.contentimg} source={morning} />
                </View>
            </View>

            <View style={styles.content1} >
                <Text style={styles.name1} >Your Name</Text>
                <TextInput placeholder="Type here" style={styles.nameinput}/>
            </View>

            <View style={styles.content2} >
                <Text style={styles.name1} >Date and Time</Text>
                <View style={styles.dline} ></View>
                <View style={styles.flexrow} >
                    <Image source={calendar4} style={styles.calendar4img}/>
                    <Text  style={styles.calendar4txt}>Select data</Text>
                </View>
                <View style={styles.dline} ></View>
                <View style={styles.flexrow} >
                    <Image source={icalarm} style={styles.calendar4img}/>
                    <Text  style={styles.calendar4txt}>Select time</Text>
                </View>
            </View>

            <View style={styles.content3} >
                <Text style={styles.name1} >Confirm the following</Text>
                <View style={styles.dline} ></View>
                <View style={styles.circlecheck} >
                    <CircleCheckBox
                        checked={isSelected1}
                        onToggle={setSelection1}
                        labelPosition={LABEL_POSITION.RIGHT}
                        label="Clean windows"
                        outerSize={15}
                        innerSize={10}
                        innerColor={"#562b63"}
                        outerColor={"#562b63"} 
                    />
                </View>
            </View>

            <Text style={styles.bottombutton} >Send</Text>

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Request 

