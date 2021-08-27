import * as React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import {Header,Icon} from 'react-native-elements';

const MyHeader=(props)=>{
    return(
        <Header
        centerComponent={{text:props.title,style:{color:'red',
    fontSize:20,fontWeight:'bold'}}}
        backgroundColor='yellow'
    
        />
    )
}

export default MyHeader;
