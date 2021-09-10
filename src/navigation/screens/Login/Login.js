import React, {Component} from 'react';
import {Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';

const {whiterect, person, lock} = images;

export default class Welcome extends Component  {
    constructor() {
        super();
        this.state={};

    }
    render() {
        return (
            <TouchableOpacity style={styles.container}   onPress={()=>this.props.navigation.navigate('Intro')}>
                {/* <View  onPress={()=>this.props.navigation.navigate('Intro')}> */}
                <View>
                    <Text style={styles.top}>Hey!</Text>
                    <Text style={styles.top1}>Login Now</Text>
                    <ImageBackground source={whiterect} style={styles.whiterect} >
                        <Text style={styles.recttop}>Welcome to</Text>
                        <Text style={styles.recttop1}>TazzerGroup</Text>
                        <Text style={styles.recttop2}>Please Sign into continue</Text>

                        <View>
                            <Image source={person} style={styles.iconimg} />
                            <Text  style={styles.recttop3}>Enter username</Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        )
    }
}



