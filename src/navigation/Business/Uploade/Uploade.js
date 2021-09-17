import React, { useState } from 'react';
import {Text, View, ScrollView,  Image, TouchableOpacity} from 'react-native';
import {styles} from './Style';
import {images} from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {Bottommenu} from '../../screens/Bottommenu/Bottommenu';
import DocumentPicker from 'react-native-document-picker';


const {icarrow, clean1, picture2, uploadimg2, uploadimg1, clean2, recycle, clean10, cancel2, Jobpost6, Jobpost7, dashboard4, Jobpost5, badge, profile7 } = images;

const Jobpost = () =>  {
        const navigation = useNavigation();

        const [singleFile, setSingleFile] = useState(null);

        const uploadImage = async () => {
            // Check if any file is selected or not
            if (singleFile != null) {
              // If file selected then create FormData
              const fileToUpload = singleFile;
              const data = new FormData();
              data.append('name', 'Image Upload');
              data.append('file_attachment', fileToUpload);
              // Please change file upload URL
              let res = await fetch(
                'http://localhost/upload.php',
                {
                  method: 'post',
                  body: data,
                  headers: {
                    'Content-Type': 'multipart/form-data; ',
                  },
                }
              );
              let responseJson = await res.json();
              if (responseJson.status == 1) {
                alert('Upload Successful');
              }
            } else {
              // If no file selected the show alert
              alert('Please Select File first');
            }
          };
        
          const selectFile = async () => {
            // Opening Document Picker to select one file
            try {
              const res = await DocumentPicker.pick({
                // Provide which type of file you want user to pick
                type: [DocumentPicker.types.allFiles],
                // There can me more options as well
                // DocumentPicker.types.allFiles
                // DocumentPicker.types.images
                // DocumentPicker.types.plainText
                // DocumentPicker.types.audio
                // DocumentPicker.types.pdf
              });
              // Printing the log realted to the file
              console.log('res : ' + JSON.stringify(res));
              // Setting the state to show single file attributes
              setSingleFile(res);
            } catch (err) {
              setSingleFile(null);
              // Handling any exception (If any)
              if (DocumentPicker.isCancel(err)) {
                // If user canceled the document selection
                alert('Canceled');
              } else {
                // For Unknown Error
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
              }
            }
          };

        return (
        <View style={styles.whiteback}>
            <View style={styles.toprect}>
                <View style={styles.container}>
                    <Image source={clean1} style={styles.clean1} />
                    <Image source={clean2} style={styles.clean2} />
                    <Image source={icarrow} style={styles.arrow} />
                    {/* <Image source={editing} style={styles.editing} /> */}
                    <Image source={clean10} style={styles.clean7} />
                    <Text style={styles.top1}>Job Post</Text>

                </View>
            </View>

            <View style={styles.content} >
                <Text style={styles.toptxt}>Upload files</Text>


                <TouchableOpacity style={styles.buttonStyle}     activeOpacity={0.5} onPress={selectFile}>
                    <Image source={picture2} />
                    <Text style={styles.buttonTextStyle}>Choose File</Text>
                </TouchableOpacity>
                <View  style={styles.scrollview}>
                    <ScrollView horizontal>
                        <View>
                            <Image source={uploadimg1} style={styles.scrollimg}/>
                            <Image source={recycle} style={styles.recycle} />
                        </View>
                        <View>
                            <Image source={uploadimg2} style={styles.scrollimg}/>
                            <Image source={recycle} style={styles.recycle} />
                        </View>
                    </ScrollView>
                </View>
                <View  style={styles.scrollview}>
                    <ScrollView horizontal>
                        <View>
                            <Image source={uploadimg1} style={styles.scrollimg}/>
                            <Image source={recycle} style={styles.recycle} />
                        </View>
                        <View>
                            <Image source={uploadimg2} style={styles.scrollimg}/>
                            <Image source={recycle} style={styles.recycle} />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.contenttxt3}>
                    <TouchableOpacity activeOpacity={0.5} onPress={uploadImage}>
                    <Text style={styles.contenttxt4}>SUBMIT JOB</Text>
                </TouchableOpacity>
                </View>                
            </View>

            <View style={styles.bottommenu0}>
                <Bottommenu />
            </View>
        </View>
        )
}

export default Jobpost 

