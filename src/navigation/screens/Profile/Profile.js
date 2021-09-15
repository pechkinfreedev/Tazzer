import React, { useState } from 'react';
import {Text, View,  Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';
import {Picker} from '@react-native-picker/picker';

const {icarrow, clean1, polygon1, wefsf, info, clean2, woman, editing, profile1, profile2, profile3, profile4, profile5, profile6, profile7 } = images;

const Request = () =>  {
        const navigation = useNavigation();
        const [selectedValuedash, setSelectedValuedash] = useState("Dashboard");
        const [selectedValuebook, setSelectedValuebook] = useState("Booked Order");
        const [selectedValuewallet, setSelectedValuewallet] = useState("Wallet");
        const [selectedValuepaymentV, setSelectedValuepaymentV] = useState("Payment Verify");
        const [selectedValuereviews, setSelectedValuereviews] = useState("Reviews");
        const [selectedValuepayment, setSelectedValuepayment] = useState("Payment");
        const [selectedValuecpassword, setSelectedValuecpassword] = useState("Change Password");


        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2} />
                    <Image source={icarrow} style={styles.arrow} />
                    <Image source={editing} style={styles.editing} />
                    <Image source={polygon1} style={styles.polygon1} />
                    <Text style={styles.top1}>Profile</Text>
                </View>
                <View  style={styles.woman1}>
                    <Image source={woman}/>
                    <Text style={styles.name}>Sophla Jon</Text>
                    <Text style={styles.name1}>Cleaning</Text>
                </View>
            </View>

            <View style={styles.content} >
                <View style={styles.contenttext}>
                    <Image source={profile1} style={styles.proimg}/>

                    <Picker
                        selectedValue={selectedValuedash}
                        style={{ height: 50, width: 260, borderColor:"white", }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValuedash(itemValue)}
                    >
                        <Picker.Item label="Dashboard" value="java" />
                        <Picker.Item label="Dashboard" value="js" />
                    </Picker>                
                </View>
                <View style={styles.contenttext1}>
                    <Image source={profile2} style={styles.proimg}/>

                    <Picker
                        selectedValue={selectedValuebook}
                        style={{ height: 50, width: 260, borderColor:"white", }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValuebook(itemValue)}
                    >
                        <Picker.Item label="Booked Order" value="java" />
                        <Picker.Item label="Booked Order" value="js" />
                    </Picker>                

                </View>
                <View style={styles.contenttext1}>
                    <Image source={profile3} style={styles.proimg}/>

                    <Picker
                        selectedValue={selectedValuewallet}
                        style={{ height: 50, width: 260, borderColor:"white", }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValuewallet(itemValue)}
                    >
                        <Picker.Item label="Wallet" value="java" />
                        <Picker.Item label="Wallet" value="js" />
                    </Picker> 
                </View>
                <View style={styles.contenttext1}>
                    <Image source={profile4} style={styles.proimg}/>

                    <Picker
                        selectedValue={selectedValuepaymentV}
                        style={{ height: 50, width: 260, borderColor:"white", }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValuepaymentV(itemValue)}
                    >
                        <Picker.Item label="Payment Verify" value="java" />
                        <Picker.Item label="Payment Verify" value="js" />
                    </Picker> 
                </View>
                <View style={styles.contenttext1}>
                    <Image source={profile5} style={styles.proimg}/>

                    <Picker
                        selectedValue={selectedValuereviews}
                        style={{ height: 50, width: 260, borderColor:"white", }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValuereviews(itemValue)}
                    >
                        <Picker.Item label="Reviews" value="java" />
                        <Picker.Item label="Reviews" value="js" />
                    </Picker> 
                </View>
                <View style={styles.contenttext1}>
                    <Image source={profile6} style={styles.proimg}/>

                    <Picker
                        selectedValue={selectedValuepayment}
                        style={{ height: 50, width: 260, borderColor:"white", }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValuepayment(itemValue)}
                    >
                        <Picker.Item label="Payment" value="java" />
                        <Picker.Item label="Payment" value="js" />
                    </Picker> 
                </View>
                <View style={styles.contenttext1}>
                    <Image source={profile7} style={styles.proimg}/>

                    <Picker
                        selectedValue={selectedValuecpassword}
                        style={{ height: 50, width: 260, borderColor:"white", }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValuecpassword(itemValue)}
                    >
                        <Picker.Item label="Change Password" value="java" />
                        <Picker.Item label="Change Password" value="js" />
                    </Picker> 
                </View>


            </View>

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Request 

