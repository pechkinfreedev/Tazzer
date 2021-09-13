import React, { useState } from 'react';
import {Text, View,  ImageBackground, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';
import CheckBox from '@react-native-community/checkbox';

const {icarrow, clean1, clean2, clean3, mopc, dcleaning, aircleaning, Ellipse88, Ellipse89, mop,helmet, plants, dog,mechanic, searchimg1, searchimg2, searchimg3, cleaning,Gardeners ,handyman,Rectangle1 ,Rectangle2 ,Rectangle3 , Rectangle4} = images;

const Category = () =>  {
        const navigation = useNavigation();
        const [isSelectedd, setSelectiond] = useState(false);
        const [isSelectedk, setSelectionk] = useState(false);
        const [isSelectedb, setSelectionb] = useState(false);
        const [isSelectedl, setSelectionl] = useState(false);
        const [isSelectede, setSelectione] = useState(false);
        return (
        <View style={styles.whiteback}>
            <View style={styles.container}>
                <Image source={clean1} style={styles.clean1} />
                <Image source={clean2} style={styles.clean2}  />
                <Image source={clean3} style={styles.clean3}  />
                <Image source={icarrow} style={styles.top1} />
                <Text style={styles.top2}>Cleaning Service</Text>
            </View>

            <View style={[styles.centerimage, styles.topimg1]}>
                <Image source={mopc} />
                <Text style={styles.topt1}>Cleaning Service</Text>
                <View style={styles.dline}/>
            </View>
            <View>
                <Text style={styles.midtitle}>Demonstics Cleaning Normal 3 hours Default</Text>

                <View style={styles.mid1}>
                    <CheckBox
                        disabled={false}
                        value={isSelectedd}
                        onValueChange={setSelectiond}
                        style={styles.checkbox}
                    />
                    <Text style={styles.midt}>Domestics cleaning Normal</Text>
                </View>
                <View style={styles.mid1}>
                    <CheckBox
                        disabled={false}
                        value={isSelectedk}
                        onValueChange={setSelectionk}
                        style={styles.checkbox1}
                    />
                    <Text style={styles.midt1}>Kitchen</Text>
                </View>
                <View style={styles.mid1}>
                    <CheckBox
                        disabled={false}
                        value={isSelectedb}
                        onValueChange={setSelectionb}
                        style={styles.checkbox1}
                    />
                    <Text style={styles.midt1}>Bathrooms</Text>
                </View>
                <View style={styles.mid1}>
                    <CheckBox
                        disabled={false}
                        value={isSelectedl}
                        onValueChange={setSelectionl}
                        style={styles.checkbox1}
                    />
                    <Text style={styles.midt1}>Lounge</Text>
                </View>
                <View style={styles.mid1}>
                    <CheckBox
                        disabled={false}
                        value={isSelectede}
                        onValueChange={setSelectione}
                        style={styles.checkbox1}
                    />
                    <Text style={styles.midt1}>Bedrooms</Text>
                </View>
                <Image source={dcleaning} style={styles.dcleaning} />
            </View>

            <View style={styles.mid2}>
                <Text style={styles.midtitle}>Air Ducting Cleaning</Text>

                <View style={styles.mid1}>
                    <CheckBox
                        disabled={false}
                        value={isSelectedd}
                        onValueChange={setSelectiond}
                        style={styles.checkbox}
                    />
                    <Text style={styles.midt}>Domestics cleaning Normal</Text>
                </View>
                <View style={styles.mid1}>
                    <CheckBox
                        disabled={false}
                        value={isSelectedk}
                        onValueChange={setSelectionk}
                        style={styles.checkbox1}
                    />
                    <Text style={styles.midt1}>Kitchen</Text>
                </View>
                <View style={styles.mid1}>
                    <CheckBox
                        disabled={false}
                        value={isSelectedb}
                        onValueChange={setSelectionb}
                        style={styles.checkbox1}
                    />
                    <Text style={styles.midt1}>Bathrooms</Text>
                </View>
                <View style={styles.mid1}>
                    <CheckBox
                        disabled={false}
                        value={isSelectedl}
                        onValueChange={setSelectionl}
                        style={styles.checkbox1}
                    />
                    <Text style={styles.midt1}>Lounge</Text>
                </View>
                <View style={styles.mid1}>
                    <CheckBox
                        disabled={false}
                        value={isSelectede}
                        onValueChange={setSelectione}
                        style={styles.checkbox1}
                    />
                    <Text style={styles.midt1}>Bedrooms</Text>
                </View>
                <Image source={aircleaning} style={styles.dcleaning} />
            </View>
            <View style={styles.midbutton}>
                <Text style={styles.subbutton}   onPress={ ()=>navigation.navigate('Clean')} >BOOK NOW </Text>                 
                <Text style={styles.subbutton}   onPress={ ()=>navigation.navigate('Clean')} >GET A QUOTE </Text>                 
            </View>
            <View style={styles.bottommenu}>
                <Bottommenu />
            </View>

        </View>
        )
}

export default Category 

