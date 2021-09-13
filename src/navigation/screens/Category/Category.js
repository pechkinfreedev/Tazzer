import React, { useState } from 'react';
import {Text, View, ScrollView, ImageBackground, Image, TextInput} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';

const {pin,alarm, search, mask, Ellipse88, Ellipse89, mop,helmet, plants, dog,mechanic, searchimg1, searchimg2, searchimg3, cleaning,Gardeners ,handyman,Rectangle1 ,Rectangle2 ,Rectangle3 , Rectangle4} = images;

const Category = () =>  {
        const navigation = useNavigation();
        const [isSelected, setSelection] = useState(false);
        const slideList = Array.from({ length: 4 }).map((_, i) => {
            return {
              id: i,
              image: `searchimg${i}`,
              title: `This is the title! ${i + 1}`,
              subtitle: `This is the subtitle ${i + 1}!`,
            };
          });
          
        return (
        <View style={styles.whiteback}>
            <View style={styles.container}>
                <Text style={styles.top1}>location</Text>
                <View  style={styles.top2}>
                    <Image source={pin} ></Image>
                    <Text style={styles.top2t}>South Yorkishre, S66 7AW</Text>
                    <View style={styles.alarm}>
                        <Image source={alarm} ></Image>
                    </View>
                </View>
                <View  style={styles.centerimage}>
                    <TextInput style={styles.seatch} placeholder="Search your needs" />
                    <Image source={search} style={styles.searchimg}/>    
                </View>
            </View>
            <ScrollView horizontal style={styles.scrollview}>
                <View style={styles.borderradius}>
                    <Image source={searchimg1} style={styles.selimage}/>                   
                    {/* <Image source={mask} style={styles.selimage1}/> */}
                    <Text style={styles.packages}>Package</Text>
                    <Text style={styles.textbottom}>Clean Services at Home</Text>
                    <View style={styles.textflex}>
                    <Text style={styles.textbottom1}>Packages Starting@</Text>
                    <Text style={styles.textbottom2}>$299Only</Text>
                    </View>
                </View>
                <View>
                    <Image source={searchimg2} style={styles.selimage}  />
                    <Text style={styles.packages}>Package</Text>
                    <Text style={styles.textbottom}>Clean Services at Home</Text>
                    <View style={styles.textflex}>
                    <Text style={styles.textbottom1}>Packages Starting@</Text>
                    <Text style={styles.textbottom2}>$299Only</Text>
                    </View>
                </View>
                <View>    
                    <Image source={searchimg3}  style={styles.selimage} />
                    <Text style={styles.packages}>Package</Text>
                    <Text style={styles.textbottom}>Clean Services at Home</Text>
                    <View style={styles.textflex}>
                    <Text style={styles.textbottom1}>Packages Starting@</Text>
                    <Text style={styles.textbottom2}>$299Only</Text>
                    </View>
                </View>
            </ScrollView>
            <Text style={styles.category}>Service Categories</Text>
            <ScrollView horizontal style={styles.scrollviewsmall}>
                <View style={styles.mop}>
                    <Image source={Ellipse88} style={styles.mopimage0}></Image>
                    <Image source={mop} style={styles.mopimage}></Image>                    
                    <Text style={styles.undertext}>   Cleaning</Text>
                </View>
                <View style={styles.mop}>
                    <Image source={Ellipse89} style={styles.mopimage0}></Image>
                    <Image source={helmet} style={styles.mopimage}></Image>                   
                    <Text style={styles.undertext}>Construction</Text>
                </View>
                <View style={styles.mop}>
                    <Image source={Ellipse88} style={styles.mopimage0}></Image>
                    <Image source={plants} style={styles.mopimage}></Image>                 
                    <Text style={styles.undertext}>Gardening</Text>
                </View>
                <View style={styles.mop}>
                    <Image source={Ellipse89} style={styles.mopimage0}></Image>
                    <Image source={dog} style={styles.mopimage}></Image>                
                    <Text style={styles.undertext}>Dog Walking</Text>
                </View>
                <View style={styles.mop}>
                    <Image source={Ellipse88} style={styles.mopimage0}></Image>
                    <Image source={mechanic} style={styles.mopimage}></Image>              
                    <Text style={styles.undertext}>Handyman</Text>
                </View>
            </ScrollView>
            <View style={styles.multivender}>
                <View>
                    <Text style={styles.multext1}>Tazzergroop</Text>
                    <Text style={styles.multext2}>We are Multi Vendor</Text>
                    <Text style={styles.multext3}>Join us Today</Text>
                </View>
                <View style={styles.multiview}>
                    <Image source={searchimg3} style={styles.multimage}></Image>
                </View>
            </View>
            <ScrollView horizontal style={styles.scrollviewbottom}>
                <View >
                    <Image source={Rectangle1} style={styles.mopimage00}></Image>
                    <Image source={cleaning} style={styles.mopimage1}></Image>                    
                    <Text style={styles.bottomtext}>  House{"\n"}Cleaning</Text>         
                    <Text style={styles.bottomtext1}>  20% OFF</Text>
                </View>
                <View >
                    <Image source={Rectangle2} style={styles.mopimage00}></Image>
                    <Image source={Gardeners} style={styles.mopimage2}></Image>           
                    <Text style={styles.bottomtext}>Gardening{"\n"}  Services</Text>         
                    <Text style={styles.bottomtext2}>   10% OFF</Text>
                </View>
                <View >
                    <Image source={Rectangle3} style={styles.mopimage00}></Image>
                    <Image source={handyman} style={styles.mopimage3}></Image>         
                    <Text style={styles.bottomtext}>Handyman{"\n"}  Services</Text>         
                    <Text style={styles.bottomtext2}>   50% OFF</Text>
                </View>
                <View >
                    <Image source={Rectangle4} style={styles.mopimage00}></Image>
                    <Image source={handyman} style={styles.mopimage3}></Image>        
                    <Text style={styles.bottomtext}>Handyman{"\n"}  Services</Text>         
                    <Text style={styles.bottomtext2}>   50% OFF</Text>
                </View>
            </ScrollView>            

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>

        </View>
        )
}

export default Category 

