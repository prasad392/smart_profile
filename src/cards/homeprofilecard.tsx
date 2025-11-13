import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
// import FastImage from 'react-native-fast-image';
type props ={
    title: string;
    image?: string;
    body: string
}

const Homeprofilecard:React.FC<props> = ({title,image,body}) => {
  return (
    <View style={styles.homecard}>
      <View style={styles.imgBox}>
        <Image
        style={styles.image}
        source={{uri: image}}
        />
      </View>
      <View style={styles.infoBox}>
        <Text style={{
            color:'#fff',
            fontSize:16,
            fontWeight:400,
            height:'auto',
            padding:5,
            }}> {body.slice(70)} </Text>
      </View>
    </View>
  )
}

export default Homeprofilecard

const styles = StyleSheet.create({
    homecard:{
        marginVertical:15,
        backgroundColor:'#2d2d2d',
        marginHorizontal:'auto',
        width:'90%',
        height:'auto',
        flexDirection:'row',
        borderRadius:12
    },
    imgBox:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    infoBox:{
        flex:3,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        gap:20
    },
    image:{
        width:60,
        height:60,
        borderRadius:90
    },
})