import React, { useState } from 'react';
import {Text, View,   Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../../screens/Bottommenu/Bottommenu';
import {Picker} from '@react-native-picker/picker';

import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  


const {icarrow, clean1, clean3, polygon1, login, clean2, clean7, clean10, headpicture, Jobpost6, Jobpost7, dashboard4, Jobpost5, badge, profileb1, profileb2,profileb3,profileb4,profileb5,profileb6,profileb7 } = images;

const Jobpost = () =>  {
        const navigation = useNavigation();

        const [selectedValue, setSelectedValue] = useState(0);
        const [selectedValuespost, setSelectedValuespost] = useState(0);   
        const [selectedValuewallet, setSelectedValuewallet] = useState(0);
        const [selectedValuepaymentveify, setSelectedValuepaymentveify] = useState(0);
        const [selectedValuecompleted, setSelectedValuecompleted] = useState(0);
        const [selectedValuepayment, setSelectedValuepayment] = useState(0);
        const [selectedValuechangep, setSelectedValuechangep] = useState(0);
        
        
        const values = ['Dashboard', 'Option A', 'Option B', 'Option C'];  
        const postvalues = ['Post Job', 'Option A', 'Option B', 'Option C'];
        const walletvalues = ['Wallet', 'Option A', 'Option B', 'Option C']; 
        const paymentveifyvalues = ['Payment Verify', 'Option A', 'Option B', 'Option C']; 
        const completedvalues = ['Completed Job', 'Option A', 'Option B', 'Option C'];  
        const paymentvalues = ['Payment', 'Option A', 'Option B', 'Option C']; 
        const changepvalues = ['Change Password', 'Option A', 'Option B', 'Option C'];   

        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2} />
                    <Image source={icarrow} style={styles.arrow} />
                    {/* <Image source={editing} style={styles.editing} /> */}
                    <Image source={polygon1} style={styles.clean7} />
                    <Text style={styles.top1}>Job Post</Text>
                    <View>
                        <Image source={headpicture} style={styles.headpicture} 
                    />                    
                        <Text style={styles.topname} >Karen Sayre</Text>   
                        <Text style={styles.topname1} >Vendor</Text>
                    </View>

                </View>
            </View>

            <View style={styles.content} >
                <View style={styles.contenttext}>
                    <Image source={profileb1} style={styles.proimg}/>

                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 260, borderColor:"white", }}
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
                    <Image source={profileb2} style={styles.proimg}/>

                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValuespost}
                        style={{ height: 50, width: 260, borderColor:"white", }}
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
                    <Image source={profileb3} style={styles.proimg}/>

                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValuespost}
                        style={{ height: 50, width: 260, borderColor:"white", }}
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
                    <Image source={profileb4} style={styles.proimg}/>

                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValuespost}
                        style={{ height: 50, width: 260, borderColor:"white", }}
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
                    <Image source={profileb5} style={styles.proimg}/>

                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValuespost}
                        style={{ height: 50, width: 260, borderColor:"white", }}
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
                    <Image source={profileb6} style={styles.proimg}/>

                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValuespost}
                        style={{ height: 50, width: 260, borderColor:"white", }}
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
                    <Image source={profileb7} style={styles.proimg}/>

                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValuespost}
                        style={{ height: 50, width: 260, borderColor:"white", }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValuespost(itemValue)}
                        
                    >
                    {changepvalues
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

