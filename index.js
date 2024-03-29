/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import messaging from '@react-native-firebase/messaging'
import { Notification } from './src/Functions/ShowNotification'

// messaging().setBackgroundMessageHandler(async payload=>{
//     console.log('aplicacion cerrada')
//     console.log(payload)
// })

// messaging().onMessage(async payload=>{
//     console.log('aplicacion abierta')
//     console.log(payload)
//     Notification(payload.notification.title,payload.notification.body)
// })

AppRegistry.registerComponent(appName, () => App);