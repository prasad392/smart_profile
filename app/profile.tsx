import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import ComponentHeader from '@/src/modals/componentHeader'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
    const navigation = useNavigation<any>();
    const [userName, setUserName] = useState('')

    const handleSave=async()=>{
        try{
            const existing = await AsyncStorage.getItem('usernames')
            const usernames = existing ? JSON.parse(existing) : [];
            usernames.push(userName);
            await AsyncStorage.setItem('usernames',JSON.stringify(usernames));
            navigation.navigate('index');
        }
        catch(err){
            console.log(err)
        }
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
            navigation.navigate('index')
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
              value={userName}
              onChangeText={setUserName}
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
    }
})