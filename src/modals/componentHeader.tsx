import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type props ={
    headerTxt: string;
}

const ComponentHeader:React.FC<props> = ({headerTxt}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headertxt}>{headerTxt}</Text>
    </View>
  )
}

export default ComponentHeader

const styles =StyleSheet.create({
    header:{
        marginVertical:10,
        backgroundColor:'#2D2D2D',
        height:85,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        gap:50,
        width:'98%',
        marginHorizontal:'auto',
        borderBottomEndRadius:12,
        borderBottomStartRadius:12
    },
    headertxt:{
        fontWeight:600,
        fontSize:24,
        color:'#fff'
    }
})