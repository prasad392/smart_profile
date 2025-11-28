import Homeprofilecard from '@/src/cards/homeprofilecard';
import ComponentHeader from '@/src/modals/componentHeader';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from 'expo-router';

type post ={
  userId: number;
  id: number;
  title: string;
  body: string;
  image?: string;
}

export default function Index() {
  const navigation = useNavigation<any>()
  const [posts,setPosts] = useState<post[]>([])
  const [usernames, setUsernames] = useState<string[]>([]);

  const fetchPosts = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const data =await res.json();
    const postImages = data.map((post:post)=>({
      ...post,
      image:`https://picsum.photos/id/${post.id}/200/200`
    }))
    setPosts(postImages)
  }

  useFocusEffect(
    useCallback(()=>{
      fetchPosts()
    },[])
  )
  
  const handleClick=()=>{
    navigation.navigate('profiles')
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <ComponentHeader headerTxt='Home Screen'/>
        <View style={styles.userHeader}>
          <View style={styles.imgBox}>
            <Image
            style={styles.image}
            source={require('@/assets/new_img/tonystark.jpg')}
            />
          </View>
          <View style={styles.userInfo}>
            <Text style={{
              color:'#fff',
              fontSize:32,
              fontWeight:600
            }}> Tony Stark </Text>
          </View>
        </View>
        <View style={styles.profileBox}>
          <TouchableOpacity style={styles.profilebtn}
          onPress={handleClick}
          >
            <Text
            style={{
              color:'#000',
              fontSize:20,
              fontWeight:500
            }}
            >Go to Profile</Text>
          </TouchableOpacity>
        </View>
       <ScrollView>
          <View>
            <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString() }
            renderItem={({item})=>(
            <>
                <View>
                  <Homeprofilecard title={item.title} image={item.image} body={item.body}/>
                </View>
            </>
            )}
            scrollEnabled={false}
            />
          </View>
       </ScrollView>
       
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1d1d1d',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    userHeader:{
      width:'90%',
      marginHorizontal:'auto',
      height:'auto',
      flexDirection:'row',
      padding:20,
      backgroundColor:'#344e41',
      borderRadius:12
    },
    imgBox:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    userInfo:{
      flex:3,
      alignItems:'center',
      justifyContent:'center'
    },
    image:{
      width:70,
      height:70,
      borderRadius:90
    },
    profileBox:{
      width:'90%',
      marginHorizontal:'auto',
      marginVertical:10
    },
    profilebtn:{
      width:'80%',
      marginHorizontal:'auto',
      backgroundColor:'#8ecae6',
      height:40,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:12
    },
    newUserbox:{
      backgroundColor:'#2d2d2d',
      width:'80%',
      marginHorizontal:'auto',
      height:100,
      alignItems:'center',
      justifyContent:'space-between',
      marginVertical:20
    }
})