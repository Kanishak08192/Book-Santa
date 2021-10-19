import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import{createAppContainer,createSwitchNavigator} from 'react-navigation';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import RecieverDetailScreen from './screens/RecieverDetailScreen'

export default class App extends React.Component {
  render() {
    return (

        <AppContainer/>

    );
  }
}

const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  RecieverDetails:{screen:RecieverDetailScreen}
})

const AppContainer=createAppContainer(switchNavigator)


