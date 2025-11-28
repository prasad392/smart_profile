import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useUser } from '@/src/context/userContext'


const ProfileDetails = () => {
  const {usersData} = useUser()
  const route = useRoute()
  const params = route.params as {user: string} | undefined;
  const user = params?.user;
  console.log(user)
  const filterUser = usersData.find(data=>data.user === user);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <Text style={{fontSize:22,color:'#fff'}}>ProfileDetails</Text>
      <Text style={{color:'#fff'}}> {filterUser?.user} </Text>
    </View>
  )
}

export default ProfileDetails

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1d1d1d',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
  })