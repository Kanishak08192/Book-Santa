import *as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import RecieverDetailScreen from '../screens/RecieverDetailScreen';
import BookDonateScreen from '../screens/BookDonateScreen';

export const AppStackNavigator=createStackNavigator({
    BookDonate:{
        screen:BookDonateScreen,
        navigationOptions:{
            headerShowen:false
        }
    },
    RecieverDetails:{
        screen:RecieverDetailScreen,
        navigationOptions:{
            headerShowen:false
        }
    }
},

{
    initialRouteName:"BookDonate"
}
)