import React, { useState } from 'react';
import {Text, View,  ScrollView, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../../screens/Bottommenu/Bottommenu';
import DropDownPicker from 'react-native-dropdown-picker'
import { placeholder } from '@babel/types';

const {icarrow, sman23, edit, icperson1, pen, icmail, icsend, privacy, icmail1, icbirthday, arrow, icphone2, booking, icflag1, profile7 } = images;

const AddW = () =>  {
        const navigation = useNavigation();
        const [selectedValue, setSelectedValue] = useState(0);    
        const values = ['+44', '+44', 'Option B', 'Option C']; 
        const [open, setOpen] = useState(false);
        const [value, setValue] = useState(null);
        const [items, setItems] = useState([
          {label: '+44', value: 'apple', icon: () => <Image source={icflag1} style={styles.iconflagStyle} />},
          {label: '+44', value: 'banana', icon: () => <Image source={icflag1} style={styles.iconflagStyle} />},
        ]);
        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={icarrow} style={styles.arrow} />
                    <Text style={styles.top1}>Profile Settings</Text>
                </View>
                <View  style={styles.sman}>
                    <Image source={sman23} />
                    <Image source={edit} style={styles.edit}/>
                </View>
            </View>

            <View style={styles.rect0} >
                <Image source={icperson1} style={styles.person}/>
                <Text style={styles.personname}>George </Text>
                <Image source={pen} style={styles.pen}/>
            </View>
            <View style={styles.rect0} >
                <Image source={icmail1} style={styles.person1}/>
                <Text style={styles.personname}>george@gmail.com </Text>
                <Image source={pen} style={styles.pen}/>
            </View>
            <View style={styles.flexrow} >
                <View style={styles.prefix1} >

                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder=""
                        style={{
                            borderColor:"white",        
                            width:(global.screenwidth - 60 - 220),
                            height:50,
                            marginLeft:30,
                            marginTop:20,
                            backgroundColor:"#f6f9fe",
                            borderRadius:20,
                            fontSize:9,
                        }}
                        disabledStyle={{
                            opacity: 0
                        }}
                    />

                </View>
                <View style={styles.phone} >
                    <Image source={icphone2} style={styles.icphone2}/>
                    <TextInput placeholder="9001211543"  style={styles.icphone2txt} />                    
                    <Image source={pen} style={styles.pen1}/>
                </View>
            </View>
            <View style={styles.rect1} >
                <Image source={icsend} style={styles.person}/>
                <Text style={styles.personname}>302012 </Text>
                <Image source={pen} style={styles.pen}/>
            </View>
            <View style={styles.rect1} >
                <Image source={privacy} style={styles.person}/>
                <Text style={styles.personname}>********* </Text>
                <Image source={pen} style={styles.pen}/>
            </View>
            <View style={styles.rect1} >
                <Image source={icbirthday} style={styles.person}/>
                <Text style={styles.personname}>Date of birth </Text>
                <Image source={pen} style={styles.pen}/>
            </View>

            <View style={styles.nextbutton} >
                <Text style={styles.nextbuttontxt} >NEXT</Text>
                <Image source={arrow} />
            </View>



        </View>
        )
}

export default AddW 

