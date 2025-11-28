import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface userItem {
    user: string;
    age: number;
    city: string;
}

interface userType{
    usersData: userItem[];
    addUser: (newUser: userItem) => void;
    delUser: (user: string)=>void;
}

export const UserContext = createContext<userType | undefined>(undefined);

const UserProvider =({children}:{children: ReactNode})=>{
    const [usersData,setUsersData] = useState<userItem[]>([])

        useEffect(()=>{
            const loadUsers=async()=>{
                try{
                    const stored = await AsyncStorage.getItem('usersData')
                    if(stored){
                        setUsersData(JSON.parse(stored))
                    }
                }
                catch(err){
                    console.log(err)
                }
            }
            loadUsers()
        },[])

    
        const saveData = async(updatedData: userItem[])=>{
            try{
                await AsyncStorage.setItem('usersData',JSON.stringify(updatedData))
            }
            catch(err){
                console.log(err)
            }
        }
        const addUser=async(newUser: userItem)=>{
            const upadated = [...usersData,newUser]
            setUsersData(upadated)
            saveData(upadated)
        }
        const delUser = async(name: string)=>{
            const updated = usersData.filter(item=>item.user !== name)
            saveData(updated)
            setUsersData(updated)
        }
    return(
        <UserContext.Provider value={{usersData,addUser,delUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;

export const useUser=()=>{
    const context = useContext(UserContext)
    if(!context){
        throw new Error("error occcured")
    }
    return context;
}