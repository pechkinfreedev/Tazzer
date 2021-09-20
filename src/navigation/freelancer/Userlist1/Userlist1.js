import React, { useState } from 'react';
import {Text, View,  Image, FlatList, TouchableOpacity} from 'react-native';
import { List, Divider } from 'react-native-paper';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../../screens/Bottommenu/Bottommenu';

const {icarrow, clean1, clean2, clean8, clean9, circlepluse, sman7,  sman8,sman9,sman10,sman11,sman12, sman13, sman14, sman15, circle1, circle2, circle3,  booking, profile6, profile7 } = images;

const Request = () =>  {
        const navigation = useNavigation();
        const [selectedValuedash, setSelectedValuedash] = useState("Dashboard");
        const thread = [
            {key:"1", key1:"Mollie Austin", key2: "Really That's great...", manimg:require("../../../assets/sman7.png") },
            {key:"2", key1:"Charlie Sharp", key2: "Where do you go", manimg:require("../../../assets/sman8.png") },
            {key:"3", key1:"Maude McKinney", key2: "Amazing Job!", manimg:require("../../../assets/sman9.png") },
            {key:"4", key1:"Samuel Carlson", key2: "Ok bro...!", manimg:require("../../../assets/sman10.png") },
            {key:"5", key1:"Hattie Brewer", key2: "Congratulations Dear", manimg:require("../../../assets/sman11.png") },
            {key:"6", key1:"Asha neetu", key2: "Show me some pics", manimg:require("../../../assets/sman12.png") },
            {key:"7", key1:"Raja Nayak", key2: "I'm fine! What are you?", manimg:require("../../../assets/sman13.png") },


        ];
        console.log("man=");
        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2} />
                    <Image source={icarrow} style={styles.arrow} />
                    {/* <Image source={editing} style={styles.editing} /> */}
                    <Image source={clean8} style={styles.clean8} />
                    <Image source={clean9} style={styles.clean9} />
                    <Text style={styles.top1}>Users List</Text>
                </View>
            </View>
{/* 
            <View style={styles.content} >
                <Image source={sman15} style={styles.manimg} />
                <Text style={styles.contenttxt}>All users team chat </Text>
                <Image source={circlepluse} style={styles.circlepluse} />
            </View> */}
            {/* <View style={styles.content1} >
                <View>
                    <Image source={sman7} style={styles.manimg}   onPress={ ()=>navigation.navigate('Teamchat')} />
                    <Image source={circle1} style={styles.circlebottom} />
                </View>
                <View>
                    <Text style={styles.contenttxt1} onPress={ ()=>navigation.navigate('Teamchat')} >Mollie Austin</Text>
                    <Text style={styles.contenttxt2}>Really That's great...</Text>
                </View>
            </View> */}
            <View style={styles.content} > 
                <FlatList
                    data={thread}
                    keyExtractor={item => item.key}
                    ItemSeparatorComponent={() => <Divider />}
                    renderItem={({item}) => 
                    <View style={styles.content1} >
                        <View>
                            <Image source={item.manimg} style={styles.manimg}   onPress={ ()=>navigation.navigate('Teamchat')} />
                            <Image source={circle1} style={styles.circlebottom} />
                        </View>
                        <View>
                            <Text style={styles.contenttxt1} onPress={ ()=>navigation.navigate('Teamchat')} >{item.key1}</Text>
                            <Text style={styles.contenttxt2}>{item.key2}</Text>
                        </View>
                    </View>
                    }
                />                
            </View>





            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Request 

