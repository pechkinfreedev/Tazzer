import React, { useState } from 'react';
import {Text, View,  ImageBackground, Image, ScrollView} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../Bottommenu/Bottommenu';

const {icarrow, clean1, clean2, check, icgroup, sman1, sman2, sman3,sman4,uncheck, Ellipse85, booking, Rectangle202, Rectangle285,Rectangle290, Ellipse71, Ellipse712,Ellipse713, schedule, aleft, searchimg3, cleaning,Gardeners ,handyman,Rectangle1 ,Rectangle2 ,Rectangle3 , Rectangle4} = images;

const Scheduling = () =>  {
        const navigation = useNavigation();
        // const numberList = Array(31).fill().map((_, id)=>id);
        const WeekList = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        const slideList = Array.from({ length: 31 }).map((_, i) => {
            return {
              key:i,
              id: i,
              week: WeekList[i % 7],
            };
          });
        return (
        <View style={styles.whiteback}>
            <ImageBackground source={Rectangle202} style={styles.rectangle}>

                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2}  />
                    <Image source={booking} style={styles.clean3}  />
                    <Image source={icarrow} style={styles.arrow} />
                    <Text style={styles.top2}>Shift Scheduling</Text>
                </View>
            </ImageBackground>
            <View style={styles.topmain}>
                <View style={styles.calheight} >
                    <ScrollView horizontal style={styles.horiz}>                   
                        <View style={styles.calendar}>
                            { slideList.map((item, i)=>(
                                <View key={i} >                                
                                <Text style={styles.weekl}>{item.week}</Text>
                                <Text style={styles.weekl}>{item.id} </Text>
                                </View>
                            ))                
                            }
                        </View>                    
                    </ScrollView>
                </View>
                <View style={styles.dline}/>
                <View style={styles.viewflex}>
                    <View>
                        <Text style={styles.mid1}>26</Text>
                        <Text style={styles.mid1}>Tue</Text>
                    </View>
                    <View style={styles.topdep}>
                        <Image source={check} style={styles.imgch1}/>
                        <View>
                            <View style={styles.viewflex}>
                                <Text style={styles.deptext1}>Cleaning </Text>
                                <Image source={icgroup} style={styles.icgroup}/>
                            </View>
                            <Text style={styles.deptext2}>08:00am-04:00pm(8h) </Text>
                        </View>
                        <Image source={sman1} style={styles.sman1}/>
                    </View>
                </View>

                <View style={[styles.viewflex, styles.intertop]}>
                    <View>
                        <Text style={styles.mid1}></Text>
                        <Text style={styles.mid1}></Text>
                    </View>
                    <View style={styles.topdep1}>
                        <Text style={styles.undertext}>5 open shift tasks</Text>
                        <Image source={Rectangle285} style={styles.react285}/>
                        <Image source={Rectangle285} style={styles.react285}/>
                        <Image source={Rectangle285} style={styles.react285}/>
                        <Image source={Rectangle285} style={styles.react285}/>
                        <Image source={Rectangle285} style={styles.react285}/>
                    </View>
                    <View style={styles.topdep2}>
                        <Image source={uncheck} style={styles.imgch1}/>
                        <View>
                            <View style={styles.viewflex}>
                                <Text style={styles.deptext1}>Dog Walking </Text>
                                <Image source={icgroup} style={styles.icgroup}/>
                            </View>
                            <Text style={styles.deptext2}>08:00am-04:00pm(8h) </Text>
                        </View>
                        <Image source={sman2} style={styles.sman1}/>
                    </View>

                </View>
                
                <View style={[styles.viewflex, styles.intertop]}>
                    <View>
                        <Text style={styles.mid1}></Text>
                        <Text style={styles.mid1}></Text>
                    </View>
                    <View style={styles.topdep1}>
                        <Text style={styles.undertext}>3/5 Shift tasks complete</Text>
                        <Image source={Rectangle290} style={styles.react285}/>
                        <Image source={Rectangle290} style={styles.react285}/>
                        <Image source={Rectangle290} style={styles.react285}/>
                        <Image source={Rectangle285} style={styles.react285}/>
                        <Image source={Rectangle285} style={styles.react285}/>
                    </View>
                    <View style={styles.topdep3}>
                        <Image source={Ellipse85} style={styles.imgch1}/>
                        <View>
                            <View style={styles.viewflex}>
                                <Text style={styles.deptext1}>Dog Walking </Text>
                                <Image source={icgroup} style={styles.icgroup}/>
                            </View>
                            <Text style={styles.deptext2}>08:00am-04:00pm(8h) </Text>
                        </View>
                        <Image source={sman3} style={styles.sman1}/>
                    </View>
                </View>

                <View style={[styles.viewflex, styles.intertop]}>
                    <View>
                        <Text style={styles.mid1}></Text>
                        <Text style={styles.mid1}></Text>
                    </View>
                    <View style={styles.topdep41}>
                        <Text style={styles.undertext}>5 open shift tasks</Text>
                    </View>
                    <View style={styles.topdep4}>
                        <Image source={Ellipse85} style={styles.imgch1}/>
                        <View>
                            <View style={styles.viewflex}>
                                <Text style={styles.deptext1}>Roofing  &gt; Repair</Text>
                            </View>
                            <Text style={styles.deptext2}>08:00am-04:00pm(8h) </Text>
                        </View>
                        <Image source={Ellipse71} style={styles.ell1}/>
                        <Text style={styles.elltext}>Open Shifts {"\n"}  available</Text>
                    </View>
                </View>                


                <View style={[styles.viewflex, styles.intertop]}>
                    <View>
                        <Text style={styles.mid2}>&nbsp;&nbsp;4</Text>
                        <Text style={styles.mid2}>Mon</Text>
                    </View>
                    <View style={styles.topdep1}>
                        <Text style={styles.undertext}>5/5 shift tasks complete</Text>
                        <Image source={Rectangle290} style={styles.react285}/>
                        <Image source={Rectangle290} style={styles.react285}/>
                        <Image source={Rectangle290} style={styles.react285}/>
                        <Image source={Rectangle285} style={styles.react285}/>
                        <Image source={Rectangle285} style={styles.react285}/>
                    </View>
                    <View style={styles.topdep3}>
                        {/* <Image source={Ellipse85} style={styles.imgch1}/> */}
                        <View>
                            <View style={styles.viewflex}>
                                <Text style={styles.deptext1}>Gardening</Text>
                                <Image source={icgroup} style={styles.icgroup}/>
                            </View>
                            <Text style={styles.deptext2}>08:00am-04:00pm(8h) </Text>
                        </View>

                        <Image source={Ellipse712} style={styles.ell1}/>
                        <Text style={styles.elltext}>Open Shifts {"\n"}  available</Text>
                    </View>
                </View>



                <View style={[styles.viewflex, styles.intertop]}>
                    <View>
                        <Text style={styles.mid2}>&nbsp;&nbsp;5</Text>
                        <Text style={styles.mid2}>Mon</Text>
                    </View>

                    <View style={styles.topdep5}>

                        <Image source={sman4} style={styles.sman4}/>

                        <Image source={sman3} style={styles.sman3}/>

                        <Image source={Ellipse713} style={styles.Ellipse713}/>
                        <Text style={styles.text4} >8 users are unavailable</Text>
                    </View>

                    <Text style={styles.subbutton}   onPress={ ()=>navigation.navigate('Selectjob')} >
                        <Image source={schedule} /> &nbsp;
                        Schedule meeting </Text>                 

                </View>                

            </View>
            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Scheduling 

