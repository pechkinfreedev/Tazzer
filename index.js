/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';

// const component = () => {
//     return(
//         <Provider ></Provider>
//     )
// }

AppRegistry.registerComponent(appName, () => App);
