import React, { useState } from 'react';
import {Text, View,  ScrollView, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  

const {icarrow, clean1, polygon1, like, Path34, clean2, icstar, sman5, sman6, sman1, sman2, dashboard4, booking, profile6, profile7 } = images;

const AddW = () =>  {
        const navigation = useNavigation();
        const [isSelected, setSelection] = useState(false);
        const [isSelected1, setSelection1] = useState(false);
        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2} />
                    <Image source={icarrow} style={styles.arrow} />
                    <Image source={like} style={styles.clean6} />
                    <Image source={polygon1} style={styles.polygon1} />
                    <Text style={styles.top1}>Reviews</Text>
                </View>
                

                    <View style={styles.top2}>
                        <Text style={styles.toptext1}>Average Rating</Text>
                    </View>
                    <View  style={styles.topimg}>
                        <Text style={styles.average}>4.5</Text>
                        <View style={styles.star} >
                            <Image source={icstar} />
                            <Image source={icstar} />
                            <Image source={icstar} />
                            <Image source={icstar} />
                            <Image source={icstar} />
                        </View>
                        <Image source={Path34}/>
                    </View>

            </View>

            <View style={styles.content} >
                <Text style={styles.contenttxt} >All User Reviews</Text>
                <View style={styles.dline} ></View>
                <View>
                    <View style={styles.flexrow} >
                        <Image source={sman5} style={styles.sman}/>
                        <View>
                            <Text style={styles.contenttxt}>Joan Perkins</Text>
                            <View style={styles.contenttxt1}>
                                <Image source={icstar} />
                                <Image source={icstar} />
                                <Image source={icstar} />
                                <Image source={icstar} />
                                <Image source={icstar} />
                                <Text style={styles.mark}>5.0</Text>
                            </View>
                        </View>
                        <Text style={styles.contenttxt2}> 5 Days ago</Text>
                    </View>
                    <View>
                        <Text style={styles.contenttxt3}>
                        This Person is a great addition for any  room in your home not only just the living room.. Featuring a min-century design with modern available on time market. 
                        </Text>
                    </View>
                </View>
                
                <View style={styles.dline1} ></View>
                <View>
                    <View style={styles.flexrow} >
                        <Image source={sman6} style={styles.sman}/>
                        <View>
                            <Text style={styles.contenttxt}>Joan Perkins</Text>
                            <View style={styles.contenttxt1}>
                                <Image source={icstar} />
                                <Image source={icstar} />
                                <Image source={icstar} />
                                <Image source={icstar} />
                                <Image source={icstar} />
                                <Text style={styles.mark}>5.0</Text>
                            </View>
                        </View>
                        <Text style={styles.contenttxt2}> 10 Days ago</Text>
                    </View>
                    <View>
                        <Text style={styles.contenttxt3}>
                        Tazzer Group is my goto for my family's storage cleanup... We are hoarders. Jonas and team has helped us keep a clean and healthy. 
                        </Text>
                    </View>
                </View>
                
                <View style={styles.dline1} ></View>
                <View>
                    <View style={styles.flexrow} >
                        <Image source={sman1} style={styles.sman}/>
                        <View>
                            <Text style={styles.contenttxt}>Joan Perkins</Text>
                            <View style={styles.contenttxt1}>
                                <Image source={icstar} />
                                <Image source={icstar} />
                                <Image source={icstar} />
                                <Image source={icstar} />
                                <Image source={icstar} />
                                <Text style={styles.mark}>5.0</Text>
                            </View>
                        </View>
                        <Text style={styles.contenttxt2}> 1 Month ago</Text>
                    </View>
                    <View>
                        <Text style={styles.contenttxt3}>
                        Great work and services ! 
                        </Text>
                    </View>
                </View>
                
                <View style={styles.dline1} ></View>
                <View>
                    <View style={styles.flexrow} >
                        <Image source={sman2} style={styles.sman}/>
                        <View>
                            <Text style={styles.contenttxt}>Joan Perkins</Text>
                            <View style={styles.contenttxt1}>
                                <Image source={icstar} />
                                <Image source={icstar} />
                                <Image source={icstar} />
                                <Image source={icstar} />
                                <Image source={icstar} />
                                <Text style={styles.mark}>5.0</Text>
                            </View>
                        </View>
                        <Text style={styles.contenttxt2}> 2 Month ago</Text>
                    </View>
                    <View>
                        <Text style={styles.contenttxt3}>
                        Great work and services ! 
                        </Text>
                    </View>
                </View>
                
            </View>

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default AddW 

