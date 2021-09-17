import React, { useState } from 'react';
import {Text, View,   Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../../screens/Bottommenu/Bottommenu';
import {Picker} from '@react-native-picker/picker';

import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  


const {icarrow, clean1, wallclock, icarrow1, login, clean2, clean7, clean10, Jobpost8, Jobpost6, Jobpost7, dashboard4, Jobpost5, badge, profile7 } = images;

const Jobpost = () =>  {
        const navigation = useNavigation();
        const [isSelected1, setSelection1] = useState(false);
        const [isSelected2, setSelection2] = useState(false);

        const [selectedValue, setSelectedValue] = useState(0);
        const [selectedValueskill, setSelectedValueskill] = useState(0);        
        const values = ['Cleaning Service', 'Option A', 'Option B', 'Option C'];  
        const skillvalues = ['Deeps clean', 'Option A', 'Option B', 'Option C'];

        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2} />
                    <Image source={icarrow} style={styles.arrow} />
                    {/* <Image source={editing} style={styles.editing} /> */}
                    <Image source={clean10} style={styles.clean7} />
                    <Text style={styles.top1}>Job Post</Text>
                </View>
            </View>

            <View style={styles.content} >
                <View style={styles.contenttext}>
                    <Image source={Jobpost5} style={styles.proimg}/>

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
                    <Image source={Jobpost6} style={styles.proimg}/>

                    <Picker
                        mode="dropdown"
                        selectedValue={selectedValueskill}
                        style={{ height: 50, width: 260, borderColor:"white", }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValueskill(itemValue)}
                        
                    >
                    {skillvalues
                        .filter((value, index) => selectedValue === 0 ? value : index === 0 ? false : value)
                        .map((value, index) => (
                        <Picker.Item label={value} value={value} key={index} />
                        ))}
                    </Picker>                
                </View>
                <View style={styles.contenttext}>
                    <Image source={Jobpost7} style={styles.privacy}/>
                    <Text style={styles.contenttxt2}>$256</Text>
                </View>
                <View style={styles.contenttext1}>
                    <Image source={Jobpost8} style={styles.privacy}/>
                    <Text style={styles.contenttxt2}>Hence, while hiring cleaning professionals, ensure that they must have the following skills for cleaning job:</Text>
                </View>
                <Text style={styles.request}>How do you want to pay?</Text>
                <View style={styles.flexrow} >
                    <View style={styles.bottombox1} >
                        <Image source={badge} style={styles.bottomboximg}/>
                        <Text style={styles.bottomboxtxt1}>Pay fixed price
                        </Text>
                    </View>
                    <View style={styles.bottombox2} >
                        <Image source={wallclock} style={styles.bottomboximg}/>
                        <Text style={styles.bottomboxtxt2}>Pay hour
                        </Text>
                    </View>
                </View>

                <View style={styles.checkbox} >
                    <View style={styles.checkboxbottom}>
                        <CircleCheckBox
                            checked={isSelected1}
                            onToggle={setSelection1}
                            labelPosition={LABEL_POSITION.RIGHT}
                            label=""
                            outerSize={15}
                            innerSize={10}
                            innerColor={"#562b63"}
                            outerColor={"#562b63"} 
                        />
                    </View>
                    <View style={styles.checkboxbottom}>
                        <CircleCheckBox
                            checked={isSelected1}
                            onToggle={setSelection1}
                            labelPosition={LABEL_POSITION.RIGHT}
                            label=""
                            outerSize={15}
                            innerSize={10}
                            innerColor={"#562b63"}
                            outerColor={"#562b63"} 
                            />
                        </View>
                </View>                
                <View style={styles.contenttxt3}>
                    <Text style={styles.contenttxt4}>Save</Text>
                    <Image source={icarrow1} style={styles.arrow1}/>
                </View>                
            </View>

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Jobpost 

