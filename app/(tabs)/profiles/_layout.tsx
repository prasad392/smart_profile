import { Stack } from "expo-router";

export default function ProfilesLayout(){
    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="index" options={{title:'profiles'}}/>
            <Stack.Screen name="[id]" options={{title:'Profile Details'}}/>
        </Stack>
    )
}