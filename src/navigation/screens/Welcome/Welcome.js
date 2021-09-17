import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';

const {logo} = images;

export default class Welcome extends Component  {
    constructor() {
        super();
        this.state={};

    }
    render() {
        return (
            <TouchableOpacity style={styles.container}   onPress={()=>this.props.navigation.navigate('Home')}>
                {/* <View  onPress={()=>this.props.navigation.navigate('Intro')}> */}
                <View>
                    {/* <Image source={require('../../../assets/logo.png')} />  */}
                    <Image source={logo} style={styles.logo} />
                </View>
            </TouchableOpacity>
        )
    }
}



