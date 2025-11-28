
import UserProvider from "@/src/context/userContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index" options={{title:'tabs'}}/>
      </Stack>
    </UserProvider>
  )
}
