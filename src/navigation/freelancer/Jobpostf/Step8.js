import React, { useState } from 'react';
import {Text, View,  ScrollView, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../../screens/Bottommenu/Bottommenu';
import {Picker} from '@react-native-picker/picker';


import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const {icarrow, clean1, attach1, attach2, clean10, cancel2, clean2, plus, building, blind1, dashboard2, dashboard3, dashboard4, booking, profile6, profile7 } = images;

const Jobpost8 = () =>  {
        const navigation = useNavigation();
        const [isSelected, setSelection] = useState(true);
        const [selectedValue, setSelectedValue] = useState(0);
        const [selectedValuepayment, setSelectedValuepayment] = useState(0);
    
        const values = ['2000 - 4000', '2000 - 4000', '2000 - 4000', '2000 - 4000'];  
        const paymentvalues = ['USD', 'USD', 'USD', 'USD'];
    

        onselect=() => {
          console.log("aaa");
        };

        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2} />
                    <Image source={icarrow} style={styles.arrow} />
                    {/* <Image source={editing} style={styles.editing} /> */}
                    <Image source={clean10} style={styles.clean4} />
                    <Text style={styles.top1}>job Post</Text>
                </View>
            </View>

            <Text style={styles.toptitle}>Title</Text>
            <Text style={styles.topcealn}>Clean Services </Text>
            <View style={styles.dline1} ></View>
            <Text style={styles.toptitle1}>Description</Text>
            <Text style={styles.topcealn}>In publishing and graphic design, Lorem ipsum is  a placeholder text commonly used to demonstrate the visual form</Text>
            <View style={styles.dline1} ></View>
            <Text style={styles.toptitle1}>Project Type</Text>
            <View style={styles.switch} >
                <Text  style={isSelected ? styles.pricesel : styles.hourly} onPress={()=>setSelection(true)}>Fixed Price</Text>  
                <Text  style={isSelected ? styles.hourly : styles.pricesel} onPress={()=> setSelection(false)} >Hourly</Text>  
            </View>
            <Text style={styles.toptitle}>Budget</Text>
            <View style={styles.midsel}>
                <View style={styles.midsel1} >
                  <Picker
                        mode="dropdown"
                        selectedValue={selectedValue}
                        style={styles.protxt}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        
                    >
                    {values
                        .filter((value, index) => selectedValue === 0 ? value : index === 0 ? false : value)
                        .map((value, index) => (
                        <Picker.Item label={value} value={value} key={index} />
                        ))}
                    </Picker> 
                  </View>
                  <View style={styles.midsel1} >

                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValuepayment}
                        style={styles.protxt}
                        onValueChange={(itemValue, itemIndex) => setSelectedValuepayment(itemValue)}
                        
                    >
                    {paymentvalues
                        .filter((value, index) => selectedValue === 0 ? value : index === 0 ? false : value)
                        .map((value, index) => (
                        <Picker.Item label={value} value={value} key={index} />
                        ))}
                    </Picker> 
                  </View>                    
            </View>
            <View style={styles.budgetimg} >
                <Image source={attach1} style={styles.aimg1 }/>
                <Image source={cancel2} style={styles.aimgcancel }/>

                <Image source={plus}  style={styles.budgetplus }/>
                <Text style={styles.addmore}>Add more ...</Text>
            </View>
            <Text style={styles.toptitle}>Skills set for this project</Text>
            <Text style={styles.toptitle2}>Add Skills..</Text>
            <View style={styles.dline1} ></View>
            <View style={styles.postprojcet} >
              <Text style={styles.postprojcettxt}>POST PROJECT</Text>
            </View>



            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Jobpost8 

