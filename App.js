import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationProvider} from '@ui-kitten/components';

import {Root} from 'native-base';

import createHomeStack from './src/navigation/StackNavigator';

export default class App extends Component {
    componentDidMount = () => {

    }

    render() {
        return (
            <>                
                    <NavigationContainer >
                        {createHomeStack()}
                    </NavigationContainer>

                
            </>
        )
    }
}