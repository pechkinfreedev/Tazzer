import React, {Component} from 'react';
import {Text,Button, View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import {images} from '../../../constants/images';
import {styles} from './Style';

const {top2, center2, bottom2} = images;
export default class Intro extends Component {

    render() {
        return(
            <TouchableOpacity>
                <View>
                    <ImageBackground source={top2}  style={styles.top2}>
                        <Image source={center2}  style={styles.center2}></Image>
                    </ImageBackground>
                </View>
                <Text style={styles.order}>ORDER</Text>
                <Text style={styles.search}>SEARCH YOUR NEED</Text>
                <Text style={styles.publish}>
                    Name: Publishing and graphic design, Lorem ipsum is a placeholder 
                </Text>
                <Text style={styles.publish}>
                    text commonly used to 
                </Text>
                <Text style={styles.publish}>
                    demonstrate the
                </Text>
                <View>
                    <ImageBackground source={bottom2}  style={styles.bottom2}>
                        <Button title="continue" style={styles.continue}></Button>
                    </ImageBackground>
                </View>                                
            </TouchableOpacity>
        )
    }
}
