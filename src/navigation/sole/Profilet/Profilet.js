import React, { useState } from 'react';
import {Text, View,   Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../../screens/Bottommenu/Bottommenu';
import {Picker} from '@react-native-picker/picker';

import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  


const {icarrow, clean1, editing, polygon1, login, clean2, clean7, clean10, sman19, Jobpost6, Jobpost7, dashboard4, Jobpost5, badge, profile1, profile2,profile13,profile14,profile15,profile16,profile17, profile18 } = images;

const Jobpost = () =>  {
        const navigation = useNavigation();

        const [selectedValue, setSelectedValue] = useState(0);
        const [selectedValuespost, setSelectedValuespost] = useState(0);   
        const [selectedValuewallet, setSelectedValuewallet] = useState(0);
        const [selectedValuepaymentveify, setSelectedValuepaymentveify] = useState(0);
        const [selectedValuecompleted, setSelectedValuecompleted] = useState(0);
        const [selectedValuepayment, setSelectedValuepayment] = useState(0);
        const [selectedValuechangep, setSelectedValuechangep] = useState(0);
        const [selectedValueadd, setSelectedValueadd] = useState(0);
        
        
        const values = ['Sole Trader Dashboard', 'Option A', 'Option B', 'Option C'];  
        const postvalues = ['View Orders', 'Option A', 'Option B', 'Option C'];
        const walletvalues = ['Completed Orders', 'Option A', 'Option B', 'Option C']; 
        const paymentveifyvalues = ['Projects', 'Option A', 'Option B', 'Option C']; 
        const completedvalues = ['Contact SuperAdmin', 'Option A', 'Option B', 'Option C'];  
        const paymentvalues = ['Contact customer', 'Option A', 'Option B', 'Option C']; 
        const changepvalues = ['My Services', 'Option A', 'Option B', 'Option C'];  
        const addvalues = ['Add Service', 'Option A', 'Option B', 'Option C'];  

        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2} />
                    <Image source={icarrow} style={styles.arrow} />
                    <Image source={editing} style={styles.editing} />
                    <Image source={polygon1} style={styles.clean7} />
                    <Text style={styles.top1}>Job Post</Text>
                    <View>
                        <Image source={sman19} style={styles.headpicture} 
                    />                    
                        <Text style={styles.topname} >William Tando</Text>   
                        <Text style={styles.topname1} >Sole Trader</Text>
                    </View>

                </View>
            </View>

            <View style={styles.content} >
                <View style={styles.contenttext}>
                    <Image source={profile1} style={styles.proimg}/>

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

                <View style={styles.contenttext}>
                    <Image source={profile2} style={styles.proimg}/>

                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValuespost}
                        style={styles.protxt}
                        onValueChange={(itemValue, itemIndex) => setSelectedValuespost(itemValue)}
                        
                    >
                    {postvalues
                        .filter((value, index) => selectedValue === 0 ? value : index === 0 ? false : value)
                        .map((value, index) => (
                        <Picker.Item label={value} value={value} key={index} />
                        ))}
                    </Picker>                
                </View>

                <View style={styles.contenttext}>
                    <Image source={profile13} style={styles.proimg}/>

                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValuespost}
                        style={styles.protxt}
                        onValueChange={(itemValue, itemIndex) => setSelectedValuespost(itemValue)}
                        
                    >
                    {walletvalues
                        .filter((value, index) => selectedValue === 0 ? value : index === 0 ? false : value)
                        .map((value, index) => (
                        <Picker.Item label={value} value={value} key={index} />
                        ))}
                    </Picker>                
                </View>

                <View style={styles.contenttext}>
                    <Image source={profile14} style={styles.proimg}/>

                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValuespost}
                        style={styles.protxt}
                        onValueChange={(itemValue, itemIndex) => setSelectedValuespost(itemValue)}
                        
                    >
                    {paymentveifyvalues
                        .filter((value, index) => selectedValue === 0 ? value : index === 0 ? false : value)
                        .map((value, index) => (
                        <Picker.Item label={value} value={value} key={index} />
                        ))}
                    </Picker>                
                </View>

                <View style={styles.contenttext}>
                    <Image source={profile15} style={styles.proimg}/>

                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValuespost}
                        style={styles.protxt}
                        onValueChange={(itemValue, itemIndex) => setSelectedValuespost(itemValue)}
                        
                    >
                    {completedvalues
                        .filter((value, index) => selectedValue === 0 ? value : index === 0 ? false : value)
                        .map((value, index) => (
                        <Picker.Item label={value} value={value} key={index} />
                        ))}
                    </Picker>                
                </View>

                <View style={styles.contenttext}>
                    <Image source={profile16} style={styles.proimg}/>

                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValuespost}
                        style={styles.protxt}
                        onValueChange={(itemValue, itemIndex) => setSelectedValuespost(itemValue)}
                        
                    >
                    {paymentvalues
                        .filter((value, index) => selectedValue === 0 ? value : index === 0 ? false : value)
                        .map((value, index) => (
                        <Picker.Item label={value} value={value} key={index} />
                        ))}
                    </Picker>                
                </View>

                <View style={styles.contenttext}>
                    <Image source={profile17} style={styles.proimg}/>

                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValuespost}
                        style={styles.protxt}
                        onValueChange={(itemValue, itemIndex) => setSelectedValuespost(itemValue)}
                        
                    >
                    {changepvalues
                        .filter((value, index) => selectedValue === 0 ? value : index === 0 ? false : value)
                        .map((value, index) => (
                        <Picker.Item label={value} value={value} key={index} />
                        ))}
                    </Picker>                
                </View>

                <View style={styles.contenttext}>
                    <Image source={profile18} style={styles.proimg}/>

                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValueadd}
                        style={styles.protxt}
                        onValueChange={(itemValue, itemIndex) => setSelectedValueadd(itemValue)}
                        
                    >
                    {addvalues
                        .filter((value, index) => selectedValue === 0 ? value : index === 0 ? false : value)
                        .map((value, index) => (
                        <Picker.Item label={value} value={value} key={index} />
                        ))}
                    </Picker>                
                </View>



            </View>

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Jobpost 

