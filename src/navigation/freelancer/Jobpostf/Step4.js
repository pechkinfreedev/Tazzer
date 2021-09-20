import { View , Image ,Text} from  'react-native';
import React , { useState } from 'react';
import { styles } from './Style';
import {images} from '../../../constants/images';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export const Step4 = () =>  {
    const {suitcase} = images;
    const navigation = useNavigation();

    const [selectedValue, setSelectedValue] = useState(0);
    const [selectedValuepayment, setSelectedValuepayment] = useState(0);
    const [selectedValuesubscript, setSelectedValuesubscript] = useState(0);   
    const [selectedValuelogout, setSelectedValuelogout] = useState(0);

    const [selectedValueother, setSelectedValueother] = useState(0);

    
    const values = ['Home Cleaning Services', 'Option A', 'Option B', 'Option C'];  
    const paymentvalues = ['Office Cleaning Services ', 'Option A', 'Option B', 'Option C'];
    const subscriptvalues = ['All Purpose Cleaning Services', 'Option A', 'Option B', 'Option C']; 
    const logoutvalues = ['Specialty Cleaners', 'Option A', 'Option B', 'Option C']; 
    const othervalues = ['not sure', 'Option A', 'Option B', 'Option C']; 

    return (
        <View style={styles.step1box}>
            <View style={styles.flexrow}>
                <Text style={styles.step1txt}> Do you </Text>  
                <Text style={styles.step1txt1}> need it home cleaning ?
                </Text>
            </View>                
            <View style={styles.dline} />  

            <View style={styles.contenttext}>
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
            <View style={styles.dline1} />  


                <View style={styles.contenttext}>
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
            <View style={styles.dline1} />  


                <View style={styles.contenttext}>
                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValuesubscript}
                        style={styles.protxt}
                        onValueChange={(itemValue, itemIndex) => setSelectedValuesubscript(itemValue)}
                        
                    >
                    {subscriptvalues
                        .filter((value, index) => selectedValue === 0 ? value : index === 0 ? false : value)
                        .map((value, index) => (
                        <Picker.Item label={value} value={value} key={index} />
                        ))}
                    </Picker>                
                </View>         
            <View style={styles.dline1} />  


                <View style={styles.contenttext}>
                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValuelogout}
                        style={styles.protxt}
                        onValueChange={(itemValue, itemIndex) => setSelectedValuelogout(itemValue)}
                        
                    >
                    {logoutvalues
                        .filter((value, index) => selectedValue === 0 ? value : index === 0 ? false : value)
                        .map((value, index) => (
                        <Picker.Item label={value} value={value} key={index} />
                        ))}
                    </Picker>                
                </View>         
            <View style={styles.dline1} />  


                <View style={styles.contenttext}>
                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValueother}
                        style={styles.protxt}
                        onValueChange={(itemValue, itemIndex) => setSelectedValueother(itemValue)}
                        
                    >
                    {othervalues
                        .filter((value, index) => selectedValue === 0 ? value : index === 0 ? false : value)
                        .map((value, index) => (
                        <Picker.Item label={value} value={value} key={index} />
                        ))}
                    </Picker>                
                </View>         
            <View style={styles.dline1} />  





        </View>
    )
};