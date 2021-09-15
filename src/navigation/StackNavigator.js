import React, { Component } from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import  Welcome from "./screens/Welcome/Welcome"
import Intro from "./screens/Intro/Intro"
import Login from "./screens/Login/Login"
import Signup1 from "./screens/Signup1/Signup1"
import Signup2 from "./screens/Signup2/Signup2"
import Fpassword from "./screens/Fpassword/Fpassword"
import Category from  "./screens/Category/Category"
import Clean from "./screens/Clean/Clean"
import Booking from "./screens/Booking/Booking"
import Scheduling from "./screens/Scheduling/Scheduling"
import Timeclick  from './screens/Timeclick/Timeclick'
import Selectjob   from './screens/Selectjob/Selectjob'
import Request   from './screens/Request/Request'
import Timeclock from './screens/Timeclock/Timeclock'
import Details from './screens/Details/Details'
import Timesheet from './screens/Timesheet/Timesheet'
import Checklist from './screens/Checklist/Checklist'
import Morning from './screens/Morning/Morning'
import Meeting from './screens/Meeting/Meeting'
import Meeting1 from './screens/Meeting1/Meeting1'
import Profile from './screens/Profile/Profile'
import Eprofile from './screens/Eprofile/Eprofile'
import Livetracking from './screens/Livetracking/Livetracking'
import Dashboard from './screens/Dashboard/Dashboard'
import Bookedorder from './screens/Bookedorder/Bookedorder'
import Wallet from './screens/Wallet/Wallet'
import Addw  from './screens/Addw/Addw'
import Addw1  from './screens/Addw1/Addw1'

import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';

// import  Welcome from "./screens/index"

const Stack = createStackNavigator();
const HEIGHT = heightPercentageToDP('100%');
const WIDTH = widthPercentageToDP('100%');
global.screenheight = HEIGHT;
global.screenwidth = WIDTH;
global.ratio = WIDTH / HEIGHT;


export default function createHomeStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup1" component={Signup1} />
            <Stack.Screen name="Signup2" component={Signup2} />
            <Stack.Screen name="Fpassword" component={Fpassword} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Clean" component={Clean} />
            <Stack.Screen name="Booking" component={Booking} />
            <Stack.Screen name="Scheduling" component={Scheduling} />
            <Stack.Screen name="Timeclick" component={Timeclick} />
            <Stack.Screen name="Selectjob" component={Selectjob} />
            <Stack.Screen name="Request" component={Request} />
            <Stack.Screen name="Timeclock" component={Timeclock} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Timesheet" component={Timesheet} />
            <Stack.Screen name="Checklist" component={Checklist} />
            <Stack.Screen name="Morning" component={Morning} />
            <Stack.Screen name="Meeting" component={Meeting} />
            <Stack.Screen name="Meeting1" component={Meeting1} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Eprofile" component={Eprofile} />
            <Stack.Screen name="Livetracking" component={Livetracking} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Bookedorder" component={Bookedorder} />
            <Stack.Screen name="Wallet" component={Wallet} />
            <Stack.Screen name="Addw" component={Addw} />
            <Stack.Screen name="Addw1" component={Addw1} />
        </Stack.Navigator>
    )
}