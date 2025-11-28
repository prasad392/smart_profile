import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import ComponentHeader from '@/src/modals/componentHeader'
import { useNavigation } from '@react-navigation/native'
import { useUser } from '@/src/context/userContext';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

interface userItem {
    user: string;
    age: number;
    city: string;
}

const Profile = () => {
    const navigation = useNavigation<BottomTabNavigationProp<any>>();
    const [inputFeilds,setInputFeilds] = useState<userItem>({
    user:'',
    age:0,
    city:''
  })
  const {usersData,addUser,delUser} = useUser()
  const handleSave=()=>{
    addUser(inputFeilds)
    setInputFeilds({
      user:'',
      age:0,
      city:''
    })
  }
  const handleProDetails=(item: string)=>{
    navigation.navigate('[id]',{user:item})
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <ComponentHeader headerTxt='Profile Screen'/>
        <TouchableOpacity
        style={{
            backgroundColor:'#2d2d2d',
            width:'20%',
            marginLeft:30,
            height:40,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:12
        }}
        onPress={()=>{
            navigation.goBack()
        }}
        >
            <Text
            style={{
                color:'#fff',
                fontSize:20,
            }}
            > -Back </Text>
        </TouchableOpacity>
        <View style={styles.inputBox}>
          <TextInput
              style={styles.inputSearch}
              placeholder="Username"
              placeholderTextColor="#aaa"
              value={inputFeilds.user}
              onChangeText={(txt)=>setInputFeilds(prev=>({...prev,user:txt}))}
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
              style={styles.inputSearch}
              placeholder="Age"
              placeholderTextColor="#aaa"
              value={inputFeilds.age === 0 ? '' : String(inputFeilds.age)}
              onChangeText={(txt)=>setInputFeilds(prev=>({...prev,age:Number(txt)}))}
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
              style={styles.inputSearch}
              placeholder="city"
              placeholderTextColor="#aaa"
              value={inputFeilds.city}
              onChangeText={(txt)=>setInputFeilds(prev=>({...prev,city:txt}))}
          />
        </View>
        <View style={styles.profileBox}>
                  <TouchableOpacity style={styles.profilebtn}
                  onPress={handleSave}
                  >
                    <Text
                    style={{
                      color:'#000',
                      fontSize:24,
                      fontWeight:500
                    }}
                    
                    >Save</Text>
                </TouchableOpacity>
        </View>
        <FlatList
        data={usersData}
        keyExtractor={item=>item.user.toString()}
        renderItem={({item})=>(
          <TouchableOpacity
          onPress={()=>handleProDetails(item.user)}
          >
            <View style={styles.cards}>
              <Text style={{color:'#fff'}}> {item.user} </Text>
              <Text style={styles.delBox}
              onPress={()=>{
                delUser(item.user)
              }}
              >Del</Text>
            </View>
          </TouchableOpacity>
        )}
        />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1d1d1d',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    inputBox: {
        width: '95%',
        marginHorizontal: 'auto',
        backgroundColor: '#2d2d2d',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 12,
        marginVertical:20
    },
    inputSearch: {
        width: 330,
        height: 65,
        fontSize: 18,
        color: '#fff',
    },
    profileBox:{
      width:'90%',
      marginHorizontal:'auto',
      marginVertical:10
    },
    profilebtn:{
      width:'80%',
      marginHorizontal:'auto',
      backgroundColor:'#ffff3f',
      height:40,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:12
    },
    cards:{
      width:'80%',
      marginVertical:20,
      marginHorizontal:'auto',
      borderWidth:2,
      borderColor:'#fff',
      alignItems:'center',
      justifyContent:'space-between',
      height:60,
      flexDirection:'row'
    },
    delBox:{
      backgroundColor:'red',
      height:25,
      width:40,
      fontSize:20,
      marginRight:10,
      alignItems:'center',
      justifyContent:'center',
      fontWeight:600
    }
})