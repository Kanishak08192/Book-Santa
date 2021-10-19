import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem,Icon } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class MyDonationScreen extends Component{
    constructor(){
        super()
        this.state={
            donorId:firebase.auth().currentUser.email,
            donorName:'',
            allDonations:[]
        }

        this.requestRef=null
    }

    getDonorDetails=(donorId)=>{
        db.collection('users').where('email_id','==',donorId).get()
        .then((snapshot)=>{
            snapshot.forEach((doc)=>{
                this.setState({
                    donorName:doc.data().first_name+' '+doc.data().last_name
                })
            })
        })
    }

    getAllDonations=()=>{
        this.requestRef=db.collection('all_donations').where('donor_id','==',this.state.donorId)
        .onSnapshot((snapshot)=>{
            var allDonations=[]
            snapshot.docs.map((doc)=>{
                var donation=doc.data()
                donation['doc_id']=doc.id
                allDonations.push(donation)
            })
            this.setState({
                allDonations:allDonations
            })
        })
    }

    keyExtrator=(item,index)=>index.toString()

    renderItem=({item,i})=>(
        <ListItem
            key={i}
            title={item.book_name}
            subTitle={"Requested by : "+ item.requested_by + '\nStatus : ' + item.request_status}
            leftElement={<Icon name="book" type="font-awesome" color="blue"/>}
            titleStyle={{color:"black",fontWeight:'bold'}}
            rightElement={
                <TouchableOpacity style={[styles.button,{backgroundColor:item.request_status==="Book Sent"?"green":"orange"}]}>
                    <Text>{item.request_status === "Book Sent"
                    ?"Book Sent":"Send Book"}</Text>
                </TouchableOpacity>
            }
            bottomDivider
            
        />
    )

    render(){
        return(
            <View>
               <Text>MyDonationScreen</Text>
              
            </View>
        )
    }
}