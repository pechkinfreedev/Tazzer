import React, {Component} from 'react';
import {Text,Button, View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import {images} from '../../../constants/images';
import {styles} from './Style';
import AppIntroSlider from 'react-native-app-intro-slider';

const {top2, center20, center21, center22, bottom2} = images;

const slides = [
    {
      key: 1,
      title: 'SEARCH YOUR NEED',
      text1: 'Name: Publishing and graphic design, Lorem ipsum is a placeholder',
      text2: 'text commonly used to',
      text3:'demonstrate the',
      topimage: top2,
      bottomimage: bottom2,
      image: center20,
    },
    {
      key: 2,
      title: 'BEST CONVERSATION',
      text1: 'Publishing and graphic design, Lorem ipsum is a placeholder',
      text2:'text commonly used to',
      text3: 'demonstrate the',
      topimage: top2,
      bottomimage: bottom2,
      image: center21,
    },
    {
      key: 3,
      title: 'PAY ONLINE AFTER SEVICE',
      text1: 'Publishing and graphic design, Lorem ipsum is a placeholder',
      text2:'text commonly used to',
      text3: 'demonstrate the',
      topimage: top2,
      bottomimage: bottom2,
      image: center22,
    }
  ];

export default class Intro extends Component {
    constructor() {
        super();
        this.state = {
            showRealApp: false
        }
    }
    onaaap() {
        console.log("aaa = aaa");
    }
    onbbb() {
        console.log("bbb = bbb");
    }
    _renderItem = ({ item }) => {

    return (
        // <View style={styles.slide}>
        // <Text style={styles.title}>{item.title}</Text>
        // <Image source={item.image} />
        // <Text style={styles.text}>{item.text}</Text>
        // </View>
        <View >
            <View>
                <ImageBackground source={item.topimage}  style={styles.top2}>
                    <Image source={item.image}  style={styles.center2}></Image>
                </ImageBackground>
            </View>
            {/* <Text style={styles.order}>ORDER</Text> */}
            <View>
                <Text style={styles.search}>{item.title}</Text>
                <Text style={styles.publish}>
                    {item.text1} 
                </Text>
                <Text style={styles.publish}>
                    {item.text2} 
                </Text>
                <Text style={styles.publish}>
                    {item.text3} 
                </Text>
            </View>


            <Image source={item.bottomimage}  style={styles.bottom2}>
            </Image>    
            {/* <TouchableOpacity  style={{position:'absolute'}} > */}
                { 
                item.key == 3 ?
                <Text  onPress={()=>this.props.navigation.navigate('Login')} style={styles.startbutton}> Get Started   
                </Text>
                 :
                <Text></Text>
                } 
            {/* </TouchableOpacity > */}

        </View>    
    );
    }
    _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
    }
    render() {
        if (this.state.showRealApp) {
            return <Intro />;
        } else {
            return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
        }
    }
      

    // render() {
    //     return(
    //         <TouchableOpacity>
    //             <View>
    //                 <ImageBackground source={top2}  style={styles.top2}>
    //                     <Image source={center20}  style={styles.center2}></Image>
    //                 </ImageBackground>
    //             </View>
    //             {/* <Text style={styles.order}>ORDER</Text> */}
    //             <Text style={styles.search}>SEARCH YOUR NEED</Text>
    //             <Text style={styles.publish}>
    //                 Name: Publishing and graphic design, Lorem ipsum is a placeholder 
    //             </Text>
    //             <Text style={styles.publish}>
    //                 text commonly used to 
    //             </Text>
    //             <Text style={styles.publish}>
    //                 demonstrate the
    //             </Text>
    //             <View>
    //                 <ImageBackground source={bottom2}  style={styles.bottom2}>

    //                 </ImageBackground>
    //             </View>                                
    //         </TouchableOpacity>
    //     )
    // }


}
