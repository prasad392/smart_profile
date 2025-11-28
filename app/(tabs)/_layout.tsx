import { Tabs } from "expo-router";
import {Ionicons} from '@expo/vector-icons'

export default function TabsLayout(){
    return(
        <Tabs
        screenOptions={{headerShown:false}}
        >
            <Tabs.Screen
            name="index"
            options={{
                title:'Home',
                tabBarIcon:()=> <Ionicons name="home" size={28} />
            }}
            />
            <Tabs.Screen
            name="profiles"
            options={{
                title:'Profiles',
                tabBarIcon:()=> <Ionicons name="person" size={28} />
            }}
            />
        </Tabs>
    )
}