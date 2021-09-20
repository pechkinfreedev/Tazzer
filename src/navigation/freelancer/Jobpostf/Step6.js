import { View , Image ,Text} from  'react-native';
import React , { useState } from 'react';
import { styles } from './Style';
import {images} from '../../../constants/images';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export const Step6 = () =>  {
    const {suitcase} = images;
    const navigation = useNavigation();

    const [selectedValue, setSelectedValue] = useState(0);
    const [selectedValuepayment, setSelectedValuepayment] = useState(0);
    const [selectedValuesubscript, setSelectedValuesubscript] = useState(0);   
    const [selectedValuelogout, setSelectedValuelogout] = useState(0);

    const [selectedValueother, setSelectedValueother] = useState(0);

    
    const values = ['$500 - 1000', 'Option A', 'Option B', 'Option C'];  
    const paymentvalues = ['$1000 - 2000', 'Option A', 'Option B', 'Option C'];
    const subscriptvalues = ['$2000 - 3000', 'Option A', 'Option B', 'Option C']; 
    const logoutvalues = ['$3000 - 4000', 'Option A', 'Option B', 'Option C']; 
    const othervalues = ['$4000 - 5000', 'Option A', 'Option B', 'Option C']; 

    return (
        <View style={styles.step1box}>
            <View style={styles.flexrow}>
                <Text style={styles.step1txt}> What budget do you have in mind?
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