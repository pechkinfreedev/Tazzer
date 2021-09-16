import React, { useState } from 'react';
import {Text, View,  Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';
import {Picker} from '@react-native-picker/picker';

const {person, icperson1, privacy, password, login, clean2, clean7, icarrow1, quote, icthreeline, icmail, dashboard4, booking, profile6, profile7 } = images;

const Request = () =>  {
        const navigation = useNavigation();
        const [selectedValue, setSelectedValue] = useState("");
        return (
        <View >
            <View style={styles.toprect}>
                <View style={styles.container}>
                    {/* <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2} /> */}
                    <Image source={icarrow1} style={styles.arrow} />
                    {/* <Image source={editing} style={styles.editing} /> */}
                    <Image source={clean7} style={styles.clean7} />
                    <Text style={styles.top1}>Get A Quote</Text>
                </View>
            </View> 
            <Image source={quote} style={styles.quote}/>
            <View style={styles.content} >
                <View style={styles.contenttxt1}>
                    <Image source={icperson1} style={styles.privacy}/>
                    <Text style={styles.contenttxt2}>Enter Name</Text>
                </View>
                <View style={styles.contenttxt1}>
                    <Image source={icthreeline} style={styles.privacy1}/>
                                        
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 200, borderColor:"#888888", color:"#888888"}}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Dashboard" value="Select Service" />
                        <Picker.Item label="Dashboard" value="Select Service" />
                    </Picker> 
                </View>
                <View style={styles.contenttxt1}>
                    <Image source={icmail} style={styles.privacy1}/>
                    <Text style={styles.contenttxt2}>Enter Email Id</Text>
  
                </View>
                <View style={styles.contenttxt3}>
                    <Text style={styles.contenttxt4}>GET A QUOTE</Text>
                </View>                
            </View>

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Request 

