import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
// import Carousel, {Pagination} from 'react-native-snap-carousel';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {styles} from './Style';
// import LinearGradient from 'react-native-linear-gradient';
import {Button} from '@ui-kitten/components';
import {FlatList} from 'react-native';  
import {images} from '../../../constants/images';

const HEIGHT = heightPercentageToDP('100%');
const WIDTH = widthPercentageToDP('100%');
const {logo} = images;

export default class Welcome extends Component  {
    constructor() {
        super();
        this.state={};
    }
    render() {
        return (
            // <SafeAreaView style={{flex:1}}>
            <TouchableOpacity style={styles.container}   onPress={()=>this.props.navigation.navigate('Intro')}>
                {/* <View  onPress={()=>this.props.navigation.navigate('Intro')}> */}
                <View>
                    {/* <Image source={require('../../../assets/logo.png')} />  */}
                    <Image source={logo} style={styles.logo} />
                </View>
            </TouchableOpacity>
            // </SafeAreaView>
        )
    }
}



